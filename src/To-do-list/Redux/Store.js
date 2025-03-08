import { configureStore } from '@reduxjs/toolkit'
import  AddTaskReducer  from './ReduxAdd'

export const store = configureStore({
  reducer: {
        addTask : AddTaskReducer
  },
})