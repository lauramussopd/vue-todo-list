<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../stores/taskStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const taskStore = useTaskStore();
const newTask = ref('');
const showToast = ref(false);

const handleSubmit = () => {
    try {
        if (newTask.value.length > 0) {
            taskStore.addTask({
                title: newTask.value,
            });
            newTask.value = '';
            showToast.value = true;
            setTimeout(() => showToast.value = false, 2000)
        }
    } catch (error) {
        console.error('Error showing toast:', error);
    }
};
</script>

<template>
    <form>
        <input class="need-to" type="text" placeholder="I need to.." v-model="newTask" id="">
        <button @click.prevent.stop="handleSubmit">Add</button>
        <div class="toast align-items-center show" role="alert" v-show="showToast">
            <div class="d-flex">
                <div class="toast-body">
                    Task added successfully!
                </div>
            </div>
        </div>
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
    background: #44c9c8;
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

.need-to {
    background-color: var(--light-color);
}

button:hover {
    color: #fff;
    background-color: var(--dark-color);
    border-color: var(--bs-btn-hover-border-color);
}

/*------------ For small screens------------*/
@media only screen and (max-width: 768px) {
    .toast {
        position: static;
        bottom: 20px;
        background-color: var(--light-color);
        border: none;
        z-index: 999;
        right: 20px;
        width: auto;
    }
}
</style>