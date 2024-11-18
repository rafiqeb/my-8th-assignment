
import { NavLink, Outlet, useNavigate } from "react-router-dom";


const Categories = ({ categories }) => {

    const navigate = useNavigate()

    return (
        <div className="flex justify-between mt-10">
            <div>
                <button className="text-lg font-bold px-4 py-2 bg-blue-700 rounded-full ml-5 mb-3 text-white" onClick={()=> navigate('/')} >All data</button>
                <div className="grid grid-cols-1 gap-4 justify-start items-start">
                    {
                        categories.map(category => (<button 
                            className= ''
                            key={category.id}
                            ><NavLink className={({isActive}) => `text-lg font-bold px-4 py-2 rounded-full ${isActive? 'bg-blue-700 text-white' : ''}`}
                            to={`/category/${category.category}`}>{category.category}</NavLink></button>))
                    }
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Categories;