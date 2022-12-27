import React, { useState } from 'react';
import './Todo.css';
import DisplayTodo from './DisplayTodo';



function Todo() {

    const [text, setText] = useState('');
    const onChangeHandler = (event) => {
        setText(event.target.value)     // 
    }

    //from form

    const [storeValue, setStoreValue] = useState([]);
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const storeUserData = text;
        setStoreValue([...storeValue, storeUserData]);
        setText('');
    }

    // Delete items from list :

    const deleteItems = (index) => {
        const newData = storeValue.filter((value, id) => {
            return index!=id;
        })
        setStoreValue(newData)
        
    }

    return (
        <div className='container'>
            <div className='titleBox'>
                <h2>TODO APP</h2>
            </div>
            <div className="innerContainer">
                <div className="formContainer">
                    <form action="" onSubmit={onSubmitHandler}>
                        <div className="inputField">
                            <input type="text" placeholder='Add Items !' value={text} onChange={onChangeHandler} />
                        </div>
                        <div className="buttonContainer">
                            <button type='submit'>Add Items</button>
                        </div>
                    </form>
                </div>
            </div>
            {
                storeValue.map((value, index) => {
                    return (
                        <DisplayTodo key={index} index={index} item={value} delete={()=>deleteItems(index)} />
                    );

                })

            }

        </div>

    );

};
export default Todo;