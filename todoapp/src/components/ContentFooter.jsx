import React from "react";
import { useTodo } from "../contexts/TodoContext";

function ContentFooter() {
  const { todos, setTodos, filter, setFilter } = useTodo();

  const clearCompleted = () => {
    //1. yol
    // const cloned_todos = [...todos];
    // const new_todos = cloned_todos.filter((todo) => !todo.completed);
    // //tamamlanmamış olanları ver diyoruz
    // setTodos(new_todos);

    //2.yol
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length}</strong>
        item{todos.length > 1 && "s"} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={() => setFilter("all")}
            className={filter === "all" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setFilter("active")}
            className={filter === "active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setFilter("completed")}
            className={filter === "completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default ContentFooter;
