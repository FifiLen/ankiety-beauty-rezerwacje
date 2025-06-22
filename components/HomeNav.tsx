import Link from 'next/link';

export default function HomeNav() {
  return (
    <nav className="bg-gray-100 px-4 py-2">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="font-semibold">
            Start
          </Link>
        </li>
        <li>
          <Link href="#features" className="hover:underline">
            Funkcje
          </Link>
        </li>
        <li>
          <Link href="#salons" className="hover:underline">
            Salony
          </Link>
        </li>
      </ul>
    </nav>
  );
}
