import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 border-b pb-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-sm font-semibold">Support</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/help" className="hover:underline">Help Centre</Link></li>
              <li><Link href="/guest-assurance" className="hover:underline">Guest assurance</Link></li>
              <li><Link href="/anti-discrimination" className="hover:underline">Respect and inclusion</Link></li>
              <li><Link href="/disability-support" className="hover:underline">Accessibility support</Link></li>
              <li><Link href="/cancellation-policy" className="hover:underline">Cancellation options</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Stays</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/host/homes" className="hover:underline">Our three Jaipur stays</Link></li>
              <li><Link href="/host/property-care" className="hover:underline">Property care</Link></li>
              <li><Link href="/host/resources" className="hover:underline">Stay resources</Link></li>
              <li><Link href="/host/community" className="hover:underline">Guest community</Link></li>
              <li><Link href="/host/responsibly" className="hover:underline">Responsible stays</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Hitesh Stays</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:underline text-rose-600 font-medium">About Us</Link></li>
              <li><Link href="/contact" className="hover:underline text-rose-600 font-medium">Contact Us</Link></li>
              <li><Link href="/newsroom" className="hover:underline">Newsroom</Link></li>
              <li><Link href="/investors" className="hover:underline">Investors</Link></li>
              <li><Link href="/community-stays" className="hover:underline">Community stays</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span>© 2026 Hitesh Stays</span>
            <span className="hidden md:inline">·</span>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <span className="hidden md:inline">·</span>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <span className="hidden md:inline">·</span>
            <Link href="/sitemap" className="hover:underline">Sitemap</Link>
            <span className="hidden md:inline">·</span>
            <Link href="/company-details" className="hover:underline">Company details</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
