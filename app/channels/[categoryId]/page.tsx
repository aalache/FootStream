
import Channels from "@/components/Channels";
import { Suspense } from "react";


interface Props {
    params : Promise<{categoryId: string}>;
}

export default function Page({params} : Props ){
    return(
        <Suspense fallback={<p>Loading channels ...</p>}>
            <Child params={params}/>
        </Suspense>
    )
}


 async function Child ({params}: Props){
    const {categoryId} = await params;

  return (
    <main className="w-full p-10 space-y-10">
        <h1>Channels List for {categoryId}</h1>

        <Channels categoryId={categoryId}/>
    </main>
  )
}

