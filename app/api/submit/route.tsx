import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) { 
    return NextResponse.json({ 
        receivedName: (await request.formData()).get("name") ?? "NONE",
    });
}