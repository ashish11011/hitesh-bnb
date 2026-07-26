import { Star } from "lucide-react";
import type { RoomDetails } from "@/const/roomDetails";

export function Reviews({ property }: { property: RoomDetails }) {
  return (
    <div className="py-6">
      <div className="flex items-center gap-2 mb-6">
        <Star className="h-5 w-5 fill-current" />
        <h2 className="text-2xl font-semibold">
          {property.rating} · {property.reviewCount} reviews
        </h2>
      </div>

      <div className="mb-8 max-w-sm">
        <p className="text-gray-600">
          This home is in the{" "}
          <span className="font-semibold text-gray-900">bottom 10%</span> of
          eligible listings based on ratings, reviews and reliability
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-10">
        {property.reviewSummary.tags.map((tag) => (
          <div
            className="flex items-center gap-2 border rounded-full px-4 py-2 shadow-sm text-sm font-semibold"
            key={tag.name}
          >
            {tag.name} {"rating" in tag ? tag.rating : tag.count}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {property.reviews.map((review) => (
          <div key={`${review.name}-${review.date}`}>
            <div className="flex items-center gap-4 mb-3">
              <div>
                <h4 className="font-semibold">{review.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {review.duration}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-3 w-3 ${star <= review.rating ? "fill-current" : "fill-gray-200 text-gray-200"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold">·</span>
              <span className="text-sm font-semibold">{review.date}</span>
            </div>
            <p className="text-gray-700 leading-relaxed mb-2">{review.text}</p>
            {/* <Button variant="link" className="h-auto p-0 font-semibold">
              Show more
            </Button> */}
          </div>
        ))}
      </div>

      {/* <div className="mt-8">
        <Button
          variant="outline"
          className="font-semibold px-6 py-6 text-[16px]"
        >
          Show all {property.reviewCount} reviews
        </Button>
      </div> */}
    </div>
  );
}
