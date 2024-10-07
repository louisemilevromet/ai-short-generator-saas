import { chatSession } from "@/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();

    const result = await chatSession.sendMessage(topic);
    console.log(result.response.text());

    return NextResponse.json({ result: JSON.parse(result.response.text()) });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
