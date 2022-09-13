import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { GetTodos, POST_TODOS_FAILURE_fn, POST_TODOS_LOADING_fn, POST_TODOS_SUCESS_fn } from '../redux/action';

const TodosInput = () => {
  const dispatch=useDispatch();
  const[text,setText]=useState("");
  const AddTodos=()=>{
    if(text){
     const payload={
      title:text,
      status:false
     }
    
    dispatch(POST_TODOS_LOADING_fn())
    return axios.post("http://localhost:8080/todos",payload)
    .then((r)=> dispatch(POST_TODOS_SUCESS_fn(r.data)))
    .catch((e)=>POST_TODOS_FAILURE_fn(e));
    }
  }
  const handelAdd=()=>{
    AddTodos().then(()=>{
      dispatch(GetTodos)});
  }

  return (
    <div>
      <input value={text} placeholder="add todos" onChange={(e)=>setText(e.target.value)}/>
      <button onClick={handelAdd}>Add</button>
    </div>
  )
}

export default TodosInput
