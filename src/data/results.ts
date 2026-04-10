export interface ResultData {
  title: string;
  englishTitle: string;
  description: string;
  interpretation: string;
  skills: string[];
  flaws: string[];
  advice: string[];
  dos: string[];
  donts: string[];
  mustDos: string[];
  mustNotDos: string[];
  cp: { name: string; reason: string };
  partners: { name: string; reason: string }[];
  enemies: { name: string; reason: string }[];
  fortune: { peakMonths: string; luckyPersona: string; warning: string; keywords: string };
  shareText: string;
  potential: number;
  level: 'N' | 'R' | 'SR' | 'SSR' | 'UR';
  avatarKey: string;
}

export interface ResultPayload {
  resultData: ResultData;
  baseType: string;
  totalCrazyScore: number;
  radarData: { risk: number; social: number; scheme: number; exec: number };
  matchRate: number;
}

const typeNames: Record<string, { title: string, englishTitle: string, desc: string, level: 'N' | 'R' | 'SR' | 'SSR' | 'UR' }> = {
  // N级 (牛马区)
  'GTYJ': { title: "职场大冤种", englishTitle: "Corporate Niuma", desc: "干活最多，领功最少。擅长把老板的饼吃到胃胀，把同事的锅背到退休。", level: 'N' },
  'GLXM': { title: "稳如老狗", englishTitle: "Steady Like Old Dog", desc: "雷打不动，风吹不倒。在职场的惊涛骇浪中，你是一块长满青苔的顽石。", level: 'N' },
  'GLYJ': { title: "老实人", englishTitle: "Good Guy TM", desc: "你是职场的润滑剂，也是最容易被忽略的背景板。你的善良是你最大的软肋。", level: 'N' },
  'GTYM': { title: "带薪摆烂人", englishTitle: "Paid Touch-Fisher", desc: "在工位上完成了灵魂的自我放逐。只要我不努力，老板就永远别想过上想要的生活。", level: 'N' },

  // R级 (搞钱区)
  'GLYM': { title: "佛系仓鼠", englishTitle: "Buddha Hamster", desc: "职场小透明，不争不抢，只求安稳度日，靠攒钱获得安全感。", level: 'R' },
  'GLXJ': { title: "羊毛战神", englishTitle: "Coupon Psycho", desc: "万物皆可薅，每一分钱都要花在刀刃上。你的计算能力让超级计算机汗颜。", level: 'R' },
  'DTYM': { title: "月光摆烂王", englishTitle: "Moonlight Yolo", desc: "今朝有酒今朝醉，明日没钱再受累。你是消费主义最忠实的信徒。", level: 'R' },
  'GTXM': { title: "到点消失术大师", englishTitle: "6 PM Houdini", desc: "下班时间一到，你就像人间蒸发一样。你的执行力只体现在逃离公司这件事上。", level: 'R' },
  'GTXJ': { title: "算盘成精", englishTitle: "Walking Abacus", desc: "表面不动声色，内心算盘震天响。每一笔利益交换都在你的掌控之中。", level: 'R' },
  'DTYJ': { title: "卷王但穷", englishTitle: "Fake Hustler", desc: "战术上的勤奋掩盖了战略上的懒惰。你卷得天昏地暗，却依然在贫困线上挣扎。", level: 'R' },
  'DTXM': { title: "副业海王", englishTitle: "Side Hustle Fboy", desc: "主业是幌子，副业才是真爱。你拥有无数个搞钱的触角，却总是浅尝辄止。", level: 'R' },
  'DLYM': { title: "脑雾接盘侠", englishTitle: "Crypto Simp", desc: "总梦想着一夜暴富，却永远在最高点接盘。你是金融市场最优质的燃料。", level: 'R' },

  // SR级 (高手区)
  'SR_CHAD': { title: "白嫖战神", englishTitle: "Zero Dollar Chad", desc: "能不花钱绝不花钱，万物皆可白嫖。善于利用社交关系空手套白狼。", level: 'SR' },
  'SR_BROKER': { title: "消息狗", englishTitle: "Info Broker", desc: "信息就是金钱。你游走在各个圈子的边缘，靠倒卖情报赚取高额差价。", level: 'SR' },
  'SR_SIGMA': { title: "莫得感情收割机", englishTitle: "Sigma Grinder", desc: "冷酷无情的搞钱机器。高风险、孤狼、极度心机、极强执行力。", level: 'SR' },
  'SR_BITCH': { title: "绿茶成精", englishTitle: "Green Tea B*tch Pro", desc: "深谙人性弱点，擅长以退为进。在谈笑间就把对手的资源收入囊中。", level: 'SR' },

  // SSR / UR级 (变异隐藏区)
  'UR_CUCK': { title: "天字第一号冤种", englishTitle: "Supreme Cuck", desc: "你太善良了，善良到这个世界都觉得你好欺负。你的底线深不可测，因为你根本就没有底线。", level: 'UR' },
  'UR_BUDDHA': { title: "赛博活佛", englishTitle: "Digital Buddha", desc: "看透了搞钱的本质是虚无。你散发着神圣的光辉，让周围的疯批们感到羞愧。", level: 'UR' },
  'SSR_FLIPPER': { title: "空手套白狼之神", englishTitle: "Ghost Flipper", desc: "不需要本金，不需要资源，你凭空创造财富。你是金融炼金术的终极传人。", level: 'SSR' },
  'SSR_SUGAR': { title: "向上管理仙人", englishTitle: "Boss's Sugar Baby", desc: "老板的喜好就是你的KPI。你已经超越了管理，你是在驯化你的上司。", level: 'SSR' },
  'SSR_RICE': { title: "软饭硬吃宗师", englishTitle: "Hardcore Soft-Rice Eater", desc: "把依赖他人变成了一种艺术。你吃得理直气壮，吃得气吞山河。", level: 'SSR' },
  'SSR_QUEEN': { title: "宫斗冠军", englishTitle: "Office Drama Queen", desc: "职场就是你的紫禁城。每一个眼神、每一句话都是致命的武器。", level: 'SSR' },
  'SSR_PSYCHO': { title: "搞钱疯批", englishTitle: "Crazy Money Psycho", desc: "你的疯狂已经超越了常人的理解。搞钱对你来说只是一场游戏，而你，是这场游戏的主宰。", level: 'SSR' },
  'SSR_PRINTER': { title: "人形印钞机", englishTitle: "Walking Money Printer", desc: "你走过的地方都会留下金钱的味道。你不是在赚钱，你就是金钱本身。", level: 'SSR' }
};

const traits: Record<string, any> = {
  G: { skill: "风险规避大师，能躲过99%的坑", flaw: "过于保守，容易错失暴富风口", advice: "适当配置高收益资产，别把钱全放余额宝", do: "学习一门新的理财技能", dont: "把钱借给不靠谱的亲戚", mustDo: "建立强制储蓄计划", mustNotDo: "参与任何保本理财之外的投资" },
  D: { skill: "敏锐的风口嗅觉，敢于重仓", flaw: "容易上头，全仓梭哈导致爆仓", advice: "永远留足过冬的现金流，别加高杠杆", do: "设立严格的止损线", dont: "在半夜情绪激动时做交易", mustDo: "将总资产的20%锁定为不可动用资金", mustNotDo: "借钱加杠杆炒股/币" },
  T: { skill: "社交牛逼症，极强的资源整合能力", flaw: "无效社交太多，容易被狐朋狗友拖累", advice: "精简朋友圈，远离消耗你的人", do: "结交一个比你高两个段位的大佬", dont: "在酒桌上随便答应别人的借钱请求", mustDo: "每周认识一个跨界大佬", mustNotDo: "在无效社交上浪费周末" },
  L: { skill: "深度思考，不受外界噪音干扰", flaw: "信息茧房，容易闭门造车", advice: "定期和不同圈子的人交流，打破信息壁垒", do: "加入一个高质量的搞钱社群", dont: "一个人死磕自己不擅长的领域", mustDo: "加入一个高质量付费社群", mustNotDo: "一个人闭门造车超过一个月" },
  Y: { skill: "踏实靠谱，极易获得大佬信任", flaw: "缺乏心机，容易被当枪使、被抢功", advice: "搞钱要狠，不要被道德绑架", do: "学会拒绝不合理的工作安排", dont: "无底线地退让和妥协", mustDo: "学会对不合理要求说不", mustNotDo: "无偿帮同事干活" },
  X: { skill: "利益计算器，绝不吃亏", flaw: "算计太深，难以建立深度的商业信任", advice: "适当让利，才能做大蛋糕", do: "尝试做一次双赢的合作", dont: "为了蝇头小利得罪核心合作伙伴", mustDo: "做一次纯粹利他的分享", mustNotDo: "为了小利得罪核心人脉" },
  J: { skill: "恐怖的执行力，不知疲倦的永动机", flaw: "战术上的勤奋掩盖战略上的懒惰", advice: "停下来思考方向，别只会低头拉车", do: "每周复盘一次投入产出比", dont: "接手毫无成长性的重复劳动", mustDo: "每周复盘一次投入产出比", mustNotDo: "陷入低效的瞎忙" },
  M: { skill: "反内卷达人，精力管理大师", flaw: "严重拖延，执行力拉胯，光想不做", advice: "找一个卷王搭档，或者设定严格的DDL", do: "把大目标拆解成每天5分钟的小任务", dont: "沉迷短视频和游戏逃避现实", mustDo: "每天完成一件最重要的小事", mustNotDo: "把计划推迟到明天" }
};

const getOppositeType = (type: string) => {
  const map: Record<string, string> = { G: 'D', D: 'G', T: 'L', L: 'T', Y: 'X', X: 'Y', J: 'M', M: 'J' };
  return type.split('').map(c => map[c]).join('');
};

const generateDynamicResult = (baseType: string, totalCrazyScore: number): ResultData => {
  let finalKey = baseType;
  let level: 'N' | 'R' | 'SR' | 'SSR' | 'UR' = 'N';
  let potential = 1;

  // Determine Level and Key based on Crazy Score and Base Type
  // New Max Score is ~180 (18 questions * 10 max)
  if (totalCrazyScore < 40) {
    level = 'UR';
    finalKey = baseType.includes('G') || baseType.includes('Y') ? 'UR_CUCK' : 'UR_BUDDHA';
    potential = 1;
  } else if (totalCrazyScore > 140) {
    level = 'SSR';
    if (baseType.includes('D') && baseType.includes('X')) finalKey = 'SSR_PRINTER';
    else if (baseType.includes('D')) finalKey = 'SSR_PSYCHO';
    else if (baseType.includes('X')) finalKey = 'SSR_QUEEN';
    else finalKey = 'SSR_SUGAR';
    potential = 5;
  } else if (totalCrazyScore > 110) {
    level = 'SR';
    if (baseType.includes('D') && baseType.includes('L')) finalKey = 'SR_SIGMA';
    else if (baseType.includes('T') && baseType.includes('X')) finalKey = 'SR_BITCH';
    else if (baseType.includes('T')) finalKey = 'SR_BROKER';
    else finalKey = 'SR_CHAD';
    potential = 4;
  } else if (totalCrazyScore > 70) {
    level = 'R';
    const rTypes = ['GLYM', 'GLXJ', 'DTYM', 'GTXM', 'GTXJ', 'DTYJ', 'DTXM', 'DLYM'];
    if (!rTypes.includes(baseType)) {
      finalKey = rTypes[totalCrazyScore % rTypes.length];
    }
    potential = 3;
  } else {
    level = 'N';
    const nTypes = ['GTYJ', 'GLXM', 'GLYJ', 'GTYM'];
    if (!nTypes.includes(baseType)) {
      finalKey = nTypes[totalCrazyScore % nTypes.length];
    }
    potential = 2;
  }

  const info = typeNames[finalKey] || typeNames[baseType] || typeNames['GTYJ'];
  const peakMonths = (totalCrazyScore % 6 + 1) + "月、" + ((totalCrazyScore % 6) + 7) + "月";
  const warning = (totalCrazyScore % 12 + 1) + "月";

  return {
    title: info.title,
    englishTitle: info.englishTitle,
    description: info.desc,
    interpretation: `你的搞钱基因由 ${baseType.split('').join('、')} 组成。这决定了你在财富积累的过程中，有着独特的行为模式。`,
    skills: [traits[baseType[0]].skill, traits[baseType[1]].skill, traits[baseType[2]].skill],
    flaws: [traits[baseType[0]].flaw, traits[baseType[1]].flaw, traits[baseType[3]].flaw],
    advice: [traits[baseType[0]].advice, traits[baseType[1]].advice, traits[baseType[2]].advice],
    dos: [traits[baseType[0]].do, traits[baseType[3]].do],
    donts: [traits[baseType[1]].dont, traits[baseType[2]].dont],
    mustDos: [traits[baseType[0]].mustDo, traits[baseType[1]].mustDo, traits[baseType[3]].mustDo],
    mustNotDos: [traits[baseType[1]].mustNotDo, traits[baseType[2]].mustNotDo, traits[baseType[3]].mustNotDo],
    cp: { name: "搞钱疯批", reason: "你们能在心机和执行力上形成完美的互补。" },
    partners: [
      { name: "算盘成精", reason: "打破你的社交/孤狼局限" },
      { name: "无情打工机", reason: "对冲你的风险偏好" }
    ],
    enemies: [
      { name: "职场大冤种", reason: "三观完全相反，沟通成本极高，容易互相背刺" }
    ],
    fortune: { peakMonths, luckyPersona: "算盘成精", warning, keywords: "突破·沉淀·搞钱" },
    shareText: `测出来是【${info.title}】…这搞钱基因绝了，谁来和我组队？`,
    potential,
    level: info.level,
    avatarKey: finalKey
  };
};

const chaosMutant: ResultData = {
  title: "混沌变异体",
  englishTitle: "Chaos Mutant",
  description: "你的各项特质达到了诡异的绝对平衡。你既保守又贪婪，既社恐又社牛。你是一个无法被定义的混沌体，市场的任何风吹草动都能让你随时变异。",
  interpretation: "你没有固定的搞钱模式，完全依靠薛定谔的直觉。你可能今天还在定投沪深300，明天就去冲土狗币。",
  skills: ["千面人：能随时切换人格适应不同环境", "绝对中立：永远不会被单一情绪完全裹挟", "不可预测：庄家都不知道你怎么出牌"],
  flaws: ["精神分裂：经常自己和自己打架", "决策瘫痪：在关键时刻容易犹豫不决", "薛定谔的钱包：财富状态永远处于叠加态"],
  advice: ["你需要建立一套硬性的交易纪律，代替你摇摆不定的直觉", "找一个极度理性的搭档帮你做最终决策", "不要在情绪波动大的时候碰钱"],
  dos: ["写下你的投资原则并贴在床头", "尝试量化交易，把决策交给机器", "多做冥想，统一内在人格"],
  donts: ["在深夜做任何财务决定", "同时开启两个逻辑完全相反的投资项目"],
  mustDos: ["建立一套硬性的交易纪律", "找一个极度理性的搭档", "多做冥想，统一内在人格"],
  mustNotDos: ["在深夜做任何财务决定", "同时开启两个逻辑完全相反的投资项目", "在情绪波动大的时候碰钱"],
  cp: { name: "算盘成精", reason: "只有绝对的理性才能锚定你混沌的灵魂。" },
  partners: [
    { name: "算盘成精 (GLXJ)", reason: "帮你建立规则" },
    { name: "无情打工机 (GLYJ)", reason: "在你发疯的时候拉住你" }
  ],
  enemies: [
    { name: "蒙眼狂奔韭菜 (DLYJ)", reason: "会带着你一起加速毁灭" },
    { name: "白嫖战神 (DTXM)", reason: "会把你的混沌利用到极致" }
  ],
  fortune: { peakMonths: "未知", luckyPersona: "算盘成精", warning: "全年（随时可能自我背刺）", keywords: "锚定·纪律·统一" },
  shareText: "测出来是【混沌变异体】…连AI都算不出我的搞钱套路，我就是金融市场的最大Bug！",
  potential: 4,
  level: 'SSR',
  avatarKey: 'DEFAULT'
};

export const calculateResult = (answers: Record<number, { dimension: string, crazyScore: number }>): ResultPayload => {
  let g = 0, d = 0;
  let t = 0, l = 0;
  let y = 0, x = 0;
  let j = 0, m = 0;
  let totalCrazyScore = 0;

  Object.values(answers).forEach(ans => {
    totalCrazyScore += ans.crazyScore;
    switch (ans.dimension) {
      case 'G': g++; break;
      case 'D': d++; break;
      case 'T': t++; break;
      case 'L': l++; break;
      case 'Y': y++; break;
      case 'X': x++; break;
      case 'J': j++; break;
      case 'M': m++; break;
    }
  });

  const radarData = {
    risk: (d / 4.5) * 100,
    social: (t / 4.5) * 100,
    scheme: (x / 4.5) * 100,
    exec: (j / 4.5) * 100
  };

  const dim1 = g >= d ? 'G' : 'D';
  const dim2 = t >= l ? 'T' : 'L';
  const dim3 = y >= x ? 'Y' : 'X';
  const dim4 = m >= j ? 'M' : 'J';

  const baseType = `${dim1}${dim2}${dim3}${dim4}`;
  
  // Calculate Match Rate (how pure the type is)
  const dominantScores = (dim1 === 'G' ? g : d) + (dim2 === 'T' ? t : l) + (dim3 === 'Y' ? y : x) + (dim4 === 'M' ? m : j);
  let matchRate = Math.round((dominantScores / 18) * 100);

  let finalResult: ResultData;

  // If match rate is extremely low (<= 55%), they are a Chaos Mutant
  if (matchRate <= 55) {
    finalResult = chaosMutant;
    matchRate = 99; // 99% match to Chaos Mutant
  } else {
    finalResult = generateDynamicResult(baseType, totalCrazyScore);
  }

  return { resultData: finalResult, baseType, totalCrazyScore, radarData, matchRate };
};
