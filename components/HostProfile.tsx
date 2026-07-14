import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BadgeCheck, BriefcaseBusiness, Baby } from "lucide-react";

export function HostProfile() {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-6">Meet your host</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 bg-gray-50 p-8 rounded-3xl">
        {/* Left Card */}
        <Card className="p-6 flex flex-col items-center justify-center text-center shadow-[0_6px_16px_rgba(0,0,0,0.12)] rounded-3xl bg-white border-0">
          <div className="relative mb-2">
            <Avatar className="h-28 w-28">
              <AvatarImage src="https://i.pravatar.cc/150?u=hitesh" className="object-cover" />
              <AvatarFallback>H</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 bg-rose-600 text-white rounded-full p-1.5 border-2 border-white shadow-sm">
              <BadgeCheck className="h-4 w-4" />
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-1">Hitesh</h3>
          <div className="flex items-center gap-1 text-sm font-semibold mb-4 text-gray-500">
            <BadgeCheck className="h-4 w-4" />
            Superhost
          </div>
          
          <div className="flex gap-4 border-t pt-4 w-full">
            <div className="flex-1 text-left border-r">
              <div className="font-extrabold text-lg">182</div>
              <div className="text-[10px] uppercase font-semibold text-gray-500">Reviews</div>
            </div>
            <div className="flex-1 text-left border-r">
              <div className="font-extrabold text-lg flex items-center gap-1">4.53 <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '12px', width: '12px', fill: 'currentcolor' }}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg></div>
              <div className="text-[10px] uppercase font-semibold text-gray-500">Rating</div>
            </div>
            <div className="flex-1 text-left">
              <div className="font-extrabold text-lg">2</div>
              <div className="text-[10px] uppercase font-semibold text-gray-500">Years hosting</div>
            </div>
          </div>
        </Card>

        {/* Right Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-6 space-y-4">
            <div className="flex items-center gap-3">
              <Baby className="h-5 w-5 text-gray-600" />
              <span className="text-gray-800">Born in the 90s</span>
            </div>
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="h-5 w-5 text-gray-600" />
              <span className="text-gray-800">My work: Own multi businesses</span>
            </div>
          </div>

          <div className="mb-6">
            <p className="mb-2 text-gray-800">Response rate: 83%</p>
            <p className="mb-4 text-gray-800">Responds within an hour</p>
            <Button className="bg-gray-900 text-white hover:bg-gray-800 font-semibold px-6 py-6 text-[16px]">
              Message host
            </Button>
          </div>
          
          <div className="flex items-start gap-3 border-t pt-6 text-xs text-gray-500 mt-auto">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: '#E51D53' }}><path d="M28 6H17V3h-2v3H4v2h24V6zM4 10h24v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10zm4 3v9h16v-9H8zm2 2h12v5H10v-5z"></path></svg>
            <p>To help protect your payment, always use Airbnb to send money and communicate with hosts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
