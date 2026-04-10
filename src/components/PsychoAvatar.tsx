import { useState, useEffect } from 'react';
import { ResultData } from '../data/results';
import { motion } from 'motion/react';
import { ArchetypeAvatars } from './ArchetypeAvatars';

interface PsychoAvatarProps {
  level: ResultData['level'];
  avatarKey: string;
  matchRate?: number;
}

const AVATAR_MAP: Record<string, string> = {
  'GTYJ': '/1.png',
  'GLXM': '/2.png',
  'GLYJ': '/3.png',
  'GTYM': '/4.png',
  'GLYM': '/5.png',
  'GTXJ': '/6.png',
  'DTYJ': '/7.png',
  'GLXJ': '/8.png',
  'DTYM': '/9.png',
  'GTXM': '/10.png',
  'DTXM': '/11.png',
  'DLYM': '/12.png',
  'SR_CHAD': '/13.png',
  'SR_BROKER': '/14.png',
  'SR_SIGMA': '/15.png',
  'SR_BITCH': '/16.png',
  'UR_CUCK': '/17.png',
  'UR_BUDDHA': '/18.png',
  'SSR_FLIPPER': '/19.png',
  'SSR_SUGAR': '/20.png',
  'SSR_RICE': '/21.png',
  'SSR_QUEEN': '/22.png',
  'SSR_PSYCHO': '/23.png',
  'SSR_PRINTER': '/24.png',
};

export default function PsychoAvatar({ level, avatarKey, matchRate = 100 }: PsychoAvatarProps) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  
  // Chaos Mutant logic
  const isChaos = matchRate === 99 && level === 'SSR';
  const imgSrc = AVATAR_MAP[avatarKey];
  const FallbackAvatar = ArchetypeAvatars[avatarKey] || ArchetypeAvatars['DEFAULT'];

  useEffect(() => {
    if (imgSrc) {
      const img = new Image();
      img.src = imgSrc;
      img.onload = () => {
        setImgLoaded(true);
        setImgError(false);
      };
      img.onerror = () => {
        setImgError(true);
        setImgLoaded(false);
      };
    }
  }, [imgSrc]);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl border-2 border-white/10 bg-gray-900/50">
      <motion.div
        className="w-full h-full relative"
        animate={isChaos ? {
          x: [-2, 2, -2, 2, 0],
          y: [-2, 2, 2, -2, 0],
          filter: ['hue-rotate(0deg)', 'hue-rotate(90deg)', 'hue-rotate(180deg)', 'hue-rotate(270deg)', 'hue-rotate(360deg)']
        } : {}}
        transition={{ repeat: Infinity, duration: 0.2, ease: "linear" }}
      >
        {imgSrc && !imgError ? (
          <>
            {!imgLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <FallbackAvatar className="w-full h-full opacity-30 animate-pulse" />
              </div>
            )}
            <img 
              src={imgSrc} 
              alt={avatarKey}
              className={`w-full h-full object-cover transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          </>
        ) : (
          <FallbackAvatar className="w-full h-full" />
        )}
      </motion.div>
    </div>
  );
}
