"use client";

import Link from "next/link";
import { Video } from "lucide-react";

export default function Nav() {
  return (
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
  );
}
