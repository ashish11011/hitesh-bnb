import Link from "next/link";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

export function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      location: "Jaipur, India",
      host: "Hosted by Hitesh",
      dates: "Aug 12 - 17",
      price: "₹15,000",
      rating: "4.29",
      tags: ["Guest favourite"]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      location: "Udaipur, India",
      host: "Hosted by Hitesh",
      dates: "Sep 4 - 9",
      price: "₹18,500",
      rating: "4.85",
      tags: []
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      location: "Jodhpur, India",
      host: "Hosted by Hitesh",
      dates: "Oct 10 - 15",
      price: "₹12,000",
      rating: "4.70",
      tags: ["New"]
    }
  ];

  return (
    <div id="properties" className="py-16">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Our Properties</h2>
          <p className="text-gray-600">Explore our exclusive collection of homes</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {properties.map((prop) => (
          <Link href={`/properties/${prop.id}`} key={prop.id} className="group cursor-pointer">
            <Card className="border-0 shadow-none bg-transparent">
              <div className="relative aspect-square overflow-hidden rounded-xl mb-4">
                <img 
                  src={prop.image} 
                  alt={prop.location}
                  className="object-cover w-full h-full transition group-hover:scale-105"
                />
                {prop.tags.map(tag => (
                  <div key={tag} className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full text-xs font-semibold shadow-md">
                    {tag}
                  </div>
                ))}
                <button className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100/50 transition">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'rgba(0, 0, 0, 0.5)', height: '24px', width: '24px', stroke: 'white', strokeWidth: '2', overflow: 'visible' }}><path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-6.94c-3.19.04-5.9 1.83-7 4.54-1.1-2.71-3.81-4.5-7-4.54a6.98 6.98 0 0 0-7 6.94C2 18 9 23.27 16 28z"></path></svg>
                </button>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-[15px]">{prop.location}</h3>
                  <p className="text-gray-500 text-[15px]">{prop.host}</p>
                  <p className="text-gray-500 text-[15px]">{prop.dates}</p>
                  <p className="mt-1">
                    <span className="font-semibold">{prop.price}</span> <span className="text-gray-800 text-[15px]">night</span>
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
