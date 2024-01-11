<script lang="ts">
	import { CloudRainWind, CloudDrizzle } from 'lucide-svelte';
	import Button from '../ui/button/button.svelte';
</script>

<div
	class="flex h-full flex-col items-center justify-between rounded-[35px] bg-stone-100 py-4 shadow-sm"
>
	<div class="flex flex-col items-center">
		<CloudRainWind class="h-10 w-10  text-[#FF3E00]" />
		<span class="text-md font-semibol text-xs">Svelte Weather</span>
	</div>

	<div class="flex flex-col gap-y-6">
		<Button
			typeof="button"
			class="h-18 w-18 flex flex-col items-center rounded-md  p-4 "
			variant="ghost"
			size="icon"
		>
			<CloudDrizzle />
			<span>Weather</span>
		</Button>
		<Button
			disabled
			typeof="button"
			class="h-18 w-18 flex flex-col items-center rounded-md  p-4 "
			variant="ghost"
			size="icon"
		>
			<CloudDrizzle />
			<span>Weather</span>
		</Button>
		<Button
			disabled
			typeof="button"
			class="h-18 w-18 b flex flex-col items-center rounded-md p-4 "
			variant="ghost"
			size="icon"
		>
			<CloudDrizzle />
			<span>Weather</span>
		</Button>
		<Button
			disabled
			typeof="button"
			class="h-18 w-18 flex flex-col items-center rounded-md  p-4 "
			variant="ghost"
			size="icon"
		>
			<CloudDrizzle />
			<span>Weather</span>
		</Button>
	</div>

	<div class="text-xs text-muted-foreground">
		Made by <a class="underline" href="https://github.com/eroskarm">Eros Karm</a>
	</div>
</div>
