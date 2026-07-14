import { Search, Globe, Menu, UserCircle2 } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BecomeHostDialog } from "@/components/BecomeHostDialog";

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 text-primary">
          {/* Using a simple logo representation for now */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-rose-600">
            <path fillRule="evenodd" clipRule="evenodd" d="M16 1C8.26801 1 2 7.26801 2 15C2 22.732 8.26801 29 16 29C23.732 29 30 22.732 30 15C30 7.26801 23.732 1 16 1ZM16 5C10.4772 5 6 9.47715 6 15C6 20.5228 10.4772 25 16 25C21.5228 25 26 20.5228 26 15C26 9.47715 21.5228 5 16 5Z" fill="currentColor"/>
          </svg>
          <span className="hidden text-xl font-bold tracking-tight text-rose-600 lg:block">airbnb</span>
        </Link>

        {/* Search Bar */}
        <div className="flex hidden items-center rounded-full border px-4 py-2 shadow-sm transition hover:shadow-md md:flex cursor-pointer">
          <div className="border-r px-4 text-sm font-medium">Anywhere</div>
          <div className="border-r px-4 text-sm font-medium">Anytime</div>
          <div className="px-4 text-sm text-muted-foreground">Add guests</div>
          <div className="rounded-full bg-rose-600 p-2 text-white">
            <Search className="h-4 w-4" />
          </div>
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-4">
          <BecomeHostDialog>
            <button className="hidden rounded-full px-4 py-2 text-sm font-medium hover:bg-muted md:block">
              Become a host
            </button>
          </BecomeHostDialog>
          <button className="hidden rounded-full p-2 hover:bg-muted md:block">
            <Globe className="h-4 w-4" />
          </button>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 rounded-full border p-2 pl-3 hover:shadow-md transition outline-none">
              <Menu className="h-4 w-4" />
              <UserCircle2 className="h-7 w-7 text-gray-400" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 mt-2">
              <DropdownMenuItem className="font-semibold">Sign up</DropdownMenuItem>
              <DropdownMenuItem>Log in</DropdownMenuItem>
              <div className="my-1 h-px bg-muted" />
              <DropdownMenuItem>Host your home</DropdownMenuItem>
              <DropdownMenuItem>Host an experience</DropdownMenuItem>
              <DropdownMenuItem>Help</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
