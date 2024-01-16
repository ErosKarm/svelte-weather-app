<script context="module">
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { weatherData } from '../../../stores/weatherDataStore';
	import { weatherForecastData } from '../../../stores/weatherForecastDataStore';
	import Button from '../ui/button/button.svelte';
	import Input from '../ui/input/input.svelte';

	let apiKey = '';
	let city = 'Tallinn';

	onMount(async () => {
		// Retrieve the API key during component initialization
		apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

		try {
			const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
			const response = await fetch(apiUrl);
			const data = await response.json();

			weatherData.set(data);

			const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}&units=metric`;

			const forecastResponse = await fetch(forecastApiUrl);
			const forecastData = await forecastResponse.json();
			weatherForecastData.set(forecastData);

			console.log(forecastData);
		} catch (error) {
			console.error('Error fetching data from OPENWEATHERMAP API:', error);
		}
	});

	const onSubmit = async (event: SubmitEvent) => {
		event.preventDefault();

		// Call the OpenWeatherMap API

		try {
			console.log(city, 'this is the city');

			const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
			const response = await fetch(apiUrl);
			const data = await response.json();

			if (response.ok === false) {
				return;
			}

			weatherData.set(data);

			const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${await data
				.coord.lat}&lon=${await data.coord.lon}&appid=${apiKey}&units=metric`;

			const forecastResponse = await fetch(forecastApiUrl);
			const forecastData = await forecastResponse.json();
			weatherForecastData.set(forecastData);
		} catch (error) {
			console.error('Error fetching data from OPENWEATHERMAP API:', error);
			city = 'Tallinn';
		} finally {
			city = '';
		}
	};
</script>

<form
	class="flex h-12 w-full items-center space-x-2 rounded-[15px] bg-stone-100 px-2"
	on:submit={onSubmit}
>
	<Input bind:value={city} class="border-none" type="text" placeholder="Search for cities" />
	<Button type="submit" variant="ghost" class="bg-transparent text-black hover:bg-stone-50">
		Search
	</Button>
</form>
