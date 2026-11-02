import Image from 'next/image'

interface MatcheCardProps {
    live: boolean;
}

const MatcheCard = ({ live }: MatcheCardProps) => {
  return (
    <div  className='relative min-w-xs max-w-md px-8 py-5 border-2 border-slate-400/10 rounded-lg flex flex-col items-center justify-center gap-8 hover:bg-neon-green/5 transition-all duration-200 ease-in-out'>
      <div className='flex items-center justify-center gap-8'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <Image 
                    src={"https://assets.football-logos.cc/logos/spain/512x512/barcelona.9ee7ed85.png"}
                    loading="lazy" 
                    alt="Match Image" width={50} height={50} 
                />
                <span className='text-sm font-medium '>Barcelona</span>
            </div>

            <span className='font-semibold text-slate-400 text-lg'>VS</span>

            <div className='flex flex-col items-center justify-center gap-2'>
                <Image
                    src={"https://assets.football-logos.cc/logos/spain/512x512/real-madrid.c97a476c.png"}
                    loading="lazy"
                    alt="Match Image" width={50} height={50}
                />
                <span className='text-sm font-medium '>Real Madrid</span>
            </div>
      </div>


      <div className='flex items-center w-full justify-between gap-4'>
        <Image
            src={"https://assets.football-logos.cc/logos/spain/512x512/la-liga.0ea0b0c5.png"}
            loading="eager"
            alt="Match Image" width={30} height={30}
        />
        <span className='text-sm text-slate-400'>12:00 PM</span>
        {live && <span className='text-sm text-neon-green'> 72'</span>}
      </div>


      {live && (
        <div className='absolute top-1 right-1  flex items-center justify-between gap-1.5 rounded-full px-3 py-1 bg-neon-green/10 text-sm  text-neon-green'> 
            <div className='h-2 w-2 rounded-full bg-neon-green animate-pulse'/>
            <span>Live</span>
        </div>
      )}

    </div>
  )
}

export default MatcheCard