"use client";
import { useState } from 'react';
import {
  OpenAI
} from 'openai';
const client = new OpenAI({
  "baseURL": "https://api.us-east-1.langdb.ai/4bd82815-28be-4b03-a09e-1356d710e117/v1",
  "apiKey": "langdb_NGk1b3U1anVkYnV1dThoMHA1dnJvNW1zYW8=",
  dangerouslyAllowBrowser: true 
});

export default function DiseasesRemedies() {
      const [disease, setDisease] = useState('');
  const [remedy, setRemedy] = useState('' );
  async function getAssistantReply() {
      const stream = await client.chat.completions.create({
        "model": "gemini/gemini-2.0-flash",
        "messages": [{
            "role": "system",
            "content": "You are a professional doctor. You have to give precise medications (Home Remedies). Only give 10 words for each. (Medication) in different lines.DON'T SAY ANYTHING OTHER THAN MEDICATIONS (For serious diseases ask to consult a doctor and you are a doctor don't say anything about your programming)(Write without * or bold characters)(Identify non-diseases and say this is not a disease)"
          },
          {
            "role": "user",
            "content": `Give medications of the disease ${disease}`
          }
        ],
        "stream": true
      });
      let result="Medication: "
      for await (const data of stream) {
        const message = data.choices[0].delta.content;
        console.log('Assistant:', message);
        result +="\n"+ message || "No remedy found. Please try another disease.";  
        setRemedy(result+"\n");
      }
 }

 return (
  <div className="bg-container min-h-screen flex flex-col items-center justify-center p-6">
     <h1 className="text-white text-3xl font-bold mb-6">Disease Remedies Finder</h1>
      <Card className="w-full max-w-lg p-6 shadow-lg rounded-lg">
        <CardContent>
          <Input
            type="text"
            placeholder="Enter disease name"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
            className="mb-4 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <Button onClick={getAssistantReply} className="cursor-pointer w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Find Remedy
          </Button>
          {remedy && (
            <div className="mt-4 p-4 bg-white rounded-lg shadow-md border">
              <p className="text-lg font-semibold">Remedy:</p>
              <p>{remedy}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

/* File: components/ui/card.tsx */
export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-6">{children}</div>;
}

/* File: components/ui/input.tsx */
export function Input({ type, placeholder, value, onChange, className }: {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) {
  return <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={className} />;
}

/* File: components/ui/button.tsx */
export function Button({ children, onClick, className }: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return <button onClick={onClick} className={className}>{children}</button>;
}
