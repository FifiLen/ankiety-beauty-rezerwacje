import Link from 'next/link';

export default function HomeNav() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between">
        <Link href="/" className="font-bold text-pink-600">
          SalonFlow
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="#features" className="hover:text-pink-600">
              Funkcje
            </Link>
          </li>
          <li>
            <Link href="#salons" className="hover:text-pink-600">
              Salony
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
