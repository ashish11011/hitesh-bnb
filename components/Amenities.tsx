import { Button } from "@/components/ui/button";
import {
  Wifi,
  Car,
  Wind,
  Snowflake,
  MonitorPlay,
  Waves,
  CigaretteOff,
  Flame,
} from "lucide-react";

export function Amenities() {
  return (
    <div className="py-6">
      <h3 className="mb-6 text-xl font-semibold">What this place offers</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-6">
        <div className="flex items-center gap-4 text-gray-700">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}><path d="M25 4v16a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm-2 1H9v15a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"></path></svg>
          <span>Kitchen</span>
        </div>
        <div className="flex items-center gap-4 text-gray-700">
          <Wifi className="h-6 w-6 stroke-[1.5]" />
          <span>Wifi</span>
        </div>
        <div className="flex items-center gap-4 text-gray-700">
          <MonitorPlay className="h-6 w-6 stroke-[1.5]" />
          <span>Dedicated workspace</span>
        </div>
        <div className="flex items-center gap-4 text-gray-700">
          <Car className="h-6 w-6 stroke-[1.5]" />
          <span>Free parking on premises</span>
        </div>
        <div className="flex items-center gap-4 text-gray-700">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}><path d="M22.5 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zM9.5 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zM28 15a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM4 15a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm12-4a6 6 0 0 1 5.92 5.03l.06.49L22 26.5a1.5 1.5 0 0 1-2.92.51l-.05-.28-1.07-5.71-3.92.01-1.07 5.7a1.5 1.5 0 1 1-2.97-.48l.05-.27 2-10 .18-1c.54-2.6 2.76-4.57 5.42-4.96z"></path></svg>
          <span>Pets allowed</span>
        </div>
        <div className="flex items-center gap-4 text-gray-700">
          <Snowflake className="h-6 w-6 stroke-[1.5]" />
          <span>Air conditioning</span>
        </div>
        <div className="flex items-center gap-4 text-gray-700">
          <Wind className="h-6 w-6 stroke-[1.5]" />
          <span>Hairdryer</span>
        </div>
        <div className="flex items-center gap-4 text-gray-700">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}><path d="M22 6a4 4 0 0 1 4 4v1h3v2h-3v8a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4v-8H3v-2h3v-1a4 4 0 0 1 4-4h12zM10 8a2 2 0 0 0-2 2v1h16v-1a2 2 0 0 0-2-2H10zm12 5H10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8zm-6 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
          <span>Exterior security cameras on property</span>
        </div>
        <div className="flex items-center gap-4 text-gray-400 line-through">
          <CigaretteOff className="h-6 w-6 stroke-[1.5]" />
          <span>Carbon monoxide alarm</span>
        </div>
        <div className="flex items-center gap-4 text-gray-400 line-through">
          <Flame className="h-6 w-6 stroke-[1.5]" />
          <span>Smoke alarm</span>
        </div>
      </div>
      
      <Button variant="outline" className="font-semibold text-[16px] py-6 px-6">
        Show all 27 amenities
      </Button>
    </div>
  );
}
