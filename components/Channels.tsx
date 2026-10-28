"use client";
import { useState,useEffect } from "react";
import Image from "next/image";


interface Props {
    categoryId: string;
}

const Channels = ({categoryId} : Props) => {
    const [channels,setChannels] = useState<Channel[]>([]);
    const [selected,setSelected] = useState<Channel|null>(null);
    const [loading,setLoading] = useState(false);
    const [erro,setError] = useState('');

    useEffect(()=> {
        if(!categoryId) return ;

        const controller = new AbortController()

        async function loadChannels(){
            setLoading(true)

            try {
                const params = new URLSearchParams({
                    type: 'channels',
                    categoryId,
                })

                const res = await fetch(`/api/iptv/?${params.toString()}`,{
                    signal: controller.signal,
                });

                if(!res.ok){
                    throw new Error('Could not load channels');
                }
                    
                const data = await res.json()

                if(!Array.isArray(data)){
                    throw new Error('Invalid Channels response format.');
                }
                
                setChannels(data)
                console.log("channels:",data)
                
            } catch(error) {
                 setError('Could not load channels.');
            } finally {
                setLoading(false);
            }
        }

        loadChannels();

        return () => {
            controller.abort();
        }
    },[categoryId]);

  return (
   <section className="">
        {loading 
            ? 
            <p>Loading channels...</p> 
            :
            <div className="space-y-2">
                {channels.map((channel)=>(
                    <div key={channel.stream_id} className="rounded-md p-2 border border-gray-300/50 flex items-center gap-2">
                        <Image src={String(channel?.stream_icon)} alt="channel icon" width={50} height={50}/>
                        <h1>{channel?.name}</h1>
                    </div>
                ))}
            </div>
        }

        {channels.length === 0 && <p>Opps,No channels available.</p>}

   </section>
  )
}

export default Channels