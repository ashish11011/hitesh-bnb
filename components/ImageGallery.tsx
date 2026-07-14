import Image from "next/image";
import { Grid2X2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ImageGallery() {
  return (
    <div className="relative mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between pb-4">
        <h1 className="text-2xl font-semibold sm:text-3xl">5BHK Villa for Large Groups | Central Jaipur</h1>
        <div className="flex items-center gap-4 text-sm font-medium underline">
          <button className="flex items-center gap-1 hover:bg-gray-100 p-2 rounded-md transition">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '2', overflow: 'visible' }}><g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9M16 3v23V3zM6 13l9.3-9.3a1 1 0 0 1 1.4 0L26 13"></path></g></svg>
            Share
          </button>
          <button className="flex items-center gap-1 hover:bg-gray-100 p-2 rounded-md transition">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '2', overflow: 'visible' }}><path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-6.94c-3.19.04-5.9 1.83-7 4.54-1.1-2.71-3.81-4.5-7-4.54a6.98 6.98 0 0 0-7 6.94C2 18 9 23.27 16 28z"></path></svg>
            Save
          </button>
        </div>
      </div>

      <div className="grid h-[300px] gap-2 sm:h-[400px] md:h-[500px] grid-cols-1 md:grid-cols-4 md:grid-rows-2 rounded-xl overflow-hidden relative group">
        <div className="relative col-span-1 md:col-span-2 md:row-span-2 h-full w-full">
          {/* Main large image */}
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
            alt="Villa living room"
            className="h-full w-full object-cover cursor-pointer hover:opacity-90 transition"
          />
        </div>
        <div className="hidden md:block relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1600607687931-cebf1036f6d6?q=80&w=2070&auto=format&fit=crop"
            alt="Bedroom"
            className="h-full w-full object-cover cursor-pointer hover:opacity-90 transition"
          />
        </div>
        <div className="hidden md:block relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=2070&auto=format&fit=crop"
            alt="Living area"
            className="h-full w-full object-cover cursor-pointer hover:opacity-90 transition"
          />
        </div>
        <div className="hidden md:block relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Bathroom"
            className="h-full w-full object-cover cursor-pointer hover:opacity-90 transition"
          />
        </div>
        <div className="hidden md:block relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop"
            alt="Balcony"
            className="h-full w-full object-cover cursor-pointer hover:opacity-90 transition"
          />
        </div>

        <Button 
          variant="secondary" 
          className="absolute bottom-4 right-4 flex items-center gap-2 border border-black/20 bg-white/90 hover:bg-white text-sm font-semibold shadow-sm"
        >
          <Grid2X2 className="h-4 w-4" />
          Show all photos
        </Button>
      </div>
    </div>
  );
}
