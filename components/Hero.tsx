
import Image from "next/image"

const Hero = () => {
  return (
    <section className="w-full h-screen relative">

        <Image
            src={"/images/bg-8.jpg"}
            alt="hero image"
            fill
            className="object-cover"
        />

        <div className=" w-full h-full absolute inset-0 bg-fs-bg/70 flex flex-col justify-end gap-8 p-10">

            <div className="flex flex-col gap-4 max-w-4xl">
                <p className="uppercase font-medium  tracking-wider">Premium Sports Streaming</p>

                <h1 className="uppercase text-[5rem]  leading-20 font-bold ">
                    Live Football <br />
                    <span className="text-neon-green">Anytime, AnyWhere</span>
                </h1>

                <p className="max-w-lg text-xl font-medium text-slate-300">
                    Watch your favorite football leagues, tournaments and matches in HD quality.
                    No cable. No limits.
                </p>

                <div className="inline-flex items-center gap-3 pt-8">
                    <button className="px-6 py-3 bg-white rounded-full text-black font-semibold inline-flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                        </svg>
                        <span>Browse Channels</span>
                    </button>
                </div>
            </div>

            {/* features  */}
            <div className="inline-flex items-center  pt-8 gap-4">
                <div className="flex items-center justify-start gap-2 flex-1/4 border-r-2 border-gray-400/20">   
                    <div className="p-2.5 rounded-xl  bg-neon-green/10 text-neon-green/90">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-white font-semibold text-lg">HD Quality</h2>
                        <p className="text-slate-300  text-sm">Crystal clear streams</p>
                    </div>
                </div>

                <div className="flex items-center justify-start gap-2 flex-1/4 border-r-2 border-gray-400/20">   
                    <div className="p-2.5 rounded-xl  bg-neon-green/10 text-neon-green/90">
                        <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                            <path d="M12 8c-1.1 0-2 .9-2 2 0 .85.53 1.57 1.28 1.86l-.53 10.13h2.5l-.53-10.13C13.47 11.57 14 10.85 14 10c0-1.1-.9-2-2-2m-2.83-.83L7.76 5.75A5.97 5.97 0 0 0 6 9.99c0 1.6.62 3.11 1.76 4.25l1.41-1.41A3.96 3.96 0 0 1 8 10c0-1.07.42-2.07 1.17-2.82Zm7.07-1.41-1.41 1.41C15.59 7.93 16 8.93 16 10s-.42 2.07-1.17 2.83l1.41 1.41C17.37 13.11 18 11.6 18 10s-.62-3.11-1.76-4.24"></path><path d="M6.34 4.34 4.93 2.92C3.04 4.81 2 7.32 2 9.99s1.04 5.18 2.93 7.07l1.41-1.41c-1.51-1.51-2.35-3.52-2.35-5.66s.83-4.15 2.34-5.65Zm11.32 0c3.12 3.12 3.12 8.2 0 11.31l1.41 1.41c3.9-3.9 3.9-10.24 0-14.14l-1.41 1.41Z"></path>
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-white font-semibold text-lg">Live Matches</h2>
                        <p className="text-slate-300  text-sm">Real-time action</p>
                    </div>
                </div>
                
                <div className="flex items-center justify-start gap-2 flex-1/4 border-r-2 border-gray-400/20">   
                    <div className="p-2.5 rounded-xl  bg-neon-green/10 text-neon-green/90">
                        <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
                            fill={"currentColor"} viewBox={"0 0 24 24"}>
                            {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                            <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m6.23 15H16l-1.25 2.5c-.86.32-1.78.5-2.75.5s-1.89-.18-2.75-.5L8 17H5.77a8 8 0 0 1-1.63-3.53L6 10.99 4.78 8.56a8.02 8.02 0 0 1 4.79-4.19L12 5.99l2.43-1.62c2.11.68 3.84 2.21 4.79 4.19L18 11l1.86 2.48A8.1 8.1 0 0 1 18.24 17Z"/><path d="m8.5 11 1.5 4h4l1.5-4L12 8.5z"/>
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-white font-semibold text-lg">Multiple Leagues</h2>
                        <p className="text-slate-300  text-sm">Premier League, La liga, UCL & more</p>
                    </div>
                </div>

                <div className="flex items-center justify-start gap-2 flex-1/4 ">   
                    <div className="p-2.5 rounded-xl  bg-neon-green/10 text-neon-green/90">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-white font-semibold text-lg">24/7 access</h2>
                        <p className="text-slate-300 text-sm">Crystal clear streams</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Hero