// Asset Data
const assets = [
    // HANDS
    {
        id: 1,
        category: 'hands',
        title: 'ゲームコントローラーを持つ手（ピンク）',
        tags: ['game', 'controller', 'pink', 'cute', 'hands'],
        date: '2024-01-15',
        popularity: 85,
        color: '#ffdde1',
        image: '' // Using color for now as per original HTML
    },
    {
        id: 2,
        category: 'hands',
        title: 'ゲームコントローラーを持つ手（ブルー）',
        tags: ['game', 'controller', 'blue', 'cool', 'hands'],
        date: '2024-01-14',
        popularity: 92,
        color: '#a1c4fd',
        image: ''
    },
    {
        id: 3,
        category: 'hands',
        title: 'ゲームコントローラーを持つ手（黒）',
        tags: ['game', 'controller', 'black', 'cool', 'hands'],
        date: '2024-01-10',
        popularity: 78,
        color: '#555',
        image: ''
    },
    {
        id: 4,
        category: 'hands',
        title: 'タピオカドリンクを持つ手（ミルクティー）',
        tags: ['drink', 'tapioca', 'cute', 'hands'],
        date: '2024-01-20',
        popularity: 95,
        color: '#f6d365',
        image: ''
    },
    {
        id: 5,
        category: 'hands',
        title: 'タピオカドリンクを持つ手（いちご）',
        tags: ['drink', 'tapioca', 'pink', 'cute', 'hands'],
        date: '2024-01-18',
        popularity: 88,
        color: '#ff9a9e',
        image: ''
    },
    {
        id: 6,
        category: 'hands',
        title: 'スマホを持つ手（白）',
        tags: ['zatsudan', 'smartphone', 'white', 'cute', 'hands'],
        date: '2024-01-05',
        popularity: 60,
        color: '#fff',
        border: '1px solid #eee',
        image: ''
    },
    {
        id: 7,
        category: 'hands',
        title: 'スマホを持つ手（黒）',
        tags: ['zatsudan', 'smartphone', 'black', 'cool', 'hands'],
        date: '2024-01-04',
        popularity: 55,
        color: '#333',
        image: ''
    },
    {
        id: 8,
        category: 'hands',
        title: 'ピースサインの手',
        tags: ['zatsudan', 'cute', 'hands'],
        date: '2024-01-25',
        popularity: 98,
        color: '#ffeaa7',
        image: ''
    },
    {
        id: 9,
        category: 'hands',
        title: 'ハートを作る手',
        tags: ['zatsudan', 'pink', 'cute', 'hands'],
        date: '2024-01-22',
        popularity: 90,
        color: '#fab1a0',
        image: ''
    },
    {
        id: 10,
        category: 'hands',
        title: '拍手する手',
        tags: ['zatsudan', 'hands'],
        date: '2024-01-02',
        popularity: 40,
        color: '#dfe6e9',
        image: ''
    },
    // ITEMS
    {
        id: 11,
        category: 'items',
        title: '猫耳カチューシャ（白）',
        tags: ['cat', 'ears', 'white', 'cute', 'items'],
        date: '2024-01-12',
        popularity: 82,
        color: '#fff',
        border: '1px solid #eee',
        image: ''
    },
    {
        id: 12,
        category: 'items',
        title: '猫耳カチューシャ（黒）',
        tags: ['cat', 'ears', 'black', 'cool', 'items'],
        date: '2024-01-11',
        popularity: 75,
        color: '#2d3436',
        image: ''
    },
    {
        id: 13,
        category: 'items',
        title: '犬耳セット',
        tags: ['dog', 'ears', 'cute', 'items'],
        date: '2024-01-13',
        popularity: 70,
        color: '#e17055',
        image: ''
    },
    {
        id: 14,
        category: 'items',
        title: '天使の輪（ヘイロー）',
        tags: ['halo', 'white', 'cute', 'items'],
        date: '2024-01-08',
        popularity: 65,
        color: '#fdcb6e',
        image: ''
    },
    {
        id: 15,
        category: 'items',
        title: '赤縁メガネ',
        tags: ['glasses', 'red', 'cool', 'items'],
        date: '2024-01-07',
        popularity: 50,
        color: '#ff7675',
        image: ''
    },
    {
        id: 16,
        category: 'items',
        title: '黒縁メガネ',
        tags: ['glasses', 'black', 'cool', 'items'],
        date: '2024-01-06',
        popularity: 55,
        color: '#636e72',
        image: ''
    },
    {
        id: 17,
        category: 'items',
        title: 'くまのぬいぐるみ',
        tags: ['plushie', 'bear', 'cute', 'items'],
        date: '2024-01-03',
        popularity: 80,
        color: '#b2bec3',
        image: ''
    },
    {
        id: 18,
        category: 'items',
        title: 'うさぎのぬいぐるみ',
        tags: ['plushie', 'rabbit', 'pink', 'cute', 'items'],
        date: '2024-01-09',
        popularity: 85,
        color: '#fd79a8',
        image: ''
    },
    {
        id: 19,
        category: 'items',
        title: '花冠（ピンク）',
        tags: ['flower', 'crown', 'pink', 'cute', 'items'],
        date: '2024-01-16',
        popularity: 72,
        color: '#e84393',
        image: ''
    },
    {
        id: 20,
        category: 'items',
        title: 'パーティーハット',
        tags: ['party', 'hat', 'colorful', 'zatsudan', 'items'],
        date: '2024-01-01',
        popularity: 30,
        color: '#00b894',
        image: ''
    },
    // EQUIPMENT
    {
        id: 21,
        category: 'equipment',
        title: 'コンデンサーマイク（ピンク）',
        tags: ['mic', 'pink', 'cute', 'equipment'],
        date: '2024-01-21',
        popularity: 88,
        color: '#fd79a8',
        image: ''
    },
    {
        id: 22,
        category: 'equipment',
        title: 'コンデンサーマイク（黒）',
        tags: ['mic', 'black', 'cool', 'equipment'],
        date: '2024-01-19',
        popularity: 76,
        color: '#2d3436',
        image: ''
    },
    {
        id: 23,
        category: 'equipment',
        title: 'ダイナミックマイク（シルバー）',
        tags: ['mic', 'cool', 'equipment'],
        date: '2024-01-17',
        popularity: 68,
        color: '#b2bec3',
        image: ''
    },
    {
        id: 24,
        category: 'equipment',
        title: '猫耳ヘッドセット（ピンク）',
        tags: ['headset', 'cat', 'ears', 'pink', 'cute', 'equipment'],
        date: '2024-01-24',
        popularity: 94,
        color: '#e84393',
        image: ''
    },
    {
        id: 25,
        category: 'equipment',
        title: 'ゲーミングヘッドセット（青）',
        tags: ['headset', 'game', 'blue', 'cool', 'equipment'],
        date: '2024-01-23',
        popularity: 86,
        color: '#0984e3',
        image: ''
    },
    {
        id: 26,
        category: 'equipment',
        title: 'ゲーミングチェア（ピンク）',
        tags: ['chair', 'gaming', 'pink', 'cute', 'equipment'],
        date: '2024-01-26',
        popularity: 91,
        color: '#fd79a8',
        image: ''
    },
    {
        id: 27,
        category: 'equipment',
        title: 'ゲーミングチェア（ブルー）',
        tags: ['chair', 'gaming', 'blue', 'cool', 'equipment'],
        date: '2024-01-27',
        popularity: 89,
        color: '#74b9ff',
        image: ''
    },
    {
        id: 28,
        category: 'equipment',
        title: 'ゲーミングチェア（赤）',
        tags: ['chair', 'gaming', 'red', 'cool', 'equipment'],
        date: '2024-01-28',
        popularity: 84,
        color: '#d63031',
        image: ''
    },
    {
        id: 29,
        category: 'equipment',
        title: '左手デバイス（ストリームデッキ）',
        tags: ['stream', 'deck', 'game', 'cool', 'equipment'],
        date: '2024-01-29',
        popularity: 79,
        color: '#2d3436',
        image: ''
    },
    {
        id: 30,
        category: 'equipment',
        title: 'リングライト',
        tags: ['ring', 'light', 'zatsudan', 'equipment'],
        date: '2024-01-30',
        popularity: 62,
        color: '#fff',
        border: '1px solid #eee',
        image: ''
    }
];

// DOM Elements
const assetsGrid = document.getElementById('assetsGrid');
const sortSelect = document.getElementById('sortSelect');
const categoryRadios = document.getElementsByName('category');
const filterTags = document.querySelectorAll('.filter-tag');
const searchInput = document.getElementById('searchInput');

// State
let currentCategory = 'all';
let currentSort = 'newest';
let activeTags = [];
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderAssets();
    setupEventListeners();
    initSlideshow();
});

// Render Function
function renderAssets() {
    if (!assetsGrid) return;

    // Filter assets
    let filteredAssets = assets.filter(asset => {
        // Category Filter
        if (currentCategory !== 'all' && asset.category !== currentCategory) {
            return false;
        }

        // Tag Filter
        if (activeTags.length > 0) {
            const hasTag = activeTags.some(tag => asset.tags.includes(tag));
            if (!hasTag) return false;
        }

        // Search Filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const matchTitle = asset.title.toLowerCase().includes(query);
            const matchTags = asset.tags.some(tag => tag.toLowerCase().includes(query));
            if (!matchTitle && !matchTags) return false;
        }

        return true;
    });

    // Sort assets
    filteredAssets.sort((a, b) => {
        if (currentSort === 'newest') {
            return new Date(b.date) - new Date(a.date);
        } else if (currentSort === 'popular') {
            return b.popularity - a.popularity;
        }
        return 0;
    });

    // Generate HTML
    assetsGrid.innerHTML = filteredAssets.map(asset => `
        <article class="asset-card" data-category="${asset.category}" data-tags="${asset.tags.join(' ')}" data-date="${asset.date}" data-popularity="${asset.popularity}">
            <a href="detail.html">
                <div class="asset-thumb" style="background: ${asset.color}; ${asset.border ? `border: ${asset.border};` : ''}"></div>
                <div class="asset-info">
                    <span class="asset-category">${getCategoryName(asset.category)}</span>
                    <h3 class="asset-title">${asset.title}</h3>
                </div>
            </a>
        </article>
    `).join('');
}

// Helper: Get Category Name
function getCategoryName(category) {
    switch (category) {
        case 'hands': return '手素材';
        case 'items': return '小物・装飾';
        case 'equipment': return '配信機材';
        default: return 'その他';
    }
}

// Event Listeners
function setupEventListeners() {
    // Sort
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderAssets();
        });
    }

    // Category
    categoryRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentCategory = e.target.value;
            renderAssets();
        });
    });

    // Tags
    filterTags.forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.preventDefault();
            const value = tag.dataset.value;

            if (tag.classList.contains('active')) {
                tag.classList.remove('active');
                activeTags = activeTags.filter(t => t !== value);
            } else {
                tag.classList.add('active');
                activeTags.push(value);
            }
            renderAssets();
        });
    });

    // Search
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderAssets();
        });
    }
}

// Slideshow Logic (Preserved from original if it was there, or added now)
// Slideshow Logic
function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slide-prev');
    const nextBtn = document.querySelector('.slide-next');
    let currentSlide = 0;

    if (slides.length > 0) {
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));

            if (index >= slides.length) currentSlide = 0;
            else if (index < 0) currentSlide = slides.length - 1;
            else currentSlide = index;

            slides[currentSlide].classList.add('active');
        }

        if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
        if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));

        // Auto play
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    }
}
