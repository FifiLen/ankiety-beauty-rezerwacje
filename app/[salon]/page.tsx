import { salons } from "@/data/salons";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function SalonPage({ params }: any) {
  const salon = salons.find((s) => s.slug === params.salon);
  if (!salon) {
    notFound();
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">{salon?.name}</h1>
      {salon?.description && <p className="mt-4">{salon.description}</p>}
      <div className="mt-4 space-x-4">
        <Link
          href={`/${params.salon}/admin`}
          className="text-blue-500 hover:underline"
        >
          Go to admin panel
        </Link>
        <Link
          href={`/${params.salon}/book`}
          className="text-blue-500 hover:underline"
        >
          Book an appointment
        </Link>
        <Link
          href={`/${params.salon}/survey`}
          className="text-blue-500 hover:underline"
        >
          Fill out survey
        </Link>
      </div>
    </main>
  );
}
