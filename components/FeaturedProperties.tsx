import Link from "next/link";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { roomDetails } from "@/const/roomDetails";

export function FeaturedProperties() {
  return (
    <div id="properties" className="py-16">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Our Properties</h2>
          <p className="text-gray-600">Explore our exclusive collection of homes</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {roomDetails.map((prop, index) => (
          <Link href={`/properties/${prop.slug}`} key={prop.slug} className="group cursor-pointer">
            <Card className="border-0 py-0 shadow-none bg-transparent">
              <div className="relative aspect-square overflow-hidden rounded-t-xl">
                <Image
                  src={prop.bannerImages[0]} 
                  alt={prop.propertyTitle}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full transition group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full text-xs font-semibold shadow-md">
                  {index === 0 ? "Guest favourite" : "New"}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 rounded-full hover:bg-gray-100/50"
                  aria-label={`Save ${prop.propertyTitle}`}
                >
                  <Heart className="h-6 w-6 fill-black/50 text-white stroke-2" />
                </Button>
              </div>
              
              <div className="flex justify-between items-start p-4">
                <div>
                  <h3 className="font-semibold text-[15px]">{prop.propertyTitle}</h3>
                  <p className="text-gray-500 text-[15px]">{prop.location}</p>
                  <p className="text-gray-500 text-[15px]">Managed by {prop.host.name}</p>
                  <p className="mt-1 text-[15px] text-gray-800">
                    {prop.stats.guests} guests · {prop.stats.bedrooms} bedrooms
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[15px]">
                  <Star className="h-3 w-3 fill-current" />
                  <span>{prop.rating}</span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
