import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ImageGallery } from "@/components/ImageGallery";
import { ListingHeader } from "@/components/ListingHeader";
import { BookingWidget } from "@/components/BookingWidget";
import { Amenities } from "@/components/Amenities";
import { Reviews } from "@/components/Reviews";
import { HostProfile } from "@/components/HostProfile";
import { ThingsToKnow } from "@/components/ThingsToKnow";
import { Separator } from "@/components/ui/separator";
import { roomDetails } from "@/const/roomDetails";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return roomDetails.map((property) => ({
    id: property.slug,
  }));
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = roomDetails.find((item) => item.slug === id);

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ImageGallery property={property} />
        
        <div className="mt-8 flex flex-col lg:flex-row lg:gap-20">
          <div className="flex-1 lg:max-w-[65%]">
            <ListingHeader property={property} />
            <Amenities property={property} />
          </div>
          
          <div className="relative mt-8 lg:mt-0 lg:w-[35%]">
            <BookingWidget propertySlug={property.slug} />
          </div>
        </div>
        
        <Separator className="my-8" />
        <Reviews property={property} />
        
        <Separator className="my-8" />
        <HostProfile property={property} />
        
        <Separator className="my-8" />
        <ThingsToKnow property={property} />
      </main>
      
      <Footer />
    </div>
  );
}
