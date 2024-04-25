

<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../stores/taskStore';
import Swal from 'sweetalert2';

const taskStore = useTaskStore();
const newTask = ref('');
// const handleSubmit = () => {
//     if (newTask.value.length > 0) {
//         taskStore.addTask({
//             title: newTask.value,
//         });
//         newTask.value = '';
//     }
// };

const handleSubmit = () => {
    if (newTask.value.length > 0) {
        taskStore.addTask({
            title: newTask.value,
        }).then(() => {
            Swal.fire('Task Added!', 'Your task has been successfully added.', 'success');
            newTask.value = '';
        }).catch(error => {
            Swal.fire('Error!', 'There was an error adding the task.', 'error');
            console.error('Error adding task:', error);
        });
    }
};
</script>

<template>
    <form>
        <input class="need-to" type="text" placeholder="I need to.." 
        v-model="newTask" id="">
        <button @click.prevent.stop="handleSubmit">Add</button>
    </form>
</template>

<style scoped>

form {
    max-width: 400px;
    margin: 0 auto;
    display: grid;
    gap: 10px;
}
form button {
    background:  #44c9c8;
    border: 0;
    padding: 10px;
    border-radius: 6px;
    font-size: 1em;
    cursor: pointer;
    margin: 0;
}
form input {
    border: 0;
    padding: 10px;
    border-radius: 6px;
    font-size: 1em;
}

.need-to{
    background-color: var(--light-color);
}

button:hover {
  color: #fff;
  background-color: var(--dark-color);
  border-color: var(--bs-btn-hover-border-color);
}
</style>