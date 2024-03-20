import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("https://reqres.in/api/login", account);
      localStorage.setItem("token", response.data.token);
      window.location = "/products" ; 
    } catch (error) {
      setErrors(["the information is invalid"]);
    }
  }
  function handleChange(e) {
    const input = e.currentTarget;
    const newAccount = { ...account };
    newAccount[input.name] = input.value;
    setAccount(newAccount);
  }
  return (
    <>
      {errors.length >= 1 && (
        <div className="alert alert-danger">
          <ul>
            {errors.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            onChange={handleChange}
            className="form-control"
            type="text"
            id="email"
          />
        </div>

        <div className="mt-5">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            onChange={handleChange}
            name="password"
            className="form-control"
            type="password"
            id="password"
          />
        </div>
        <button className="btn btn-primary mt-5 "> Login </button>
      </form>
    </>
  );
};

export default Login;
