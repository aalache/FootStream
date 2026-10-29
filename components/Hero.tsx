
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-white font-semibold text-lg">Live Matches</h2>
                        <p className="text-slate-300  text-sm">Real-time action</p>
                    </div>
                </div>
                
                <div className="flex items-center justify-start gap-2 flex-1/4 border-r-2 border-gray-400/20">   
                    <div className="p-2.5 rounded-xl  bg-neon-green/10 text-neon-green/90">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
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
                            <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
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