import React from "react";

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
      <div id="card-container-working">
        <h2>Working</h2>
        <ul>
          {workingTodos.map((todo) => (
            <li class="todo-li" key={todo.id}>
              <p>{todo.title}</p>
              <p>{todo.body}</p>
              <div>
                <button onClick={() => removeCard(todo.id)}>삭제하기</button>
                <button onClick={() => updateIsDone(todo.id)}>완료</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div id="card-container-done">
        <h2>Done</h2>
        <ul>
          {doneTodos.map((todo) => (
            <li class="todo-li" key={todo.id}>
              <p>{todo.title}</p>
              <p>{todo.body}</p>
              <div>
                <button onClick={() => removeCard(todo.id)}>삭제하기</button>
                <button onClick={() => updateIsDone(todo.id)}>취소</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CardBox;
