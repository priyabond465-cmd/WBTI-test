export type Dimension = 'G' | 'D' | 'T' | 'L' | 'Y' | 'X' | 'J' | 'M';

export interface Option {
  text: string;
  dimension: Dimension;
  crazyScore: number;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "老板深夜在工作群画饼：“好好干，明年公司上市，你们都是元老！”",
    options: [
      { text: "“饼太大，我胃小，先把去年的加班费结一下”", dimension: 'G', crazyScore: 2 },
      { text: "“上市？那我得先多拿点期权，赌一把！”", dimension: 'D', crazyScore: 8 },
      { text: "“好的老板！我这就为上市梦肝脑涂地！”", dimension: 'Y', crazyScore: 4 },
      { text: "“截图了，明年不上市就去劳动仲裁”", dimension: 'X', crazyScore: 7 }
    ]
  },
  {
    id: 2,
    text: "下班时间一到，同事都在工位“主动加班”",
    options: [
      { text: "“到点了，地球不爆炸，下班不落下”", dimension: 'M', crazyScore: 1 },
      { text: "“我再‘努力’半小时，让领导看到我的卷”", dimension: 'J', crazyScore: 9 },
      { text: "“我看下总监走没走，他没走我再待会儿”", dimension: 'T', crazyScore: 6 },
      { text: "收拾东西，戴上降噪耳机，隐身离开", dimension: 'L', crazyScore: 3 }
    ]
  },
  {
    id: 3,
    text: "朋友神秘兮兮找你：“有个路子，高风险，但可能一夜翻十倍”",
    options: [
      { text: "“不碰，我惜命，怕天台排队”", dimension: 'G', crazyScore: 2 },
      { text: "“细说！富贵险中求，输了就当交学费”", dimension: 'D', crazyScore: 10 },
      { text: "“我先研究三个月，把白皮书看透再说”", dimension: 'Y', crazyScore: 4 },
      { text: "“你先投，赚了请我吃饭，亏了当我没说”", dimension: 'X', crazyScore: 8 }
    ]
  },
  {
    id: 4,
    text: "回顾你的搞钱史，主要靠什么？",
    options: [
      { text: "“混圈子认大佬，大佬指缝漏点就够我吃”", dimension: 'T', crazyScore: 6 },
      { text: "“谁也不靠，自己研究技术/手艺，闷声发财”", dimension: 'L', crazyScore: 4 },
      { text: "“踏实干活，一分耕耘一分收获，不玩虚的”", dimension: 'Y', crazyScore: 2 },
      { text: "“信息差、资源差、认知差，总有一个能赚钱”", dimension: 'X', crazyScore: 8 }
    ]
  },
  {
    id: 5,
    text: "你辛苦做的方案，被同事抢先汇报，功劳成他的了",
    options: [
      { text: "当场掀桌：“这他妈是我做的！”", dimension: 'Y', crazyScore: 5 },
      { text: "在领导面前柔弱：“唉，都怪我做得太慢，让王哥着急了”", dimension: 'X', crazyScore: 9 },
      { text: "默默忍受：“算了，职场嘛，下次注意”", dimension: 'G', crazyScore: 2 },
      { text: "记在心里，下次连他的客户一起撬了", dimension: 'D', crazyScore: 10 }
    ]
  },
  {
    id: 6,
    text: "大群里有人发红包，但只有几个",
    options: [
      { text: "开启外挂模式，誓要抢到每一个", dimension: 'J', crazyScore: 8 },
      { text: "懒得抢，这点钱还不够流量费", dimension: 'M', crazyScore: 1 },
      { text: "只等大包，小包懒得点，浪费感情", dimension: 'X', crazyScore: 7 },
      { text: "随缘抢，抢到说谢谢，抢不到算了", dimension: 'Y', crazyScore: 3 }
    ]
  },
  {
    id: 7,
    text: "周末朋友约你玩，但有个能赚外快的机会",
    options: [
      { text: "“玩什么玩？朋友只会影响我搞钱的速度！”", dimension: 'D', crazyScore: 10 },
      { text: "“赚钱什么时候都能赚，青春就这几年，玩！”", dimension: 'M', crazyScore: 1 },
      { text: "“这朋友家里有矿/是行业大佬吗？不是的话下次再说”", dimension: 'T', crazyScore: 7 },
      { text: "“看看能不能带电脑边玩边搞，不能就选稳的”", dimension: 'G', crazyScore: 4 }
    ]
  },
  {
    id: 8,
    text: "不太熟的朋友找你借钱，数目不小",
    options: [
      { text: "“不借，我的钱又不是大风刮来的”", dimension: 'X', crazyScore: 7 },
      { text: "内心不想借，但不好意思，咬牙转了", dimension: 'Y', crazyScore: 3 },
      { text: "“借可以，签借条，算利息，亲兄弟明算账”", dimension: 'D', crazyScore: 9 },
      { text: "借一点小钱，不指望还，就当认清一个人", dimension: 'G', crazyScore: 2 }
    ]
  },
  {
    id: 9,
    text: "看到朋友圈同龄人晒车晒房晒财务自由",
    options: [
      { text: "嫉妒到睡不着，连夜研究他的搞钱路子", dimension: 'D', crazyScore: 9 },
      { text: "划走，关我屁事，我安稳过我的小日子", dimension: 'G', crazyScore: 2 },
      { text: "点个赞，真心祝福，然后继续刷视频", dimension: 'Y', crazyScore: 3 },
      { text: "表面点赞评论“恭喜大佬”，背地里搜他是不是在装逼", dimension: 'X', crazyScore: 8 }
    ]
  },
  {
    id: 10,
    text: "对于“向上社交”，拿捏大佬，你的态度是？",
    options: [
      { text: "这是我的强项，懂事、会来事、能提供情绪价值", dimension: 'T', crazyScore: 9 },
      { text: "社恐，看到大佬绕道走，怕说错话", dimension: 'L', crazyScore: 2 },
      { text: "不屑，是金子总会发光，靠本事说话", dimension: 'Y', crazyScore: 4 },
      { text: "必要的话，可以放下身段，底线灵活可调", dimension: 'X', crazyScore: 7 }
    ]
  },
  {
    id: 11,
    text: "一个新风口（比如前几年的比特币、短视频）突然火了",
    options: [
      { text: "立刻研究，快速进场，赚一波就跑", dimension: 'D', crazyScore: 10 },
      { text: "不追高，都是泡沫，等潮水退了再看", dimension: 'G', crazyScore: 2 },
      { text: "找这个领域里已经成功的大佬，跟着喝汤", dimension: 'T', crazyScore: 6 },
      { text: "不跟风，自己沉下心研究底层逻辑，看懂了再动", dimension: 'L', crazyScore: 4 }
    ]
  },
  {
    id: 12,
    text: "上班摸鱼刷手机，被领导从背后抓个正着",
    options: [
      { text: "“就这点工资，还想买断我8小时？”", dimension: 'Y', crazyScore: 7 },
      { text: "“领导，我在查行业资料，寻找灵感”（切屏速度极快）", dimension: 'X', crazyScore: 8 },
      { text: "“对不起领导！我错了！”（立刻打开PPT疯狂打字）", dimension: 'J', crazyScore: 9 },
      { text: "淡定地继续刷完那条视频，然后锁屏", dimension: 'M', crazyScore: 2 }
    ]
  },
  {
    id: 13,
    text: "你内心深处，搞钱到底是为了什么？",
    options: [
      { text: "为了暴富，为了彻底自由，为了再也不用看人脸色！", dimension: 'D', crazyScore: 10 },
      { text: "为了不欠债，有存款，有安全感，能安稳过日子", dimension: 'G', crazyScore: 2 },
      { text: "为了证明自己，为了在人前有面子，碾压同龄人", dimension: 'T', crazyScore: 7 },
      { text: "为了够花就行，不想太累，多点时间享受生活", dimension: 'M', crazyScore: 1 }
    ]
  },
  {
    id: 14,
    text: "如果用一个词形容你的搞钱风格，最接近哪个？",
    options: [
      { text: "硬刚：直来直去，赚的都是辛苦钱、力气钱", dimension: 'Y', crazyScore: 3 },
      { text: "阴柔：善于借力打力，用巧劲，不动声色把钱赚了", dimension: 'X', crazyScore: 8 },
      { text: "寄生：擅长整合资源，靠信息差和人脉差赚钱", dimension: 'T', crazyScore: 7 },
      { text: "手艺人：依赖独家技能或手艺，闷声发点小财", dimension: 'L', crazyScore: 4 }
    ]
  },
  {
    id: 15,
    text: "突然天降一笔横财（比如中彩票、获赠遗产），你会？",
    options: [
      { text: "大部分存定期/买理财，谁也不告诉，继续上班", dimension: 'G', crazyScore: 2 },
      { text: "研究投资，寻找机会，全部投入，搏一个财务自由", dimension: 'D', crazyScore: 10 },
      { text: "偷偷改善生活，但对外继续哭穷，避免被借钱", dimension: 'X', crazyScore: 8 },
      { text: "立刻辞职，环游世界，先造了再说！", dimension: 'M', crazyScore: 1 }
    ]
  },
  {
    id: 16,
    text: "在职场/搞钱环境中，你最真实的状态接近哪种？",
    options: [
      { text: "卷王：眼里有光，心里有火，搞钱比谈恋爱有意思", dimension: 'J', crazyScore: 10 },
      { text: "摸鱼混子：工资照领，活不干多，保住饭碗即可", dimension: 'M', crazyScore: 1 },
      { text: "耿直牛马：让干啥干啥，不会偷奸耍滑，但也不会邀功", dimension: 'Y', crazyScore: 4 },
      { text: "职场人精：活干得漂亮，话也说得好听，谁也不得罪", dimension: 'X', crazyScore: 7 }
    ]
  },
  {
    id: 17,
    text: "有个赚小钱但很轻松的活（比如代抢、刷单），找你",
    options: [
      { text: "接！蚊子腿也是肉，积少成多", dimension: 'J', crazyScore: 8 },
      { text: "不接，太麻烦，为了这点钱不值当", dimension: 'M', crazyScore: 1 },
      { text: "拉个群，找人一起干，我抽成，当个小包工头", dimension: 'T', crazyScore: 7 },
      { text: "自己悄悄干，绝不分给别人，吃独食", dimension: 'L', crazyScore: 4 }
    ]
  },
  {
    id: 18,
    text: "公司开始“内卷”，要求每天写日报，每周复盘",
    options: [
      { text: "反感，直接提出：“这是形式主义，浪费时间”", dimension: 'G', crazyScore: 4 },
      { text: "兴奋，终于可以光明正大地卷死同事了！", dimension: 'D', crazyScore: 10 },
      { text: "默默遵守，不反抗也不积极，随大流", dimension: 'Y', crazyScore: 2 },
      { text: "表面写得满满当当，实际该摸鱼摸鱼", dimension: 'X', crazyScore: 8 }
    ]
  }
];

export const shuffleQuestions = () => {
  return [...questions].sort(() => Math.random() - 0.5);
};
