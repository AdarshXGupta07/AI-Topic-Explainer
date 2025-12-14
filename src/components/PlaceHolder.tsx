"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { useRouter } from 'next/navigation';

export function PlaceholdersAndVanishInputDemo() {
  const router = useRouter();
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Get input value from form
    const form = e.currentTarget;
    const inputElement = form.querySelector('input') as HTMLInputElement;
    const query = inputElement?.value?.trim();
    
    console.log('Form submitted with query:', query);
    
    if (query) {
      // Redirect to results page with the query
      router.push(`/results?query=${encodeURIComponent(query)}`);
    } else {
      console.log('No query provided');
    }
  };
  
  return (
    <div className="h-[30rem] sm:h-[35rem] md:h-[40rem] flex flex-col justify-center items-center px-4">
      <h2 className="mb-6 sm:mb-10 md:mb-20 text-lg sm:text-xl md:text-5xl text-center dark:text-white text-black">
        Ask Aceternity UI Anything
      </h2>
      <div className="w-full mx-auto">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onSubmit={handleSubmit}
          name="input"
        />
      </div>
    </div>
  );
}
