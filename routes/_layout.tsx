import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-blue-800 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-blue-200">~</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <Component />
      </main>
      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Kebit.id. All rights reserved.</p>
          <p className="mt-2">
            The learning collective of the collective learning
          </p>
        </div>
      </footer>
    </div>
  );
}
