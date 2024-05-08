import React from "react";

function Todos({ todos }) {
  const onClick = (_id) => {
    fetch("http://localhost:5000/completed", {
      method: "PUT",
      body: JSON.stringify({
        _id: _id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      const json = await res.json();
      alert(json.msg);
    });
  };
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={() => onClick(todo._id)}>
              {todo.completed ? "Done!" : "Mark as Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
