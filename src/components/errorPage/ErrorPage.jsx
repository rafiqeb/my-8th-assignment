import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-4xl font-bold">Oops!! This page is not found</h2>
            <p>It seems the page you're looking for doesn't exist.</p>
            <button onClick={() => navigate('/')} className="px-4 py-2 font-bold rounded-full bg-blue-700 text-white">Go Back Home</button>
        </div>
    );
};

export default ErrorPage;