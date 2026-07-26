import Image from "next/image";
import type { RoomDetails } from "@/const/roomDetails";

export function ImageGallery({ property }: { property: RoomDetails }) {
  const images = property.bannerImages;
  const galleryImages = [...images, ...images].slice(0, 5);

  return (
    <div className="relative mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between pb-4">
        <h1 className="text-xl font-semibold sm:text-3xl">{property.propertyTitle}</h1>
      </div>

      <div className="grid h-[300px] gap-2 sm:h-[400px] md:h-[500px] grid-cols-1 md:grid-cols-4 md:grid-rows-2 rounded-xl overflow-hidden relative group">
        <div className="relative col-span-1 md:col-span-2 md:row-span-2 h-full w-full">
          <Image
            src={galleryImages[0]}
            alt={`${property.propertyTitle} main photo`}
            width={1000}
            height={1000}
            priority
            className="h-full w-full object-cover cursor-pointer hover:opacity-90 transition"
          />
        </div>
        <div className="hidden md:block relative h-full w-full">
          <Image
            src={galleryImages[1]}
            alt={`${property.propertyTitle} photo 2`}
            width={500}
            height={500}
            className="h-full w-full object-cover cursor-pointer hover:opacity-90 transition"
          />
        </div>
        <div className="hidden md:block relative h-full w-full">
          <Image
            src={galleryImages[2]}
            alt={`${property.propertyTitle} photo 3`}
            width={500}
            height={500}
            className="h-full w-full object-cover cursor-pointer hover:opacity-90 transition"
          />
        </div>
        <div className="hidden md:block relative h-full w-full">
          <Image
            src={galleryImages[3]}
            alt={`${property.propertyTitle} photo 4`}
            width={500}
            height={500}
            className="h-full w-full object-cover cursor-pointer hover:opacity-90 transition"
          />
        </div>
        <div className="hidden md:block relative h-full w-full">
          <Image
            src={galleryImages[4]}
            alt={`${property.propertyTitle} photo 5`}
            width={500}
            height={500}
            className="h-full w-full object-cover cursor-pointer hover:opacity-90 transition"
          />
        </div>
      </div>
    </div>
  );
}
