import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { IoAddCircleOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux' //--
import { Add } from './Redux/ReduxAdd' //--

const AddTask = ({setAddTaskModel}) => {
    const [inputText,setInputText] = useState({})
    const dispatch = useDispatch() //---

    const handleclose =() => {
        setAddTaskModel(false)
    } 

    const handleInput =() =>(e) => {
        const {value} = e.target;
        setInputText(value)
    }
 
    const addTask = () => {
        dispatch(Add(inputText))  //----
        setAddTaskModel(false)
    }


  return (
    <div className='w-full h-screen bg-black/30 absolute flex justify-center items-center'>
        <div className='w-[400px] bg-white rounded'>
            <div className='flex flex-col space-y-4 p-4'>
                <div className='flex justify-between'>
                    <h1 className='text-xl font-semibold'>Add New Task</h1>
                    <button onClick={() => handleclose()} ><AiOutlineCloseCircle/></button>
                </div>
                <input 
                    type="text" 
                    placeholder='new task' 
                    onChange={handleInput()}
                    className='w-full outline-0 p-2 bg-gray-100' />
                <button onClick={() =>addTask()}
                className='w-28 p-2 rounded-md flex justify-center items-center space-x-1 bg-yellow-400'>
                <IoAddCircleOutline size={'1.1rem'}/>
                <span>Add</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddTask
