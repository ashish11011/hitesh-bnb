import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import type { RoomDetails } from "@/const/roomDetails";

export function ListingHeader({ property }: { property: RoomDetails }) {
  const sections = "sections" in property ? property.sections : undefined;

  return (
    <div className="flex flex-col gap-6 py-6">
      <div className="flex justify-between pb-6">
        <div>
          <h2 className="text-xl font-semibold">{property.listingType}</h2>
          <p className="mt-1 text-base text-gray-800">
            {property.stats.guests} guests · {property.stats.bedrooms} bedrooms
            · {property.stats.beds} beds · {property.stats.bathrooms} bathrooms
          </p>
          <div className="mt-2 flex items-center gap-1 font-semibold">
            <Star className="h-4 w-4 fill-current" />
            <span>{property.rating}</span> 
          </div>
        </div>
      </div>

      <Separator />

      <div className="flex items-center gap-4 py-2">
        <Avatar className="h-12 w-12 border">
          <AvatarImage
            src="https://codeframe-ashish-harshit.s3.ap-south-1.amazonaws.com/hitesh/hitess.jpeg"
            alt="Hitesh"
          />
          <AvatarFallback>H</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-[16px]">
            Managed by {property.host.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {property.host.yearsHosting} years managing
          </p>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-6 py-2">
        {property.highlights.map((highlight) => (
          <div className="flex gap-4" key={highlight.title}>
            <div className="mt-1">
              <Star className="h-6 w-6 stroke-[1.5]" />
            </div>
            <div>
              <h4 className="font-semibold">{highlight.title}</h4>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Separator />

      <div className="py-2 text-sm">
        <p className="mb-4 text-gray-700 leading-relaxed">{property.summary}</p>
        {sections ? (
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-1">The space</h4>
              <p className="whitespace-pre-line text-gray-700 leading-relaxed">
                {sections.space}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Guest access</h4>
              <p className="whitespace-pre-line text-gray-700 leading-relaxed">
                {sections.guestAccess}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Other things to note</h4>
              <p className="whitespace-pre-line text-gray-700 leading-relaxed">
                {sections.otherThingsToNote}
              </p>
            </div>
          </div>
        ) : null}
        {/* <Button variant="secondary" className="font-semibold">Show more</Button> */}
      </div>

      <Separator />
      <div>
        {property.completeImages.length > 0 && (
          <div>
            {property.completeImages.map(({ images, name, descirption }, index) => (
              <div key={index} className="relative w-full mb-12">
                <div className="sticky top-20 bg-white z-10 py-3">
                  <h3 className="font-semibold text-lg mb-1">
                  {name}
                </h3>
                <p className="text-sm text-muted-foreground">{descirption}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    {images.map((image, index) => (
                      <div key={index} className="relative w-auto max-h-96 h-full">
                        <Image
                          src={image}
                          alt={`${property.propertyTitle} ${name} photo ${index + 1}`}
                          width={1000}
                          height={1000}
                          className="h-full w-full object-cover cursor-pointer hover:opacity-90 transition"
                        />
                      </div>
                    ))}
                    </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
