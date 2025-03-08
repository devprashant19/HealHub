'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Hospital {
  name: string;
  address: string;
}

export default function Result() {
  const searchParams = useSearchParams();
  const location = searchParams.get('location');
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  useEffect(() => {
    if (location) {
      fetchHospitals(location);
    }
  }, [location]);

  const fetchHospitals = async (location: string) => {
    const apiKey = 'YOUR_GOOGLE_PLACES_API_KEY';
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=hospitals+in+${location}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      const places = response.data.results.map((place: any) => ({
        name: place.name,
        address: place.formatted_address,
      }));
      setHospitals(places);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Hospitals Near {location}</h1>
      {hospitals.length > 0 ? (
        <ul>
          {hospitals.map((hospital, index) => (
            <li key={index} className="p-3 bg-gray-100 mb-2 rounded-lg">
              <h2 className="font-semibold">{hospital.name}</h2>
              <p>{hospital.address}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hospitals found...</p>
      )}
    </div>
  );
}
