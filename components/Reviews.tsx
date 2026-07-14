import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function Reviews() {
  const reviews = [
    {
      name: "Mumtaz",
      duration: "6 years on Airbnb",
      date: "June 2026",
      text: "We had a wonderful stay at the villa. The property was clean, well-maintained, and beautifully designed with all the necessary amenities. The ambience was peaceful and ...",
      initial: "M",
      image: "",
    },
    {
      name: "Vedangi",
      duration: "2 months on Airbnb",
      date: "May 2026",
      text: "The stay itself was decent, but the overall experience was ruined because of the host's behavior during checkout. One of our group members accidentally vomited after feeling ...",
      initial: "V",
      image: "",
    },
    {
      name: "Kamalpreet",
      duration: "7 years on Airbnb",
      date: "February 2026",
      text: "awesome experience",
      initial: "K",
      image: "https://i.pravatar.cc/150?u=kamal",
    },
    {
      name: "Vinit",
      duration: "New to Airbnb",
      date: "2 weeks ago",
      text: "The location was worth it's price, but the rooms could've been cleaner. Overall a pretty comfortable stay, enjoyed.",
      initial: "V",
      image: "",
    }
  ];

  return (
    <div className="py-6">
      <div className="flex items-center gap-2 mb-6">
        <Star className="h-5 w-5 fill-current" />
        <h2 className="text-2xl font-semibold">4.29 · 7 reviews</h2>
      </div>

      <div className="mb-8 max-w-sm">
        <p className="text-gray-600">
          This home is in the <span className="font-semibold text-gray-900">bottom 10%</span> of eligible listings based on ratings, reviews and reliability
        </p>
        <button className="text-sm font-semibold underline mt-2">Show full ratings</button>
      </div>

      <div className="flex flex-wrap gap-4 mb-10">
        <div className="flex items-center gap-2 border rounded-full px-4 py-2 shadow-sm text-sm font-semibold">
          <span className="text-xl">🧽</span> Cleanliness 4
        </div>
        <div className="flex items-center gap-2 border rounded-full px-4 py-2 shadow-sm text-sm font-semibold">
          <span className="text-xl">🛠️</span> Condition 2
        </div>
        <div className="flex items-center gap-2 border rounded-full px-4 py-2 shadow-sm text-sm font-semibold">
          <span className="text-xl">🛋️</span> Comfort 2
        </div>
        <div className="flex items-center gap-2 border rounded-full px-4 py-2 shadow-sm text-sm font-semibold">
          <span className="text-xl">🎁</span> Hospitality 2
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {reviews.map((review, i) => (
          <div key={i}>
            <div className="flex items-center gap-4 mb-3">
              <Avatar className="h-12 w-12 bg-gray-100">
                {review.image ? <AvatarImage src={review.image} /> : null}
                <AvatarFallback className="bg-rose-100 text-rose-700 font-semibold">{review.initial}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">{review.name}</h4>
                <p className="text-sm text-muted-foreground">{review.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '10px', width: '10px', fill: star <= 4 ? 'currentcolor' : '#EBEBEB' }}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
                ))}
              </div>
              <span className="text-sm font-semibold">·</span>
              <span className="text-sm font-semibold">{review.date}</span>
            </div>
            <p className="text-gray-700 leading-relaxed mb-2">
              {review.text}
            </p>
            <button className="font-semibold underline">Show more</button>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <Button variant="outline" className="font-semibold px-6 py-6 text-[16px]">Show all 7 reviews</Button>
      </div>
    </div>
  );
}
