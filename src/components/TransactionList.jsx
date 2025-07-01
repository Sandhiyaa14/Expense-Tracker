import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const TransactionList = () => {
    const {expenseList} = useSelector(state=>state.expenseList)
    const[search,setSearch] = useState("");
    const filtered = expenseList.filter((item)=>item.desc.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
      <div>
      <div className='mt-4'>
        <h1 className='text-lg font-semibold'>Transactions</h1>
      <input type="search" className='w-full px-2 py-1 my-2 bg-gray-300 rounded-xl' value={search}placeholder='search' onChange={(e)=>setSearch(e.target.value)}/>
      <div className='max-h-50 overflow-y-auto hide-scrollbar'>
        {filtered.map((expense)=>(
            <div key={expense.id} className='relative flex items-center justify-between mb-2 mt-2 border border-gray-400 rounded py-2 px-4'>
            <h3>{expense.desc}</h3>
            <p>${expense.amount}</p>
            <div className={expense.radio=="EXPENSE"?'absolute right-0 bg-red-700 h-full top-0 w-1':'absolute right-0 bg-green-700 h-full top-0 w-1'}></div>
        </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default TransactionList
