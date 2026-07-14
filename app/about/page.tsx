import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      title: "The Jaipur Retreat",
      location: "Jaipur, India",
      desc: "Experience the royal heritage of Rajasthan in this beautifully restored heritage home. Complete with traditional architecture and modern luxury.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      title: "Lakeside Villa",
      location: "Udaipur, India",
      desc: "Wake up to stunning views of Lake Pichola. This tranquil villa offers a perfect escape from the bustling city with its serene waterfront location.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      title: "Blue City Haven",
      location: "Jodhpur, India",
      desc: "Nestled in the heart of the Blue City, this property combines historic charm with incredible panoramic views of the Mehrangarh Fort.",
    }
  ];

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 w-full">
        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">About Our Properties</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Welcome to our collection of handpicked, beautiful stays across Rajasthan. Each property is carefully designed to offer you an unforgettable, authentic, and luxurious experience.
            </p>
            <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-700 px-6 py-3 rounded-full font-semibold text-lg border border-rose-100 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              For booking contact: 976978698
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-24">
            {properties.map((prop, index) => (
              <div key={prop.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img src={prop.image} alt={prop.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl hidden md:block">
                    <p className="font-bold text-gray-900 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-600"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      {prop.location}
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{prop.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{prop.desc}</p>
                  <a href="/contact" className="inline-flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700 transition">
                    Inquire about this property
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
