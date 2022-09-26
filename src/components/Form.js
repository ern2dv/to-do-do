import React from "react";

export default function Form({
  textItem,
  toDoItem,
  setTextItem,
  setToDoItem,
  setFilter,
}) {
  const textHandler = (e) => {
    // console.log(e.target.value);
    setTextItem(e.target.value);
  };
  const toDohandler = (e) => {
    e.preventDefault();
    if (!textItem) {
      return;
    }
    setToDoItem([
      ...toDoItem,
      {
        text: textItem,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setTextItem("");
  };
  const filterHandler = (e) => {
    setFilter(e.target.value);
  };
  return (
    <form className="form">
      <div className="input">
        <input value={textItem} type="text" onChange={textHandler} />
        <button className="todo-btn" onClick={toDohandler}>
          <i class="fas fa-plus-square plus"></i>
        </button>
      </div>

      <div className="select">
        <select onClick={filterHandler} name="todo-select">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
