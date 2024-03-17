import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Products =  () => {
    const [products , setProducts] = useState([]) ;
    useEffect(()=>{
        const getProducts = async ()=>{
            const response = await axios.get('https://fakestoreapi.com/products') ;
            setProducts(response.data)
        }
        getProducts() ;
    } , [])
    function handleAddition (title , limit) {
        if (title.length >= limit) {
            let newTitle = "" ; 
            for (const i of title) {
                if(newTitle.length >= limit) {
                    break
                }else {
                    newTitle += i ;
                }
            }
            return `${newTitle} ...`
        }else {
            return title ; 
        }
    }

function handleStars(number){
    const newNumber = Number(number) ; 
    let newArray = [] ;
    for (let i = 0 ; i <= newNumber ;i++ ) {
        newArray.push(<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg> )
    } 
    console.log(newArray)
    return newArray ; 
}
    return (
            <div className="row">
                {
                    products.map((product , index)=>{
                        return (
                            <div className="col-3 text-center my-5" key={index}>
                                <img width={100} height={100} src={product.image} alt="" />
                                <Link style={{color : "black" , textDecoration : "none" , fontSize : "21px" , display : "block"}}>{handleAddition(product.title , 26)}</Link>
                                <h6 className="mt-3">{handleAddition(product.description , 40)}</h6>
                                <h3>{ `$ ${product.price}  ` }</h3>
                                <h1>
                                {handleStars(product.rating.rate)}
                                </h1>
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default Products ;