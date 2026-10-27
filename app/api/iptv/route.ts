import { xtreamRequest } from "@/lib/xtream";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request : NextRequest){

    try {
        const type = request.nextUrl.searchParams.get('type')
        console.log(type);
        if(type === 'categories'){
            const data = await xtreamRequest({action:'get_live_categories'});
            return NextResponse.json(data);
        }

        if(type === 'channels'){
            const categoryId = request.nextUrl.searchParams.get('categoryId')
            
            if(!categoryId){
                return NextResponse.json({
                    error:'categoryId is required',
                    status: 400,
                })
            }

            const data = await xtreamRequest({action:'get_live_streams',categoryId:categoryId});
            return NextResponse.json(data);

        }

        return NextResponse.json({
            error: 'Invalid request type',
            status: 400,
        })
    } catch (error) {
        
        return NextResponse.json({
            error: 'Unable to load IPTV data',
            status: 502,
        })
    }
}