import Link from "next/link";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 border-b pb-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-sm font-semibold">Support</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/help" className="hover:underline">Help Centre</Link></li>
              <li><Link href="/aircover" className="hover:underline">AirCover</Link></li>
              <li><Link href="/anti-discrimination" className="hover:underline">Anti-discrimination</Link></li>
              <li><Link href="/disability-support" className="hover:underline">Disability support</Link></li>
              <li><Link href="/cancellation-policy" className="hover:underline">Cancellation options</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Hosting</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/host/homes" className="hover:underline">Airbnb your home</Link></li>
              <li><Link href="/host/aircover" className="hover:underline">AirCover for Hosts</Link></li>
              <li><Link href="/host/resources" className="hover:underline">Hosting resources</Link></li>
              <li><Link href="/host/community" className="hover:underline">Community forum</Link></li>
              <li><Link href="/host/responsibly" className="hover:underline">Hosting responsibly</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Airbnb</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:underline text-rose-600 font-medium">About Us</Link></li>
              <li><Link href="/contact" className="hover:underline text-rose-600 font-medium">Contact Us</Link></li>
              <li><Link href="/newsroom" className="hover:underline">Newsroom</Link></li>
              <li><Link href="/new-features" className="hover:underline">New features</Link></li>
              <li><Link href="/careers" className="hover:underline">Careers</Link></li>
              <li><Link href="/investors" className="hover:underline">Investors</Link></li>
              <li><Link href="/airbnb-org" className="hover:underline">Airbnb.org emergency stays</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span>© 2026 Airbnb, Inc.</span>
            <span className="hidden md:inline">·</span>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <span className="hidden md:inline">·</span>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <span className="hidden md:inline">·</span>
            <Link href="/sitemap" className="hover:underline">Sitemap</Link>
            <span className="hidden md:inline">·</span>
            <Link href="/company-details" className="hover:underline">Company details</Link>
          </div>
          
          <div className="flex items-center gap-4 text-sm font-medium">
            <button className="flex items-center gap-1 hover:underline">
              <Globe className="h-4 w-4" />
              English (IN)
            </button>
            <button className="hover:underline">₹ INR</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
