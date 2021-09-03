import { useState } from "react";

function List({ todoList, editTodo }) {
  const tryFunc = (item) => {
    const filter = todoList.filter((toDo) => toDo.todoName === item.todoName);
    if (filter) {
      filter[0].done = !filter[0].done;
    }
    editTodo([...todoList]);
  };

  const [allState, setAllState] = useState(true);
  const [activeState, setActiveState] = useState(false);
  const [completedState, setCompletedState] = useState(false);
  const activeFilter = todoList.filter((todo) => todo.done === false);
  const completedFilter = todoList.filter((todo) => todo.done === true);
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {allState &&
          todoList.map((item, i) => (
            <li key={i} className={item.done ? "completed" : null}>
              <div className="view">
                <input
                  name="done"
                  className="toggle"
                  type="checkbox"
                  onClick={() => tryFunc(item)}
                />
                <label>{item.todoName}</label>
                <button className="destroy" />
              </div>
            </li>
          ))}
        {activeState &&
          activeFilter.map((item, i) => (
            <li key={i} className={item.done ? "completed" : null}>
              <div className="view">
                <input
                  name="done"
                  className="toggle"
                  type="checkbox"
                  onClick={() => tryFunc(item)}
                />
                <label>{item.todoName}</label>
                <button className="destroy" />
              </div>
            </li>
          ))}

        {completedState &&
          completedFilter.map((item, i) => (
            <li key={i} className={item.done ? "completed" : null}>
              <div className="view">
                <input
                  name="done"
                  className="toggle"
                  type="checkbox"
                  onClick={() => tryFunc(item)}
                />
                <label>{item.todoName}</label>
                <button className="destroy" />
              </div>
            </li>
          ))}
      </ul>

      <footer className="footer">
        <span className="todo-count">
          <strong> {todoList.length}</strong> items left
        </span>
        <ul className="filters">
          <li>
            <span
              onClick={() => {
                setAllState(true);
                setActiveState(false);
                setCompletedState(false);
              }}
            >
              All
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                setAllState(false);
                setActiveState(true);
                setCompletedState(false);
              }}
            >
              Active
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                setAllState(false);
                setActiveState(false);
                setCompletedState(true);
              }}
            >
              Completed
            </span>
          </li>
        </ul>

        <button
          className="clear-completed"
          onClick={() => {
            editTodo([]);
          }}
        >
          Clear completed
        </button>
      </footer>
    </section>
  );
}

export default List;
// () => editTodo([...todoList,{ ...item, done: !item.done }])
