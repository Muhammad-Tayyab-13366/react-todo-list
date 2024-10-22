import React, { useState} from 'react';

const TodoInput = (props) => {

    const [inputText, setInputText] = useState('');
    const handleEnterPress = (e) => {
        if(e.keyCode === 13){
            props.addList(inputText)
            setInputText('');
        }
    }
  return (
    <div>
        <input 
            type="text" 
            name="todo_task"
            value={inputText}
            placeholder='Enter your todo'
            onChange={ (e) => {
                setInputText(e.target.value)
            }}
            onKeyDown={handleEnterPress}
             />
        <button type="" onClick={() => {
            props.addList(inputText)
            setInputText('');
        }}>add task</button>
    </div>
  )
}

export default TodoInput;
