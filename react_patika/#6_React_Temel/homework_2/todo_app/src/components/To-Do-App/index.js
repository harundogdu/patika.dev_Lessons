import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";


function ToDoApp() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    console.log(todo);
  }, [todo]);

  return (
    <section className="todoapp">
      <Form todo={todo} addToDo={setTodo} />
      <List todoList={todo} editTodo={setTodo} />
    </section>
  );
}

export default ToDoApp;
