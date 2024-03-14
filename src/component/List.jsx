import React, {useState} from 'react'
    
const List=({todo, addTodo, searchText, setSearchText, onDelete, setIsEdit, setCurrentTodo})=>{
    const onUpdate =(val, index)=>{
        setIsEdit(true)
        setSearchText(val.name)
        setCurrentTodo(index)
    }
    return <div className='list-wrapper'>
        <div className="search-box">
            <input type="search" name="search" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button onClick={()=>addTodo(searchText)}>ADD</button>
        </div>
        <div className="list-box">
            <ul>
                 {todo.length>0 && todo.filter(item=>{
                    return searchText.length>3 ? item.name.toLowerCase().includes(searchText): item
                 }).map((item, index)=>{
                    return <li key={item.id}>
                      <span>{item.name}</span>
                      <span>
                        <button onClick={()=>onDelete(item.id)}>Delete</button>
                        <button onClick={()=>onUpdate(item, index)}>Update</button>  
                      </span> 
                    </li>
                 })}
            </ul>
            
        </div>
    </div>
}

export default List