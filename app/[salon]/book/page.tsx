'use client';

import { useState } from 'react';
import { salons } from '@/data/salons';

export default function BookPage({ params }: any) {
  const salon = salons.find((s) => s.slug === params.salon);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  if (!salon) {
    return <p>Salon not found.</p>;
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ salonSlug: params.salon, clientName: name, date }),
    });
    if (res.ok) {
      setMessage('Booking created!');
      setName('');
      setDate('');
    } else {
      setMessage('Something went wrong');
    }
  };

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book at {salon.name}</h1>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block mb-1">Your name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border px-2 py-1 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Date</label>
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border px-2 py-1 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">
          Book
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </main>
  );
}
