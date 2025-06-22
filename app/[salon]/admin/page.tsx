import { salons } from "@/data/salons";
import { bookings } from "@/data/bookings";
import { clients } from "@/data/clients";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function SalonAdminPage({ params }: any) {
  const salon = salons.find((s) => s.slug === params.salon);
  if (!salon) {
    notFound();
  }

  const salonBookings = bookings.filter((b) => b.salonSlug === params.salon);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">{salon?.name} - Admin Panel</h1>
      <ul className="mt-4 space-y-2">
        <li>
          <Link href={`/${params.salon}`} className="text-blue-500 hover:underline">
            View public page
          </Link>
        </li>
        <li>Add and edit services (coming soon)</li>
        <li>
          <Link
            href={`/${params.salon}/clients`}
            className="text-blue-500 hover:underline"
          >
            View clients
          </Link>
        </li>
        <li>
          <Link
            href={`/${params.salon}/admin/survey`}
            className="text-blue-500 hover:underline"
          >
            Manage survey
          </Link>
        </li>
      </ul>

      {salonBookings.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Bookings</h2>
          <ul className="list-disc pl-5 space-y-1">
            {salonBookings.map((b) => {
              const client = clients.find((c) => c.id === b.clientId);
              return (
                <li key={b.id}>
                  {client?.name} - {new Date(b.date).toLocaleString()}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </main>
  );
}
