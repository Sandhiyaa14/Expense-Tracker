import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import expenseTracker from "../features/slice"

const store = configureStore({
   reducer : {
     expenseList : expenseTracker
   }
})

export default store;
