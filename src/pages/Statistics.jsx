import { Helmet } from "react-helmet-async";



const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Statistics Page</title>
            </Helmet>
            <div
                className="hero min-h-80 bg-[#9538E2] lg:rounded-xl">
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-3xl font-bold">Statistics</h1>
                        <p className="mb-5">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8 mb-8 space-y-6">
                <h3 className="text-xl font-bold">Statistics</h3>
                <h1 className="text-4xl font-bold text-center text-blue-700">No Data to Show Statistics</h1>
            </div>
        </div>
    );
};

export default Statistics;