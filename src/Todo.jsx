
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function todo() {
    let [todo, settodo] = useState([{task:"Sample-task",id:uuidv4()}]);
    let [todovalue, settodovalue] = useState("");
    let addtask = () => {
        settodo([...todo, {task:todovalue,id:uuidv4()}]);
        settodovalue("");
    }
    let newTaskValue = (event) => {
        settodovalue(event.target.value);
    }
    let deleteTodo=(id)=>{
        settodo((prevestodo)=>todo.filter((prevestodo)=>prevestodo.id!=id));

    };

    return (
        <>


            <h2>Today's Task</h2>
            <div class="">
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add your task" value={todovalue} onChange={newTaskValue}></input>
            </div>
            <br />
            <button onClick={addtask} className="tn btn-primary btn-sm">Add</button>
            <ul className="list-group">
                {
                    todo.map((todo) => (
                        
                        <>
                        <li className=" li m-2"  key={uuidv4()}><b>{todo.task}</b><button onClick={()=>{deleteTodo(todo.id)}} className="tn btn-primary btn-sm ms-2 delbtn">Delete</button></li></>
                        

                    ))
                }
            </ul>
        </>
    );

}


