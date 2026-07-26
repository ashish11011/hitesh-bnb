import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BadgeCheck, BriefcaseBusiness, Baby } from "lucide-react";
import type { RoomDetails } from "@/const/roomDetails";

export function HostProfile({ property }: { property: RoomDetails }) {
  const host = property.host;
  const born = "born" in host ? host.born : "Born in the 90s";
  const work = "work" in host ? host.work : "Own multi businesses";
  const responseRate = "responseRate" in host ? host.responseRate : "97%";
  const responseTime = "responseTime" in host ? host.responseTime : "within an hour";

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-6">Meet your property manager</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:bg-gray-50 md:p-8 rounded-3xl">
        {/* Left Card */}
        <Card className="p-6 flex flex-col items-center justify-center text-center shadow-[0_6px_16px_rgba(0,0,0,0.12)] rounded-3xl bg-white border-0">
          <div className="relative mb-2">
            <Avatar className="h-28 w-28">
              <AvatarImage
                src="https://codeframe-ashish-harshit.s3.ap-south-1.amazonaws.com/hitesh/hitess.jpeg"
                className="object-cover"
              />
              <AvatarFallback>H</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 bg-rose-600 text-white rounded-full p-1.5 border-2 border-white shadow-sm">
              <BadgeCheck className="h-4 w-4" />
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-1">{host.name}</h3>
          <div className="flex items-center gap-1 text-sm font-semibold mb-4 text-gray-500">
            <BadgeCheck className="h-4 w-4" />
            Verified manager
          </div>
          
          <div className="flex gap-4 border-t pt-4 w-full">
            <div className="flex-1 text-left border-r">
              <div className="font-extrabold text-lg">{host.reviews}</div>
              <div className="text-[10px] uppercase font-semibold text-gray-500">Reviews</div>
            </div>
            <div className="flex-1 text-left border-r">
              <div className="font-extrabold text-lg flex items-center gap-1">{host.rating} <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '12px', width: '12px', fill: 'currentcolor' }}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg></div>
              <div className="text-[10px] uppercase font-semibold text-gray-500">Rating</div>
            </div>
            <div className="flex-1 text-left">
              <div className="font-extrabold text-lg">{host.yearsHosting}</div>
              <div className="text-[10px] uppercase font-semibold text-gray-500">Years managing</div>
            </div>
          </div>
        </Card>

        {/* Right Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-6 space-y-4">
            <div className="flex items-center gap-3">
              <Baby className="h-5 w-5 text-gray-600" />
              <span className="text-gray-800">{born}</span>
            </div>
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="h-5 w-5 text-gray-600" />
              <span className="text-gray-800">My work: {work}</span>
            </div>
          </div>

          <div className="mb-6">
            <p className="mb-2 text-gray-800">Response rate: {responseRate}</p>
            <p className="mb-4 text-gray-800">Responds {responseTime}</p>
            <Button className="bg-gray-900 text-white hover:bg-gray-800 font-semibold px-6 py-6 text-[16px]">
              Message manager
            </Button>
          </div>
          
           
        </div>
      </div>
    </div>
  );
}
