

<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../stores/taskStore';

const taskStore = useTaskStore();
const newTask = ref('');
const handleSubmit = () => {
    if (newTask.value.length > 0) {
        taskStore.addTask({
            title: newTask.value,
        });
        newTask.value = '';
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
    color:  #44c9c8;
    font-size: 1em;
}

.need-to{
    background-color: var(--light-color);
}
</style>