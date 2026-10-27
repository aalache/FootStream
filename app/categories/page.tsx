'use client';
import { useEffect, useState } from "react"
import Link from "next/link";


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
               
                if(!res.ok){
                    throw new Error('Could not load Categories.')
                }

                const data: Category[] = await res.json();
                setCategories(data);

                if(data.length) setCategoryId(data[0].category_id)

            } catch (error) {
                setError('Could not connect to the IPTV service.');
            }
        }

        loadCategories();
    },[])

  return (
    <main className="mx-auto w-7xl p-10">
        <h1>Categories page</h1>

        <div className="space-y-2">
            {categories?.map((category) =>(
                <div  key={category.category_id} className="rounded-md p-3 border border-gray-400/50 flex items-center justify-between">
                    <div>
                        <h2>{category.category_name}</h2>
                        <p>{category.category_id}</p>
                    </div>
                    <Link href={`/channels/${category.category_id}`} className="p-2 bg-amber-400 rounded-md"> View Channels</Link>
                </div>
            ))}
        </div>
    </main>
  )
}

export default CategoriesPage