<script lang="ts">
	import CitySearch from '../citysearch/city-search.svelte';
	import { weatherData } from '../../../stores/weatherDataStore';
	import WeatherInformation from '../weather-information/weather-information.svelte';
</script>

<div class="flex h-full flex-col">
	<div>
		<CitySearch />
	</div>

	{#if $weatherData}
		<WeatherInformation />
	{/if}
</div>
