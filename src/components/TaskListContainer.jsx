import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import Spinner from "./Spinner";

const taskArray = [
  { id: 1, text: "Comprar leche", completed: false },
  { id: 2, text: "Lavar la ropa", completed: true },
  { id: 3, text: "Hacer ejercicio", completed: false },
  { id: 4, text: "Leer un libro", completed: false },
  { id: 5, text: "Preparar la cena", completed: true },
];

const TaskListContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // SIMULAMOS PETICION DE LA LISTA DE TAREAS DESDE API
  const fetchTasks = () =>
    new Promise((resolve, reject) => {
      if (taskArray.length > 0) {
        setTimeout(() => {
          resolve(taskArray);
        }, 4000);
      } else {
        reject("No se encontraron tareas");
      }
    });

  useEffect(() => {
    const getTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getTasks();
  }, []);

  const handleChange = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card p-4" style={{ width: "22rem" }}>
        <h4 className="text-center mb-3">Checklist</h4>
        <Spinner loading={loading} />
        <TaskList tasks={tasks} onChange={handleChange} />
      </div>
    </div>
  );
};

export default TaskListContainer;
