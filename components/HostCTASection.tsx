import { Button } from "@/components/ui/button";
import { BecomeHostDialog } from "@/components/BecomeHostDialog";

export function HostCTASection() {
  return (
    <div className="py-20 mb-10 text-center bg-gray-900 rounded-3xl -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-gray-900 to-gray-900"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">List your property with us</h2>
        <p className="text-xl text-gray-300 mb-10">
          Turn your extra space into extra income. Join our community of hosts and start earning today.
        </p>
        
        <BecomeHostDialog>
          <Button className="bg-rose-600 hover:bg-rose-700 text-white rounded-full px-10 py-6 text-lg font-bold shadow-lg transition transform hover:scale-105">
            Get Started
          </Button>
        </BecomeHostDialog>
      </div>
    </div>
  );
}
