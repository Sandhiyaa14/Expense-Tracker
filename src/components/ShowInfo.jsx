import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const ShowInfo = () => {
  const[income,setIncome] = useState(0)
  const[expense,setExpense] = useState(0)
  const {expenseList} = useSelector(state=>state.expenseList)

  useEffect(()=>{
    let totalIncome = 0;
    let totalExpense = 0;
    expenseList.forEach((item)=>{
      if(item.radio == "INCOME"){
        totalIncome+=item.amount
      }
      else{
        totalExpense+=item.amount
      }
    })
    setIncome(totalIncome)
    setExpense(totalExpense)
  },[expenseList])

     return (
    <div className='flex mt-4 items-center justify-center gap-4'>
      <div className='border border-gray-300 py-3 px-3 w-45'>
        <h4>Expense</h4>
        <h1 className='font-bold text-red-700 text-xl'>${expense}</h1>
      </div>
      <div className='border border-gray-300 py-3 px-3 w-45'>
        <h4>Income</h4>
        <h1 className='font-bold text-green-700 text-xl'>${income}</h1>
      </div>
    </div>
  )
}

export default ShowInfo
