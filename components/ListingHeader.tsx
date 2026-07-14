import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function ListingHeader() {
  return (
    <div className="flex flex-col gap-6 py-6">
      <div className="flex justify-between pb-6">
        <div>
          <h2 className="text-2xl font-semibold">Entire home in Jaipur, India</h2>
          <p className="mt-1 text-[16px] text-gray-800">
            14 guests · 5 bedrooms · 4 beds · 6 bathrooms
          </p>
          <div className="mt-1 flex items-center gap-1 font-semibold">
            <Star className="h-4 w-4 fill-current" />
            <span>4.29</span>
            <span className="mx-1">·</span>
            <span className="underline">7 reviews</span>
          </div>
        </div>
      </div>
      
      <Separator />
      
      <div className="flex items-center gap-4 py-2">
        <Avatar className="h-12 w-12 border">
          <AvatarImage src="https://i.pravatar.cc/150?u=hitesh" alt="Hitesh" />
          <AvatarFallback>H</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-[16px]">Hosted by Hitesh</h3>
          <p className="text-sm text-muted-foreground">2 years hosting</p>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-6 py-2">
        <div className="flex gap-4">
          <div className="mt-1">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}><path d="M26 2a1 1 0 0 1 .99.88L27 3v26a1 1 0 0 1-1.99.12L25 29v-5H7v5a1 1 0 0 1-1.99.12L5 29V3a1 1 0 0 1 1.99-.12L7 3v5h18V3a1 1 0 0 1 1-1zm-1 8H7v11h18V10zm-3 2v7h-2v-7h2z"></path></svg>
          </div>
          <div>
            <h4 className="font-semibold">Self check-in</h4>
            <p className="text-muted-foreground">You can check in with the building staff.</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="mt-1">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}><path d="M22.5 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zM9.5 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zM28 15a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM4 15a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm12-4a6 6 0 0 1 5.92 5.03l.06.49L22 26.5a1.5 1.5 0 0 1-2.92.51l-.05-.28-1.07-5.71-3.92.01-1.07 5.7a1.5 1.5 0 1 1-2.97-.48l.05-.27 2-10 .18-1c.54-2.6 2.76-4.57 5.42-4.96z"></path></svg>
          </div>
          <div>
            <h4 className="font-semibold">Furry friends welcome</h4>
            <p className="text-muted-foreground">Bring your pets along for the stay.</p>
          </div>
        </div>
      </div>
      
      <Separator />

      <div className="py-2">
        <p className="mb-4 text-gray-700 leading-relaxed">
          Spacious 5BHK private villa in Jaipur, ideal for families, tourist groups, wedding guests, and friends. The property hosts up to 14 guests with 5 bedrooms, 6 bathrooms, AC, Wi-Fi, kitchen access, free parking, and a common living area. Centrally located near major attractions, markets, railway station, bus stand, and airport. Guests get the entire place privately. Pets are welcome, and support is available during the stay.
        </p>
        <h4 className="font-semibold mb-1">The space</h4>
        <p className="mb-4 text-gray-700 leading-relaxed">
          This is a private 5BHK villa designed for large group stays in Jaipur. The property has 5...
        </p>
        <Button variant="secondary" className="font-semibold">Show more</Button>
      </div>
      
      <Separator />
      
      <div className="py-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Where you&apos;ll sleep</h3>
          <div className="flex gap-2">
            <span className="text-sm mr-2 mt-1">1 / 2</span>
            <button className="border rounded-full p-1 hover:shadow-md transition bg-gray-50 text-gray-400">
               <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '4', overflow: 'visible' }}><g fill="none"><path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path></g></svg>
            </button>
            <button className="border rounded-full p-1 hover:shadow-md transition">
               <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '4', overflow: 'visible' }}><g fill="none"><path d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path></g></svg>
            </button>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
          <div className="min-w-[250px] snap-start">
             <img src="https://images.unsplash.com/photo-1600607687931-cebf1036f6d6?q=80&w=2070&auto=format&fit=crop" className="rounded-xl w-full h-40 object-cover mb-3" alt="Bedroom 1" />
             <h4 className="font-semibold">Bedroom 1</h4>
             <p className="text-sm text-gray-500">1 king bed</p>
          </div>
          <div className="min-w-[250px] snap-start">
             <img src="https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=2070&auto=format&fit=crop" className="rounded-xl w-full h-40 object-cover mb-3" alt="Bedroom 2" />
             <h4 className="font-semibold">Bedroom 2</h4>
             <p className="text-sm text-gray-500">1 king bed</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
