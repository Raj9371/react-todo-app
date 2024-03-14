import {useState} from 'react';
import Header from './component/Header';
import List from './component/List';
import './App.css';

function App() {
  const [todo, setTodo] = useState([]);
  const [searchText, setSearchText]= useState('');
  const [isEdit, setIsEdit]=useState(false);
  const [currentTodo, setCurrentTodo]=useState(null);

  const addTodo=(val)=>{
    if(isEdit){
      let upDatetodo = todo.map((item, index)=>{
        return index === currentTodo ? {...item, name: val} : item
      })
      setTodo(upDatetodo)
      setSearchText('');
    }else if(searchText.trim()){
      let data = {id: todo.length + 1,"name": val}
      setTodo([...todo, data]);
      setSearchText('');
    }
  }
  const onDelete=(id)=>{
    let filterTodo = todo.filter(todo=> todo.id !== id)
    setTodo(filterTodo)
}
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
          setIsEdit={setIsEdit}
          setCurrentTodo={setCurrentTodo}
          />
      </div>
    </>
  );
}

export default App;
