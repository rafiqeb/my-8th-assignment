import { Helmet } from "react-helmet-async";


const Thanks = () => {
    return (
        <div>
            <Helmet>
                <title>Massage Page</title>
            </Helmet>
            <div
                className="hero min-h-80 bg-[#9538E2] lg:rounded-xl">
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-3xl font-bold">Thanks</h1>
                        <p className="mb-5">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8 mb-8 flex flex-col justify-center items-center text-xl font-bold text-blue-700 gap-3">
                <h2>Thank you! Hope to see you again.</h2>
                <h2>We are always here for you. Feel free to reach out for any support.</h2>
                <h2>Your experience is our top priority.</h2>
                <h2>Take care! Let us know if there’s anything else we can do for you.</h2>
                <h2>We hope you’re satisfied with our service. Don’t hesitate to contact us for any future needs.</h2>
                <h2>Thank you once again for your valuable time and trust.</h2>
            </div>
        </div>
    );
};

export default Thanks;