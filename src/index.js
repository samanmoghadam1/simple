import {createRoot} from "react-dom/client" ; 
import App from "./app"; 
import {BrowserRouter as Router} from "react-router-dom" ;
import 'bootstrap/dist/css/bootstrap.min.css'
const root = (createRoot(document.getElementById("root"))) 

root.render(<Router> <App /> </Router>)