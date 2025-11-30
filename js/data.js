// Asset Data
const assets = [
    // NEW ASSETS (from images/assets)
    {
        id: 1,
        category: 'hands',
        title: 'エナジー缶を持つ手',
        tags: ['drink', 'energy', 'hand', 'cool', 'hands'],
        date: '2024-02-01',
        popularity: 100,
        color: '#fff',
        image: 'images/assets/1_エナジー缶を持つ手.png'
    },
    {
        id: 2,
        category: 'hands',
        title: 'エナジー缶を持つ手 (Ver.2)',
        tags: ['drink', 'energy', 'hand', 'cool', 'hands'],
        date: '2024-02-01',
        popularity: 95,
        color: '#fff',
        image: 'images/assets/1_エナジー缶を持つ手_2.png'
    },
    {
        id: 3,
        category: 'hands',
        title: 'ハートの手',
        tags: ['heart', 'love', 'cute', 'hand', 'hands'],
        date: '2024-02-02',
        popularity: 120,
        color: '#ffdde1',
        image: 'images/assets/2_ハートの手.png'
    },
    {
        id: 4,
        category: 'hands',
        title: 'ゲームをする手',
        tags: ['game', 'controller', 'cool', 'hand', 'hands'],
        date: '2024-02-03',
        popularity: 110,
        color: '#a1c4fd',
        image: 'images/assets/3_ゲームをする手.png'
    },
    {
        id: 5,
        category: 'hands',
        title: 'サイリウムを持つ手 (赤)',
        tags: ['penlight', 'live', 'red', 'cool', 'hands'],
        date: '2024-02-04',
        popularity: 90,
        color: '#ff7675',
        image: 'images/assets/3_サイリウムを持つ手_1.png'
    },
    {
        id: 6,
        category: 'hands',
        title: 'サイリウムを持つ手 (黄)',
        tags: ['penlight', 'live', 'yellow', 'cool', 'hands'],
        date: '2024-02-04',
        popularity: 88,
        color: '#74b9ff',
        image: 'images/assets/3_サイリウムを持つ手_2.png'
    },
    {
        id: 7,
        category: 'hands',
        title: 'サイリウムを持つ手 (青)',
        tags: ['penlight', 'live', 'blue', 'cute', 'hands'],
        date: '2024-02-04',
        popularity: 85,
        color: '#ffeaa7',
        image: 'images/assets/3_サイリウムを持つ手_3.png'
    },
    {
        id: 8,
        category: 'hands',
        title: 'サイリウムを持つ手 (緑)',
        tags: ['penlight', 'live', 'green', 'cute', 'hands'],
        date: '2024-02-04',
        popularity: 82,
        color: '#55efc4',
        image: 'images/assets/3_サイリウムを持つ手_4.png'
    },
    {
        id: 9,
        category: 'hands',
        title: 'サイリウムを持つ手 (紫)',
        tags: ['penlight', 'live', 'purple', 'cool', 'hands'],
        date: '2024-02-04',
        popularity: 89,
        color: '#a29bfe',
        image: 'images/assets/3_サイリウムを持つ手_5.png'
    },
    {
        id: 10,
        category: 'hands',
        title: 'サイリウムを持つ手 (ピンク)',
        tags: ['penlight', 'live', 'pink', 'cute', 'hands'],
        date: '2024-02-04',
        popularity: 98,
        color: '#fd79a8',
        image: 'images/assets/3_サイリウムを持つ手_6.png'
    },

    // ITEMS (Placeholders)
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

    // EQUIPMENT (Placeholders)
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
    }
];
