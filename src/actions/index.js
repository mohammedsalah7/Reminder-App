import {ADD_REMINDER,REMOVE_REMINDER ,CLEAR_REMINDER} from '../type' 



export const add_Reminders= (text,date,time) =>{
    const action ={
        type: ADD_REMINDER,
        text, 
        date,
        time
    }
    console.log ("Add" ,action)
    return action 
}
export const remove_Reminder =(id) =>{
    const action ={
        type :REMOVE_REMINDER ,
        id
    }
    console.log ("Remove" ,action)
    return action 
}

export const clear_Reminder =() =>{
    const action ={
        type :CLEAR_REMINDER ,
        
    }
    console.log ("CLEAR" ,action)
    return action 
}
