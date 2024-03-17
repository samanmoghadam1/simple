import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render(){
        return (<nav className='p-5'>
            <Link  style={{fontSize : "24px" , color : "black" , textDecoration : 'none'}} className='mx-5 ' to="/home"> Home </Link>
            <Link  style={{fontSize : "24px" , color : "black" , textDecoration : 'none'}} className='mx-5 ' to="/products"> Products </Link>
            <Link  style={{fontSize : "24px" , color : "black" , textDecoration : 'none'}} className='mx-5 ' to="/users"> Users </Link>
            <Link  style={{fontSize : "24px" , color : "black" , textDecoration : 'none'}} className='mx-5 ' to="/dashboard"> Dashboard </Link> 
            
        </nav>)
    }
}