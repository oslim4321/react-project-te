import { handleCreateTodo } from "@/features/todoList";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todoListSlice);
  const dispatch = useDispatch();
  console.log(todos);

  function handleAddTodo() {
    dispatch(handleCreateTodo());
  }
  return (
    <div>
      <input className="border" type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, i) => {
          return <li key={todo + i}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
