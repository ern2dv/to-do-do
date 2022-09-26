import React from "react";
import ToDoItem from "./ToDoItem";
export default function ToDo({ toDoItem, setToDoItem, filterdToDO }) {
  const toDo = filterdToDO.map((item) => {
    return (
      <ToDoItem
        textItem={item.text}
        key={item.id}
        setToDoItem={setToDoItem}
        toDoItem={toDoItem}
        toDo={item}
      />
    );
  });
  return (
    <div className="todo-container">
      <ul className="todo-list">{toDo}</ul>
    </div>
  );
}
