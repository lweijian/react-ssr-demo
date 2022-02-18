import {ADD_AGE,  MODIFY_Info} from '../action'

const defaultState = {name:"",age:0}
export const reducer=(state=defaultState,action)=>{
    switch (action.type){
        case ADD_AGE: return {...state,age:state.age+1}
        case MODIFY_Info: return {...state,age:action.payload.age,name:action.payload.name}
        default: return state
    }
}
export default  reducer
