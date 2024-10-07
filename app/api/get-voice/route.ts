import TextToSpeech from "@google-cloud/text-to-speech";
import fs from "fs";
import util from "util";
import { NextResponse } from "next/server";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/configs/Firebase";

const client = new TextToSpeech.TextToSpeechClient({
  apiKey: process.env.GOOGLE_API_KEY,
});

export async function POST(req: Request) {
  const { text, id } = await req.json();
  const storageRef = ref(storage, `ai-short-generator-files/${id}.mp3`);

  // Construct the request
  const request = {
    input: { text: text },
    // Select the language and SSML voice gender (optional)
    voice: { languageCode: "en-US", ssmlGender: "FEMALE" },
    // select the type of audio encoding
    audioConfig: { audioEncoding: "MP3" },
  };

  // Performs the text-to-speech request
  const [response] = (await client.synthesizeSpeech(request as any)) as any;
  // Write the binary audio content to a local file
  const audioBuffer = Buffer.from(response.audioContent as any, "binary");

  await uploadBytes(storageRef, audioBuffer, { contentType: "audio/mp3" });

  const downloadUrl = await getDownloadURL(storageRef);

  return NextResponse.json({ Result: downloadUrl } as any);
}
