import { supabase } from '@/api/supabase'

//  const TABLE_NAME = 'tasks'

//  export const fetchTasks = async () => {
//   const { data, error } = await supabase.from(TABLE_NAME).select('*')
//   if (error) {
//     throw new Error(error.message)
//   } else {
//     // console.log(data)
//     return data
//   }
// }
export const fetchAllTasks = async () => {
  const { data, error } = await supabase
  .from('tasks')
  .select('*')

  if (error) {
    throw new Error(error.message)
  }

  return data;
}

export const createTask = async (task) => {
  const { error } = await supabase
  .from('tasks')
  .insert({
    // Inserire solo i campi necessari per la creazione della task
    title: task.title,
    // Aggiungi altri campi qui se necessario
  });
  if (error) {
    throw new Error(error.message)
  }

  return data;
}
