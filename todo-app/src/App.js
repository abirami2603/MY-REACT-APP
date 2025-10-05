import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 text-white">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-blue-400 tracking-wide">
            TaskNest
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Organize your day efficiently and stay productive.
          </p>
        </header>

        {/* Input Section */}
        <section className="flex gap-3 mb-8">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="What do you need to do?"
            className="flex-1 bg-gray-800/70 text-white placeholder-gray-400 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold transition-all"
          >
            Add
          </button>
        </section>

        {/* Divider */}
        <hr className="border-gray-700 mb-6" />

        {/* Task List */}
        <section className="space-y-3 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {todos.length === 0 ? (
            <p className="text-center text-gray-500 italic">No tasks yet. Add one above!</p>
          ) : (
            todos.map((todo, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-800/60 hover:bg-gray-700/60 transition-all px-4 py-3 rounded-xl border border-gray-700"
              >
                <span
                  onClick={() => toggleComplete(index)}
                  className={`cursor-pointer text-base ${
                    todo.completed
                      ? "line-through text-gray-500"
                      : "text-gray-200"
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTask(index)}
                  className="text-red-400 hover:text-red-500 font-bold text-lg"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </section>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-gray-400">
          {todos.length > 0 ? (
            <>
              <span className="text-blue-400 font-medium">
                {todos.filter((t) => !t.completed).length}
              </span>{" "}
              task(s) pending
            </>
          ) : (
            <span>Start by adding your first task!</span>
          )}
        </footer>
      </div>
    </div>
  );
}

export default App;
