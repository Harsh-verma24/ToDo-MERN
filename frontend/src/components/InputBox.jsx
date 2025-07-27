import React, { useState } from 'react'
import { addTodo } from '../api/TodoApi'
import {toast } from 'react-hot-toast'
const InputBox = () => {

  const [title,setTitle] = useState('')
  const CreateTodo = async (title)=>{
    try {
      if(!title||title===""){
        toast.error('Please Fill the add todo field')
      }
      else{
        const ctn = await addTodo(title)
        console.log(ctn)
        toast.success("To do Added successfully")
      }
    } catch (error) {
      console.log(error,"Create todo ka error")
    }
  }

  
  return (
    <div>
      <div className='flex gap-2 items-center place-content-center'>
        <input onChange={(e)=>setTitle(e.target.value)
        } type="text" placeholder={title?title:"Add To do"} className="input input-accent" />
        <button onClick={()=>(CreateTodo(title))} className="btn btn-soft btn-accent">Add</button>
      </div>
    </div>
  )
}

export default InputBox
