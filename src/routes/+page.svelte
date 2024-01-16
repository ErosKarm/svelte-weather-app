<script lang="ts">
	import Forecast from '$lib/components/forecast/forecast.svelte';
	import Sidebar from '$lib/components/sidebar/sidebar.svelte';
	import Weather from '$lib/components/weather/weather.svelte';
</script>

<section
	class="grid h-full grid-cols-[135px,1fr] gap-0 px-4 py-4 lg:flex lg:gap-10 lg:px-12 lg:py-12"
>
	<div class="w-[100px] lg:w-[135px]">
		<Sidebar />
	</div>

	<div class="flex-1">
		<Weather />
	</div>

	<div class="col-span-2 mt-8 lg:mt-0 lg:w-[300px] 2xl:w-[400px]">
		<Forecast />
	</div>
</section>
