document.addEventListener('DOMContentLoaded', () => {
    // Get ID from URL
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));

    if (!id) {
        // Redirect to index if no ID
        window.location.href = 'index.html';
        return;
    }

    // Find asset
    const asset = assets.find(a => a.id === id);

    if (!asset) {
        // Handle not found (could show error message or redirect)
        document.querySelector('.content-col').innerHTML = '<h1>素材が見つかりませんでした。</h1><p><a href="index.html">トップページに戻る</a></p>';
        return;
    }

    // Update DOM
    document.title = `${asset.title} | V-Assets`;

    // Image/Preview
    const previewImg = document.querySelector('.preview-img');
    if (asset.image) {
        previewImg.style.backgroundImage = `url('${asset.image}')`;
        previewImg.style.backgroundSize = 'contain';
        previewImg.style.backgroundPosition = 'center';
        previewImg.style.backgroundRepeat = 'no-repeat';
        previewImg.style.backgroundColor = 'transparent';
    } else {
        previewImg.style.backgroundColor = asset.color;
        if (asset.border) previewImg.style.border = asset.border;
    }

    // Meta
    document.getElementById('detail-category').textContent = getCategoryName(asset.category);
    document.getElementById('detail-title').textContent = asset.title;

    // Tags (Optional: display tags)
    // const tagsContainer = document.createElement('div');
    // ...

    // Download Button (Mock)
    // Download Button
    const downloadBtn = document.getElementById('download-btn');
    downloadBtn.onclick = (e) => {
        e.preventDefault();

        if (hueSlider && previewImg) {
            hueSlider.addEventListener('input', (e) => {
                const value = e.target.value;
                hueValue.textContent = value;
                previewImg.style.filter = `hue-rotate(${value}deg)`;
            });
        }
    });

// Helper: Get Category Name (Duplicated from render.js, ideally should be shared)
function getCategoryName(category) {
    switch (category) {
        case 'hands': return '手素材';
        case 'items': return '小物・装飾';
        case 'equipment': return '配信機材';
        default: return 'その他';
    }
}
