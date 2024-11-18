import bannerimg from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='relative'>
            <div
                className="hero min-h-screen bg-[#9538E2]">
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-4xl">
                        <h1 className="mb-5 text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="mb-5">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="px-6 py-3 rounded-full bg-white text-blue-700 font-bold">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className='max-w-[800px] mx-auto absolute lg:ml-60 lg:-mt-40'>
                <img className='lg:rounded-xl border-2 p-6 bg-white/25' src={bannerimg} alt="" />
            </div>
            <h2 className="text-3xl font-bold text-center mt-[300px] md:mt-[560px] lg:mt-[460px] text-[#9538E2]">Explore Cutting-Edge Gadgets</h2>
        </div>
    );
};

export default Banner;