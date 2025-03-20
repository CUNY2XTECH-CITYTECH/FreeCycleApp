import { NextRequest, NextResponse } from 'next/server';
import { getUser } from '@/db';

export async function GET(request: NextRequest) {

    const retrieveUrl = await new URL(request.url);

    const userId = retrieveUrl.searchParams.get("user_id");

    const fetchedUser = await getUser(userId!)

    return NextResponse.json(fetchedUser, { status: 200})
    
}