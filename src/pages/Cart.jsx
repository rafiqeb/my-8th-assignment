import {useEffect, useRef, useState } from "react";
import { clearStorage, getToStorage, removeCardList } from "../utility";
import { useLoaderData, useNavigate } from "react-router-dom";

import { FcApproval } from "react-icons/fc";
import { RxCrossCircled } from "react-icons/rx";


const Cart = () => {
    
    const [products, setProducts] = useState([])
    
    const total = products.reduce((ab, item) => ab + item.price ,0)
    const totalPrice = total.toFixed(2)
    
    const navigate = useNavigate()
    const data = useLoaderData()

    useEffect(()=> {
        const item = getToStorage()
        setProducts(item)
    }, [])
    
    
    const handleSort = (products) => {
        const sorted = [...products].sort((a, b) => b.price - a.price)
        setProducts(sorted)
    }

    const handleRemove = (id) => {
        removeCardList(id)
        const item = getToStorage()
        setProducts(item)
    }

    const handleClear = () => {
        clearStorage()
        const item = getToStorage()
        setProducts(item)
    }

    // show modal
    const modalRef = useRef(null)
    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal()
        }
    }

    return (
        <div className="mt-8 mb-8">
            <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Cart List</h2>
                <div className="flex gap-6">
                    <h3 className="text-xl font-bold">Total Price: ${totalPrice}</h3>
                    <button onClick={() => handleSort(products)} className="text-sm font-bold px-4 py-2 bg-blue-600 rounded-full">Sort By Price</button>
                    <button onClick={openModal} className="text-sm font-bold px-4 py-2 bg-blue-600 rounded-full">Purchase</button>

                    {/* modal show */}
                    <dialog ref={modalRef} id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <div className="text-5xl flex justify-center items-center mb-2"><FcApproval /></div>
                            <h3 className="font-bold text-2xl text-center">Payment Succesfully</h3>
                            <p className="py-4 text-center font-bold">Thanks for purchasing: ${totalPrice}</p>
                            <div className="text-center">
                                <form method="dialog">
                                    <button onClick={() => {navigate('/'), handleClear()}} className="px-4 py-1 w-3/5 bg-slate-300 rounded-full text-sm font-bold">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
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

export default Cart;