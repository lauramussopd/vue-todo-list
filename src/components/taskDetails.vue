<script setup>
import { ref, defineProps } from 'vue';
import { useTaskStore } from '@/stores/taskStore';

const props = defineProps(['task']);
const taskStore = useTaskStore();

const deleteTask = (taskId) => {
    taskStore.deleteTask(taskId);
};

const toggleFav = (taskId) => {
    taskStore.toggleFav(taskId);
};
</script>

<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i class="material-icons" @click="deleteTask(task.id)">delete</i>
            <i class="material-icons" :class="{ active: task.isFav }" @click="toggleFav(task.id)">favorite</i>
        </div>
    </div>
</template>

<style scoped>
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
