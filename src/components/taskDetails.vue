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
    <div class="task-content">
      <h6>{{ task.title }}</h6>
      <div class="icons">
        <i class="material-icons" @click="deleteTask(task.id)">delete</i>
        <i class="material-icons" :class="{ active: task.is_fav }" @click="_updateTask(TASK_PROPS.IS_FAV)">favorite</i>
        <!-- <i class="material-icons" @click="_updateTask(TASK_PROPS.IS_COMPLETE)">{{ taskStatus }}</i> -->
        <i class="material-icons" @click="_updateTask(TASK_PROPS.IS_COMPLETE)"
          :class="{ active: task.is_complete }">
          {{ props.task.is_complete ? 'check_box' : 'check_box_outline_blank' }}
        </i>
        <i class="material-icons" :class="{ active: _isEditing }" @click="_changeTitle">create</i>
      </div>
    </div>

    <div v-show="_isEditing">
      <div class="new-title d-flex align-items-center gap-2 w-100">
        <input id="newTitle" type="text" v-model="newTaskTitle" />
        <button @click="_updateTask(TASK_PROPS.TITLE)" class="btn btn-sm">Update</button>
      </div>
    </div>

  </div>

</template>

<style scoped>
.btn{
    color: #fff;
    background-color: var(--dark-color);
}

.new-title input {
  width: 100%;
  border: 0.5px solid lightgray;
  border-radius: 3px;
  padding: 3px;
  outline: none;
}

.task {
  padding: 6px 20px;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
}

.task-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task .icon {
  text-align: right;
}
</style>
