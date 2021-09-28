import React from 'react';

const ToDoLists = (props) => {
    const deleteItems = () => {
        console.log("hello");
    }
    return (
        <>
            <div className = 'todo_style'>
                <button 
                    class = "button2" 
                    onClick = {()=>{
                        props.onSelect(props.id);
                    }}
                >
                    ×
                </button>
                <li> {props.text} </li>
            </div>
        </>
    )
};

export default ToDoLists;