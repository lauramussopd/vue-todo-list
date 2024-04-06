<script setup>
import { computed, ref, defineProps } from 'vue';
import { useTaskStore } from '@/stores/taskStore';

const TASK_PROPS = {
  TITLE: 'title',
  IS_FAV: 'is_fav',
  IS_COMPLETE: 'is_complete'
}

const props = defineProps(['task']);
const taskStore = useTaskStore();

const newTaskTitle = ref('')
const _isEditing = ref(false)
const taskStatus = computed(() => `check_box${props.task.is_complete ? '' : '_outline_blank'}` )

const deleteTask = (taskId) => {
  taskStore.deleteTask(taskId);
};

const _changeTitle = () => {
  _isEditing.value = true
}

const _updateTask = async (fieldToUpdate) => {
  const taskToUpdate = {}

  if (fieldToUpdate === TASK_PROPS.TITLE) {
    taskToUpdate.title = newTaskTitle.value
  } else {
    taskToUpdate[fieldToUpdate] = !props.task[fieldToUpdate]
  }

  await taskStore.updateTask(props.task.id, taskToUpdate);
  
  if (_isEditing.value) {
    newTaskTitle.value = ''
    _isEditing.value = false
  }
}

</script>

<template>
  <div class="task">
    <h6>{{ task.title }}</h6>
    <div class="icons">
      <i class="material-icons" @click="deleteTask(task.id)">delete</i>
      <i class="material-icons" :class="{ active: task.is_fav }" @click="_updateTask(TASK_PROPS.IS_FAV)">favorite</i>
      <i class="material-icons" @click="_updateTask(TASK_PROPS.IS_COMPLETE)">{{ taskStatus }}</i>
      <i class="material-icons" @click="_changeTitle">create</i>
    </div>

    <div v-show="_isEditing">
      <label>
        New Title
        <input type="text" v-model="newTaskTitle" />
      </label>
      <button @click="_updateTask(TASK_PROPS.TITLE)">Update</button>
    </div>
  </div>
</template>

<style scoped>
/* task list */


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
</style>
