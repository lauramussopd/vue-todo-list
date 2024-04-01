<script setup>
import { ref } from 'vue';
import taskDetails from '@/components/taskDetails.vue';
import { useTaskStore } from '@/stores/taskStore';

const taskStore = useTaskStore();
</script>

<template>
	<main>
		<h1>This is gonna be: Tasks View!</h1>
		<h2> hola {{ taskStore.name }}</h2>
		<div class="task-list">
			<div v-for="task in taskStore.tasks">
				<taskDetails :task="task"/>
			</div>
		</div>
	</main>
</template>

<style scoped></style>