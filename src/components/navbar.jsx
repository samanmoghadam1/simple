import { Link } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");
  return (
    <nav className="p-5">
      <Link
        style={{ fontSize: "24px", color: "black", textDecoration: "none" }}
        className="mx-5 "
        to="/"
      >
        {" "}
        Home{" "}
      </Link>
      <Link
        style={{ fontSize: "24px", color: "black", textDecoration: "none" }}
        className="mx-5 "
        to="/products"
      >
        {" "}
        Products{" "}
      </Link>
      <Link
        style={{ fontSize: "24px", color: "black", textDecoration: "none" }}
        className="mx-5 "
        to="/users"
      >
        {" "}
        Users{" "}
      </Link>
      {token !== null ? (
        <>
          <Link
            style={{ fontSize: "24px", color: "black", textDecoration: "none" }}
            className="mx-5 "
            to="/dashboard"
          >
            {" "}
            Dashboard{" "}
          </Link>
          <Link
            style={{ fontSize: "24px", color: "black", textDecoration: "none" }}
            className="mx-5 "
            to="/logout"
          >
            {" "}
            logout{" "}
          </Link>
        </>
      ) : (
        <>
          <Link
            style={{ fontSize: "24px", color: "black", textDecoration: "none" }}
            className="mx-5 "
            to="/login"
          >
            {" "}
            Login{" "}
          </Link>
          <Link
            style={{ fontSize: "24px", color: "black", textDecoration: "none" }}
            className="mx-5 "
            to="/register"
          >
            {" "}
            Register{" "}
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
