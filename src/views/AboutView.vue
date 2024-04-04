<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useTaskStore } from '@/stores/taskStore';
import taskDetails from '@/components/taskDetails.vue';
import taskForm from '@/components/taskForm.vue';
import { TASKS_FILTER_METHODS } from '@/utils/constants'

const taskStore = useTaskStore();
const { tasksFiltered } = storeToRefs(taskStore);

const setFilter = (selectedFilter) => {
	taskStore.changeFilterTaskMethod(selectedFilter)
	console.log(tasksFiltered.value)
};
</script>

<template>
	<div class="row align-items-center">

		<nav class="filter mb-4">
			<button @click="setFilter(TASKS_FILTER_METHODS.ALL)">All tasks</button>
			<button @click="setFilter(TASKS_FILTER_METHODS.FAVS)">Fav tasks</button>
		</nav>
		<div class="header-text mb-4">
		</div>
		<div class="mb-4">
			<taskForm />
		</div>
		<div class="input-group mb-5 d-flex justify-content-between">
		</div>
		<div class="input-group mb-3">
			<div class="task-list" v-if="tasksFiltered.length">
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
	/* padding: 20px 0; */
}

button {
	display: inline-block;
	margin-left: 10px;
	background: #bbb;
	border: none;
	border-radius: 4px;
	padding: 4px 8px;
	cursor: pointer;
	font-size: 0.8em;
}

/* filter nav */

.filter {
	width: 640px;
	margin: 10px auto;
	text-align: right;
}

/* task list */

.task-list {
	/* max-width: 640px; */
	margin: 20px auto; 
}

.task {
	padding: 6px 20px;
	background-color: #fff;
	margin-top: 20px;
	border-radius: 4px;
	box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.task .icon {
	text-align: right;
}

.task i {
	font-size: 1.4em;
	margin-left: 6px;
	cursor: pointer;
	color: #bbb;
}

.task i.active {
	color: #ff005d;
}
</style>