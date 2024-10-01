"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileVideo } from "lucide-react";
import { Loading } from "@/app/components/Loading";

export default function CreateAIVideo() {
  const [contentType, setContentType] = useState("");
  const [videoStyle, setVideoStyle] = useState("");
  const [duration, setDuration] = useState("");
  const [customPrompt, setCustomPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const videoStyles = [
    {
      value: "realistic",
      label: "Realistic",
      image: "/realistic.png",
    },
    {
      value: "cartoons",
      label: "Cartoons",
      image: "/cartoons.png",
    },
    {
      value: "comic",
      label: "Comic",
      image: "/comic.png",
    },
    {
      value: "watercolor",
      label: "Watercolor",
      image: "/watercolor.png",
    },
    {
      value: "gta",
      label: "GTA",
      image: "/gta.png",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    getVideoScript();
  };

  const getVideoScript = async () => {
    setLoading(true);
    const response = await fetch("/api/get-video-script", {
      method: "POST",
      body: JSON.stringify({
        topic: `Write a srcipt to generate a ${duration} seconds long video that is ${videoStyle} style and is about ${
          contentType === "custom" ? customPrompt : contentType
        } along with AI generated images for each scene. Give me the result in json format`,
      }),
    });
    const data = await response.json();
    console.log(data);
    setLoading(false);
  };

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-800 dark:text-purple-300 flex items-center">
            <FileVideo className="mr-2" />
            Create AI Short Video
          </CardTitle>
          <CardDescription>
            Choose your video settings and create your AI-generated short video.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="content-type">Content Type</Label>
              <Select onValueChange={setContentType} value={contentType}>
                <SelectTrigger id="content-type" className="w-full">
                  <SelectValue placeholder="Select content type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="random-story">Random Story</SelectItem>
                  <SelectItem value="scary-story">Scary Story</SelectItem>
                  <SelectItem value="historical-facts">
                    Historical Facts
                  </SelectItem>
                  <SelectItem value="bedtime-story">Bedtime Story</SelectItem>
                  <SelectItem value="motivational-story">
                    Motivational Story
                  </SelectItem>
                  <SelectItem value="fun-facts-story">
                    Fun Facts Story
                  </SelectItem>
                  <SelectItem value="custom-story">Custom Prompt</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {contentType === "custom" && (
              <div className="space-y-2">
                <Label htmlFor="custom-prompt">Custom Prompt</Label>
                <Textarea
                  id="custom-prompt"
                  placeholder="Enter your custom prompt here"
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label>Video Style</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {videoStyles.map((style) => (
                  <div key={style.value} className="flex flex-col items-center">
                    <Button
                      type="button"
                      variant="outline"
                      className={`w-full h-auto aspect-square p-2 ${
                        videoStyle === style.value
                          ? "ring-2 ring-purple-600"
                          : ""
                      }`}
                      onClick={() => setVideoStyle(style.value)}
                    >
                      <img
                        src={style.image}
                        alt={style.label}
                        className="w-full h-full object-cover rounded"
                      />
                    </Button>
                    <span className="mt-1 text-sm text-purple-800 dark:text-purple-300">
                      {style.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Duration</Label>
              <RadioGroup
                onValueChange={setDuration}
                value={duration}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="30" id="duration-30" />
                  <Label htmlFor="duration-30">30 seconds</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="60" id="duration-60" />
                  <Label htmlFor="duration-60">60 seconds</Label>
                </div>
              </RadioGroup>
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              Generate Video
            </Button>
          </form>
        </CardContent>
      </Card>
      <Loading state={loading} />
    </>
  );
}
