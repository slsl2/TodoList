import React from "react";
import { useState } from "react";

function InputBox({ setTodos }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const isDone = false;

  const handleInputTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleInputBody = (event) => {
    setBody(event.target.value);
  };

  const addCard = (e) => {
    e.preventDefault();
    if (!title || !body) {
      alert("모두 입력해주세요");
      return;
    }
    setTodos((todos) => [
      ...todos,
      { id: Date.now(), title: title, body: body, isDone: isDone },
    ]);
    setTitle("");
    setBody("");
  };

  return (
    <>
      <div id="input-containter">
        <form id="todo-form" onSubmit={addCard}>
          <div id="input-line">
            <span>제목</span>
            <input
              type="text"
              onChange={handleInputTitle}
              value={title}
            ></input>
            <span>내용</span>
            <input type="text" onChange={handleInputBody} value={body}></input>
          </div>
          <button type="submit">추가하기</button>
        </form>
      </div>
    </>
  );
}

export default InputBox;
