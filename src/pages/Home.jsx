import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Helmet } from "react-helmet-async";


const Home = () => {

    const categories = useLoaderData()
    
    return (
        <div className="">
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Banner></Banner>
            <Categories categories={categories}></Categories>
        </div>
    );
};

export default Home;