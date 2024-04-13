import { supabase } from '@/api/supabase'

 const TABLE_NAME = 'tasks'

export const fetchAllTasks = async () => {
  const { data, error } = await supabase
  .from(TABLE_NAME)
  .select('*')
  .order('inserted_at', { ascending: false });

  if (error) {
    throw new Error(error.message)
  }
  return data;
}

export const createTask = async (task, userId) => {
  const { data, error } = await supabase
  .from(TABLE_NAME)
  .insert({
    title: task.title,
    user_id: userId,
  }).select()
  if (error) {
    throw new Error(error.message)
  }
  return data[0]
}

export const deleteTaskFromDatabase = async (id) => {
  const { error } = await supabase
    .from(TABLE_NAME)
    .delete()
    .eq('id', id);
  if (error) {
    throw new Error(error.message);
  }
};

export const updateTaskById = async (id, task) => {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update(task)
    .eq('id', id)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data[0];
}