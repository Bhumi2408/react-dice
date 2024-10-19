
import React, { useState } from 'react'
import '../App.css'

const Todo = () => {
  const [todos,setTodos] = useState(()=>{
    let data = localStorage.getItem('todos');
    return data? JSON.parse(data):[]
  });
  const [inputVal, setInputVal] = useState('');
  const [editIndex,setEditIndex] = useState(null);
  const add = () =>{
    // let result = document.getElementsByClassName('task')[0].value
    if(editIndex !== null){
      const updateTodos = todos.map((todo,idx)=>idx === editIndex ? inputVal : todo);
      localStorage.setItem('todos',JSON.stringify(updateTodos))
      setTodos(updateTodos)
      setEditIndex(null)
      setInputVal('');
    }
    else{
      setTodos((prev)=> [...prev,inputVal]);
      localStorage.setItem('todos',JSON.stringify([...todos,inputVal]))
    setInputVal(' ');
  }
  }
  const deleted = (id) => {
      // let task = document.querySelector('li');
      // task.remove(); 
      let data = todos.filter((_,idx)=>(idx !== id))
      setTodos(data)
      data.length >0 ? localStorage.setItem('todos',data):localStorage.setItem('todos',setTodos([]))
  } 
  const edit = (val,idx) => {
    setInputVal(val)
    setEditIndex(idx)
  } 
  const read = () =>{
    let r = document.querySelector('li');
    console.log(r)
    r.classList.toggle('.read')
  }
  return (
    <div>  
      <input value={inputVal} type="text" className="task" onChange={(e)=>setInputVal(e.target.value)}></input>
      <button onClick={add}>Add Task</button>
      {todos.length > 0 ?<ul>
      {todos.map((todo,index)=>{
        return(
          <>
          <li className='task'>{todo}   
          

         </li>
         <button onClick={()=>deleted(index)}>Delete</button> 
         <button onClick={()=>{edit(todo,index)}}>Edit</button>
         <button onClick={()=>read(index)}>Read</button>
         </>
        )
      })}
      </ul>:(<><h1>Your Todo is empty</h1></>)}
    </div>
  )
}

export default Todo


// update
// delete
// markthrough
// empty
// localStorage