import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Products from "./pages/products";
import Users from "./pages/users";

const App = (params) => {
    console.log("app is running ...") 
    return (
        <>
            <Navbar /> 
            <Routes>
                <Route path="/home" element={ <Home /> }  />
                <Route path="/products" element={ <Products /> }  />
                <Route path="/users" element={ <Users /> }  />
            </Routes>
        </>
    )
}
export default App ; 