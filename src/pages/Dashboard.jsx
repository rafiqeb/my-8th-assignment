
import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {


    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div
                className=" min-h-80 bg-[#9538E2] lg:rounded-xl">
                <div className="hero-content text-neutral-content">
                    <div className="max-w-2xl text-center">
                        <h1 className="mb-5 text-3xl font-bold">Dashboard</h1>
                        <p className="mb-5">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <div className="flex gap-8 justify-center items-center">
                            <button className="px-7 py-1 rounded-full text-blue-700 font-bold bg-white"><NavLink to="cart">Cart</NavLink></button>
                            <NavLink to='wish'><button className="px-4 py-1 rounded-full text-blue-700 font-bold bg-white">Wishlist</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;