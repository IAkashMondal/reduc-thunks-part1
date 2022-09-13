import axios from "axios"
import { GET_TODOS_FAILURE, GET_TODOS_LOADING, GET_TODOS_SUCESS, POST_TODOS_FAILURE, POST_TODOS_LOADING, POST_TODOS_SUCESS } from "../actiontype"

export const GET_TODOS_LOADING_fn=()=>{
    return {type:GET_TODOS_LOADING}
}
export const GET_TODOS_SUCESS_fn=(payload)=>{
    return ({type:GET_TODOS_SUCESS,payload})
}
export const GET_TODOS_FAILURE_fn=()=>{
    return {type:GET_TODOS_FAILURE}
}
export const POST_TODOS_LOADING_fn=()=>{
    return {type:POST_TODOS_LOADING}
}
export const POST_TODOS_SUCESS_fn=(payload)=>{
    return ({type:POST_TODOS_SUCESS,payload})
}
export const POST_TODOS_FAILURE_fn=()=>{
    return {type:POST_TODOS_FAILURE}}

export const GetTodos=(dispatch)=>{
    dispatch(GET_TODOS_LOADING_fn())
        return axios.get("http://localhost:8080/todos")
    .then((r)=>{ dispatch(GET_TODOS_SUCESS_fn(r.data))})
    .catch((e)=>{GET_TODOS_FAILURE_fn(e)});
    }