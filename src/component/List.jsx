import React, {useState} from 'react'
    
const List=({todo, addTodo, searchText, setSearchText, onDelete})=>{

    return <div className='list-wrapper'>
        <div className="search-box">
            <input type="search" name="search" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button onClick={()=>addTodo(searchText)}>ADD</button>
        </div>
        <div className="list-box">
            <ul>
                 {todo.length>0 && todo.map(item=>{
                    return <li key={item.id}>
                      <span>{item.name}</span>
                      <button onClick={()=>onDelete(item.id)}>Delete</button>  
                    </li>
                 })}
            </ul>
            
        </div>
    </div>
}

export default List