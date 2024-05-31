import React from 'react'
import "./global.css"
import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

import Forms from './components/forms/Forms'
import Todo from './components/todo/Todo'
import { useState } from 'react'
const App = ()=> {
    let[state , setstate] = useState({
        title:"",
        todo:"",
        id:uuidv4(),
        items:[]
});

let formhandle= (x)=>{
    // console.log(x.target);
    let {name , value} = x.target;
    setstate({...state,[name]:value});
}
let handleSubmit = (x)=>{
    x.preventDefault();
    console.log(state);
    try{

        let newItem ={
            title: state.title,
            todo:state.todo,
            id: uuidv4()
        };
        let updatedItem = [...state.items , newItem]
        console.log(updatedItem);
        if (state.title.trim() !="" &&state.todo.trim() !="") {
            toast.success("Task Added...")
            setstate({
                items: updatedItem,
               id: uuidv4(),
               title: "",
               todo:"",
           })
            
        }
        else{
            toast.error("Enter a Task")
        }
   }
       catch{
        console.log("Error");

    }
};
const handleDelete = (id) => {
    const updatedItems = state.items.filter(item => item.id !== id);
    setstate({
        // ...state,
        items: updatedItems,
        title:"",
        todo:""
    });
    toast.success("Task removed successfully!!");

};

const handleUpdate = (id, updatedTask) => {
    const updatedItems = state.items.map(item => {
        if (item.id === id) {
            return {
                ...item,
                title: updatedTask.title,
                todo: updatedTask.todo
            };
        }
        return item;
    });
    setstate({
        ...state,
        items: updatedItems
    });
};


  return (
    <main id='mainwrapper'>
             <Toaster />
        <article>
            <section className='formsection' >
                <Forms title={state.title} todo= {state.todo} formhandle={formhandle} handleSubmit={handleSubmit} />
            </section>
            <section className='todosection'>
            <Todo items={state.items}  handleUpdate={handleUpdate} handleDelete={handleDelete}/>
            </section>
        </article>
        </main>
  )
}
export default App;