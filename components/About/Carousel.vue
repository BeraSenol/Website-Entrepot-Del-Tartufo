<template>
	<UCarousel class="mx-auto" ref="carouselAutoPlay" arrows :items="data.images" :ui="{
		item: 'basis-full md:basis-1/3',
		container: 'rounded-lg'
	}">
		<template #default="{ item }">
			<img height="400" draggable="false" :src="item">
		</template>

		<template #prev="{ onClick, disabled }">
			<UButton class="u-border-gray-200 u-bg-gray-950 mt-4 px-3 u-border u-button" @click="onClick"
				:disabled="disabled">
				<IconArrowLeft />
			</UButton>
		</template>

		<template #next="{ onClick, disabled }">
			<UButton class="u-border-gray-200 u-bg-gray-950 mt-4 px-3 u-border u-button" @click="onClick"
				:disabled="disabled">
				<IconArrowRight />
			</UButton>
		</template>
	</UCarousel>
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app';
import { onMounted, ref } from 'vue';

const { data } = await useFetch('/api/carousel')
const carouselAutoPlay = ref()

onMounted(() => {
	setInterval(() => {
		if (!carouselAutoPlay.value) return
		if (carouselAutoPlay.value.page === carouselAutoPlay.value.pages) {
			return carouselAutoPlay.value.select(0)
		}
		carouselAutoPlay.value.next()
	}, 3000)
})
</script>
