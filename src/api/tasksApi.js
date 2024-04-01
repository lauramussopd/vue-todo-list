import { supabase } from '@/api/supabase'

export const fetchAllTasks = async () => {
  const { data, error } = await supabase
  .from('tasks')
  .select('*')

  if (error) {
    throw new Error(error.message)
  }

  return data;
}
/*
export const createTask = async (task) => {
  const { error } = await supabase
  .from('tasks')
  .select('*')

  if (error) {
    throw new Error(error.message)
  }

  return data;
}
*/