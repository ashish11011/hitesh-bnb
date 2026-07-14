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

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ImageGallery />
        
        <div className="mt-8 flex flex-col lg:flex-row lg:gap-20">
          <div className="flex-1 lg:max-w-[65%]">
            <ListingHeader />
            <Amenities />
          </div>
          
          <div className="relative mt-8 lg:mt-0 lg:w-[35%]">
            <BookingWidget />
          </div>
        </div>
        
        <Separator className="my-8" />
        <Reviews />
        
        <Separator className="my-8" />
        <HostProfile />
        
        <Separator className="my-8" />
        <ThingsToKnow />
      </main>
      
      <Footer />
    </div>
  );
}
