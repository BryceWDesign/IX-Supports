import React from 'react';

function App() {
  return (
    <div className="w-screen h-screen bg-neutral-900 text-white flex flex-col">
      <header className="p-4 bg-neutral-800 border-b border-neutral-700 text-lg font-semibold">
        🧩 IX-Supports — UX/UI Prototyping Tool
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to IX-Supports</h1>
          <p className="text-base text-neutral-300">
            Start building your next-level interactions, motion designs, and high-fidelity UX flows.
          </p>
        </div>
      </main>

      <footer className="p-2 text-xs text-neutral-500 text-center border-t border-neutral-800">
        MIT Licensed • Built by Bryce Wooster
      </footer>
    </div>
  );
}

export default App;
