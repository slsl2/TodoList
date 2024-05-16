import { useState } from "react";
import InputBox from "./input.jsx";
import CardBox from "./card.jsx";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <div>
        <InputBox setTodos={setTodos} />
        <CardBox todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
