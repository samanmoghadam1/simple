import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = ()=>{
    const [users , setUsers] = useState([]) ; 
    useEffect(()=>{
        const getUsers = async()=>{
            const response = await axios.get("https://reqres.in/api/users") ;
            const data = response.data.data ; 
            setUsers(data) ;
        }
        getUsers();
    } , [])
    return (
        <div className="row text-center">
            {
                users.map((user , index)=>{
                    return <div key={index} className="col-3 my-5">
                        <img src={user.avatar} alt="" />
                        <Link style={{display : "block"}} to="">{user.first_name} {user.last_name} </Link>
                        <h5>{user.email}</h5> 
                        <div className="row">
                            <button className="btn btn-danger col-3 mx-auto">Delete</button>
                            <button className="btn btn-primary col-3 mx-auto">edit</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
} 

export default Users ;