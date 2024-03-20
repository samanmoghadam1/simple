import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      className="d-flex justify-content-center "
      style={{ marginTop: "190px" }}
    >
      <Spinner
        style={{ width: "90px", height: "90px" }}
        animation="border"
        role="status"
      ></Spinner>
      <span className="ml-4" style={{ fontSize: "50px", marginLeft: "50px" }}>
        Loading...
      </span>
    </div>
  );
};

export default Loading;
