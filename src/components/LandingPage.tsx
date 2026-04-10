import { motion } from 'motion/react';

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="min-h-screen matrix-bg flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-col items-center"
      >
        <div className="mb-8 relative">
          <motion.div 
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="text-7xl mb-4 filter drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]"
          >
            🐢
          </motion.div>
          <div className="absolute -top-2 -right-6 bg-[#ff003c] text-white text-[10px] font-bold px-2 py-0.5 rounded-full rotate-12 animate-pulse">
            打工人专属
          </div>
        </div>
        
        <h1 
          className="text-6xl md:text-8xl font-black mb-2 tracking-tighter text-white font-orbitron glitch-text"
          data-text="WBTI"
        >
          WBTI
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#4ade80] font-zcool tracking-widest">
          王八TI人格鉴定
        </h2>
        
        <div className="space-y-4 mb-12">
          <p className="text-[#d1d5db] text-lg md:text-2xl font-medium leading-relaxed">
            你是老实<span className="text-[#ffffff] border-b-2 border-[#4ade80]">打工鳖</span>，<br/>
            还是疯批<span className="text-[#ff003c] border-b-2 border-[#ff003c]">暴富王</span>？
          </p>
          <p className="text-[#6b7280] text-sm md:text-base font-mono uppercase tracking-[0.2em]">
            Wealth Behavior Type Indicator
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="relative group overflow-hidden border-2 border-cyber-green bg-transparent px-10 py-5 text-cyber-green font-bold text-2xl md:text-3xl transition-all hover:bg-cyber-green hover:text-cyber-black"
        >
          <span className="relative z-10">启动王八TI鉴定</span>
          <div className="absolute inset-0 h-full w-full bg-cyber-green/20 blur-md group-hover:opacity-100 opacity-0 transition-opacity animate-pulse"></div>
        </motion.button>
      </motion.div>
    </div>
  );
}
