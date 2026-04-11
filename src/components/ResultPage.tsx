import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import html2canvas from 'html2canvas';
import confetti from 'canvas-confetti';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { ResultData } from '../data/results';
import PsychoAvatar from './PsychoAvatar';
import { Dna, VenetianMask, Flame, Coins, Gem, Radar as RadarIcon, Handshake, Skull, Sparkles, Target, AlertTriangle, TrendingUp, Users, Calendar, Info, Award, Turtle } from 'lucide-react';

interface ResultPageProps {
  result: ResultData;
  baseType: string;
  totalCrazyScore: number;
  radarData: { risk: number; social: number; scheme: number; exec: number };
  matchRate: number;
  onRestart: () => void;
}

export default function ResultPage({ result, baseType, totalCrazyScore, radarData, matchRate, onRestart }: ResultPageProps) {
  const posterRef = useRef<HTMLDivElement>(null);
  const [posterUrl, setPosterUrl] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [isCapturing, setIsCapturing] = useState(true);
  const [showRareModal, setShowRareModal] = useState(false);

  // Automatically generate the shareable image on mount
  useEffect(() => {
    // Trigger fireworks for rare levels (R, SR, SSR, UR)
    const isRare = ['R', 'SR', 'SSR', 'UR'].includes(result.level);
    
    if (isRare) {
      // Enhanced fireworks
      const duration = 8 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 45, spread: 360, ticks: 120, zIndex: 3000 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 100 * (timeLeft / duration);
        
        // Multiple bursts from different positions
        confetti({ 
          ...defaults, 
          particleCount, 
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ['#ff003c', '#ffd700', '#00ffff', '#a855f7', '#ffffff']
        });
        confetti({ 
          ...defaults, 
          particleCount, 
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ['#ff003c', '#ffd700', '#00ffff', '#a855f7', '#ffffff']
        });
        confetti({ 
          ...defaults, 
          particleCount: particleCount * 1.5, 
          origin: { x: 0.5, y: 0.6 },
          colors: ['#ffd700', '#ffffff', '#00ffff']
        });
        
        // Side cannons
        if (timeLeft % 1000 < 300) {
          confetti({
            ...defaults,
            particleCount: 40,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff003c', '#ffd700']
          });
          confetti({
            ...defaults,
            particleCount: 40,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#00ffff', '#a855f7']
          });
        }
      }, 300);

      // Show the "High Class" modal after a short delay
      const modalTimer = setTimeout(() => {
        setShowRareModal(true);
      }, 1500);

      return () => {
        clearInterval(interval);
        clearTimeout(modalTimer);
      };
    }

    const timer = setTimeout(async () => {
      if (posterRef.current) {
        try {
          const canvas = await html2canvas(posterRef.current, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#000000',
            logging: false
          });
          setPosterUrl(canvas.toDataURL('image/png'));
        } catch (error) {
          console.error('Failed to auto-generate poster', error);
        } finally {
          setIsCapturing(false);
        }
      }
    }, 1000); // Give time for animations and charts to settle
    return () => clearTimeout(timer);
  }, []);

  const handleShareLink = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('challenger', baseType);
    url.searchParams.set('score', totalCrazyScore.toString());
    
    navigator.clipboard.writeText(url.toString()).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 3000);
    });
  };

  // Theme configuration using explicit hex to avoid oklch issues
  const getTheme = (level: string) => {
    switch (level) {
      case 'UR':
      case 'SSR':
        return {
          bg: 'bg-[#0a0000]',
          cardBg: 'bg-[#1a0000]',
          border: 'border-[#ff003c]',
          textMain: 'text-[#ffffff]',
          textSub: 'text-[#d1d5db]',
          accent: 'text-[#ff003c]', 
          accent2: 'text-[#ffd700]', 
          glow: 'shadow-[0_0_30px_rgba(255,0,60,0.4)]',
          radarStroke: '#ff003c',
          radarFill: '#ff003c'
        };
      case 'SR':
        return {
          bg: 'bg-[#0f0518]',
          cardBg: 'bg-[#1a0b2e]',
          border: 'border-[#a855f7]',
          textMain: 'text-[#ffffff]',
          textSub: 'text-[#d1d5db]',
          accent: 'text-[#a855f7]', 
          accent2: 'text-[#ffd700]', 
          glow: 'shadow-[0_0_20px_rgba(168,85,247,0.3)]',
          radarStroke: '#a855f7',
          radarFill: '#a855f7'
        };
      case 'R':
        return {
          bg: 'bg-[#000a14]',
          cardBg: 'bg-[#001428]',
          border: 'border-[#3b82f6]',
          textMain: 'text-[#ffffff]',
          textSub: 'text-[#d1d5db]',
          accent: 'text-[#3b82f6]', 
          accent2: 'text-[#e2e8f0]', 
          glow: 'shadow-[0_0_20px_rgba(59,130,246,0.3)]',
          radarStroke: '#3b82f6',
          radarFill: '#3b82f6'
        };
      default: // N
        return {
          bg: 'bg-[#111111]',
          cardBg: 'bg-[#1f1f1f]',
          border: 'border-[#4b5563]',
          textMain: 'text-[#ffffff]',
          textSub: 'text-[#9ca3af]',
          accent: 'text-[#9ca3af]', 
          accent2: 'text-[#eab308]', 
          glow: '',
          radarStroke: '#9ca3af',
          radarFill: '#9ca3af'
        };
    }
  };

  const theme = getTheme(result.level);

  const chartData = [
    { subject: '执行 (J/M)', A: radarData.exec, fullMark: 100 },
    { subject: '风险 (D/G)', A: radarData.risk, fullMark: 100 },
    { subject: '心机 (X/Y)', A: radarData.scheme, fullMark: 100 },
    { subject: '社交 (T/L)', A: radarData.social, fullMark: 100 },
  ];

  const renderStars = (count: number) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < count ? theme.accent2 : "text-[#374151]"}>★</span>
    ));
  };

  const getRarityPercent = (level: string) => {
    switch (level) {
      case 'UR': return 5;
      case 'SSR': return 15;
      case 'SR': return 30;
      case 'R': return 50;
      default: return 80;
    }
  };

  const rarityPercent = getRarityPercent(result.level);
  const rarityLabel = result.level === 'UR' || result.level === 'SSR' ? '传说级' : result.level === 'SR' ? '极稀有' : result.level === 'R' ? '稀有级' : '普通级';

  const FullReport = ({ isPoster = false }: { isPoster?: boolean }) => (
    <div 
      className={`${isPoster ? 'w-[480px]' : 'w-full max-w-md'} ${theme.bg} ${theme.textMain} ${isPoster ? 'p-8' : 'p-6 rounded-2xl border ' + theme.border} relative overflow-hidden font-sans ${!isPoster && theme.glow}`}
      ref={isPoster ? posterRef : null}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="relative z-10">
        {/* Header Section */}
        <div className={`flex items-center justify-between mb-6 border-b ${theme.border} pb-6`}>
          <div className={`w-24 h-24 rounded-xl border-2 ${theme.border} ${theme.cardBg} flex items-center justify-center overflow-hidden`}>
            <PsychoAvatar level={result.level} avatarKey={result.avatarKey} matchRate={matchRate} />
          </div>
          <div className="text-right">
            <div className={`text-5xl font-black font-orbitron ${theme.accent}`}>WBTI</div>
            <div className={`text-xs font-bold tracking-widest ${theme.accent2}`}>王八TI人格鉴定</div>
            <div className={`mt-2 px-2 py-0.5 text-[10px] font-bold inline-block border ${theme.border} ${theme.textMain}`}>
              {matchRate}% ALIGNMENT
            </div>
          </div>
        </div>

        {/* Role Title Section - Highly Prominent */}
        <div className="mb-8 text-center relative">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 12 }}
            className="relative z-10"
          >
            <div className={`text-[10px] font-bold tracking-[0.3em] mb-2 uppercase opacity-50 ${theme.accent}`}>IDENTIFIED_ARCHETYPE</div>
            <h2 className={`text-5xl font-black mb-2 ${theme.accent2} tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]`}>
              {result.title}
            </h2>
            <p className={`text-base font-bold font-orbitron tracking-[0.25em] ${theme.accent} opacity-80 uppercase`}>
              {result.englishTitle}
            </p>
          </motion.div>
          {/* Decorative lines */}
          <div className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-${theme.border.split('-')[1]}-${theme.border.split('-')[2]} to-transparent opacity-20`}></div>
        </div>

        <div className="mb-6 text-center italic text-[13px] text-[#9ca3af] font-medium">
          “你是老实<span className={theme.accent}>打工鳖</span>，还是疯批<span className={theme.accent2}>暴富王</span>？”
        </div>

        {/* Identity Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className={`p-3 rounded-lg ${theme.cardBg} border ${theme.border}`}>
            <div className="flex items-center gap-2 text-[10px] text-[#6b7280] mb-1 uppercase tracking-wider"><Dna size={12}/> Gene Code</div>
            <div className="text-sm font-bold font-orbitron tracking-widest">{baseType}</div>
          </div>
          <div className={`p-3 rounded-lg ${theme.cardBg} border ${theme.border}`}>
            <div className="flex items-center gap-2 text-[10px] text-[#6b7280] mb-1 uppercase tracking-wider"><VenetianMask size={12}/> Archetype</div>
            <div className={`text-sm font-bold ${theme.accent2}`}>{result.title}</div>
          </div>
          <div className={`p-3 rounded-lg ${theme.cardBg} border ${theme.border}`}>
            <div className="flex items-center gap-2 text-[10px] text-[#6b7280] mb-1 uppercase tracking-wider"><Flame size={12}/> Psycho Index</div>
            <div className="text-sm font-bold">{Math.round((totalCrazyScore/160)*100)}%</div>
          </div>
          <div className={`p-3 rounded-lg ${theme.cardBg} border ${theme.border}`}>
            <div className="flex items-center gap-2 text-[10px] text-[#6b7280] mb-1 uppercase tracking-wider"><Coins size={12}/> Wealth Potential</div>
            <div className="text-sm">{renderStars(result.potential)}</div>
          </div>
        </div>

        {/* Radar Chart */}
        <div className={`h-[240px] w-full mb-6 ${theme.cardBg} border ${theme.border} rounded-xl relative p-2 overflow-hidden`}>
          <div className="absolute top-3 left-4 flex items-center gap-1.5 text-[10px] text-[#9ca3af] font-bold uppercase tracking-widest z-20">
            <RadarIcon size={12} className={theme.accent}/> Capability Radar
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="55%" outerRadius="65%" data={chartData}>
              <PolarGrid 
                stroke="rgba(255,255,255,0.3)" 
                strokeWidth={1}
                gridType="polygon" 
                radialLines={true}
              />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fill: '#d1d5db', fontSize: 10, fontWeight: 'bold' }} 
              />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar 
                name="Score" 
                dataKey="A" 
                stroke={theme.radarStroke} 
                strokeWidth={3}
                fill={theme.radarFill} 
                fillOpacity={0.5} 
                isAnimationActive={false} 
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Profile Section */}
        <div className="space-y-6 mb-6">
          <section>
            <h3 className={`flex items-center gap-2 text-sm font-bold mb-2 ${theme.accent2}`}><Info size={16}/> 人格画像</h3>
            <p className="text-[13px] leading-relaxed text-[#d1d5db] bg-[rgba(0,0,0,0.3)] p-3 rounded-lg border border-[rgba(255,255,255,0.05)]">
              {result.description} {result.interpretation}
            </p>
          </section>

          <div className="grid grid-cols-1 gap-4">
            <section className={`p-4 rounded-xl border ${theme.border} ${theme.cardBg}`}>
              <h3 className={`flex items-center gap-2 text-sm font-bold mb-3 ${theme.accent}`}><TrendingUp size={16}/> 天赋技能</h3>
              <ul className="text-[12px] space-y-2 text-[#d1d5db]">
                {result.skills.map((s, i) => <li key={i} className="flex items-start gap-2"><Sparkles size={12} className="mt-0.5 text-[#ffd700] shrink-0"/> {s}</li>)}
              </ul>
            </section>

            <section className={`p-4 rounded-xl border border-[rgba(127,29,29,0.5)] bg-[rgba(69,10,10,0.2)]`}>
              <h3 className="flex items-center gap-2 text-sm font-bold mb-3 text-[#ef4444]"><AlertTriangle size={16}/> 人格缺陷</h3>
              <ul className="text-[12px] space-y-2 text-[#d1d5db]">
                {result.flaws.map((f, i) => <li key={i} className="flex items-start gap-2"><Skull size={12} className="mt-0.5 text-[#ef4444] shrink-0"/> {f}</li>)}
              </ul>
            </section>
          </div>
        </div>

        {/* Money Guide */}
        <section className={`p-5 rounded-xl border ${theme.border} ${theme.cardBg} mb-6`}>
          <h3 className={`flex items-center gap-2 text-sm font-bold mb-4 ${theme.accent2}`}><Target size={16}/> 搞钱忠告</h3>
          <ul className="text-[12px] space-y-2 text-[#d1d5db] mb-6 list-decimal pl-5">
            {result.advice.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-[11px] font-bold text-[#4ade80] uppercase tracking-wider">🎯 今年必做</h4>
              <ul className="text-[11px] space-y-1.5 text-[#9ca3af]">
                {result.mustDos.map((d, i) => <li key={i}>• {d}</li>)}
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-[11px] font-bold text-[#f87171] uppercase tracking-wider">⚠️ 千万别做</h4>
              <ul className="text-[11px] space-y-1.5 text-[#9ca3af]">
                {result.mustNotDos.map((d, i) => <li key={i}>• {d}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Social Relations */}
        <section className="mb-6">
          <h3 className={`flex items-center gap-2 text-sm font-bold mb-3 ${theme.textMain}`}><Handshake size={16}/> 搞钱社交圈</h3>
          <div className={`p-4 rounded-xl border ${theme.border} ${theme.cardBg} space-y-4`}>
            <div>
              <div className="text-[11px] font-bold text-[#4ade80] mb-1 uppercase tracking-wider">🤝 天选CP / 搞钱搭子</div>
              <div className="text-sm font-bold text-cyber-blue">【{result.title}】 + 【{result.cp.name}】</div>
              <div className="text-[11px] text-[#9ca3af] mt-1 italic">“{result.cp.reason}”</div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[rgba(255,255,255,0.05)]">
              <div>
                <div className="text-[10px] font-bold text-[#3b82f6] mb-2 uppercase tracking-wider">🔥 最佳合伙</div>
                <ul className="text-[10px] space-y-1 text-[#d1d5db]">
                  {result.partners.slice(0, 2).map((p, i) => <li key={i}>• {p.name}</li>)}
                </ul>
              </div>
              <div>
                <div className="text-[10px] font-bold text-[#ef4444] mb-2 uppercase tracking-wider">☠️ 相克天敌</div>
                <ul className="text-[10px] space-y-1 text-[#d1d5db]">
                  {result.enemies.slice(0, 2).map((e, i) => <li key={i}>• {e.name}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fortune */}
        <section className={`p-4 rounded-xl border ${theme.border} ${theme.cardBg} mb-6`}>
          <h3 className={`flex items-center gap-2 text-sm font-bold mb-3 ${theme.accent}`}><Calendar size={16}/> 2026搞钱运势</h3>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-[11px]">
            <div className="flex flex-col gap-0.5">
              <span className="text-[#6b7280] uppercase text-[9px] font-bold">💰 财运峰值</span>
              <span className="text-[#ffffff]">{result.fortune.peakMonths}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[#6b7280] uppercase text-[9px] font-bold">👥 贵人运</span>
              <span className="text-[#ffffff]">{result.fortune.luckyPersona}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[#6b7280] uppercase text-[9px] font-bold">⚠️ 水逆注意</span>
              <span className="text-[#f87171]">{result.fortune.warning}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[#6b7280] uppercase text-[9px] font-bold">🎲 关键词</span>
              <span className={`font-bold ${theme.accent}`}>{result.fortune.keywords}</span>
            </div>
          </div>
        </section>

        {/* Rarity Bar */}
        <div className="mb-8 p-4 rounded-xl bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.05)]">
          <div className="flex items-center gap-2 text-[10px] font-bold text-[#9ca3af] mb-3 uppercase tracking-widest"><Award size={12}/> Rarity Ranking</div>
          <div className="space-y-2.5">
            {[
              { label: '传说级', color: '#ef4444', percent: 5 },
              { label: '极稀有', color: '#a855f7', percent: 15 },
              { label: '稀有级', color: '#3b82f6', percent: 30 },
              { label: '普通级', color: '#6b7280', percent: 50 }
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 relative">
                <span className="text-[10px] w-12 text-[#9ca3af]">{item.label}</span>
                <div className="flex-1 h-1.5 bg-[#1f2937] rounded-full overflow-hidden">
                  <div className="h-full" style={{ width: `${item.percent * 2}%`, backgroundColor: item.color }}></div>
                </div>
                <span className="text-[9px] w-6 text-[#4b5563] text-right">{item.percent}%</span>
                {rarityLabel === item.label && (
                  <div className="absolute left-12 top-[-16px] animate-bounce">
                    <Turtle size={18} className={theme.accent2} fill="currentColor" fillOpacity={0.3} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className={`border-t ${theme.border} pt-6 flex items-center justify-between`}>
          <div className="space-y-1">
            <div className="text-xs font-bold text-[#ffffff]">🎪 测测你的朋友是什么人格？</div>
            <div className="text-[10px] text-cyber-blue">长按保存图片，发给那个总让你帮忙干活的朋友！</div>
            <div className="text-[9px] text-[#4b5563] font-mono mt-2">GEN_ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}</div>
          </div>
          <div className="w-16 h-16 bg-[#ffffff] p-1 rounded-lg shrink-0 flex items-center justify-center">
            <div className="w-full h-full bg-[#000000] flex items-center justify-center text-[10px] text-[#00FFFF] text-center font-bold leading-tight drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]">
              应该有个<br/>QR CODE<br/>但还没做好
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen matrix-bg py-8 px-4 flex flex-col items-center">
      {/* Hidden Poster Element for html2canvas */}
      <div className="absolute top-[-9999px] left-[-9999px]">
        <FullReport isPoster={true} />
      </div>

      {/* Visible UI */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10 flex flex-col items-center"
      >
        {/* Full Report Displayed Immediately */}
        <FullReport />

        {/* Action Buttons */}
        <div className="w-full mt-8 space-y-4">
          {isCapturing ? (
            <div className="w-full py-4 text-center text-green-400 animate-pulse text-sm font-bold">
              正在生成专属海报...
            </div>
          ) : (
            <p className="text-green-400 text-center text-sm animate-pulse font-bold mb-4">
              ✨ 长按上方卡片或下方链接分享 ✨
            </p>
          )}

          <div className={`p-4 rounded-xl border ${theme.border} ${theme.cardBg} w-full text-sm text-[#d1d5db]`}>
            <p className={`mb-2 font-bold ${theme.accent2}`}>💬 建议分享文案：</p>
            <p className="italic">"{result.shareText}"</p>
          </div>

          <button 
            onClick={handleShareLink}
            className="w-full py-4 rounded-xl border-2 border-[#374151] text-[#d1d5db] font-bold text-sm hover:bg-[#1f2937] transition-colors flex items-center justify-center gap-2"
          >
            <Users size={18}/>
            <span>{copySuccess ? '链接已复制！快去发给微信好友' : '邀请好友来测 (生成克星链接)'}</span>
          </button>

          {/* New Crazy Test Attribution Section */}
          <div className="w-full py-6 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex">
                {"你猜这么疯批的测试是谁想出来的？".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut"
                    }}
                    className="text-sm font-bold text-[#00FFFF] drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-[#00FFFF] text-xl"
              >
                ↓
              </motion.div>
            </div>
            
            <motion.a
              href="https://freeride-ai.io/en"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-40 h-14 rounded-xl overflow-hidden border-2 border-[#00FFFF] shadow-[0_0_15px_rgba(0,255,255,0.4)] bg-white flex items-center justify-center"
            >
              <img 
                src="/freeride.webp" 
                alt="Freeride AI" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://freeride-ai.io/favicon.ico";
                }}
              />
            </motion.a>
          </div>
          
          <button 
            onClick={onRestart}
            className="w-full py-3 text-[#6b7280] hover:text-[#d1d5db] transition-colors text-sm"
          >
            重新测试
          </button>
        </div>
      </motion.div>

      {/* Rare Result Modal */}
      {showRareModal && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className={`relative w-full max-w-sm p-8 rounded-3xl border-2 ${theme.border} ${theme.cardBg} ${theme.glow} text-center overflow-hidden`}
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.2),transparent_70%)]"></div>
            </div>

            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mb-6 inline-block"
            >
              <Award size={80} className={theme.accent2} />
            </motion.div>

            <h2 className={`text-3xl font-black mb-4 ${theme.accent2} tracking-tight`}>
              恭喜你！
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-xl font-bold text-white">
                鉴定为：<span className={theme.accent}>稀有搞钱王八</span>
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                你的搞钱基因在人群中仅占 <span className={`font-bold ${theme.accent2}`}>{rarityPercent}%</span>。<br/>
                这种级别的执行力与心机，简直是天生的财富收割机！
              </p>
              <div className={`py-2 px-4 rounded-full bg-white/5 border ${theme.border} inline-block text-xs font-bold ${theme.accent}`}>
                ✨ 尊贵的 {rarityLabel} 玩家 ✨
              </div>
            </div>

            <button
              onClick={() => setShowRareModal(false)}
              className={`w-full py-4 rounded-xl bg-gradient-to-r from-[#ff003c] to-[#a855f7] text-white font-black text-lg shadow-[0_0_20px_rgba(255,0,60,0.5)] hover:scale-105 transition-transform`}
            >
              收下赞美
            </button>
            
            <p className="mt-4 text-[10px] text-gray-500 uppercase tracking-[0.2em]">
              Elite Wealth Gene Detected
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
