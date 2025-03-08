"use client";
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
  OpenAI
} from 'openai';
const client = new OpenAI({
  "baseURL": "https://api.us-east-1.langdb.ai/4bd82815-28be-4b03-a09e-1356d710e117/v1",
  "apiKey": "langdb_NGk1b3U1anVkYnV1dThoMHA1dnJvNW1zYW8=",
  dangerouslyAllowBrowser: true 
});
import './ChatbotComponent.css'; 

const ChatbotComponent = () => {
  let resp="";

    async function getAssistantReply(resp:string,msg: string) {
        const stream = await client.chat.completions.create({
          "model": "gemini/gemini-2.0-flash",
          "messages": [{
              "role": "system",
              "content": "You are a professional AI Chatbot.Only speak formally and no useless words Ask basic details before giving medications. Give medications in two parts- Home Remedies and Professional Remedies(Write without * or bold characters)(DON'T SAY I'm AN AI CHATBOT)"
            },
            {
              "role": "user",
              "content": `${resp}+${msg}`
            }
          ],
          "stream": true
        });
        let result=""
        for await (const data of stream) {
          const message = data.choices[0].delta.content;
          console.log('Assistant:', message);
          result +="\n"+ message || "No remedy found. Please try another disease.";
        }
        return result;
   }



  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ text: string; sender: string; error?: boolean }[]>([
      { text: "Hello! I'm your health assistant. How can I help you today?", sender: 'bot' }
    ]);
  const [isLoading, setIsLoading] = useState(false);
  const [diseases, setDiseases] = useState<{ id: string; name: string }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim() === '') return;
    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      const response = await getAssistantReply(resp,userMessage.text);
      setMessages(prev => [...prev, {
        text: response,
        sender: 'bot'
      }]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, {
        text: "Sorry, I'm having trouble connecting to my knowledge base. Please try again later.",
        sender: 'bot',
        error: true
      }]);
      setIsLoading(false);
    }
  };

  const handleQuickReply = (disease: { id: string; name: string }) => {
    const message = `Tell me about ${disease.name}`;
    setInput(message);

    // Simulate a click on the submit button
    const sendButton = document.getElementById('send-button');
    if (sendButton) {
      sendButton.click();
    }
  };

  return (
    <div className='bg-container min-h-screen font-poppinsflex justify-space-between'>
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h2>Health Assistant</h2>
      </div>

      <div className="messages-container">
        {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
            <div className={`bubble ${message.error ? 'error' : ''}`}>
              {message.text.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                  {line}
                  {i < message.text.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
        {isLoading && (
            <div className="message bot">
            <div className="bubble typing">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="quick-replies">
        <p>Common health topics:</p>
        <div className="quick-reply-buttons">
          {diseases.slice(0, 5).map((disease) => (
              <button
              key={disease.id}
              onClick={() => handleQuickReply(disease)}
              className="quick-reply-btn"
              >
              {disease.name}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Ask about a health condition..."
          disabled={isLoading}
          />
        <button
          type="submit"
          disabled={isLoading || input.trim() === ''}
          id="send-button"
          >
          Send
        </button>
      </form>
    </div>
    </div>
  );
};

export default ChatbotComponent;
