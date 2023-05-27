
import { combineReducers } from "redux";
let initialState = {
    name:"",
    email:"",
    pass:"",
    token:""
}

const reducer = (state=initialState,action)=>{

    switch(action.type)
    {
        case "NAME":
            return {
            
                ...state,name:action.payload
            }
            case "EMAIL":
            return {
            
                ...state,email:action.payload
            }
            case "PASSWORD":
            return {
            
                ...state,pass:action.payload
            }
            case "TOKEN":
            return {
            
                ...state,token:action.payload
            }
            default:
                return state
    }
}

const logout = (state=initialState,action)=>{

    switch(action.type){

        case "DELETENAME":
            return{
                ...state,name:""
            }
            case "DELETEEMAIL":
            return{
                ...state,email:""
            }
            case "DELETEPASS":
            return{
                ...state,pass:""
            }
            default:
                return state
    }
}

const rootReducer = combineReducers({
    data:reducer,
    logout:logout
})

export default rootReducer