import {useState} from 'react';
import Header from './component/Header';
import List from './component/List';
import './App.css';

function App() {
  const [todo, setTodo] = useState([]);
  const [searchText, setSearchText]= useState('');
  const addTodo=(val)=>{
    let data = {id: todo.length + 1,"name": val}
    console.log(data)
    setTodo([...todo, data])
    setSearchText('')
  }
  const onDelete=(id)=>{
    console.log(id)
    let filterTodo = todo.filter(todo=> todo.id !== id)
    setTodo(filterTodo)
}
  console.log("todo",todo)
  return (
    <>
      <Header />
      <div className="wrapper">
        <List 
          todo={todo} 
          addTodo={addTodo}
          searchText={searchText}
          setSearchText={setSearchText}
          onDelete={onDelete}
          />
      </div>
    </>
  );
}

export default App;
