"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function BecomeHostDialog({ children }: { children: React.ReactElement }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Dialog onOpenChange={(open) => { if(!open) setIsSubmitted(false); }}>
      <DialogTrigger render={children} />
      <DialogContent className="sm:max-w-[425px] rounded-3xl p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">List your property</DialogTitle>
          <DialogDescription className="text-gray-600 text-[16px]">
            Fill out this quick form and our team will get back to you.
          </DialogDescription>
        </DialogHeader>
        
        {isSubmitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-8 h-8"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thank you!</h3>
            <p className="text-gray-600">Our sales person will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-gray-700 font-semibold">Name</Label>
              <Input id="name" required placeholder="John Doe" className="h-12 rounded-xl" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone Number</Label>
              <Input id="phone" type="tel" required placeholder="+91 98765 43210" className="h-12 rounded-xl" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-gray-700 font-semibold">Email (Optional)</Label>
              <Input id="email" type="email" placeholder="john@example.com" className="h-12 rounded-xl" />
            </div>
            <Button type="submit" className="w-full h-12 bg-gray-900 text-white rounded-xl font-semibold text-[16px] mt-2">
              Submit Request
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
