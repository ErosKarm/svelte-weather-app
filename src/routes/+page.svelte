<script lang="ts">
	import Forecast from '$lib/components/forecast/forecast.svelte';
	import Sidebar from '$lib/components/sidebar/sidebar.svelte';
	import Weather from '$lib/components/weather/weather.svelte';
</script>

<section class="flex h-full gap-10 px-12 py-12">
	<div class="w-[150px]">
		<Sidebar />
	</div>

	<div class="flex-1">
		<Weather />
	</div>

	<div class="w-[400px]">
		<Forecast />
	</div>
</section>
