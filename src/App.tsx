import { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import QuizPage from './components/QuizPage';
import LoadingPage from './components/LoadingPage';
import ResultPage from './components/ResultPage';
import ComparisonPage from './components/ComparisonPage';
import { questions, shuffleQuestions, Question } from './data/questions';
import { calculateResult, ResultPayload } from './data/results';

type AppState = 'landing' | 'quiz' | 'loading' | 'result' | 'comparison';

export default function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [result, setResult] = useState<ResultPayload | null>(null);
  
  const [challenger, setChallenger] = useState<ResultPayload | null>(null);

  useEffect(() => {
    setShuffledQuestions(shuffleQuestions());

    // Check for challenger in URL
    const params = new URLSearchParams(window.location.search);
    const challengerType = params.get('challenger');
    const challengerScore = params.get('score');

    if (challengerType && challengerScore) {
      // Mock answers to get the challenger's result data
      const dummyAnswers: Record<number, { dimension: string, crazyScore: number }> = {};
      for (let i = 0; i < 4; i++) {
        dummyAnswers[i] = { dimension: challengerType[i], crazyScore: 0 };
      }
      dummyAnswers[4] = { dimension: challengerType[0], crazyScore: parseInt(challengerScore) };
      
      const cResult = calculateResult(dummyAnswers);
      setChallenger(cResult);
    }
  }, []);

  const handleStart = () => {
    setAppState('quiz');
  };

  const handleQuizComplete = (answers: Record<number, { dimension: string, crazyScore: number }>) => {
    const calculatedResult = calculateResult(answers);
    setResult(calculatedResult);
    setAppState('loading');
  };

  const handleLoadingComplete = () => {
    if (challenger) {
      setAppState('comparison');
    } else {
      setAppState('result');
    }
  };

  const handleRestart = () => {
    setShuffledQuestions(shuffleQuestions());
    setResult(null);
    // Keep challenger if they want to re-test against the same person
    setAppState('landing');
  };

  const handleGoToMyResult = () => {
    setAppState('result');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-cyber-green selection:text-black">
      {appState === 'landing' && <LandingPage onStart={handleStart} />}
      {appState === 'quiz' && <QuizPage questions={shuffledQuestions} onComplete={handleQuizComplete} />}
      {appState === 'loading' && <LoadingPage onComplete={handleLoadingComplete} />}
      {appState === 'comparison' && result && challenger && (
        <ComparisonPage 
          myResult={result} 
          challengerResult={challenger} 
          onRestart={handleGoToMyResult} 
        />
      )}
      {appState === 'result' && result && (
        <ResultPage 
          result={result.resultData} 
          baseType={result.baseType}
          totalCrazyScore={result.totalCrazyScore}
          radarData={result.radarData}
          matchRate={result.matchRate}
          onRestart={handleRestart} 
        />
      )}
    </div>
  );
}
