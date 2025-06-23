import Link from "next/link";
import { salons } from "@/data/salons";
import HomeNav from "@/components/HomeNav";

export default function Home() {
  const features = [
    "Rezerwacje online z natychmiastowym potwierdzeniem",
    "Ankiety klienta do personalizacji usług",
    "Panel administracyjny do zarządzania salonem i personelem",
    "Zintegrowane narzędzia marketingowe (wkrótce)",
    "Płatności online i faktury (wkrótce)",
  ];

  return (
    <>
      <HomeNav />
      <main>
        <section className="bg-pink-50 text-center py-20 px-4">
          <h1 className="text-5xl font-bold mb-4">Zarządzaj swoim salonem łatwiej</h1>
          <p className="text-lg mb-8">Nowoczesne narzędzie do rezerwacji i komunikacji z klientami.</p>
          <Link href="#features" className="bg-pink-600 text-white px-6 py-3 rounded">Dowiedz się więcej</Link>
        </section>

        <section id="features" className="py-16 px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-center">Co oferujemy</h2>
          <ul className="list-disc pl-6 space-y-2">
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

        <section id="salons" className="py-16 px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-center">Nasze salony</h2>
          <ul className="space-y-2 text-center">
            {salons.map((salon) => (
              <li key={salon.slug}>
                <Link href={`/${salon.slug}`} className="text-blue-600 hover:underline">
                  {salon.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
