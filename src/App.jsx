import { useState } from "react";
import Layout from "./components/Layout.jsx";
import Header from "./components/Header.jsx";
import InputBox from "./components/TodoForm.jsx";
import CardBox from "./components/TodoContainer.jsx";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <main>
        <Layout>
          <Header />
          <InputBox setTodos={setTodos} />
          <CardBox todos={todos} setTodos={setTodos} />
        </Layout>
      </main>
    </>
  );
}

export default App;
