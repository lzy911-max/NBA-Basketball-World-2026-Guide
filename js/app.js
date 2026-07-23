// NBA Basketball World 2026 Guide - App Logic
let currentLang = 'en';
let currentGuide = null;
let searchQuery = '';
let activeCategory = 'all';

const LANG_LABELS = { en: 'English', zh: '繁中', ja: '日本語', ko: '한국어' };

// Categories
const CATEGORIES = [
  { key: 'all', label: 'All Guides' },
  { key: '主要玩法', label: 'Game Modes' },
  { key: '球员养成', label: 'Player Development' },
  { key: '抽卡相关', label: 'Gacha & Scouting' },
  { key: '交易系统', label: 'Trading' },
  { key: '球队管理', label: 'Team Management' },
  { key: '属性说明', label: 'Attributes' }
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

function renderCategories() {
  const container = document.getElementById('categoryFilters');
  container.innerHTML = CATEGORIES.map(cat => {
    const count = cat.key === 'all' ? GUIDES.length : GUIDES.filter(g => g.category === cat.key).length;
    return `<button class="cat-btn${activeCategory === cat.key ? ' active' : ''}" data-cat="${cat.key}">
      ${cat.label} <span class="cat-count">${count}</span>
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
    ? `Showing all ${GUIDES.length} guides`
    : `Found ${filtered.length} of ${GUIDES.length} guides`;

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
    return `
      <a href="#${g.id}" class="guide-card" data-id="${g.id}" style="animation-delay: ${i * 0.05}s">
        <div class="card-category">${g.category}</div>
        <div class="card-title">${title}</div>
        <div class="card-tags">
          ${g.tags.map(t => `<span class="card-tag">#${t}</span>`).join('')}
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

  document.getElementById('detailCategory').textContent = guide.category;
  document.getElementById('detailTitle').textContent = content?.title || '';
  document.getElementById('detailTags').innerHTML = guide.tags.map(t =>
    `<span class="card-tag">#${t}</span>`
  ).join('');

  document.getElementById('detailBody').innerHTML = content?.body || '';

  // Related guides (same category)
  const related = GUIDES.filter(g => g.category === guide.category && g.id !== guide.id).slice(0, 4);
  const relatedGrid = document.getElementById('relatedGrid');

  if (related.length > 0) {
    document.getElementById('relatedSection').style.display = 'block';
    relatedGrid.innerHTML = related.map(g => {
      const rc = g.content[currentLang] || g.content.en;
      return `
        <a href="#${g.id}" class="related-card" data-id="${g.id}">
          <div class="card-title">${rc?.title || g.id}</div>
          <span class="card-tag" style="margin-top:4px;display:inline-block;font-size:11px">${g.category}</span>
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
