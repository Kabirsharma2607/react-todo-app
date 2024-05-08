import React, { useState } from "react";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Title"
        onChange={(e) => {
          const value = e.target.value;
          console.log(e.target);
          setTitle(value);
        }}
      />
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Description"
        onChange={(e) => {
          const value = e.target.value;
          console.log(e.target);
          setDesc(value);
        }}
      />
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          fetch("http://localhost:5000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: desc,
            }),
            headers: {
              "Content-Type": "application/json", // Corrected key
            },
          }).then(async (res) => {
            const json = await res.json();
            alert("Todo Added");
          });
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}

export default CreateTodo;
/**
 * Or use Export function directly
 *
 */
