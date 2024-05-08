require("dotenv").config();
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
const port = 5000;
console.log(process.env.URL);
app.use(express.json());

app.get("/todos", async (req, res) => {
  const response = await todo.find();
  console.log(response);
  res.json({ todos: response });
});

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent wrong input",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  console.log(req.body);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent wrong inputs",
    });
    return;
  }
  await todo.updateOne({ _id: req.body._id }, { completed: true });
  //res.send("Todo updated successfully");
  res.json({
    msg: "Marked as completed",
  });
});

app.listen(port, (err) => {
  console.log(`App is listening on port ${port}`);
});
