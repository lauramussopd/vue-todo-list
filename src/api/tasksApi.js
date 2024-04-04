import { supabase } from '@/api/supabase'

 const TABLE_NAME = 'tasks'

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
  .from(TABLE_NAME)
  .select('*')

  if (error) {
    throw new Error(error.message)
  }
  return data;
}

export const createTask = async (task, userId) => {
  const { data, error } = await supabase
  .from(TABLE_NAME)
  .insert({
    // Inserire solo i campi necessari per la creazione della task
    title: task.title,
    user_id: userId,
    // Aggiungi altri campi qui se necessario
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