import React from 'react'
import TodosInput from './TodosInput'
import { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { GetTodos } from '../redux/action'

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(store=>store.todos)
  useEffect(()=>{
    if(todos.length===0){
      dispatch(GetTodos)
    }
  },[])
 
  return (
    <div>
      <h3>Todos</h3>
      <TodosInput />
      <>{
        todos.length>0 && todos.map((item)=>{
        return(<h4 key={item.id}>{item.title} - {item.status ? "true":"false"}</h4>)})
      }</>
    </div>
  )
}

export default Todos
