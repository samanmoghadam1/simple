import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users");
        const data = response.data.data;
        setUsers(data);
        setTimeout(() => {
            setIsLoading(false);
        } , 1000);
      } catch (error) {
        console.log(error);
        setErrors(["internet connection issue"]);
        setTimeout(() => {
            setIsLoading(false);
        } , 1000);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : errors.length >= 1 ? (
        <ul className="alert alert-danger">
          {errors.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      ) : (
        <div className="row text-center">
          {users.map((user, index) => {
            return (
              <div key={index} className="col-4 my-5">
                <img src={user.avatar} alt="" />
                <Link style={{ display: "block" }} to="">
                  {user.first_name} {user.last_name}{" "}
                </Link>
                <h5>{user.email}</h5>
                <div className="row">
                  <button className="btn btn-danger col-3 mx-auto">
                    Delete
                  </button>
                  <button className="btn btn-primary col-3 mx-auto">
                    edit
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Users;
