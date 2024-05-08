import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = () => {
      fetch("http://localhost:5000/todos")
        .then(async function (res) {
          const json = await res.json();
          setTodos(json.todos);
        })
        .catch((error) => {
          console.error("Error fetching todos:", error);
        });
    };
    fetchTodos();

    const intervalId = setInterval(fetchTodos, 10000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
