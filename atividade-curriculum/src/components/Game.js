import React, { useState } from 'react';
import useGameStore from '../store/useGameStore';

function Game() {
  const { secretCode, attempts, addAttempt } = useGameStore();
  const [input, setInput] = useState('');

  const handleCheck = () => {
    if (input.length !== 4) {
      alert('Por favor, insira exatamente 4 dígitos.');
      return;
    }

    const result = checkAttempt(input, secretCode);
    addAttempt(input, result);
    setInput('');
  };

  const handleShowCode = () => {
    alert(`O código secreto é: ${secretCode}`);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Jogo Senha (Bulls and Cows)</h2>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2"
          placeholder="Digite 4 dígitos"
        />
        <button onClick={handleCheck} className="ml-4 px-4 py-2 bg-blue-500 text-white">
          Verificar
        </button>
        <button onClick={handleShowCode} className="ml-4 px-4 py-2 bg-gray-700 text-white">
          Mostrar Código
        </button>
      </div>
      <ul className="space-y-2">
        {attempts.map(({ attempt, result }, index) => (
          <li key={index} className="bg-gray-200 p-2">
            {`Tentativa: ${attempt} - Resultado: ${result}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

function checkAttempt(attempt, secret) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < attempt.length; i++) {
    if (attempt[i] === secret[i]) {
      bulls++;
    } else if (secret.includes(attempt[i])) {
      cows++;
    }
  }

  return `${bulls} Bulls, ${cows} Cows`;
}

export default Game;
