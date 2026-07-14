"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Flag } from "lucide-react";

export function BookingWidget() {
  return (
    <div className="sticky top-28 z-10 w-full lg:max-w-[400px]">
      <Card className="p-6 shadow-xl border border-gray-200 rounded-xl">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-1">Add dates for prices</h3>
        </div>

        <div className="mb-4 rounded-xl border border-gray-400 overflow-hidden">
          <div className="flex border-b border-gray-400">
            <div className="flex-1 p-3 border-r border-gray-400">
              <label className="text-[10px] font-extrabold uppercase text-gray-800">Check-in</label>
              <Input variant="ghost" placeholder="Add date" className="p-0 h-auto border-0 focus-visible:ring-0 rounded-none shadow-none text-sm" />
            </div>
            <div className="flex-1 p-3">
              <label className="text-[10px] font-extrabold uppercase text-gray-800">Checkout</label>
              <Input variant="ghost" placeholder="Add date" className="p-0 h-auto border-0 focus-visible:ring-0 rounded-none shadow-none text-sm" />
            </div>
          </div>
          <div className="p-3">
            <label className="text-[10px] font-extrabold uppercase text-gray-800">Guests</label>
            <select className="w-full text-sm outline-none bg-transparent">
              <option>1 guest</option>
              <option>2 guests</option>
              <option>3 guests</option>
            </select>
          </div>
        </div>

        <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white rounded-lg py-6 text-lg font-semibold">
          Check availability
        </Button>
      </Card>
      
      <div className="mt-6 flex justify-center">
        <button className="flex items-center gap-2 text-sm text-gray-500 underline hover:text-gray-800 transition font-medium">
          <Flag className="h-4 w-4" />
          Report this listing
        </button>
      </div>
    </div>
  );
}
