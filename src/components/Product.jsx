import { Link } from "react-router-dom";


const Product = ({ product }) => {
    
    const { name, image, id, category, price } = product;
    return (
        <div>
            <div className="card bg-base-100 w-[360px] shadow-xl">
                <figure>
                    <img className="h-[260px] rounded-xl"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}$</p>
                    <div className="card-actions">
                        <Link to={`/details/${id}`}><button className="px-4 py-2 rounded-full border border-blue-700 text-[#9538E2]">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;