import { handleCreateTodo } from "@/features/todoList";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todoListSlice);
  const dispatch = useDispatch();
  const [inpValu, setinpValu] = useState("");
  console.log(todos);

  function handleAddTodo() {
    dispatch(handleCreateTodo(inpValu));
  }
  return (
    <div>
      {/* <input className="border" type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, i) => {
          return <li key={todo + i}>{todo}</li>;
        })}
      </ul> */}

      <body>
        <div className="w-full h-screen bg-gray-100 pt-8">
          <div className="bg-white p-3 max-w-md mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-bold">ToDo App</h1>
              <div className="mt-4 flex">
                <input
                  onChange={(e) => setinpValu(e.target.value)}
                  className="w-80 border-b-2 border-gray-500 text-black"
                  type="text"
                  placeholder="Enter your task here"
                  value={inpValu}
                />
                <button
                  className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
                  onClick={handleAddTodo}
                >
                  <svg
                    className="h-6 w-6"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <circle cx="12" cy="12" r="9" />{" "}
                    <line x1="9" y1="12" x2="15" y2="12" />{" "}
                    <line x1="12" y1="9" x2="12" y2="15" />
                  </svg>
                  <span>Add</span>
                </button>
              </div>
            </div>
            <div className="mt-8">
              <ul>
                {todos.map((todo, i) => (
                  <li className="p-2 rounded-lg" key={todo + i}>
                    <div className="flex align-middle flex-row justify-between">
                      <div className="p-2">
                        <input
                          type="checkbox"
                          className="h-6 w-6 "
                          value="true"
                          checked
                        />
                      </div>
                      <div className="p-2">
                        <p className="text-lg line-through text-gray-400">
                          {todo}
                        </p>
                      </div>
                      <button className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg">
                        <svg
                          className="h-6 w-6 text-red-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <circle cx="12" cy="12" r="10" />{" "}
                          <line x1="15" y1="9" x2="9" y2="15" />{" "}
                          <line x1="9" y1="9" x2="15" y2="15" />
                        </svg>
                        <span>Remove</span>
                      </button>
                    </div>
                    <hr className="mt-2" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <button className="border-2 border-red-500 p-2 text-red-500">
                Clear Completed Task
              </button>
              <button className="border-2 border-indigo-500 p-2 text-indigo-500 ml-4">
                Reset Todo List
              </button>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default TodoList;
