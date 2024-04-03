<script setup>
import { ref } from 'vue';
import { useTaskStore } from '@/stores/taskStore';
import taskDetails from '@/components/taskDetails.vue';
import taskForm from '@/components/taskForm.vue';

const taskStore = useTaskStore();
const filter = ref('all');

const setFilter = (selectedFilter) => {
  filter.value = selectedFilter;
};
</script>

<template>
	<main>
		<h1>This is gonna be: Tasks View!</h1>
		<h2> hola {{ taskStore.name }}</h2>

		<!-- new task form -->
		<div class="new-task-form">
			<taskForm />
		</div>
		<!-- filter -->
			<nav class="filter">
				<button @click="setFilter ('all')">All tasks</button>
				<button @click="setFilter('favs')">Fav tasks</button>
			</nav>
		<!-- task list -->
		<div class="task-list" v-if="filter === 'all'">
			<p>You have {{ taskStore.totalCount() }} tasks left to do</p>
			<div v-for="task in taskStore.tasks">
				<taskDetails :task="task"/>
			</div>
		</div>

		<div class="task-list" v-if="filter === 'favs'">
			<p>You have {{ taskStore.favCount() }} favs left to do</p>
			<div v-for="task in taskStore.favs()">
				<taskDetails :task="task"/>
			</div>
		</div>
	</main>
</template>

<style scoped>
 .new-task-form {
	background: #e7e7e7;
	padding: 20px 0;
}
</style>