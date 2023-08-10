//import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import { Footer } from './MyComponents/Footer';
import { About } from './MyComponents/About';
import { Home } from './MyComponents/Home';
import React, { useState, useEffect, useRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem('todos')) {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  else {
    initTodo = [];
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  const addTodo = (title, description) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      description: description
    }
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="My Todos List" searchBar={true} />
      
      <Router>
        <Switch>
          <Route exact path="/" render={()=>{
            return (
              <Home />
            )
          }}/>
          <Route exact path="/about" render={()=>{
            return (
              <About />
            )
          }}/>
          <Route exact path="/add" render={()=>{
            return (
              <AddTodo addTodoList={addTodo} />
            )
          }}/>
          <Route exact path="/show" render={()=>{
            return (
              <Todos todos={todos} onDelete={onDelete} />
            )
          }}/>
        </Switch>
      </Router>

      <Footer />
    </>
  );
}

export default App;
