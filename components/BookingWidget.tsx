"use client";

import { FormEvent, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function BookingWidget() {
  const [checkIn, setCheckIn] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("2-4 guests");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Availability request", {
      checkIn,
      checkout,
      guests,
      name,
      email,
      mobile,
    });

    setIsContactOpen(false);
    setName("");
    setEmail("");
    setMobile("");
  };

  return (
    <div className="sticky top-28 z-10 w-full lg:max-w-[400px]">
      <Card className="md:p-6 ring-0 md:shadow-xl md:border border-gray-200 rounded-xl">
        <div className="mb-4">
          <h3 className=" text-xl md:text-2xl font-semibold mb-1">Add dates for prices</h3>
        </div>

        <div className="mb-4 rounded-xl border border-gray-400 overflow-hidden">
          <div className="flex border-b border-gray-400">
            <div className="flex-1 p-3 border-r border-gray-400">
              <Label
                htmlFor="check-in"
                className="text-[10px] font-extrabold uppercase text-gray-800"
              >
                Check-in
              </Label>
              <Input
                id="check-in"
                type="date"
                value={checkIn}
                onChange={(event) => setCheckIn(event.target.value)}
                placeholder="Add date"
                className="p-0 h-auto border-0 focus-visible:ring-0 rounded-none shadow-none text-sm"
              />
            </div>
            <div className="flex-1 p-3">
              <Label
                htmlFor="checkout"
                className="text-[10px] font-extrabold uppercase text-gray-800"
              >
                Checkout
              </Label>
              <Input
                id="checkout"
                type="date"
                value={checkout}
                onChange={(event) => setCheckout(event.target.value)}
                placeholder="Add date"
                className="p-0 h-auto border-0 focus-visible:ring-0 rounded-none shadow-none text-sm"
              />
            </div>
          </div>
          <div className="p-3">
            <Label className="text-[10px] font-extrabold uppercase text-gray-800">
              Guests
            </Label>
            <Select
              value={guests}
              onValueChange={(value) => setGuests(value ?? "2-4 guests")}
            >
              <SelectTrigger className="h-auto w-full border-0 bg-transparent p-0 shadow-none focus-visible:ring-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2-4 guests">2-4 guests</SelectItem>
                <SelectItem value="5-7 guests">5-7 guests</SelectItem>
                <SelectItem value="8-10 guests">8-10 guests</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          type="button"
          onClick={() => setIsContactOpen(true)}
          className="w-full bg-rose-600 hover:bg-rose-700 text-white rounded-lg py-6 text-lg font-semibold"
        >
          Check availability
        </Button>

        <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
          <DialogContent className="sm:max-w-[425px] rounded-3xl p-8">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                Enter your details
              </DialogTitle>
              <DialogDescription className="text-gray-600 text-[16px]">
                We will use this to check availability for your stay.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleContactSubmit} className="grid gap-5 py-4">
              <div className="grid gap-2">
                <Label
                  htmlFor="availability-name"
                  className="text-gray-700 font-semibold"
                >
                  Name
                </Label>
                <Input
                  id="availability-name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  placeholder="Your name"
                  className="h-12 rounded-xl"
                />
              </div>
              <div className="grid gap-2">
                <Label
                  htmlFor="availability-mobile"
                  className="text-gray-700 font-semibold"
                >
                  Mobile number
                </Label>
                <Input
                  id="availability-mobile"
                  type="tel"
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                  required
                  placeholder="+91 98765 43210"
                  className="h-12 rounded-xl"
                />
              </div>
              <div className="grid gap-2">
                <Label
                  htmlFor="availability-email"
                  className="text-gray-700 font-semibold"
                >
                  Email
                </Label>
                <Input
                  id="availability-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="you@example.com"
                  className="h-12 rounded-xl"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-gray-900 text-white rounded-xl font-semibold text-[16px] mt-2"
              >
                Submit
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </Card>
    </div>
  );
}
