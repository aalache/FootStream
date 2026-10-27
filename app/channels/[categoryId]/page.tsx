'use client'
import { Suspense, useEffect, useState } from "react";


interface Props {
    params : Promise<{categoryId: string}>;
}

// export default function Page({params} : Props ){
//     return(
//         <Suspense fallback={<p>Loading channels ...</p>}>
//             <ChannelDetails params={params}/>
//         </Suspense>
//     )
// }


export default async function ChannelDetails ({params}: Props){
    const {categoryId} = await params;

    const [channels,setChannels] = useState<Channel[]>([]);
    const [selected,setSelected] = useState<Channel|null>(null);
    const [loading,setLoading] = useState(false);
    const [erro,setError] = useState('');

    useEffect(()=> {
        if(!categoryId) return ;
        
        let cancelled = false;

        async function loadChannels(){
            setLoading(true)

            try {
                const params = new URLSearchParams({
                    type: 'channels',
                    categoryId,
                })

                const res = await fetch(`/api/iptv/?${params}`);
                if(!res.ok) throw new Error('Could not load channels');

                const data = await res.json()
                setChannels(data);
            } catch (error) {
                 setError('Could not load channels.');
            } finally {
                setLoading(false);
            }
        }
    },[categoryId])

  return (
    <main>
        <h1>Channels List for {categoryId}</h1>

        <div>
            {channels.map((channel)=>(
                <div key={channel.stream_id}>
                    <h1>{channel.name}</h1>
                </div>
            ))}
        </div>
    </main>
  )
}

