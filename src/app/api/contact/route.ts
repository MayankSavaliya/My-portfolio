import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
      const mongoUri = process.env.MONGO_URI;
      if (!mongoUri) {
        throw new Error("MONGO_URI environment variable is not set");
      }
      await mongoose.connect(mongoUri);
      console.log('MongoDB Connected');
  } catch (error) {
      console.log("error occured", error); 
  }
}

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Simple Mongoose schema
const contactSchema = new mongoose.Schema({}, { strict: false, timestamps: true });
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);


export async function POST(request: NextRequest) {
  try {
    // Connect to MongoDB
    await connectDB();
    
    const body = await request.json();
    
    // Validate the request data
    const result = contactFormSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        {
          message: "Invalid request data",
          errors: result.error.issues,
        },
        { status: 400 }
      );
    }

    // Save to MongoDB with additional fields
    const contactData = {
      ...result.data,
      status: 'new'
    };
    
    const newContact = new Contact(contactData);
    const savedContact = await newContact.save();
    
    console.log("Contact form submission saved:", savedContact._id);
    
    return NextResponse.json(
      {
        message: "Message saved successfully",
        id: savedContact._id.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        message: "Failed to save message",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
} 