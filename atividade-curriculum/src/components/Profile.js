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
          <li>Telefone: (81) 9.8776-0887</li>
          <li>Email: dasilvaguilhermebruno@gmail.com</li>
          <li>GitHub: https://github.com/Bruno-Guilherme</li>
        </ul>
      </section>
    </div>
  );
}

export default Profile;
