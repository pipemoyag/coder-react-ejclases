const Task = ({ task, onChange }) => {
  const classSpan = task.completed
    ? "text-muted text-decoration-line-through"
    : "";
  return (
    <li className="list-group-item d-flex align-items-center">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onChange(task.id)}
        className="form-check-input me-2"
      />
      <span className={classSpan}>{task.text}</span>
    </li>
  );
};

export default Task;
