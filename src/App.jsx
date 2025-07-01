import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Balance from './components/Balance'
import ShowInfo from './components/ShowInfo'
import TransactionList from './components/TransactionList'

function App() {
  return (
     <div className="min-h-screen bg-gray-100">
      <div className="w-full max-w-md mx-auto px-4 py-6">
         <h1 className='my-5 font-semibold text-xl text-center'>Expense Tracker</h1>
         <Balance />
         <ShowInfo />
         <TransactionList />
      </div>
    </div>
  )
}

export default App
