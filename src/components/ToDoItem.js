import React from "react";

export default function ToDoItem({ textItem, toDoItem, toDo, setToDoItem }) {
  const checkHandler = () => {
    setToDoItem(
      toDoItem.map((item) => {
        if (item.id === toDo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const deleteHandler = () => {
    setToDoItem(toDoItem.filter((el) => el.id !== toDo.id));
  };
  return (
    <div className="todo-item">
      <li className={`todo ${toDo.completed ? "completed" : ""}`}>
        {textItem}
      </li>
      <div className="btn-stack">
        <button onClick={checkHandler}>
          <i className="fas fa-check btn-check"></i>
        </button>
        <button onClick={deleteHandler}>
          <i className="fas fa-trash btn-delete"></i>
        </button>
      </div>
    </div>
  );
}
