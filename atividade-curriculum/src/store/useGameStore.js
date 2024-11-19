import { create } from 'zustand';

const useGameStore = create((set) => ({
  secretCode: generateCode(),
  attempts: [],
  addAttempt: (attempt, result) =>
    set((state) => ({
      attempts: [{ attempt, result }, ...state.attempts],
    })),
}));

function generateCode() {
  let digits = new Set();
  while (digits.size < 4) {
    digits.add(Math.floor(Math.random() * 10));
  }
  return Array.from(digits).join('');
}

export default useGameStore;
