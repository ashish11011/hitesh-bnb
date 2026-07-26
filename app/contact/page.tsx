"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const paragraphs = [
    "Use this page for booking enquiries, property questions, date checks, and stay support for our three Jaipur properties. Sharing complete details in the first message helps us respond faster.",
    "If you already know which property you prefer, mention its name along with your check-in date, checkout date, and number of guests. If you are unsure, describe your group and we can suggest the most suitable option.",
    "Guests planning family travel, wedding stays, tourist group stays, or work trips should mention any special needs before booking. Parking, kitchen access, room layout, accessibility questions, and arrival timing are easier to discuss in advance.",
    "For confirmed or active stays, contact us as soon as something needs attention. Early communication gives us a better chance to help with directions, check-in coordination, amenities, maintenance, or house rule questions.",
    "You can call, email, or submit the form below. Please provide a reachable mobile number so we can clarify details and guide you through the next step for your Jaipur stay.",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="mb-10 text-gray-700">
          {paragraphs.map((paragraph) => (
            <p className="mb-5 leading-relaxed" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Contact Us</h1>
          <p className="text-gray-600 mb-8">We&apos;d love to hear from you. Please fill out this form or contact us directly.</p>
          
          <div className="mb-8 flex flex-col sm:flex-row gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <div className="flex-1 flex items-center gap-3">
              <div className="h-10 w-10 bg-rose-100 text-rose-600 rounded-full flex shrink-0 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="overflow-hidden">
                <p className="text-sm text-gray-500 font-medium">Phone</p>
                <a href="tel:9876987698" className="text-gray-900 font-semibold hover:text-rose-600 truncate block">9876987698</a>
              </div>
            </div>
            <div className="flex-1 flex items-center gap-3">
              <div className="h-10 w-10 bg-rose-100 text-rose-600 rounded-full flex shrink-0 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </div>
              <div className="overflow-hidden">
                <p className="text-sm text-gray-500 font-medium">Email</p>
                <a href="mailto:home@superaxcel.com" className="text-gray-900 font-semibold hover:text-rose-600 truncate block">home@superaxcel.com</a>
              </div>
            </div>
          </div>
          
          {isSubmitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-8 h-8"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-600">Thank you for reaching out. We will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6">
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
              <div className="grid gap-2">
                <Label htmlFor="message" className="text-gray-700 font-semibold">Message</Label>
                <Textarea 
                  id="message" 
                  required 
                  placeholder="How can we help you?" 
                  className="min-h-[120px] rounded-xl border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" 
                />
              </div>
              <Button type="submit" className="w-full h-12 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold text-[16px] mt-4 transition transform hover:scale-[1.02]">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
