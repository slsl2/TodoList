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
      <div id="cards-container">
        <div id="cards-working">
          <h2>Working🚴🏻‍♀️✍🏻</h2>
          <ul class="todo-ul">
            {workingTodos.map((todo) => (
              <li class="todo-li working-li" key={todo.id}>
                <div>
                  <p class="todo-title">{todo.title}</p>
                  <p class="todo-body">{todo.body}</p>
                </div>
                <div class="buttons">
                  <button
                    class="card-btn btn-delete"
                    onClick={() => removeCard(todo.id)}
                  >
                    삭제하기
                  </button>
                  <button
                    class="card-btn btn-to-done"
                    onClick={() => updateIsDone(todo.id)}
                  >
                    완료
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div id="cards-done">
          <h2>Done✨🎉</h2>
          <ul class="todo-ul">
            {doneTodos.map((todo) => (
              <li class="todo-li done-li" key={todo.id}>
                <p class="todo-title">{todo.title}</p>
                <p class="todo-body">{todo.body}</p>
                <div class="buttons">
                  <button
                    class="card-btn btn-delete"
                    onClick={() => removeCard(todo.id)}
                  >
                    삭제하기
                  </button>
                  <button
                    class="card-btn btn-to-working"
                    onClick={() => updateIsDone(todo.id)}
                  >
                    취소
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CardBox;
