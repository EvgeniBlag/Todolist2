import React, { ChangeEvent, ChangeEventHandler, KeyboardEvent, useState } from 'react';
import {Button} from './Components/Button/Button';
import { FullInput } from './Components/FullInput';
import { Input } from './Components/Input';


type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    changeFilter:(filterValue:string)=>void
    changeStatus:(tasks1Id:string,isDone:boolean)=>void
    addTask:(newTaskTitle:string)=>void
    removeTask:(lId:string)=>void
}



export function Todolist(props: PropsType) {


   const remove = (elId:string) =>{
     props.removeTask(elId)
   }


   const onAllClickHandler = () => props.changeFilter("All")
   const onActiveClickHandler = () => props.changeFilter("Active")
   const onCompletedClickHandler = () => props.changeFilter("Completed")
   
   

    return (

        <div>
            <h3>{props.title}</h3>
            <Input callBack={props.addTask}/>
            <FullInput addTask={props.addTask} />
            
            <ul>
                {props.tasks.map((el)=>{

                    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
                      props.changeStatus ( el.id, e.currentTarget.checked )
                    }
                    const removeTask= ()=>{
                        remove(el.id)
                    }

                    const changeFilterHandler =(filterValue: string)=>{
                        props.changeFilter(filterValue)
                    }
                    
                 return(
                        <li key={el.id} className={el.isDone ? "is-done" : ""}>

                         <input
                             type="checkbox"
                             checked={el.isDone}
                             onChange={onChangeHandler}
                         />
                         <span>{el.title}</span>
                         <button onClick={removeTask}>Quit</button>

                        </li>
                 )
                })}
            </ul>
            <div>
                
                 <Button name={"All"} callBack={() => props.changeFilter("All")}/>
                 <Button name={"Active"} callBack={() => props.changeFilter("Active")}/>
                 <Button name={"Completed"} callBack={() => props.changeFilter("Completed")}/>

            </div>

        </div>
    )


   }
