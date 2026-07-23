# NBA Basketball World 2026 Guide

A multilingual game guide website for NBA Basketball World 2026 mobile game. Built as a pure static site with search, category filtering, and 4-language support.

## Features

- 🔍 **Keyword Search** - Multi-keyword fuzzy search across all content
- 🏷️ **Category Filters** - Browse by Game Modes, Player Development, Gacha, Trading, etc.
- 🌐 **4 Languages** - English, 繁體中文, 日本語, 한국어
- 📱 **Responsive Design** - Works on mobile, tablet, and desktop
- 🏀 **NBA Dark Theme** - Sport-themed dark UI

## Tech Stack

- Pure HTML/CSS/JavaScript (no framework)
- SPA with hash-based routing
- Data-driven: all guides in a single JS data file

## Local Development

Just open `index.html` in your browser. No build step required.

## Deployment

This is a static site — deploy to any static hosting:

- **GitHub Pages**: Push to `main` branch, enable Pages in repo settings
- **Netlify / Vercel**: Drag and drop the folder
- **Any static server**: Serve the root directory

## Structure

```
├── index.html          # Main entry point
├── icon.png            # Game icon / favicon
├── css/
│   └── style.css       # NBA dark sport theme
└── js/
    ├── guides-data.js  # All 20 guides in 4 languages
    └── app.js          # Search, filter, language switch logic
```

## License

Fan-made unofficial resource. All game content belongs to their respective owners.
