import Task from "./Task";

const TaskList = ({ tasks, onChange }) => (
  <ul className="list-group">
    {tasks.map((task) => (
      <Task key={task.id} task={task} onChange={onChange} />
    ))}
  </ul>
);

export default TaskList;
