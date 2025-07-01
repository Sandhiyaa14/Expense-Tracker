import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToList } from '../features/slice';

const Balance = () => {
    const[balance,setBalance] = useState(()=>{
      return Number(localStorage.getItem("balance")) || 0
    })
    useEffect(()=>{
      localStorage.setItem("balance",balance)
    },[balance])
    const[amount,setAmount] = useState();
    const[desc,setDesc] = useState("");
    const[radio,setRadio] = useState("EXPENSE")
    const[addExpense,setAddExpense] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = () => {
      if(amount!="" && desc!=""){
      const transactions = {
        id:Date.now(),
        amount:Number(amount),
        desc:desc,
        radio:radio,
      }
      const updatedValue = radio=="INCOME"?balance+Number(amount):balance-Number(amount)
      
      if(updatedValue<0){
        alert("You dont have enough balance!")
        setAmount("")
        setDesc("")
        return
      }
      
      setBalance(updatedValue)
      dispatch(addToList(transactions));
      setAmount("")
      setDesc("")
    }
    else{
      alert("Please fill all details")
    }
    }

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h3 className='font-medium text-lg'>Balance:${balance}</h3>
        <button onClick={()=>setAddExpense(!addExpense)} className='bg-black text-white cursor-pointer px-3 rounded'>ADD</button>
      </div>
      {addExpense && <div className='border mt-2 border-gray-300 py-2 px-5 rounded w-full mx-auto'>
           <div className=''>
            <input type="number" placeholder='Amount' className='border outline-0 border-gray-300 w-full py-1 px-2 rounded mt-3' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            <input type="text" placeholder='Description..' className='border outline-0 border-gray-300 w-full py-1 px-2 rounded my-3' value={desc} onChange={(e)=>setDesc(e.target.value)}/>
            <div className='my-1 flex items-center'>
                <input type="radio" id='expense' name='select' className='mr-2' value="EXPENSE" checked={radio=="EXPENSE"} onChange={(e)=>setRadio(e.target.value)}/>
                <label htmlFor="expense" className='mr-4'>Expense</label>
                <input type="radio" id='income' className='mr-2' name='select' value="INCOME" checked={radio=="INCOME"} onChange={(e)=>setRadio(e.target.value)}/>
                <label htmlFor="income">Income</label>
            </div>
            <div className='flex items-center justify-center'>
                <button className='bg-black text-white py-1 px-2 rounded my-3 cursor-pointer' onClick={handleSubmit}>Add Transaction</button>
            </div>
           </div>
        </div>}
    </div>
  )
}

export default Balance
