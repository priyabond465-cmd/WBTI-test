import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Question, Option } from '../data/questions';

interface QuizPageProps {
  questions: Question[];
  onComplete: (answers: Record<number, { dimension: string, crazyScore: number }>) => void;
}

export default function QuizPage({ questions, onComplete }: QuizPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, { dimension: string, crazyScore: number }>>({});
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  
  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  const handleOptionClick = (option: Option, idx: number) => {
    if (selectedIdx !== null) return; // Prevent double clicks
    
    setSelectedIdx(idx);
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: { dimension: option.dimension, crazyScore: option.crazyScore }
    };
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setSelectedIdx(null);
      }, 600);
    } else {
      setTimeout(() => {
        onComplete(newAnswers);
      }, 600);
    }
  };

  return (
    <div className="min-h-screen matrix-bg flex flex-col p-6 max-w-2xl mx-auto w-full">
      {/* Progress Bar */}
      <div className="w-full mt-8 mb-12 z-10">
        <div className="flex justify-between text-xs font-orbitron text-cyber-green mb-2">
          <span>ENERGY_LEVEL</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden border border-gray-700">
          <motion.div 
            className="h-full bg-cyber-green shadow-[0_0_10px_#00FF00]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question Area */}
      <div className="flex-1 flex flex-col justify-center z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <div className="mb-8 border-l-4 border-cyber-red pl-4">
              <span className="text-cyber-red font-orbitron text-sm block mb-2">Q_{currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                {currentQuestion.text}
              </h2>
            </div>

            <div className="space-y-4">
              {currentQuestion.options.map((option, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionClick(option, idx)}
                  animate={selectedIdx === idx ? {
                    borderColor: ['#3b82f6', '#00FF00', '#3b82f6'],
                    boxShadow: [
                      '0 0 0px rgba(0, 255, 0, 0)',
                      '0 0 20px rgba(0, 255, 0, 0.8)',
                      '0 0 0px rgba(0, 255, 0, 0)'
                    ],
                    backgroundColor: ['rgba(17, 24, 39, 0.5)', 'rgba(0, 255, 0, 0.2)', 'rgba(17, 24, 39, 0.5)']
                  } : {}}
                  transition={{ duration: 0.4 }}
                  className={`w-full text-left p-4 border transition-all rounded-sm group relative overflow-hidden ${
                    selectedIdx === idx 
                      ? 'border-cyber-green bg-gray-800/80' 
                      : 'border-gray-700 bg-gray-900/50 hover:bg-gray-800 hover:border-cyber-blue'
                  }`}
                >
                  <div className={`absolute left-0 top-0 h-full w-1 bg-cyber-blue transition-opacity ${
                    selectedIdx === idx ? 'opacity-100 bg-cyber-green' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                  
                  {/* Flash Overlay */}
                  {selectedIdx === idx && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-white z-0"
                    />
                  )}

                  <span className={`relative z-10 transition-colors ${
                    selectedIdx === idx ? 'text-white font-bold' : 'text-gray-200 group-hover:text-white'
                  }`}>
                    {option.text}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
