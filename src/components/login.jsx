import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/authAction";

export const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = () => {
    dispatch(loginUser({username, password}))
  };
  return (
    <>
      <h3>Login page</h3>
      <input type="text" onChange={handleUsernameChange} name="username" />
      <input type="password" onChange={handlePasswordChange} name="password" />
      <button onClick={onSubmit}>Submit</button>
    </>
  );
};

export default Login;
