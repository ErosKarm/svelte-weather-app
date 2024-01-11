<script lang="ts">
	import { weatherData } from '../../../stores/weatherDataStore';

	import {
		Thermometer,
		Droplets,
		Gauge,
		ThermometerSun,
		ThermometerSnowflake,
		Wind,
		ArrowDownToDot,
		Sun
	} from 'lucide-svelte';
</script>

{#if $weatherData}
	<div class="flex flex-1 flex-col">
		<div class="flex h-fit justify-between pl-12 pt-12">
			<div class="">
				<h1 class="text-5xl">
					{$weatherData?.name}, <strong class="text-xl">{$weatherData?.sys.country}</strong>
				</h1>
				<!-- {console.log($weatherData)} -->
				<span class=" text-sm tracking-wide text-slate-500"
					>Feels like: {$weatherData.main.feels_like}</span
				>

				<h1 class="mt-12 text-7xl font-bold">{$weatherData.main.temp}°</h1>
			</div>

			<div class="flex min-w-[10px] flex-col items-center">
				<img
					src="https://openweathermap.org/img/wn/{$weatherData.weather[0].icon}@2x.png"
					alt="Weather Icon"
					width="140"
					class=""
					height="200"
				/>
				<span class="text-xs uppercase text-muted-foreground"
					>{$weatherData.weather[0].description}</span
				>
			</div>
		</div>

		<div class="grid h-full flex-1 grid-rows-3 p-12">
			<div class="mt-auto rounded-lg bg-stone-100 p-4">
				<h2 class="text-xs uppercase text-stone-500">Todays forecast</h2>

				<div class="grid grid-cols-5">
					<div class="mt-5 flex h-full flex-col">
						<div class="flex items-center">
							<Thermometer class="mr-2 h-5 w-5" />
							<h3 class="text-xs uppercase text-stone-600">Feels like</h3>
						</div>
						<span class="text-2xl font-semibold">
							{$weatherData.main.feels_like}°
						</span>
					</div>
					<div class="mt-5 flex h-full flex-col">
						<div class="flex items-center">
							<Droplets class="mr-2 h-5 w-5" />
							<h3 class="text-xs uppercase text-stone-600">Humidity</h3>
						</div>
						<span class="text-2xl font-semibold">
							{$weatherData.main.humidity}
						</span>
					</div>
					<div class="mt-5 flex h-full flex-col">
						<div class="flex items-center">
							<Gauge class="mr-2 h-5 w-5" />
							<h3 class="text-xs uppercase text-stone-600">Pressure</h3>
						</div>
						<span class="text-2xl font-semibold">
							{$weatherData.main.pressure}
						</span>
					</div>
					<div class="mt-5 flex h-full flex-col">
						<div class="flex items-center">
							<ThermometerSun class="mr-2 h-5 w-5" />
							<h3 class="text-xs uppercase text-stone-600">Temp max</h3>
						</div>
						<span class="text-2xl font-semibold">
							{$weatherData.main.temp_max}°
						</span>
					</div>
					<div class="mt-5 flex h-full flex-col">
						<div class="flex items-center">
							<ThermometerSnowflake class="mr-2 h-5 w-5" />
							<h3 class="text-xs uppercase text-stone-600">Temp min</h3>
						</div>
						<span class="text-2xl font-semibold">
							{$weatherData.main.temp_min}°
						</span>
					</div>
				</div>
			</div>

			<div class="row-span-2 mt-auto h-fit rounded-lg bg-stone-100 p-4 py-6">
				<h2 class="text-xs uppercase text-stone-500">ADDITIONAL INFORMATION</h2>

				<div class="grid grid-cols-3 gap-x-4">
					<div class="mt-4 grid h-fit grid-cols-2 pl-7">
						<h3 class=" col-span-2 mb-3 flex font-semibold text-stone-800">
							Wind <Wind class="ml-2 h-5 w-5" />
						</h3>

						<div class="mt-2 flex flex-col pl-2">
							<span class="text-xs uppercase text-stone-600">speed:</span>
							<span class="text-sm font-semibold">{$weatherData.wind.speed} km/h</span>
						</div>
						<div class="mt-2 flex flex-col pl-2">
							<span class="text-xs uppercase text-stone-600">gust:</span>
							<span class="text-sm font-semibold">{$weatherData.wind.gust} km/h</span>
						</div>
						<div class="mt-2 flex flex-col pl-2">
							<span class="text-xs uppercase text-stone-600">deg:</span>
							<span class="text-sm font-semibold">{$weatherData.wind.deg} deg</span>
						</div>
					</div>

					<div class="mt-4 grid h-fit grid-cols-2 pl-7">
						<h3 class="col-span-2 mb-3 flex font-semibold text-stone-800">
							Location <ArrowDownToDot class="ml-2 h-5 w-5" />
						</h3>

						<div class="mt-2 flex flex-col pl-2">
							<span class="text-xs uppercase text-stone-600">name:</span>
							<span class="text-sm font-semibold">{$weatherData.name}</span>
						</div>
						<div class="mt-2 flex flex-col pl-2">
							<span class="text-xs uppercase text-stone-600">Country:</span>
							<span class="text-sm font-semibold">{$weatherData.sys.country}</span>
						</div>
						<div class="mt-2 flex flex-col pl-2">
							<span class="text-xs uppercase text-stone-600">Latitude:</span>
							<span class="text-sm font-semibold">{$weatherData.coord.lat}</span>
						</div>
						<div class="mt-2 flex flex-col pl-2">
							<span class="text-xs uppercase text-stone-600">Longitude:</span>
							<span class="text-sm font-semibold">{$weatherData.coord.lon}</span>
						</div>
					</div>

					<div class="mt-4 grid h-fit grid-cols-2 pl-7">
						<h3 class=" col-span-2 mb-3 flex font-semibold text-stone-800">
							Sun <Sun class="ml-2 h-5 w-5" />
						</h3>

						<div class="mt-2 flex flex-col pl-2">
							<span class="text-xs uppercase text-stone-600">Sunrise:</span>
							<span class="text-sm font-semibold"
								>{new Date($weatherData.sys.sunrise * 1000).toLocaleTimeString('en-GB')}
							</span>
						</div>
						<div class="mt-2 flex flex-col pl-2">
							<span class="text-xs uppercase text-stone-600">Sunset:</span>
							<span class="text-sm font-semibold"
								>{new Date($weatherData.sys.sunset * 1000).toLocaleTimeString('en-GB')}</span
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
