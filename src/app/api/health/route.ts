import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { 
      status: "ok", 
      timestamp: new Date().toISOString(),
      message: "Portfolio API is running"
    },
    { status: 200 }
  );
} 