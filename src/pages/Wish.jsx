import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishList, removeWish } from "../utility";
import { RxCrossCircled } from "react-icons/rx";

const Wish = () => {
    const [products, setProducts] = useState([])


    const data = useLoaderData()
    
    useEffect(()=> {
        const item = getWishList()
        setProducts(item)
    }, [])


    const handleRemove = (id) => {
        removeWish(id)
        const item = getWishList()
        setProducts(item)
    }

    return (
        <div className="mt-8 mb-8">
            <h2 className="text-3xl font-bold">Wish list</h2>
            <div className="">
                {
                    products.map(product => (<div key={product.id}>
                        <div className="flex justify-between items-center border-2 rounded-xl px-6 py-2 mt-6 bg-slate-200">
                            <div className="flex justify-start items-center gap-8">
                                <img className="w-[300px] rounded-xl" src={product.image} alt="" />
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">{product.name}</h3>
                                    <p>{product.description}</p>
                                    <p className="font-bold">Price: ${product.price}</p>
                                </div>
                            </div>
                            <button onClick={()=> handleRemove(product.id)} className="text-3xl"><RxCrossCircled /></button>
                        </div>
                    </div>))
                }
            </div>
        </div>
    );
};

export default Wish;