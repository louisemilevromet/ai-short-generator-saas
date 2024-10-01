"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Mail, Video, Wand2, Share2 } from "lucide-react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function LandingPage() {
  const { data: session } = useSession();

  console.log(session, "here");
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Video className="h-6 w-6 text-purple-600 dark:text-purple-300" />
          <span className="ml-2 text-2xl font-bold text-gray-800 dark:text-white">
            VideoAI
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-800 dark:text-white">
                  Create AI-Powered Short Videos in Seconds
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
                  Transform your ideas into engaging short-form content with our
                  cutting-edge AI video creation platform.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Get Started</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start your free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-100 dark:bg-gray-800 flex justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-purple-800 dark:text-purple-300">
              How It Works
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-12 items-center justify-center">
              <div className="flex flex-col items-center space-y-2 border border-purple-200 dark:border-purple-700 p-4 rounded-lg bg-white dark:bg-gray-900">
                <Video className="h-12 w-12 mb-2 text-purple-600 dark:text-purple-300" />
                <h3 className="text-xl font-bold text-purple-800 dark:text-purple-300">
                  1. Input Your Content
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Provide text, images, or basic video clips as input for your
                  short-form content.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-purple-200 dark:border-purple-700 p-4 rounded-lg bg-white dark:bg-gray-900">
                <Wand2 className="h-12 w-12 mb-2 text-purple-600 dark:text-purple-300" />
                <h3 className="text-xl font-bold text-purple-800 dark:text-purple-300">
                  2. AI Magic
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Our AI analyzes your input and generates engaging video
                  content optimized for short-form platforms.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-purple-200 dark:border-purple-700 p-4 rounded-lg bg-white dark:bg-gray-900">
                <Share2 className="h-12 w-12 mb-2 text-purple-600 dark:text-purple-300" />
                <h3 className="text-xl font-bold text-purple-800 dark:text-purple-300">
                  3. Share & Engage
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Download your AI-generated video and share it across your
                  favorite social media platforms.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-800 dark:text-purple-300">
                  Get Started Today
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of content creators who are already using our
                  AI-powered video generation platform. Sign up now and create
                  your first video in minutes!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => signIn("github")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Sign up with GitHub
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => signIn("google")}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Sign up with Google
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link
                    className="underline underline-offset-2 hover:text-purple-500 dark:hover:text-purple-300"
                    href="#"
                  >
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-purple-200 dark:border-purple-700">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 VideoAI Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
