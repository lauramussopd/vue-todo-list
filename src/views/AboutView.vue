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
	<div class="row align-items-center">

		<nav class="filter mb-4">
			<button @click="setFilter('all')">All tasks</button>
			<button @click="setFilter('favs')">Fav tasks</button>
		</nav>
		<div class="header-text mb-4">
		</div>
		<div class="mb-4">
			<taskForm />
		</div>
		<div class="input-group mb-5 d-flex justify-content-between">

		</div>
		<div class="input-group mb-3">
			<div class="task-list" v-if="filter === 'all'">
				<p>You have {{ taskStore.totalCount() }} tasks left to do</p>
				<div v-for="task in taskStore.tasks">
					<taskDetails :task="task" />
				</div>
			</div>
		</div>
	</div>





	<!-- <main>

		<div class="new-task-form">
			<taskForm />

		</div>

		<nav class="filter">
			<button @click="setFilter('all')">All tasks</button>
			<button @click="setFilter('favs')">Fav tasks</button>
		</nav>

		<div class="task-list" v-if="filter === 'all'">
			<p>You have {{ taskStore.totalCount() }} tasks left to do</p>
			<div v-for="task in taskStore.tasks">
				<taskDetails :task="task" />
			</div>
		</div>

		<div class="task-list" v-if="filter === 'favs'">
			<p>You have {{ taskStore.favCount() }} favs left to do</p>
			<div v-for="task in taskStore.favs()">
				<taskDetails :task="task" />
			</div>
		</div>
	</main> -->
</template>

<style scoped>
.new-task-form {
	background: #e7e7e7;
	padding: 20px 0;
}

/* task list */

.task-list {

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