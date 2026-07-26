"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] bg-gray-900 rounded-3xl overflow-hidden my-6">
      <Image
        src="https://codeframe-ashish-harshit.s3.ap-south-1.amazonaws.com/hitesh/bnb_banner.jpg"
        alt="Beautiful landscape with a house"
        width={1600}
        height={900}
        priority
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl md:text-6xl   font-semibold text-white mb-6 max-w-4xl tracking-tight leading-tight">
          Find your perfect getaway
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          Discover extraordinary homes with all the amenities you need for an
          unforgettable stay.
        </p>
        <Button
          className="bg-rose-600 hover:bg-rose-700 text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg transition transform hover:scale-105"
          onClick={() => {
            document
              .getElementById("properties")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          View Properties
        </Button>
      </div>
    </div>
  );
}
