import { motion } from 'motion/react';
import { ResultData } from '../data/results';
import PsychoAvatar from './PsychoAvatar';

interface ResultPayload {
  resultData: ResultData;
  baseType: string;
  totalCrazyScore: number;
  radarData: { risk: number; social: number; scheme: number; exec: number };
}

interface ComparisonPageProps {
  myResult: ResultPayload;
  challengerResult: ResultPayload;
  onRestart: () => void;
}

export default function ComparisonPage({ myResult, challengerResult, onRestart }: ComparisonPageProps) {
  // Calculate compatibility
  let matchScore = 0;
  for (let i = 0; i < 4; i++) {
    if (myResult.baseType[i] === challengerResult.baseType[i]) {
      matchScore += 25;
    }
  }

  // Adjust based on crazy score difference
  const scoreDiff = Math.abs(myResult.totalCrazyScore - challengerResult.totalCrazyScore);
  if (scoreDiff > 50) matchScore -= 15;
  if (scoreDiff < 20) matchScore += 10;
  
  matchScore = Math.max(0, Math.min(100, matchScore));

  let dynamicText = "";
  if (matchScore >= 80) {
    dynamicText = "你们俩简直是天造地设的搞钱搭子，合伙绝对能干票大的！";
  } else if (matchScore >= 50) {
    dynamicText = "你们的搞钱理念有一定差异，正好可以互补，但小心分赃不均。";
  } else {
    dynamicText = "你们俩天生八字不合，如果是合伙人，建议立刻分家保平安。";
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'UR': return 'text-cyber-red';
      case 'SSR': return 'text-purple-500';
      case 'SR': return 'text-cyber-blue';
      case 'R': return 'text-cyber-green';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen matrix-bg py-8 px-4 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl z-10 flex flex-col items-center"
      >
        <div className="mb-4 inline-block border border-cyber-blue px-3 py-1 text-xs text-cyber-blue font-orbitron tracking-widest">
          MATCH_ANALYSIS //
        </div>
        
        <h1 className="text-4xl font-zcool text-white mb-8 glitch-text" data-text="搞钱修罗场">搞钱修罗场</h1>

        <div className="flex w-full justify-between items-stretch gap-4 mb-8">
          {/* Challenger (Friend) */}
          <div className="flex-1 bg-gray-900/80 border border-gray-700 p-4 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-cyber-red"></div>
            <h3 className="text-gray-400 text-xs mb-4 font-orbitron">CHALLENGER</h3>
            <div className="w-24 h-24 mx-auto mb-4">
              <PsychoAvatar level={challengerResult.resultData.level} avatarKey={challengerResult.resultData.avatarKey} />
            </div>
            <h2 className={`text-xl font-zcool mb-1 ${getLevelColor(challengerResult.resultData.level)}`}>
              {challengerResult.resultData.title}
            </h2>
            <p className="text-xs text-gray-500 font-orbitron mb-2">{challengerResult.baseType}</p>
            <div className="text-xs text-gray-400 bg-black/50 p-2 rounded">
              疯批值: {challengerResult.totalCrazyScore}
            </div>
          </div>

          {/* VS */}
          <div className="flex flex-col justify-center items-center px-2">
            <div className="text-3xl font-orbitron text-cyber-red italic font-bold">VS</div>
          </div>

          {/* You */}
          <div className="flex-1 bg-gray-900/80 border border-gray-700 p-4 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-cyber-green"></div>
            <h3 className="text-gray-400 text-xs mb-4 font-orbitron">YOU</h3>
            <div className="w-24 h-24 mx-auto mb-4">
              <PsychoAvatar level={myResult.resultData.level} avatarKey={myResult.resultData.avatarKey} />
            </div>
            <h2 className={`text-xl font-zcool mb-1 ${getLevelColor(myResult.resultData.level)}`}>
              {myResult.resultData.title}
            </h2>
            <p className="text-xs text-gray-500 font-orbitron mb-2">{myResult.baseType}</p>
            <div className="text-xs text-gray-400 bg-black/50 p-2 rounded">
              疯批值: {myResult.totalCrazyScore}
            </div>
          </div>
        </div>

        {/* Compatibility Score */}
        <div className="w-full bg-black/60 border border-gray-700 p-6 mb-8 text-center">
          <h3 className="text-gray-400 text-sm mb-2">搞钱契合度</h3>
          <div className="text-5xl font-orbitron text-white mb-4">
            {matchScore}<span className="text-2xl text-cyber-blue">%</span>
          </div>
          <div className="w-full h-2 bg-gray-800 mb-4 overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyber-red via-purple-500 to-cyber-green"
              initial={{ width: 0 }}
              animate={{ width: `${matchScore}%` }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <p className="text-cyber-green text-sm">{dynamicText}</p>
        </div>

        <button 
          onClick={onRestart}
          className="w-full py-4 bg-cyber-blue text-black font-bold text-lg hover:bg-blue-400 transition-colors"
        >
          我也要生成我的专属海报
        </button>
      </motion.div>
    </div>
  );
}
