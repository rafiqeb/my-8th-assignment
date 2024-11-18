import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./Product";




const AllProducts = () => {
    const {category} = useParams()
    const data = useLoaderData()
    const [products, setProducts] = useState([])
    useEffect(()=> {
        if(category){
            const filterProduct = [...data].filter(product => product.category === category)
            setProducts(filterProduct)
        }
        else{
            setProducts(data)
        }
    }, [category, data])
    
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;