// Asset Data
const assets = [
    // Image Assets
    {
        id: 1,
        category: 'hands',
        title: 'エナジー缶を持つ手',
        tags: ['drink', 'energy', 'hand', 'cool', 'blue'],
        date: '2024-01-23',
        popularity: 86,
        color: '#0984e3',
        image: 'images/assets/1_エナジー缶を持つ手.png'
    },
    {
        id: 102,
        category: 'hands',
        title: 'エナジー缶を持つ手 (差分)',
        tags: ['drink', 'energy', 'hand', 'cool', 'blue', 'variant'],
        date: '2024-01-23',
        popularity: 50,
        color: '#0984e3',
        image: 'images/assets/1_エナジー缶を持つ手_2.png'
    },
    {
        id: 2,
        category: 'hands',
        title: 'ハートの手',
        tags: ['hand', 'heart', 'cute', 'love'],
        date: '2024-02-14',
        popularity: 95,
        color: '#e84393',
        image: 'images/assets/2_ハートの手.png'
    },
    {
        id: 3,
        category: 'hands',
        title: 'ゲームをする手',
        tags: ['game', 'controller', 'hand', 'gamer'],
        date: '2024-02-15',
        popularity: 92,
        color: '#6c5ce7',
        image: 'images/assets/3_ゲームをする手.png'
    },
    {
        id: 301,
        category: 'hands',
        title: 'サイリウムを持つ手 (Red)',
        tags: ['hand', 'penlight', 'idol', 'live', 'red'],
        date: '2024-03-01',
        popularity: 70,
        color: '#ff7675',
        image: 'images/assets/3_サイリウムを持つ手_1.png'
    },
    {
        id: 302,
        category: 'hands',
        title: 'サイリウムを持つ手 (Blue)',
        tags: ['hand', 'penlight', 'idol', 'live', 'blue'],
        date: '2024-03-01',
        popularity: 70,
        color: '#74b9ff',
        image: 'images/assets/3_サイリウムを持つ手_2.png'
    },
    {
        id: 303,
        category: 'hands',
        title: 'サイリウムを持つ手 (Green)',
        tags: ['hand', 'penlight', 'idol', 'live', 'green'],
        date: '2024-03-01',
        popularity: 70,
        color: '#55efc4',
        image: 'images/assets/3_サイリウムを持つ手_3.png'
    },
    {
        id: 304,
        category: 'hands',
        title: 'サイリウムを持つ手 (Yellow)',
        tags: ['hand', 'penlight', 'idol', 'live', 'yellow'],
        date: '2024-03-01',
        popularity: 70,
        color: '#ffeaa7',
        image: 'images/assets/3_サイリウムを持つ手_4.png'
    },
    {
        id: 305,
        category: 'hands',
        title: 'サイリウムを持つ手 (Purple)',
        tags: ['hand', 'penlight', 'idol', 'live', 'purple'],
        date: '2024-03-01',
        popularity: 70,
        color: '#a29bfe',
        image: 'images/assets/3_サイリウムを持つ手_5.png'
    },
    {
        id: 306,
        category: 'hands',
        title: 'サイリウムを持つ手 (Pink)',
        tags: ['hand', 'penlight', 'idol', 'live', 'pink'],
        date: '2024-03-01',
        popularity: 70,
        color: '#fd79a8',
        image: 'images/assets/3_サイリウムを持つ手_6.png'
    },

    // CSS Assets
    {
        id: 'css-001',
        category: 'css',
        title: 'ゲーミングボーダー (Neon)',
        tags: ['border', 'neon', 'css', 'overlay', 'pink'],
        date: '2024-12-07',
        popularity: 10,
        color: '#ff00ff',
        fileUrl: 'css/obs/neon-border.css',
        previewScale: 1.0,
        image: ''
    },

    // HTML Assets
    {
        id: 'html-001',
        category: 'css',
        title: 'デジタル時計 (Sample)',
        tags: ['clock', 'digital', 'widget', 'html'],
        date: '2024-12-07',
        popularity: 5,
        color: '#00ffff',
        fileUrl: 'widgets/clock-sample.html',
        previewScale: 0.8,
        image: ''
    },
    {
        id: 'widget-001',
        category: 'css',
        title: 'Floating Bubbles',
        tags: ['widget', 'animation', 'bubbles'],
        date: '2024-12-07',
        popularity: 3,
        color: '#a0e9ff',
        fileUrl: 'widgets/01_floating_bubbles/index.html',
        image: ''
    },
    {
        id: 'widget-002',
        category: 'css',
        title: 'Neon Border Loop',
        tags: ['widget', 'animation', 'neon', 'border'],
        date: '2024-12-07',
        popularity: 4,
        color: '#ff0055',
        fileUrl: 'widgets/02_neon_border/index.html',
        previewScale: 0.5,
        image: ''
    },
    {
        id: 'widget-003',
        category: 'css',
        title: 'Scrolling Text',
        tags: ['widget', 'text', 'marquee'],
        date: '2024-12-07',
        popularity: 2,
        color: '#ffdd00',
        fileUrl: 'widgets/03_scrolling_text/index.html',
        image: ''
    },
    {
        id: 'widget-004',
        category: 'css',
        title: 'Pulse Circle',
        tags: ['widget', 'animation', 'shape'],
        date: '2024-12-07',
        popularity: 3,
        color: '#00ffaa',
        fileUrl: 'widgets/04_pulse_circle/index.html',
        image: ''
    },
    {
        id: 'widget-005',
        category: 'css',
        title: 'Glitch Text',
        tags: ['widget', 'text', 'glitch', 'cyber'],
        date: '2024-12-07',
        popularity: 5,
        color: '#ff00ff',
        fileUrl: 'widgets/05_glitch_text/index.html',
        image: ''
    },
    {
        id: 'widget-006',
        category: 'css',
        title: 'Falling Sakura',
        tags: ['widget', 'animation', 'sakura', 'particles'],
        date: '2024-12-07',
        popularity: 5,
        color: '#ffc0cb',
        fileUrl: 'widgets/06_falling_sakura/index.html',
        image: ''
    },
    {
        id: 'widget-007',
        category: 'css',
        title: 'Gradient Background',
        tags: ['widget', 'css', 'background'],
        date: '2024-12-07',
        popularity: 4,
        color: '#8e2de2',
        fileUrl: 'widgets/07_gradient_background/index.html',
        image: ''
    },
    {
        id: 'widget-008',
        category: 'css',
        title: 'Typewriter Effect',
        tags: ['widget', 'text', 'animation'],
        date: '2024-12-07',
        popularity: 3,
        color: '#333333',
        fileUrl: 'widgets/08_typewriter_effect/index.html',
        image: ''
    },
    {
        id: 'widget-009',
        category: 'css',
        title: 'Bouncing Ball',
        tags: ['widget', 'animation', 'ball'],
        date: '2024-12-07',
        popularity: 2,
        color: '#ff5722',
        fileUrl: 'widgets/09_bouncing_ball/index.html',
        image: ''
    },
    {
        id: 'widget-010',
        category: 'css',
        title: 'Rotating Badge',
        tags: ['widget', 'animation', 'badge'],
        date: '2024-12-07',
        popularity: 3,
        color: '#4caf50',
        fileUrl: 'widgets/10_rotating_badge/index.html',
        image: ''
    },
    {
        id: 'widget-011',
        category: 'css',
        title: 'Flip Clock',
        tags: ['widget', 'clock', 'time'],
        date: '2024-12-07',
        popularity: 5,
        color: '#222222',
        fileUrl: 'widgets/11_flip clock/index.html',
        previewScale: 0.8,
        image: ''
    },
    {
        id: 'widget-012',
        category: 'css',
        title: 'Kawaii Clock',
        tags: ['widget', 'clock', 'cute'],
        date: '2024-12-07',
        popularity: 4,
        color: '#ff9a9e',
        fileUrl: 'widgets/12_kawaii clock/index.html',
        previewScale: 0.8,
        image: ''
    },
    {
        id: 'widget-013',
        category: 'css',
        title: 'Pixel Clock',
        tags: ['widget', 'clock', 'retro', 'pixel'],
        date: '2024-12-07',
        popularity: 4,
        color: '#00ff00',
        fileUrl: 'widgets/13_pixel clock/index.html',
        previewScale: 0.8,
        image: ''
    },
    {
        id: 'widget-014',
        category: 'css',
        title: 'Elegant Clock',
        tags: ['widget', 'clock', 'elegant'],
        date: '2024-12-07',
        popularity: 3,
        color: '#d4af37',
        fileUrl: 'widgets/14_elegant clock/index.html',
        previewScale: 0.8,
        image: ''
    },
    {
        id: 'widget-015',
        category: 'css',
        title: 'Analog Clock',
        tags: ['widget', 'clock', 'analog'],
        date: '2024-12-07',
        popularity: 3,
        color: '#607d8b',
        fileUrl: 'widgets/15_analog clock/index.html',
        previewScale: 0.8,
        image: ''
    },
    {
        id: 'widget-016',
        category: 'css',
        title: 'フォロー通知',
        tags: ['widget', 'css'],
        date: '2024-12-07',
        popularity: 3,
        color: '#607d8b',
        fileUrl: 'widgets/16_nordic_notification/index.html',
        previewScale: 0.2,
        image: ''
    }
];

// Helper to get asset by ID
function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}
