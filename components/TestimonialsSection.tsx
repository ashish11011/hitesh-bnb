import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Mumtaz",
      duration: "June 2026",
      text: "We had a wonderful stay at the villa. The property was clean, well-maintained, and beautifully designed with all the necessary amenities. The ambience was peaceful and allowed us to truly relax.",
      initial: "M",
    },
    {
      name: "Kamalpreet",
      duration: "February 2026",
      text: "An awesome experience from start to finish. The host was incredibly accommodating, and the location is perfect for large groups wanting to stay together in Jaipur.",
      initial: "K",
      image: "https://i.pravatar.cc/150?u=kamal",
    },
    {
      name: "Vedangi",
      duration: "May 2026",
      text: "The villa is absolutely stunning. Huge rooms, great air conditioning, and super comfortable beds. We really appreciated the private space and the beautiful interiors.",
      initial: "V",
    }
  ];

  return (
    <div className="py-16 bg-gray-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-3xl mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">What our guests say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Don&apos;t just take our word for it. Read reviews from people who have experienced our hospitality firsthand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <Card key={i} className="p-8 border-0 shadow-[0_6px_16px_rgba(0,0,0,0.08)] rounded-3xl bg-white flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-6 text-rose-600">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '14px', width: '14px', fill: 'currentcolor' }}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-8 italic">
                &quot;{t.text}&quot;
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 bg-gray-100">
                {t.image ? <AvatarImage src={t.image} /> : null}
                <AvatarFallback className="bg-rose-100 text-rose-700 font-semibold">{t.initial}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.duration}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
