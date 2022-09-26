import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import "./App.css";
import ToDo from "./components/ToDo";

function App() {
  const [textItem, setTextItem] = useState("");
  const [toDoItem, setToDoItem] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filterdToDO, setFilterdToDO] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    const fHandler = () => {
      switch (filter) {
        case "completed":
          setFilterdToDO(toDoItem.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilterdToDO(toDoItem.filter((todo) => todo.completed === false));
          break;
        default:
          setFilterdToDO(toDoItem);
          break;
      }
    };
    const saveToDos = () => {
      localStorage.setItem("todos", JSON.stringify(toDoItem));
    };
    fHandler();
    saveToDos();
  }, [toDoItem, filter]);

  const getTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localToDos = JSON.parse(localStorage.getItem("todos"));
      setToDoItem(localToDos);
    }
  };
  return (
    <div className="app">
      <header className="header">
        <h1>ToDo App</h1>
      </header>
      <Form
        textItem={textItem}
        toDoItem={toDoItem}
        setToDoItem={setToDoItem}
        setTextItem={setTextItem}
        setFilter={setFilter}
      />
      <hr className="line" />
      <ToDo
        setToDoItem={setToDoItem}
        toDoItem={toDoItem}
        filterdToDO={filterdToDO}
      />
    </div>
  );
}

export default App;
