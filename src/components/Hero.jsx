const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row mt-36 pl-10 items-center">
            <div className="text-white md:w-1/2 p-10">
                <p className=" uppercase font-thin">
                    So, you want to travel to
                </p>
                <h1 className="text-8xl uppercase my-6">
                    Space
                </h1>
                <p className="">
                    Let&#39;s face it; if you want to go to space,
                    you might as well genuinely go to outer space and not hover kind of on the edge of it.
                    Well sit back,and relax because we&#39;ll give you a truly out of this world experience!
                </p>
            </div>
            <div className=" w-1/2 md:pl-80">
                <div className="uppercase bg-white rounded-full h-44 w-44 flex justify-center items-center hover:border-blue-500 hover:border-8">
                   <a href={`/destination`}>Explore</a>
                </div>
            </div>

        </section>
    )
}
export default Hero