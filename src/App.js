import "./App.css";
import { useEffect, useState } from "react";
import TodoApi from "./apis/todo.api";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await TodoApi.getTodo();
      console.log(res);
      setTodoList(res);
    })();
  }, []);

  const onAddTodo = async (e) => {
    e.preventDefault();
    const { name, age, hobby } = e.target;
    console.log(name.value, age.value, hobby.value);
    await TodoApi.addTodo({
      name: name.value,
      age: age.value,
      hobby: hobby.value,
    });
  };

  const onRecallTodo = async () => {
    const res = await TodoApi.getTodo();
    setTodoList(res);
    console.log(res);
  };

  return (
    <>
      {todoList.map((todo, index) => (
        <div key={index}>
          <p>
            {todo.name}
            {todo.age}
            {todo.hobby}x
          </p>
        </div>
      ))}
      <form onSubmit={onAddTodo}>
        이름<input name="name"></input>
        나이<input name="age"></input>
        취미<input name="hobby"></input>
        <button>추가하기</button>
      </form>

      <button onClick={onRecallTodo}>재호출</button>
    </>
  );
}

export default App;
