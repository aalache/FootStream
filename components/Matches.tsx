import Image from 'next/image'
import MatcheCard from './MatcheCard'

const Matches = () => {
  return (
    <section className='w-full h-screen space-y-8 p-10'>

        {/* live matches */}
        <div className='space-y-5'>
            <h1 className='text-xl capitalize font-semibold'>Live </h1>
            <div className=' flex items-center gap-2 overflow-x-auto  scroll-auto scrollbar-none'>
                <MatcheCard live={true}/>
                <MatcheCard live={true}/>
                <MatcheCard live={true}/>
                <MatcheCard live={true}/>
                <MatcheCard live={true}/>
            </div>
        </div>

        {/* upcoming matches */}
        <div className='space-y-5'>
            <h1 className='text-xl capitalize font-semibold'>Upcoming Matches</h1>
            <div className='flex items-center gap-2 overflow-x-auto  scroll-auto scrollbar-none'>
                <MatcheCard live={false}/>
                <MatcheCard live={false}/>
                <MatcheCard live={false}/>
                <MatcheCard live={false}/>
                <MatcheCard live={false}/>
            </div>
        </div>

        {/* popular leagues */}
        <div className='space-y-5'>
            <h1 className='text-xl capitalize font-semibold'>Popular Leagues</h1>
            <div className='flex items-center gap-3'>
                <div className="w-70 px-8 py-5 border-2 border-slate-400/10 rounded-lg flex flex-col items-center justify-center gap-8">
                    <Image 
                        src={"https://assets.football-logos.cc/logos/england/512x512/english-premier-league.b597f797.png"}
                        loading="lazy" 
                        alt="Match Image" width={80} height={80} 
                    />
                </div>

                <div className="w-70 px-8 py-5 border-2 border-slate-400/10 rounded-lg flex flex-col items-center justify-center gap-8"> 
                    <Image 
                        src={"https://assets.football-logos.cc/logos/spain/512x512/la-liga.0ea0b0c5.png"}
                        loading="lazy" 
                        alt="Match Image" width={80} height={80} 
                    />
                </div>

                <div className="w-70 px-8 py-5 border-2 border-slate-400/10 rounded-lg flex flex-col items-center justify-center gap-8"> 
                    <Image 
                        src={"https://assets.football-logos.cc/logos/tournaments/512x512/uefa-champions-league--no-text-white.8a19633c.png"}
                        loading="lazy" 
                        alt="Match Image" width={80} height={80} 
                    />
                </div>

                <div className="w-70 px-8 py-5 border-2 border-slate-400/10 rounded-lg flex flex-col items-center justify-center gap-8"> 
                    <Image 
                        src={"https://assets.football-logos.cc/logos/italy/512x512/serie-a.1289b16a.png"}
                        loading="lazy" 
                        alt="Match Image" width={80} height={80} 
                    />
                </div>

                <div className="w-70 px-8 py-5 border-2 border-slate-400/10 rounded-lg flex flex-col items-center justify-center gap-8"> 
                    <Image 
                        src={"https://assets.football-logos.cc/logos/germany/512x512/bundesliga.24d9c6f9.png"}
                        loading="lazy" 
                        alt="Match Image" width={80} height={80} 
                    />
                </div>

                <div className="w-70 px-8 py-5 border-2 border-slate-400/10 rounded-lg flex flex-col items-center justify-center gap-8"> 
                    <Image 
                        src={"https://assets.football-logos.cc/logos/france/512x512/ligue-1--white.4072671a.png"}
                        loading="lazy" 
                        alt="Match Image" width={80} height={80} 
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Matches