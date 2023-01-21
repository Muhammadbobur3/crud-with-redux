import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { createTask, getTasks } from "../actions/tasksAction";
import { useState } from "react";

export const Dashboard = () => {
  const [number, setNumber] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();
  const { loading, tasks } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const onFormSubmit = () => {
    dispatch(createTask({ number, title, description, status }));
  };
  useEffect(() => {
    dispatch(getTasks());
  }, []);
  const tasksData = tasks?.map((task) => <li>{task.title}</li>);
  return (
    <>
      <h3>Dashboard page</h3>
      <ul>{tasksData}</ul>

      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          name="title"
        />
        <input
          type="text"
          name="number"
          onChange={(event) => setNumber(event.target.value)}
        />
        <input
          type="text"
          name="description"
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type="text"
          name="status"
          onChange={(event) => setStatus(event.target.value)}
        />
        <button type="submit">Qo'shish</button>
      </form>
    </>
  );
};

export default Dashboard;
