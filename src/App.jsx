import React, { useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import "./App.css"


function TodoItem({label, delete_todo}) {
    return (
    <div className="todo-item">
                <span className='todo-text'>{label}</span>
                <div className='deletetrash' onClick={delete_todo}>
                <FaRegTrashAlt />
                </div>
            </div>
    );
}

const App = () => {
    const [todos, setTodos] = useState([
    ]);
    const[todoInput, setTodoInput]= useState("");
    
    return (
        <div className='container-fluid'>
           
        
        <form onSubmit={(ev) => {
         ev.preventDefault();
            
            if(todoInput.length > 0) {
                setTodos([{
                    label: todoInput,
                    is_done: false
                }, ...todos])
                setTodoInput("");
            }                       
            }}
         className='container flex column align-items-center justify-content-start'>
            
            <h1>To Do List</h1>
            <input className='form-control form-control-lg' 
            type="text"
            placeholder='Que necesitas hacer?'
            aria-label="todo list input field"
            value={todoInput}
            onChange={(ev) => setTodoInput(ev.target.value)}
            />
            {todos.map((item, id)=>
            <TodoItem key={id} label={item.label}
             toggle_todo={() => 
                setTodos(todos.toSpliced(id, 1,{
                    label: item.label,
                    is_done: !item.is_done,
                }
                ))}
                delete_todo={() =>setTodos(todos.toSpliced(id,1))}
                 /> )}
        
            
            <small>{todos.length} Que haceres restantes</small>
            <small>{todos.length == 0 ? ", agregue una tarea" : ""}</small>
            
           
        </form>
        </div>

    )
}

export default App;