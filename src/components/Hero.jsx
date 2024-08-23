const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row mt-36 pl-10 items-center">
            <div className="text-white w-1/2 p-10">
                <p className=" uppercase font-thin">
                    So, you want to travel to
                </p>
                <p className="text-7xl uppercase my-6">
                    Space
                </p>
                <p className="">
                     Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! 
                </p>
            </div>
            <div className=" w-1/2 pl-80">
                <div className="uppercase bg-white rounded-full h-44 w-44 flex justify-center items-center">
                     Explore
                </div>
            </div>

        </section>
    )
}
export default Hero