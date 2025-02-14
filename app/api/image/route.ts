import { OpenAI } from "openai";
import Groq from "groq-sdk";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
  baseURL: process.env.BASE_URL_FOR_OPEN_AI,
});
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const body = await req.json();
    const { prompt, resolution = "512x512" } = body;
    if (!userId) return NextResponse.json("Unauthorized", { status: 401 });

    if (!prompt) {
      return NextResponse.json("Prompt is required and must be a string.", {
        status: 400,
      });
    }

    if (!resolution) {
      return NextResponse.json("Resolution is required and must be a number.", {
        status: 400,
      });
    }
    const response = await openai.images.generate({
      model: "flux-dev",
      prompt: prompt,
      size: resolution,
    });
    console.log(response.data);
    return NextResponse.json(response.data[0].url);
  } catch (error) {
    console.log("Image error", error);
    return NextResponse.json("Interal Server error", { status: 500 });
  }
}
