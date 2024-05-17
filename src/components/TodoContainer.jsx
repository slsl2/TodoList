import React from "react";
import TodoItem from "./TodoItem";

function CardBox({ todos, setTodos }) {
  const removeCard = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const updateIsDone = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  };
  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <>
      <div id="cards-container">
        <div id="cards-working">
          <h2>Working🚴🏻‍♀️✍🏻</h2>
          <ul className="todo-ul">
            {workingTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                removeCard={removeCard}
                updateIsDone={updateIsDone}
                isWorking={true}
              />
            ))}
          </ul>
        </div>
        <div id="cards-done">
          <h2>Done✨🎉</h2>
          <ul className="todo-ul">
            {doneTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                removeCard={removeCard}
                updateIsDone={updateIsDone}
                isWorking={false}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CardBox;
