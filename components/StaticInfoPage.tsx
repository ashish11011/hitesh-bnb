import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

type StaticInfoPageProps = {
  title: string;
  intro?: string;
  paragraphs: string[];
  sections?: Array<{
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
};

export function StaticInfoPage({
  title,
  intro,
  paragraphs,
  sections = [],
}: StaticInfoPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          {title}
        </h1>
        <p className="text-gray-500 mb-8 italic">
          Effective Date: July 14, 2026
        </p>

        <div className="prose prose-lg text-gray-700 max-w-none">
          {intro ? (
            <p className="mb-6 text-xl leading-relaxed text-gray-600">
              {intro}
            </p>
          ) : null}

          {paragraphs.map((paragraph) => (
            <p className="mb-6 leading-relaxed" key={paragraph}>
              {paragraph}
            </p>
          ))}

          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p className="mb-6 leading-relaxed" key={paragraph}>
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
