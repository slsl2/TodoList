import { useState } from "react";
import Header from "./header.jsx";
import InputBox from "./input.jsx";
import CardBox from "./card.jsx";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Header />
      <InputBox setTodos={setTodos} />
      <CardBox todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
