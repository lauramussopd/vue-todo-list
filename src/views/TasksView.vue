<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useTaskStore } from '@/stores/taskStore';
import taskDetails from '@/components/taskDetails.vue';
import taskForm from '@/components/taskForm.vue';
import { TASKS_FILTER_METHODS } from '@/utils/constants'

import navbarVue from '@/components/navbarVue.vue';

const taskStore = useTaskStore();
const { tasksFiltered } = storeToRefs(taskStore);

const setFilter = (selectedFilter) => {
	taskStore.changeFilterTaskMethod(selectedFilter)
	console.log(tasksFiltered.value)
};
</script>

<template>

	<navbarVue />
	<div class="row align-items-center">

		<nav class="filter mb-4">
			<button @click="setFilter(TASKS_FILTER_METHODS.ALL)">All tasks</button>
			<button @click="setFilter(TASKS_FILTER_METHODS.FAVS)">Favourites</button>
			<button @click="setFilter(TASKS_FILTER_METHODS.COMPLETE)">Completed</button>
		</nav>
		<div class="header-text mb-4">
		</div>
		<div class="mb-4">
			<taskForm />
		</div>
		<div class="input-group mb-5 d-flex justify-content-between">
		</div>
		<div class="input-group mb-3">
			 <div class="task-list-tasks" v-if="tasksFiltered.length">
				<p>You have {{ tasksFiltered.length }} tasks left to do</p>
				<div v-for="task in tasksFiltered">
					<taskDetails :task="task" />
				</div>
			</div> 
		
		</div>
	</div>



</template>

<style scoped>
.new-task-form {
	background: #e7e7e7;
}

button {
	display: inline-block;
	margin-left: 10px;
	border: none;
	border-radius: 4px;
	padding: 4px 8px;
	cursor: pointer;
}

/* filter nav */

.filter {
	width: 640px;
	margin: 10px auto;
	text-align: right;
}

/* task list */

.task-list-tasks {
	max-width: 400px;
	margin: 20px auto;
	width: 400px;
	padding: 20px;
	background-color: rgba(252, 252, 212, 0.5);
	border-radius: 5px;
	box-shadow: 3px 3px 21px #DDD;
}
</style>