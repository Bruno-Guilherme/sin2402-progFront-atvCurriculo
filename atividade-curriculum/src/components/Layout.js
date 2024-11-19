import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-1/4 p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold mb-6">Meu Portfólio</h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="hover:text-yellow-300">
                Perfil
              </Link>
            </li>
            <li>
              <Link to="/game" className="hover:text-yellow-300">
                Jogo Senha
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
