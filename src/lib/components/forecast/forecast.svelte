<script>
	import { Sun } from 'lucide-svelte';
	import { weatherForecastData } from '../../../stores/weatherForecastDataStore';
</script>

<div class="h-full overflow-scroll rounded-lg bg-stone-100 p-6">
	<h2 class="text-xl tracking-wide">Weather forecast</h2>

	{#if $weatherForecastData}
		{#each $weatherForecastData.list as forecast}
			<div class="mt-4 flex items-center">
				<img
					src="https://openweathermap.org/img/wn/{forecast.weather[0].icon}@2x.png"
					alt="Weather Icon"
					width="100"
					height="100"
					class="rounded-md bg-[#FF3E00] shadow-sm"
				/>
				<div class="ml-2 h-full">
					<span class="text-sm">
						{new Date(forecast.dt * 1000).toLocaleDateString('en-GB', {
							weekday: 'short'
						})},
						{new Date(forecast.dt * 1000).toLocaleTimeString('en-GB', {
							timeStyle: 'short'
						})}
					</span>

					<h2 class="text-2xl font-semibold">{forecast.main.temp}°</h2>
					<h4 class="text-xs text-muted-foreground">{forecast.weather[0].description}</h4>
				</div>

				<div></div>
			</div>
		{/each}
	{/if}
</div>
