'use client';
import { useEffect, useState } from "react"
import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";
import ChannelCard from "@/components/ChannelCard";


const CategoriesPage = () => {

    const [categories,setCategories] = useState<Category[]>([]);
    const [categoryId,setCategoryId] = useState('');
    const [channels,setChannels] = useState<Channel[]>([]);
    const [selected,setSelected] = useState<Channel|null>(null);
    const [loading,setLoading] = useState(false);
    const [erro,setError] = useState('');

    useEffect(()=> {
        async function loadCategories(){
            try {
                const res = await fetch('/api/iptv?type=categories');
                

                if (!res.ok) {
                    throw new Error('Could not load categories.');
                }

                const data: Category[] = await res.json();

                if (!Array.isArray(data)) {
                    throw new Error('Invalid categories response format.');
                }

                setCategories(data);
                setCategoryId(data[0]?.category_id || '');

            } catch (error) {
                setError('Could not connect to the IPTV service.');
            }
        }

        loadCategories();
    },[])

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

    <main className="relative h-screen overflow-y-scroll scrollbar-none px-12 w-full grid grid-cols-10">

        {/* Categories Sidebar */}
        <div className="h-screen sticky inset-0 overflow-y-scroll scrollbar-none col-span-3 pt-20 pb-5  pr-5 border-r-[2.5px] border-slate-800/10 space-y-5">
            <h1 className="text-xl font-bold">Categories</h1>
            <div className="space-y-2">
                {categories?.map((category) =>(
                    <CategoryCard 
                        key={category.category_id} 
                        name={category.category_name} 
                        category_id={category.category_id} 
                        isSelected={category.category_id === categoryId}
                        setCategoryId={setCategoryId} 
                    />
                ))}
            </div>
        </div>

        {/* Channels List */}
        <div className="col-span-7 pt-20 pb-8 pl-12 space-y-5 ">
            <h1 className="text-xl font-bold">Channels</h1>

            <div className="space-y-2">

                {/* <h1>{categoryId || 'Select a category'}</h1> */}
                
                {loading 
                    ? 
                    <div>
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-neon-green mx-auto"></div>
                        <p className="text-sm text-neon-green text-center w-ful p-3 ">Loading channels...</p>
                    </div>
                    :
                    <div className="space-y-2">
                        {channels.map((channel)=>(
                            <ChannelCard
                                key={channel.stream_id}
                                stream_id={channel.stream_id}
                                name={channel.name}
                                stream_icon={String(channel.stream_icon)}
                            />
                        ))}
                    </div>
                }
            </div>
        </div>
         
    </main>
  )
}

export default CategoriesPage