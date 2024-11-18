import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";


const Root = () => {

    return (
        <div className="max-w-7xl mx-auto">
                <div>
                    <Navbar></Navbar>
                </div>
                <div className="min-h-[calc(100vh-232px)]">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
        </div>
    );
};

export default Root;