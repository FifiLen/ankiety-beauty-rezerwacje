import { salons } from '@/data/salons';
import { clients } from '@/data/clients';
import { notFound } from 'next/navigation';

export default function ClientsPage({ params }: any) {
  const salon = salons.find((s) => s.slug === params.salon);
  if (!salon) {
    notFound();
  }
  const salonClients = clients.filter((c) => c.salonSlug === params.salon);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Clients of {salon?.name}</h1>
      <ul className="list-disc pl-5 space-y-1">
        {salonClients.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </main>
  );
}
