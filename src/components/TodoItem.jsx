const TodoItem = ({ todo, removeCard, updateIsDone, isWorking }) => {
  return (
    <>
      <li
        className={`todo-li ${isWorking ? "working-li" : "done-li"}`}
        key={todo.id}
      >
        {" "}
        <div>
          <p className="todo-title">{todo.title}</p>
          <p className="todo-body">{todo.body}</p>
        </div>
        <div className="buttons">
          <button
            class="card-btn btn-delete"
            onClick={() => removeCard(todo.id)}
          >
            삭제하기
          </button>
          <button
            className={`card-btn ${
              isWorking ? "btn-to-done" : "btn-to-working"
            }`}
            onClick={() => updateIsDone(todo.id)}
          >
            {isWorking ? "완료" : "취소"}
          </button>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
