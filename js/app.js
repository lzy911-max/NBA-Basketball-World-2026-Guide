// NBA Basketball World 2026 Guide - App Logic
let currentLang = 'en';
let currentGuide = null;
let searchQuery = '';
let activeCategory = 'all';

const LANG_LABELS = { en: 'English', zh: '繁中', ja: '日本語', ko: '한국어' };

// Category labels per language
const CATEGORY_LABELS = {
  en: {
    all: 'All Guides',
    '新手攻略': 'Beginner Guides',
    '主要玩法': 'Game Modes',
    '球员养成': 'Player Development',
    '抽卡相关': 'Gacha & Scouting',
    '交易系统': 'Trading',
    '球队管理': 'Team Management'
  },
  zh: {
    all: '全部攻略',
    '新手攻略': '新手攻略',
    '主要玩法': '主要玩法',
    '球员养成': '球員養成',
    '抽卡相关': '抽卡相關',
    '交易系统': '交易系統',
    '球队管理': '球隊管理'
  },
  ja: {
    all: '全ての攻略',
    '新手攻略': '初心者攻略',
    '主要玩法': 'メインコンテンツ',
    '球员养成': '選手育成',
    '抽卡相关': 'ガチャ・スカウト',
    '交易系统': '取引システム',
    '球队管理': 'チーム管理'
  },
  ko: {
    all: '전체 공략',
    '新手攻略': '초보자 공략',
    '主要玩法': '메인 콘텐츠',
    '球员养成': '선수 육성',
    '抽卡相关': '가챠・스카우트',
    '交易系统': '거래 시스템',
    '球队管理': '팀 관리'
  }
};

// Tag labels per language (fallback to original if missing)
const TAG_LABELS = {
  en: {
    '阵容': 'Lineup', '预设': 'Preset', '战术': 'Tactics',
    '球员分数': 'Rating', '能力值': 'Stats', '掉分': 'Drop', '数据更新': 'Data Update',
    '特训': 'Training', '肉卡': 'Fodder', '养成技巧': 'Tips',
    '经典回顾': 'Classic', '关卡': 'Stages', '行动力': 'Mobility', '奖励': 'Rewards',
    '巅峰巡演': 'Peak Tour', '训练收益': 'Training Earnings', '商业巡演': 'Commercial Tour', '快速训练': 'Quick Training', '钻石': 'Diamonds',
    '豪门争锋': 'Superteams', '挑战券': 'Tickets', '排名': 'Ranking', '伤害': 'Damage',
    '排位赛': 'Rank Match', '赛季': 'Season', '段位': 'Rank', '积分': 'Points',
    '竞技赛': 'Arena', '能量饮料': 'Energy', '战术道具': 'Tactic Items',
    '组队赛': 'Team Match', '多人': 'Co-op', '碎片': 'Shards', '助战': 'Support',
    '王朝模式': 'Dynasty', '工资限额': 'Salary Cap', '真实数据': 'Live Stats', '排行榜': 'Leaderboard',
    '球探': 'Scouting', '抽卡': 'Pull', '盲盒': 'Mystery Box', '心愿球员': 'Wishlist', '概率': 'Rates',
    '选秀': 'Draft', '球会市场': 'Market', '寄售': 'Resale', '跨服': 'Cross-server',
    '星探': 'Talent Scout', '魅力值': 'Charm', '引援': 'Recruitment', '升级': 'Level Up',
    '升星': 'Rank Up', '成功率': 'Success Rate', '材料': 'Materials', '同名球员': 'Duplicate',
    '晋升': 'Promotion', '金币': 'Coins', '重置': 'Reset', '交易': 'Trade',
    '能力卡': 'Ability Card', '资金': 'Funds',
    '强化': 'Enhance', '进阶': 'Advance', '魂石': 'Soulstones', '合同': 'Contracts',
    '装备': 'Gear', '升级': 'Upgrade', '融合': 'Fuse', '洗炼': 'Refine', '套装': 'Set',
    '徽章': 'Badge', '保护卡': 'Protection Card', '孔位': 'Slots',
    '戒指': 'Ring', '护佑': 'Blessing', '特殊属性': 'Special', '槽位': 'Slots',
    '赛区': 'Division', '属性加成': 'Bonus',
    '进攻': 'Offense', '防守': 'Defense', '克制': 'Counter',
    '寄售': 'Consignment', '求购': 'Buy Order', '认证券': 'Voucher', '时间锁': 'Time Lock',
    '图鉴': 'Gallery', '现役': 'Active', '传奇': 'Legend', '球场皮肤': 'Court Skin',
    '教练': 'Coach', '风格': 'Style', '技能': 'Skills', '觉醒': 'Awakening',
    '联盟': 'Alliance', '科技': 'Tech', '弹劾': 'Impeach', '贡献': 'Contribution',
    '助理': 'Assistant', '好感度': 'Favor', '天赋': 'Talent'
  },
  zh: {
    '阵容': '陣容', '预设': '預設', '战术': '戰術',
    '球员分数': '球員分數', '能力值': '能力值', '掉分': '掉分', '数据更新': '數據更新',
    '特训': '特訓', '肉卡': '肉卡', '养成技巧': '養成技巧',
    '经典回顾': '經典回顧', '关卡': '關卡', '行动力': '行動力', '奖励': '獎勵',
    '巅峰巡演': '巔峰巡演', '训练收益': '訓練收益', '商业巡演': '商業巡演', '快速训练': '快速訓練', '钻石': '鑽石',
    '豪门争锋': '豪門爭鋒', '挑战券': '挑戰券', '排名': '排名', '伤害': '傷害',
    '排位赛': '排位賽', '赛季': '賽季', '段位': '段位', '积分': '積分',
    '竞技赛': '競技賽', '能量饮料': '能量飲料', '战术道具': '戰術道具',
    '组队赛': '組隊賽', '多人': '多人', '碎片': '碎片', '助战': '助戰',
    '王朝模式': '王朝模式', '工资限额': '工資限額', '真实数据': '真實數據', '排行榜': '排行榜',
    '球探': '球探', '抽卡': '抽卡', '盲盒': '盲盒', '心愿球员': '心願球員', '概率': '機率',
    '选秀': '選秀', '球会市场': '球會市場', '寄售': '寄售', '跨服': '跨服',
    '星探': '星探', '魅力值': '魅力值', '引援': '引援', '升级': '升級',
    '升星': '升星', '成功率': '成功率', '材料': '材料', '同名球员': '同名球員',
    '晋升': '晉升', '金币': '金幣', '重置': '重置', '交易': '交易',
    '能力卡': '能力卡', '资金': '資金',
    '强化': '強化', '进阶': '進階', '魂石': '魂石', '合同': '合約',
    '装备': '裝備', '升级': '升級', '融合': '融合', '洗炼': '洗煉', '套装': '套裝',
    '徽章': '徽章', '保护卡': '保護卡', '孔位': '孔位',
    '戒指': '戒指', '护佑': '護佑', '特殊属性': '特殊屬性', '槽位': '槽位',
    '赛区': '賽區', '属性加成': '屬性加成',
    '进攻': '進攻', '防守': '防守', '克制': '克制',
    '寄售': '寄售', '求购': '求購', '认证券': '認證券', '时间锁': '時間鎖',
    '图鉴': '圖鑑', '现役': '現役', '传奇': '傳奇', '球场皮肤': '球場皮膚',
    '教练': '教練', '风格': '風格', '技能': '技能', '觉醒': '覺醒',
    '联盟': '聯盟', '科技': '科技', '弹劾': '彈劾', '贡献': '貢獻',
    '助理': '助理', '好��度': '好感度', '天赋': '天賦'
  },
  ja: {
    '阵容': '編成', '预设': 'プリセット', '战术': '戦術',
    '球员分数': 'スコア', '能力值': '能力値', '掉分': 'スコア下落', '数据更新': 'データ更新',
    '特训': '特訓', '肉卡': '肉カード', '养成技巧': '育成コツ',
    '经典回顾': '栄光の軌跡', '关卡': 'ステージ', '行动力': 'AP', '奖励': '報酬',
    '巅峰巡演': 'ピークツアー', '训练收益': 'トレーニング収益', '商业巡演': '商業ツアー', '快速训练': 'クイックトレ', '钻石': 'ダイヤ',
    '豪门争锋': '強豪挑戦', '挑战券': 'チケット', '排名': 'ランキング', '伤害': 'ダメージ',
    '排位赛': 'ランクマッチ', '赛季': 'シーズン', '段位': '段位', '积分': 'ポイント',
    '竞技赛': 'エキシビション', '能量饮料': 'ドリンク', '战术道具': '戦術アイテム',
    '组队赛': 'チーム戦', '多人': '協力', '碎片': 'かけら', '助战': 'サポート',
    '王朝模式': '王朝モード', '工资限额': '給与上限', '真实数据': 'リアルデータ', '排行榜': 'ランキング',
    '球探': 'スカウト', '抽卡': 'ガチャ', '盲盒': 'ブラインドボックス', '心愿球员': 'ウィッシュリスト', '概率': '確率',
    '选秀': 'ドラフト', '球会市场': 'マーケット', '寄售': '委託', '跨服': 'クロスサーバー',
    '星探': 'エージェント', '魅力值': 'カリスマ', '引援': '選手獲得', '升级': 'レベルアップ',
    '升星': '星上げ', '成功率': '成功率', '材料': '素材', '同名球员': '同名選手',
    '晋升': '進化', '金币': 'コイン', '重置': 'リセット', '交易': '取引',
    '能力卡': '能力カード', '资金': '資金',
    '强化': '強化', '进阶': '進化', '魂石': 'ソウルストーン', '合同': '契約',
    '装备': '装備', '升级': 'アップグレード', '融合': '合成', '洗炼': '錬成', '套装': 'セット',
    '徽章': 'バッジ', '保护卡': 'プロテクト', '孔位': 'スロット',
    '戒指': 'リング', '护佑': '護佑', '特殊属性': '特殊属性', '槽位': 'スロット',
    '赛区': '区域', '属性加成': 'ボーナス',
    '进攻': '攻撃', '防守': '守備', '克制': '相克',
    '寄售': '委託', '求购': '購入希望', '认证券': '認証券', '时间锁': 'タイムロック',
    '图鉴': '図鑑', '现役': '現役', '传奇': 'レジェンド', '球场皮肤': 'コートスキン',
    '教练': 'コーチ', '风格': 'スタイル', '技能': 'スキル', '觉醒': '覚醒',
    '联盟': 'ギルド', '科技': 'テクノロジー', '弹劾': '弾劾', '贡献': '貢献',
    '助理': 'アシスタント', '好感度': '好感度', '天赋': '天賦'
  },
  ko: {
    '阵容': '라인업', '预设': '프리셋', '战术': '전술',
    '球员分数': '점수', '能力值': '능력치', '掉分': '점수 하락', '数据更新': '데이터 업데이트',
    '特训': '특훈', '肉卡': '육성 카드', '养成技巧': '육성 팁',
    '经典回顾': '클래식 리뷰', '关卡': '스테이지', '行动力': '이동력', '奖励': '보상',
    '巅峰巡演': '피크 투어', '训练收益': '트레이닝 수익', '商业巡演': '비즈니스 투어', '快速训练': '빠른 트레이닝', '钻石': '다이아',
    '豪门争锋': '강호 대결', '挑战券': '챌린지 티켓', '排名': '랭킹', '伤害': '피해',
    '排位赛': '랭크 매치', '赛季': '시즌', '段位': '티어', '积分': '포인트',
    '竞技赛': '경쟁 경기', '能量饮料': '에너지 드링크', '战术道具': '전술 아이템',
    '组队赛': '팀 대전', '多人': '협동', '碎片': '파편', '助战': '지원',
    '王朝模式': '왕조 모드', '工资限额': '연봉 상한', '真实数据': '실제 데이터', '排行榜': '랭킹',
    '球探': '스카우트', '抽卡': '가챠', '盲盒': '블라인드 박스', '心愿球员': '위시리스트', '概率': '확률',
    '选秀': '드래프트', '球会市场': '마켓', '寄售': '위탁 판매', '跨服': '크로스 서버',
    '星探': '스카우터', '魅力值': '매력치', '引援': '영입', '升级': '레벨업',
    '升星': '성급 상승', '成功率': '성공률', '材料': '재료', '同名球员': '동명 선수',
    '晋升': '승급', '金币': '골드', '重置': '초기화', '交易': '거래',
    '能力卡': '능력 카드', '资金': '자금',
    '强化': '강화', '进阶': '진화', '魂石': '소울스톤', '合同': '계약',
    '装备': '장비', '升级': '업그레이드', '融合': '합성', '洗炼': '세공', '套装': '세트',
    '徽章': '배지', '保护卡': '보호 카드', '孔位': '슬롯',
    '戒指': '반지', '护佑': '수호', '特殊属性': '특수 속성', '槽位': '슬롯',
    '赛区': '구역', '属性加成': '보너스',
    '进攻': '공격', '防守': '수비', '克制': '카운터',
    '寄售': '위탁', '求购': '구매 요청', '认证券': '인증권', '时间锁': '타임락',
    '图鉴': '도감', '现役': '현역', '传奇': '레전드', '球场皮肤': '구장 스킨',
    '教练': '코치', '风格': '스타일', '技能': '스킬', '觉醒': '각성',
    '联盟': '리그', '科技': '테크', '弹劾': '탄핵', '贡献': '공헌',
    '助理': '어시스턴트', '好感度': '호감도', '天赋': '천부'
  }
};

// Categories (labels will be pulled from CATEGORY_LABELS based on current language)
const CATEGORIES = [
  { key: 'all' },
  { key: '新手攻略' },
  { key: '主要玩法' },
  { key: '球员养成' },
  { key: '抽卡相关' },
  { key: '交易系统' },
  { key: '球队管理' }
];

function init() {
  renderLangSwitcher();
  renderCategories();
  bindEvents();
  showHome();
}

function renderLangSwitcher() {
  const container = document.getElementById('langSwitcher');
  container.innerHTML = Object.entries(LANG_LABELS).map(([key, label]) =>
    `<button class="lang-btn${key === currentLang ? ' active' : ''}" data-lang="${key}">${label}</button>`
  ).join('');
}

function updateDownloadLabels() {
  const labels = {
    en: { google: 'GET IT ON', apple: 'Download on the' },
    zh: { google: '立即下載', apple: '從以下位置下載' },
    ja: { google: 'Google Play で入手', apple: 'ダウンロード' },
    ko: { google: 'Google Play에서 다운로드', apple: 'App Store에서 다운로드' }
  };
  const lbl = labels[currentLang] || labels.en;
  document.querySelectorAll('[data-i18n="google-play-label"]').forEach(el => el.textContent = lbl.google);
  document.querySelectorAll('[data-i18n="app-store-label"]').forEach(el => el.textContent = lbl.apple);

  // Web payment labels
  const webLabels = {
    en: { title: 'Web-Payment', desc: 'Enjoy an extra 10% discount via Web-Payment. See details upon entry.' },
    zh: { title: '官網支付', desc: '使用官網支付可以享受 10% 的額外優惠，詳細進入後查看。' },
    ja: { title: 'ウェブ課金', desc: 'ウェブ課金ご利用で追加 10％特典付き。詳細は画面遷移後をご確認ください。' },
    ko: { title: '공식 홈페이지 충전', desc: '공식 홈페이지 충전으로 추가 10% 할인 혜택을 누릴 수 있습니다. 자세한 사항은 진입 후 확인 바랍니다.' }
  };
  const wl = webLabels[currentLang] || webLabels.en;
  document.querySelectorAll('[data-i18n="web-payment-title"]').forEach(el => el.textContent = wl.title);
  document.querySelectorAll('[data-i18n="web-payment-desc"]').forEach(el => el.textContent = wl.desc);

  // Related guides labels
  const relatedLabels = {
    en: 'Related Guides',
    zh: '相關攻略',
    ja: '関連攻略',
    ko: '관련 공략'
  };
  document.querySelectorAll('[data-i18n="related-guides"]').forEach(el => el.textContent = relatedLabels[currentLang] || relatedLabels.en);

  // Back button labels
  const backLabels = {
    en: '← Back to all guides',
    zh: '← 返回全部攻略',
    ja: '← 攻略一覧に戻る',
    ko: '← 전체 공략으로 돌아가기'
  };
  const backText = backLabels[currentLang] || backLabels.en;
  document.querySelectorAll('[data-i18n="back-to-all"]').forEach(el => el.textContent = backText);

  // Hero subtitle labels
  const heroSubtitles = {
    en: 'Complete game guides in English, 繁體中文, 日本語, 한국어. Search by keyword or browse by category.',
    zh: '提供英文、繁體中文、日本語、한국어 四種語言的完整遊戲攻略。可輸入關鍵字搜尋或按分類瀏覽。',
    ja: '英語、繁体字中国語、日本語、韓国語の完全攻略。キーワード検索やカテゴリ別閲覧に対応。',
    ko: '영어, 번체중문, 일본어, 한국어 완전 공략. 키워드 검색 또는 카테고리별 탐색이 가능합니다.'
  };
  const heroSubtitle = heroSubtitles[currentLang] || heroSubtitles.en;
  document.querySelectorAll('[data-i18n="hero-subtitle"]').forEach(el => el.textContent = heroSubtitle);
}

function renderCategories() {
  const container = document.getElementById('categoryFilters');
  container.innerHTML = CATEGORIES.map(cat => {
    const count = cat.key === 'all' ? GUIDES.length : GUIDES.filter(g => g.category === cat.key).length;
    const label = CATEGORY_LABELS[currentLang][cat.key] || CATEGORY_LABELS.en[cat.key];
    return `<button class="cat-btn${activeCategory === cat.key ? ' active' : ''}" data-cat="${cat.key}">
      ${label} <span class="cat-count">${count}</span>
    </button>`;
  }).join('');
}

function bindEvents() {
  // Language switch
  document.getElementById('langSwitcher').addEventListener('click', e => {
    const btn = e.target.closest('.lang-btn');
    if (!btn) return;
    currentLang = btn.dataset.lang;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCategories();
    updateDownloadLabels();
    if (currentGuide) {
      renderDetail(currentGuide);
    } else {
      renderGuides();
    }
    // Update URL hash
    updateHash();
  });

  // Category filter
  document.getElementById('categoryFilters').addEventListener('click', e => {
    const btn = e.target.closest('.cat-btn');
    if (!btn) return;
    activeCategory = btn.dataset.cat;
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGuides();
    updateHash();
  });

  // Search
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');

  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.trim().toLowerCase();
    searchClear.classList.toggle('visible', searchQuery.length > 0);
    renderGuides();
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClear.classList.remove('visible');
    renderGuides();
    searchInput.focus();
  });

  // Back button
  document.getElementById('backBtn').addEventListener('click', e => {
    e.preventDefault();
    showHome();
  });

  // Logo click
  document.getElementById('logoLink').addEventListener('click', e => {
    e.preventDefault();
    showHome();
  });

  // Popstate for browser back/forward
  window.addEventListener('popstate', () => {
    handleHash();
  });
}

function handleHash() {
  const hash = window.location.hash.slice(1);
  if (!hash) {
    showHome();
    return;
  }
  const guide = GUIDES.find(g => g.id === hash);
  if (guide) {
    showDetail(guide);
  } else {
    showHome();
  }
}

function updateHash() {
  if (currentGuide) {
    const langParam = currentLang !== 'en' ? `&lang=${currentLang}` : '';
    history.replaceState(null, '', `#${currentGuide.id}${langParam}`);
  } else {
    history.replaceState(null, '', '#');
  }
}

function showHome() {
  currentGuide = null;
  document.getElementById('homePage').classList.add('active');
  document.getElementById('detailPage').classList.remove('active');
  document.getElementById('searchInput').value = searchQuery;
  renderGuides();
  updateHash();
}

function showDetail(guide) {
  currentGuide = guide;
  document.getElementById('homePage').classList.remove('active');
  document.getElementById('detailPage').classList.add('active');
  renderDetail(guide);
  window.scrollTo(0, 0);
  updateHash();
}

function filterGuides() {
  let filtered = [...GUIDES];

  // Category filter
  if (activeCategory !== 'all') {
    filtered = filtered.filter(g => g.category === activeCategory);
  }

  // Search filter - fuzzy multi-keyword matching
  if (searchQuery) {
    const keywords = searchQuery.split(/\s+/).filter(k => k.length > 0);
    filtered = filtered.filter(g => {
      const content = g.content[currentLang];
      const seo = g.seo?.[currentLang];
      const searchText = [
        content?.title || '',
        content?.body || '',
        seo?.title || '',
        seo?.description || '',
        seo?.keywords || '',
        ...g.tags
      ].join(' ').toLowerCase();
      // All keywords must match (fuzzy: each keyword can appear anywhere in the text)
      return keywords.every(kw => searchText.includes(kw));
    });
  }

  return filtered;
}

function renderGuides() {
  const grid = document.getElementById('guidesGrid');
  const stats = document.getElementById('resultStats');
  const filtered = filterGuides();

  stats.textContent = filtered.length === GUIDES.length
    ? (currentLang === 'zh' ? `顯示全部 ${GUIDES.length} 篇攻略` :
       currentLang === 'ja' ? `全 ${GUIDES.length} 件の攻略を表示` :
       currentLang === 'ko' ? `전체 ${GUIDES.length} 개 공략 표시` :
       `Showing all ${GUIDES.length} guides`)
    : (currentLang === 'zh' ? `找到 ${filtered.length} / ${GUIDES.length} 篇攻略` :
       currentLang === 'ja' ? `${filtered.length} / ${GUIDES.length} 件の攻略が見つかりました` :
       currentLang === 'ko' ? `${filtered.length} / ${GUIDES.length} 개 공략을 찾았습니다` :
       `Found ${filtered.length} of ${GUIDES.length} guides`);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>No guides found</h3>
        <p>Try different keywords or browse by category</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map((g, i) => {
    const content = g.content[currentLang];
    const title = content?.title || g.content.en?.title || g.id;
    const categoryLabel = CATEGORY_LABELS[currentLang][g.category] || CATEGORY_LABELS.en[g.category] || g.category;
    const tagLabels = g.tags.map(t => TAG_LABELS[currentLang]?.[t] || TAG_LABELS.zh?.[t] || t);
    const star = g.recommended ? '<span class="card-star" title="Recommended">★</span>' : '';
    return `
      <a href="#${g.id}" class="guide-card ${g.recommended ? 'guide-card-recommended' : ''}" data-id="${g.id}" style="animation-delay: ${i * 0.05}s">
        ${star}
        <div class="card-category">${categoryLabel}</div>
        <div class="card-title">${title}</div>
        <div class="card-tags">
          ${tagLabels.map(t => `<span class="card-tag">#${t}</span>`).join('')}
        </div>
      </a>`;
  }).join('');

  // Bind click events
  grid.querySelectorAll('.guide-card').forEach(card => {
    card.addEventListener('click', e => {
      e.preventDefault();
      const guide = GUIDES.find(g => g.id === card.dataset.id);
      if (guide) showDetail(guide);
    });
  });
}

function renderDetail(guide) {
  const content = guide.content[currentLang] || guide.content.en;
  const seo = guide.seo?.[currentLang] || guide.seo?.en;

  document.getElementById('detailCategory').textContent = CATEGORY_LABELS[currentLang][guide.category] || CATEGORY_LABELS.en[guide.category] || guide.category;
  document.getElementById('detailTitle').textContent = content?.title || '';
  document.getElementById('detailTags').innerHTML = guide.tags.map(t =>
    `<span class="card-tag">#${TAG_LABELS[currentLang]?.[t] || TAG_LABELS.zh?.[t] || t}</span>`
  ).join('');

  document.getElementById('detailBody').innerHTML = content?.body || '';

  // Related guides (same category)
  const related = GUIDES.filter(g => g.category === guide.category && g.id !== guide.id).slice(0, 4);
  const relatedGrid = document.getElementById('relatedGrid');

  if (related.length > 0) {
    document.getElementById('relatedSection').style.display = 'block';
    relatedGrid.innerHTML = related.map(g => {
      const rc = g.content[currentLang] || g.content.en;
      const catLabel = CATEGORY_LABELS[currentLang][g.category] || CATEGORY_LABELS.en[g.category] || g.category;
      return `
        <a href="#${g.id}" class="related-card" data-id="${g.id}">
          <div class="card-title">${rc?.title || g.id}</div>
          <span class="card-tag" style="margin-top:4px;display:inline-block;font-size:11px">${catLabel}</span>
        </a>`;
    }).join('');

    relatedGrid.querySelectorAll('.related-card').forEach(card => {
      card.addEventListener('click', e => {
        e.preventDefault();
        const g = GUIDES.find(g => g.id === card.dataset.id);
        if (g) showDetail(g);
      });
    });
  } else {
    document.getElementById('relatedSection').style.display = 'none';
  }

  // Update SEO meta
  if (seo) {
    document.title = seo.title || 'NBA Basketball World 2026 Guide';
    document.querySelector('meta[name="description"]')?.setAttribute('content', seo.description || '');
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', seo.keywords || '');
  }
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  if (typeof GUIDES !== 'undefined' && GUIDES.length > 0) {
    init();
    handleHash();
  }
});
