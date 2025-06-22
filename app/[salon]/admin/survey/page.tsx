'use client';
import { useState } from 'react';
import { surveys } from '@/data/surveys';
import { salons } from '@/data/salons';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function SurveyAdminPage({ params }: any) {
  const salon = salons.find((s) => s.slug === params.salon);
  if (!salon) {
    notFound();
  }

  const [question, setQuestion] = useState('');
  const survey = surveys.find((s) => s.salonSlug === params.salon);
  const questions = survey ? survey.questions : [];

  const addQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question) return;
    if (!survey) {
      surveys.push({ salonSlug: params.salon, questions: [question] });
    } else {
      survey.questions.push(question);
    }
    setQuestion('');
  };

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Survey for {salon?.name}</h1>
      <form onSubmit={addQuestion} className="space-y-2">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border px-2 py-1 w-full"
          placeholder="New question"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-3 py-1">
          Add question
        </button>
      </form>
      {questions.length > 0 && (
        <ul className="mt-4 list-disc pl-5 space-y-1">
          {questions.map((q, idx) => (
            <li key={idx}>{q}</li>
          ))}
        </ul>
      )}
      <div className="mt-4">
        <Link href={`/${params.salon}/admin`} className="text-blue-500 hover:underline">
          Back to admin panel
        </Link>
      </div>
    </main>
  );
}
