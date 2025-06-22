import Link from "next/link";
import { salons } from "@/data/salons";

export default function Home() {
  const features = [
    "Online bookings with instant confirmations",
    "Client surveys to personalize services",
    "Admin panel for managing salon staff and services",
    "Integrated marketing tools and loyalty program (coming soon)",
    "Online payments and invoicing (coming soon)",
  ];

  return (
    <main className="p-6 space-y-6">
      <section>
        <h1 className="text-4xl font-bold mb-2">Beauty Salon Platform</h1>
        <p className="text-lg">
          Platforma wspierająca salony beauty w zarządzaniu rezerwacjami i
          budowaniu relacji z klientami.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Co oferujemy</h2>
        <ul className="list-disc pl-5 space-y-1">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Nasze salony</h2>
        <ul className="space-y-1">
          {salons.map((salon) => (
            <li key={salon.slug}>
              <Link
                href={`/${salon.slug}`}
                className="text-blue-500 hover:underline"
              >
                {salon.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
