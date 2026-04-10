import React from 'react';

interface AvatarProps {
  className?: string;
}

// Helper for the base turtle shape
const TurtleBase = ({ color = "#D1FAE5", stroke = "#1F2937" }) => (
  <>
    <path d="M150 250C150 220 170 200 200 200C230 200 250 220 250 250V350H150V250Z" fill={color} stroke={stroke} strokeWidth="4"/>
    <circle cx="185" cy="235" r="5" fill={stroke}/>
    <circle cx="215" cy="235" r="5" fill={stroke}/>
  </>
);

// N级 (牛马区)
const CorporateNiuma = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#E5E7EB" />
    <path d="M190 255C190 260 210 260 210 255" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/>
    <rect x="130" y="300" width="140" height="80" fill="white" stroke="#1F2937" strokeWidth="4"/>
    <path d="M140 310H260M140 325H260" stroke="#1F2937" strokeWidth="2"/>
    <circle cx="100" cy="150" r="30" stroke="#1F2937" strokeWidth="6"/>
  </svg>
);

const SteadyOldDog = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#94A3B8" />
    <path d="M190 255H210" stroke="#1F2937" strokeWidth="2"/>
    <rect x="100" y="100" width="200" height="50" fill="#64748B" stroke="#1F2937" strokeWidth="4"/>
  </svg>
);

const GoodGuyTM = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#CBD5E1" />
    <path d="M180 255C180 270 220 270 220 255" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="200" cy="150" r="20" stroke="#1F2937" strokeWidth="4"/>
  </svg>
);

const PaidTouchFisher = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#94A3B8" />
    <path d="M180 255C180 270 220 270 220 255" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/>
    <path d="M100 250H140M260 250H300" stroke="#1F2937" strokeWidth="4"/>
    <circle cx="320" cy="250" r="10" fill="#3B82F6"/>
  </svg>
);

// R级 (搞钱区)
const BuddhaHamster = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#FEF9C3" />
    <path d="M190 255C190 260 210 260 210 255" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="200" cy="150" r="30" fill="#FDE047" stroke="#1F2937" strokeWidth="4"/>
  </svg>
);

const CouponPsycho = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#BBF7D0" />
    <path d="M190 255H210" stroke="#1F2937" strokeWidth="2"/>
    <rect x="130" y="280" width="140" height="60" fill="#FDE047" stroke="#1F2937" strokeWidth="4"/>
    <text x="200" y="320" textAnchor="middle" fill="#1F2937" fontSize="20" fontWeight="bold">COUPON</text>
  </svg>
);

const MoonlightYolo = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#FBCFE8" />
    <path d="M170 260C170 290 230 290 230 260" fill="#FF003C" stroke="#1F2937" strokeWidth="4"/>
    <circle cx="100" cy="200" r="20" fill="#F472B6"/>
  </svg>
);

const Houdini6PM = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#D1FAE5" />
    <path d="M200 200V150" stroke="#1F2937" strokeWidth="4" strokeDasharray="4 4"/>
    <text x="200" y="130" textAnchor="middle" fill="#1F2937" fontSize="24" fontWeight="bold">18:00</text>
  </svg>
);

const WalkingAbacus = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#FEF08A" />
    <rect x="140" y="280" width="120" height="60" fill="#F3F4F6" stroke="#1F2937" strokeWidth="4"/>
    <path d="M160 290V330M180 290V330M200 290V330M220 290V330" stroke="#1F2937" strokeWidth="2"/>
  </svg>
);

const FakeHustler = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#D1FAE5" />
    <path d="M150 200L100 150M250 200L300 150" stroke="#1F2937" strokeWidth="4"/>
    <text x="200" y="180" textAnchor="middle" fill="#1F2937" fontSize="14">BUSY...</text>
  </svg>
);

const SideHustleFboy = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#BAE6FD" />
    <circle cx="100" cy="250" r="15" fill="#3B82F6"/>
    <circle cx="300" cy="250" r="15" fill="#10B981"/>
    <circle cx="200" cy="150" r="15" fill="#F59E0B"/>
  </svg>
);

const CryptoSimp = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#DBEAFE" />
    <circle cx="200" cy="150" r="40" fill="#DBEAFE" opacity="0.5"/>
    <text x="200" y="160" textAnchor="middle" fill="#1F2937" fontSize="30" fontWeight="bold">₿</text>
  </svg>
);

// SR级 (高手区)
const ZeroDollarChad = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#DDD6FE" />
    <text x="300" y="250" textAnchor="middle" fill="#7C3AED" fontSize="24" fontWeight="bold">FREE</text>
    <path d="M100 200L150 250" stroke="#7C3AED" strokeWidth="4"/>
  </svg>
);

const InfoBroker = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#F5D0FE" />
    <path d="M100 250H300" stroke="#C026D3" strokeWidth="2" strokeDasharray="4 4"/>
    <circle cx="100" cy="250" r="10" fill="#C026D3"/>
    <circle cx="300" cy="250" r="10" fill="#C026D3"/>
  </svg>
);

const SigmaGrinder = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#1F2937" stroke="#F472B6" />
    <rect x="180" y="280" width="40" height="10" fill="#F472B6"/>
    <text x="200" y="150" textAnchor="middle" fill="#F472B6" fontSize="40" fontWeight="bold">Σ</text>
  </svg>
);

const GreenTeaBitch = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#FDF2F8" stroke="#EC4899" />
    <path d="M180 255C180 270 220 270 220 255" stroke="#EC4899" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="200" cy="150" r="25" fill="#FBCFE8" stroke="#EC4899" strokeWidth="2"/>
  </svg>
);

// SSR / UR级 (变异隐藏区)
const SupremeCuck = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#E2E8F0" />
    <path d="M150 150C150 100 250 100 250 150" stroke="#64748B" strokeWidth="8" fill="none"/>
    <text x="200" y="80" textAnchor="middle" fill="#64748B" fontSize="20">SUPREME</text>
  </svg>
);

const DigitalBuddha = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#FEF9C3" stroke="#FACC15" />
    <circle cx="200" cy="250" r="120" stroke="#FACC15" strokeWidth="2" strokeDasharray="10 10"/>
    <text x="200" y="150" textAnchor="middle" fill="#FACC15" fontSize="40">卍</text>
  </svg>
);

const GhostFlipper = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#1F2937" stroke="#6366F1" />
    <path d="M100 100L300 400M300 100L100 400" stroke="#6366F1" strokeWidth="2" opacity="0.3"/>
    <text x="200" y="150" textAnchor="middle" fill="#6366F1" fontSize="40" fontWeight="bold">GHOST</text>
  </svg>
);

const BossSugarBaby = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#FDF2F8" stroke="#F472B6" />
    <circle cx="200" cy="130" r="30" fill="#FDE047" stroke="#F472B6" strokeWidth="4"/>
    <path d="M200 160V200" stroke="#F472B6" strokeWidth="4"/>
  </svg>
);

const HardcoreSoftRice = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#F1F5F9" stroke="#475569" />
    <rect x="130" y="300" width="140" height="40" fill="#94A3B8" stroke="#475569" strokeWidth="4"/>
    <text x="200" y="330" textAnchor="middle" fill="white" fontSize="20">SOFT RICE</text>
  </svg>
);

const OfficeDramaQueen = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#FAE8FF" stroke="#D946EF" />
    <path d="M150 150L200 100L250 150" fill="#D946EF"/>
    <circle cx="200" cy="150" r="10" fill="#D946EF"/>
  </svg>
);

const CrazyMoneyPsycho = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#1F2937" stroke="#FF003C" />
    <path d="M170 240L190 260M230 240L210 260" stroke="#FF003C" strokeWidth="4"/>
    <text x="200" y="150" textAnchor="middle" fill="#FF003C" fontSize="50" fontWeight="bold">疯</text>
  </svg>
);

const WalkingMoneyPrinter = ({ className }: AvatarProps) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="white"/>
    <TurtleBase color="#FEF9C3" stroke="#FACC15" />
    <rect x="120" y="300" width="160" height="80" fill="#FACC15" stroke="#1F2937" strokeWidth="4"/>
    <path d="M140 320H260M140 340H260M140 360H260" stroke="#1F2937" strokeWidth="2"/>
    <text x="200" y="150" textAnchor="middle" fill="#FACC15" fontSize="60" fontWeight="bold">$</text>
  </svg>
);

export const ArchetypeAvatars: Record<string, React.FC<AvatarProps>> = {
  // N
  'GTYJ': CorporateNiuma,
  'GLXM': SteadyOldDog,
  'GLYJ': GoodGuyTM,
  'GTYM': PaidTouchFisher,
  // R
  'GLYM': BuddhaHamster,
  'GLXJ': CouponPsycho,
  'DTYM': MoonlightYolo,
  'GTXM': Houdini6PM,
  'GTXJ': WalkingAbacus,
  'DTYJ': FakeHustler,
  'DTXM': SideHustleFboy,
  'DLYM': CryptoSimp,
  // SR
  'SR_CHAD': ZeroDollarChad,
  'SR_BROKER': InfoBroker,
  'SR_SIGMA': SigmaGrinder,
  'SR_BITCH': GreenTeaBitch,
  // SSR / UR
  'UR_CUCK': SupremeCuck,
  'UR_BUDDHA': DigitalBuddha,
  'SSR_FLIPPER': GhostFlipper,
  'SSR_SUGAR': BossSugarBaby,
  'SSR_RICE': HardcoreSoftRice,
  'SSR_QUEEN': OfficeDramaQueen,
  'SSR_PSYCHO': CrazyMoneyPsycho,
  'SSR_PRINTER': WalkingMoneyPrinter,
  // Fallbacks for old keys if needed
  'DLXJ': WalkingMoneyPrinter,
  'DLXM': SigmaGrinder,
  'DLYJ': CrazyMoneyPsycho,
  'DEFAULT': GoodGuyTM
};
