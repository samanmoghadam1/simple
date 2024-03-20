import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "saman",
    lastName: "moghadam",
    email: "moghadamsaman269@gmail.com",
    id: 1,
  });
  return (
    <div className="text-center border p-5">
      <h3>
        {" "}
        user : {user.firstName} {user.lastName}{" "}
      </h3>
      <h6>{user.email}</h6>
      <button
        className="btn btn-danger"
        onClick={() => {
          navigate("/logout");
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Dashboard;
