import { defineStore } from 'pinia'

export const useTaskStore =  defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "buy milk", isFav: false},
            {id: 2, title: "buy something", isFav: false}
        ],
        name: 'Laura'
    })
})