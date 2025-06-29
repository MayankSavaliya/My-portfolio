import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET(request: NextRequest) {
  try {
    // Path to your resume file in the public directory
    const resumePath = join(process.cwd(), "public", "resume.pdf");
    
    // Read the file
    const resumeBuffer = readFileSync(resumePath);
    
    // Return the file with appropriate headers
    return new NextResponse(resumeBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=Mayank_Savaliya_Resume.pdf",
        "Content-Length": resumeBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Error serving resume:", error);
    return NextResponse.json(
      {
        message: "Resume not found",
      },
      { status: 404 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
} 