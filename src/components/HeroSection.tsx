import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import { PlaceholdersAndVanishInputDemo } from "./PlaceHolder";

export default function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col">
      <div className="flex flex-col items-center justify-center w-full pt-20 sm:pt-32 md:pt-40 px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-white via-gray-200 to-gray-400 text-xl sm:text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight drop-shadow-lg">
          Understand Any Topic Instantly with AI
        </h2>
        <p className="w-full text-xs sm:text-sm md:text-lg text-gray-200 text-center drop-shadow-md px-4">
          Enter any topic and get a simple, clear explanation powered by AI.<br />
          Built with Next.js and modern UI components.
        </p>
        <div className="-mt-32 sm:-mt-40 md:-mt-48 w-full max-w-2xl px-4">
          <PlaceholdersAndVanishInputDemo />
        </div>
      </div>
    </BackgroundLines>
  );
}
