// components/Flashcard.tsx
import React, { useState } from 'react';

interface FlashcardProps {
  question: string;
  answer: string;
  flip : boolean;
}

const Flashcard: React.FC<FlashcardProps> = ({ question, answer , flip}) => {
  const [isFlipped , setIsFlipped] = useState(flip);

  return (
    <div
      className="perspective-1000 w-full max-w-sm h-full mx-auto my-4"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-64 shadow-purple-900 border-2 border-purple-800 shadow-lg rounded-lg cursor-pointer transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full shadow-lg backface-hidden overflow-auto">
          <div className={`p-6 text-center flex items-center justify-center h-full rounded-lg bg-black text-purple-600 overflow-auto ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
            <h3 className="text-lg font-bold overflow-auto">{question}</h3>
          </div>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 overflow-auto">
          <div className={`p-6 pt-10 text-center flex items-center justify-center h-full rounded-lg bg-black text-purple-600  ${isFlipped ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-lg ">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
