import { Search, Menu, UserCircle2 } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { BecomeHostDialog } from "@/components/BecomeHostDialog";
import Image from "next/image";

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 text-primary">
          {/* Using a simple logo representation for now */}
          <Image
            src={
              "https://codeframe-ashish-harshit.s3.ap-south-1.amazonaws.com/hitesh/7-heven-logo.png"
            }
            width={500}
            height={500}
            className=" size-16 object-contain"
            alt="logo"
          />
        </Link>

        {/* Search Bar */}
        <Link
          href="/#properties"
          className="hidden items-center rounded-full border px-4 py-2 shadow-sm transition hover:shadow-md md:flex cursor-pointer"
          aria-label="See all properties"
        >
          <div className="border-r px-4 text-sm font-medium">Jaipur</div>
          <div className="border-r px-4 text-sm font-medium">Anytime</div>
          <div className="px-4 text-sm text-muted-foreground">Add guests</div>
          <div className="rounded-full bg-rose-600 p-2 text-white">
            <Search className="h-4 w-4" />
          </div>
        </Link>

        {/* User Menu */}
        <div className="flex items-center gap-4">
          <BecomeHostDialog>
            <Button
              variant="ghost"
              className="hidden rounded-full text-sm font-medium md:block"
            >
              Enquire now
            </Button>
          </BecomeHostDialog>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 rounded-full border p-2 pl-3 hover:shadow-md transition outline-none">
              <Menu className="h-4 w-4" />
              <UserCircle2 className="h-7 w-7 text-gray-400" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 mt-2">
              <DropdownMenuItem>
                <Link href="/#properties" className="w-full">
                  See all properties
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/help" className="w-full">
                  Support
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/contact" className="w-full">
                  Contact
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
