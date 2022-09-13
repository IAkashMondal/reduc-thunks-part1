import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk"
// const customMiddlewere=(store)=>(next)=>(action)=>{
//     if(typeof action === "function"){
//         return action(store.dispatch)
//     }
//     return next(action)
// } or use redux thunk instead
export const store = legacy_createStore(reducer,applyMiddleware(thunk))