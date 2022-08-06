import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ListItem from './components/ListItem';


const App = () => {
  
  const [lists, setLists] = useState([]);

  const handleTaskAdd = (list) => {
    setLists([...lists, list])
    console.log(list)
  }

  const deleteTask = (id) => {
    console.log(id)
    let filteredId = lists.filter((list) => list.id !== id)
    setLists(filteredId)
  }
  
  return (
    <>
      <Form handleTaskAdd={handleTaskAdd} />
        <div style={{backgroundColor: "red"}}>
          {lists.map((list) => (
            <ListItem list={list} key={list.id} deleteTask={deleteTask}/>
          ))}
        </div>    
    </>
  );
}

export default App;