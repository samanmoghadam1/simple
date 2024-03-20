const Logout = () => {
  localStorage.removeItem("token");
  window.location = "/products";
};

export default Logout;
