import React from 'react';

function Profile() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold">Sobre Mim</h2>
        <p className="text-gray-700 mt-2">
          Sou desenvolvedor apaixonado por tecnologia e soluções criativas.
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-bold">Contato</h2>
        <ul className="mt-4">
          <li>Telefone: (81) 9.9999-9999</li>
          <li>Email: meuemail@email.com</li>
          <li>GitHub: github.com/meuperfil</li>
        </ul>
      </section>
    </div>
  );
}

export default Profile;
