import React, {useState} from 'react';
import TodoInput from './components/TodoInput';
import { TodoList } from './components/TodoList';
const App = () => {

  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if(inputText !== ''){
      setListTodo([inputText, ...listTodo]);
    }
  }

  const deleteListitem = (key) => {
    let newTodoList = [...listTodo]
    newTodoList.splice(key,1)
    setListTodo([...newTodoList])

  }
 
  return (
    <div>
      <TodoInput addList={addList}/>
      <h1>Todo List</h1>
      <hr/>
      { listTodo.map((listItem, i) => {
        return <TodoList key={i} item={listItem} deleteListitem={deleteListitem} index={i}/>
      })}
      
    </div>
  )
}

export default App;
