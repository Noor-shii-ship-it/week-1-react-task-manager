function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <div className="task-item">
      <span
        className="task-text"
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          opacity: task.completed ? 0.6 : 1,
        }}
      >
        {task.text}
      </span>

      <div className="task-actions">
        <button
          className="complete-button"
          onClick={() => onToggleTask(task.id)}
        >
          {task.completed ? "Completed" : "Complete"}
        </button>

        <button
          className="delete-button"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
