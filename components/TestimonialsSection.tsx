import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { roomDetails } from "@/const/roomDetails";
import { Star } from "lucide-react";

const testimonials = roomDetails
  .flatMap((property) =>
    property.reviews.map((review) => ({
      ...review,
      propertyTitle: property.propertyTitle,
      initial: review.name.charAt(0),
    }))
  )
  .sort((first, second) => {
    if (second.rating !== first.rating) {
      return second.rating - first.rating;
    }

    return second.text.length - first.text.length;
  })
  .slice(0, 3);

export function TestimonialsSection() {
  return (
    <div className="py-16 bg-gray-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-3xl mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">What our guests say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Don&apos;t just take our word for it. Read real reviews from guests
          who have stayed at our properties.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <Card
            key={`${t.propertyTitle}-${t.name}-${t.date}`}
            className="p-8 border-0 shadow-[0_6px_16px_rgba(0,0,0,0.08)] rounded-3xl bg-white flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-1 mb-6 text-rose-600">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-3.5 w-3.5 ${
                      star <= t.rating
                        ? "fill-current"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-8 italic">
                &quot;{t.text}&quot;
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 bg-gray-100">
                <AvatarFallback className="bg-rose-100 text-rose-700 font-semibold">
                  {t.initial}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.date}</p>
                <p className="text-xs text-gray-500 break-words">
                  {t.propertyTitle}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
