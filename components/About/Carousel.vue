<template>
	<UCarousel class="mx-auto" ref="carouselAutoPlay" :items="items" arrows :ui="{
		item: 'basis-full md:basis-1/3',
		container: 'rounded-lg'
	}">
		<template #default="{ item }">
			<img :src="item" height="400" draggable="false">
		</template>

		<template #prev="{ onClick, disabled }">
			<UButton class="mt-4 px-3 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 user-button"
				:disabled="disabled" @click="onClick">
				<IconArrowLeft />
			</UButton class="user-button">
		</template>

		<template #next="{ onClick, disabled }">
			<UButton class="mt-4 px-3 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 user-button"
				:disabled="disabled" @click="onClick">
				<IconArrowRight />
			</UButton class="user-button">
		</template>
	</UCarousel>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const items = [
	'about_us/carousel/carousel_1.jpg',
	'about_us/carousel/carousel_2.jpg',
	'about_us/carousel/carousel_3.jpg',
	'about_us/carousel/carousel_4.jpg',
	'about_us/carousel/carousel_5.jpg',
	'about_us/carousel/carousel_6.jpg',
	'about_us/carousel/carousel_7.jpg',
	'about_us/carousel/carousel_8.jpg',
	'about_us/carousel/carousel_9.jpg',
	'about_us/carousel/carousel_10.jpg',
]

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
