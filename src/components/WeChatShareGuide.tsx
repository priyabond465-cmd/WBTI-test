import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';

interface WeChatShareGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WeChatShareGuide({ isOpen, onClose }: WeChatShareGuideProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[3000] bg-black/80 backdrop-blur-sm flex flex-col items-end p-6"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-right text-white"
          >
            <div className="flex justify-end mb-2">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  x: [0, 5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              >
                <ArrowUpRight size={48} className="text-[#00FFFF]" />
              </motion.div>
            </div>
            <h3 className="text-xl font-black mb-2">点击右上角分享</h3>
            <p className="text-sm text-gray-300">
              发送给好友或分享到朋友圈<br/>
              让大家看看你的<span className="text-[#ffd700]">搞钱段位</span>！
            </p>
          </motion.div>

          <div className="mt-auto w-full flex justify-center pb-12">
            <button 
              onClick={onClose}
              className="px-8 py-3 rounded-full border border-white/20 bg-white/10 text-white text-sm font-bold flex items-center gap-2"
            >
              <X size={16} />
              我知道了
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
