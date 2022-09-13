import { GET_TODOS_FAILURE, GET_TODOS_LOADING, GET_TODOS_SUCESS, POST_TODOS_FAILURE, POST_TODOS_LOADING, POST_TODOS_SUCESS } from "../actiontype";

export const InitialState={
    isLoading: false,
    todos:[],
    isError: false
}
export const reducer=(oldState= InitialState,action)=>{
    switch(action.type){

        case GET_TODOS_LOADING:

            return{...oldState,isLoading:true}
        
        case GET_TODOS_SUCESS:

            return{...oldState,isLoading:false,todos:action.payload}
        
        case GET_TODOS_FAILURE:

            return{...oldState,isLoading:false,isError:true}
        case POST_TODOS_LOADING:

            return{...oldState,isLoading:true}
            
        case POST_TODOS_SUCESS:

            return{...oldState,isLoading:false,todos:[...oldState.todos,action.payload]}
            
        case POST_TODOS_FAILURE:

            return{...oldState,isLoading:false,isError:true}
        

        default: return oldState;
    }
}
