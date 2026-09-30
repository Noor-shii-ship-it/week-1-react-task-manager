import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTask = taskText.trim();

    if (!trimmedTask) {
      setError("Please enter a task.");
      return;
    }

    onAddTask(trimmedTask);
    setTaskText("");
    setError("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
        placeholder="Enter a task"
      />

      <button className="add-button" type="submit">
        Add Task
      </button>

      {error && <p className="task-error">{error}</p>}
    </form>
  );
}

export default TaskForm;
