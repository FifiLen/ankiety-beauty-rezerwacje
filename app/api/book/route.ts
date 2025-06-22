import { NextResponse } from 'next/server';
import { bookings } from '@/data/bookings';
import { clients } from '@/data/clients';

export async function POST(request: Request) {
  const { salonSlug, clientName, date } = await request.json();
  if (!salonSlug || !clientName || !date) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // find or create client
  let client = clients.find(
    (c) => c.salonSlug === salonSlug && c.name === clientName
  );
  if (!client) {
    client = {
      id: clients.length + 1,
      salonSlug,
      name: clientName,
    };
    clients.push(client);
  }

  const booking = {
    id: bookings.length + 1,
    salonSlug,
    clientId: client.id,
    date,
  };
  bookings.push(booking);

  return NextResponse.json({ success: true, booking });
}
