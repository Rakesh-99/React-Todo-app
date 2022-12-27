import React from "react";
import './DisplayTodo.css';



function DisplayTodo(props) {
    return (
        <div className="displayItems">
            <div className="flex">
                <div>
                    {props.item}
                </div>
                <div>
                    <button onClick={props.delete}>X</button>
                </div>
                
            </div>
        </div>
    );
};

export default DisplayTodo;