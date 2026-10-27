import { NextPage } from "next";

const baseUrl = process.env.XTREAM_BASE_URL;
const username = process.env.XTREAM_USERNAME;
const password = process.env.XTREAM_PASSWORD;

interface Params {
    action: string;
    categoryId?: string;
}

export async function xtreamRequest({action , categoryId}: Params) {
    
    if(!baseUrl || !username || !password){
        throw new Error('Xtream server configuration is missing.')
    }

    const url = new URL('/player_api.php',baseUrl)
    url.searchParams.set('username',username)
    url.searchParams.set('password',password)
    url.searchParams.set('action',action)

    if(categoryId){
        url.searchParams.set('category_id',categoryId)
    }

    const response = await fetch(url,{
        cache:'no-store',
        signal: AbortSignal.timeout(15000),
    });

    if(!response.ok){
        throw new Error(`Xtream API returned ${response.status}`)
    }

    return response.json();
}