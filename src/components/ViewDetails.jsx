import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStorage, setWishList } from "../utility";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Helmet } from "react-helmet-async";





const ViewDetails = () => {
    
    const data = useLoaderData()
    const { id } = useParams()
    const [products, setProducts] = useState({})

    useEffect(() => {
        const singleProduct = data.find(product => product.id == id)
        setProducts(singleProduct)
    }, [data, id])

    const { name, image, id: currentId, description, specification, rating, category, price } = products;


    const handleWishList = (products) => {
        setWishList(products)
    }

    // trail function
    const handleAdd = (products) => {
        addToStorage(products)
    }

    return (
        <div className="relative">
            <Helmet>
                <title>View Details</title>
            </Helmet>
            <div
                className=" min-h-80 bg-[#9538E2] lg:rounded-xl">
                <div className="hero-content text-neutral-content">
                    <div className="max-w-2xl text-center">
                        <h1 className="mb-5 text-2xl font-bold">Product Details</h1>
                        <p className="mb-5">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>
                </div>
            </div>
            <div className='max-w-[1062px] mx-auto flex gap-6 bg-white border-2 p-6 absolute -mt-40 ml-40 rounded-xl'>
                <div className="bg-slate-200 w-[400px] flex justify-center items-center">
                    <img src={image} alt="" />
                </div>
                <div className="space-y-3">
                    <h2 className="text-lg font-bold">{name}</h2>
                    <p>Price: ${price}</p>
                    <button className="text-sm px-3 py-1 rounded-full border border-yellow-700 text-yellow-700">In stock</button>
                    <p>{description}</p>
                    <ul>
                        <h4 className="text-lg font-bold">Specification:</h4>
                        {
                            specification && specification.map(item => (<li className="list-disc ml-4" key={item}>{item}</li>))
                        }
                    </ul>
                    <h4 className="text-lg font-bold">Rating:</h4>
                    <div className="flex gap-6">
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </div>
                        <p>{rating}</p>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={()=> handleAdd(products)} className="px-4 rounded-full flex justify-center items-center gap-2 text-white bg-blue-700">Add to card <span><IoCartOutline /></span></button>
                        <button onClick={() => handleWishList(products)} className="border p-2 rounded-full text-white bg-blue-700"><FaRegHeart /></button>
                    </div>
                </div>
            </div>
            <div className="mt-[400px] border"></div>
        </div>
    );
};

export default ViewDetails;