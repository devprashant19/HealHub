import { Wrapper, Status } from '@googlemaps/react-wrapper';

export default function Map({ lat, lng }: { lat: number; lng: number }) {
  return (
    <Wrapper apiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <div className="h-80 w-full bg-gray-200">
        Google Maps Here
      </div>
    </Wrapper>
  );
}