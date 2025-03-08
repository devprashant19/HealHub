'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

function Home() {
  const [location, setLocation] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/result?location=${location}`);
  };

  return (
    <div className="bg-container min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl text-white font-bold mb-6">Find Nearby Hospitals</h1>
      <input
        type="text"
        placeholder="Enter your location"
        className="p-3 text-white w-80 border rounded-lg mb-4"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="cursor-pointer bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
export default Home;