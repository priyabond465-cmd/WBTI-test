import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const loadingTexts = [
  "正在扫描你的钱包厚度...",
  "正在读取你的微信余额...",
  "检测到异常心眼子波动...",
  "正在匹配天选搞钱克星...",
  "正在生成终极鉴定报告..."
];

interface LoadingPageProps {
  onComplete: () => void;
}

export default function LoadingPage({ onComplete }: LoadingPageProps) {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev >= loadingTexts.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    const timeout = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen matrix-bg flex flex-col items-center justify-center p-6 text-center">
      <div className="z-10 flex flex-col items-center">
        <div className="relative w-24 h-24 mb-8">
          <motion.div
            className="absolute inset-0 border-4 border-t-cyber-green border-r-transparent border-b-cyber-blue border-l-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 border-4 border-t-transparent border-r-cyber-red border-b-transparent border-l-cyber-green rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 flex items-center justify-center font-orbitron text-xs text-white">
            {Math.min(100, Math.round((textIndex / (loadingTexts.length - 1)) * 100))}%
          </div>
        </div>
        
        <motion.div
          key={textIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-xl text-cyber-green font-bold tracking-wider glitch-text"
          data-text={loadingTexts[textIndex]}
        >
          {loadingTexts[textIndex]}
        </motion.div>
        
        <div className="mt-12 w-64 h-1 bg-gray-800 overflow-hidden">
          <motion.div 
            className="h-full bg-cyber-red"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
}
