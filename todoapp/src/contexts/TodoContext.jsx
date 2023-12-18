import React, { createContext, useContext, useState } from "react";
//id generate etmek için npm i uuid
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn JavaScript",
      completed: true,
    },
    {
      id: 2,
      text: "Learn React",
      completed: false,
    },
  ]);

  const addTodo = (text) =>
    setTodos((prev) => [...prev, { id: uuidv4(), completed: false, text }]);

  //seçme
  const toggleTodo = (id) => {
    const cloned_todos = [...todos];

    const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
    // console.log(itemIndex);
    const item = todos[itemIndex];
    // console.log("item", item);

    item.completed = !item.completed;

    setTodos(cloned_todos);
  };
  //silme
  const destroyTodo = (id) => {
    const cloned_todos = [...todos];

    const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
    console.log("item", itemIndex);

    //hangi indexli elemandan sonra kaç tane silincek  burada kendisini sildiriyoruz
    cloned_todos.splice(itemIndex, 1);

    setTodos(cloned_todos);
  };

  const values = {
    todos,
    setTodos,
    addTodo,
    toggleTodo,
    destroyTodo,
    filter,
    setFilter,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("useTodo hook must be call inside TodoProvider component");
  }
  return context;
};
