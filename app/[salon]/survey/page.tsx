'use client';
import { useState } from 'react';
import { salons } from '@/data/salons';
import { surveys } from '@/data/surveys';
import { notFound } from 'next/navigation';

export default function SurveyPage({ params }: any) {
  const salon = salons.find((s) => s.slug === params.salon);
  if (!salon) {
    notFound();
  }

  const survey = surveys.find((s) => s.salonSlug === params.salon);
  const [answers, setAnswers] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  if (!survey) {
    return <p className="p-6">No survey available.</p>;
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Thanks for completing the survey!');
  };

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Survey for {salon?.name}</h1>
      <form onSubmit={submit} className="space-y-4">
        {survey.questions.map((q, idx) => (
          <div key={idx}>
            <label className="block mb-1">{q}</label>
            <input
              type="text"
              value={answers[idx] || ''}
              onChange={(e) => {
                const next = [...answers];
                next[idx] = e.target.value;
                setAnswers(next);
              }}
              className="border px-2 py-1 w-full"
              required
            />
          </div>
        ))}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">
          Submit
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </main>
  );
}
