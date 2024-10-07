import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <header className="bg-white shadow-md p-6 mb-8 w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800">My App</h1>
      </header>
      <main className="container mx-auto px-4">
        <p className="text-xl text-gray-700">
          Welcome to my simple app template!
        </p>
      </main>
      <footer className="mt-8 text-center text-gray-500">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
