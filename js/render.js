// Render Function
export function renderAssets(container, assets, state) {
    if (!container) return;

    const { currentCategory, currentSort, activeTags, searchQuery } = state;

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
    container.innerHTML = filteredAssets.map(asset => {
        const thumbStyle = asset.image
            ? `background-image: url('${encodeURI(asset.image)}'); background-size: contain; background-position: center; background-repeat: no-repeat;`
            : `background: ${asset.color};`;
        return `
        <article class="asset-card" data-category="${asset.category}" data-tags="${asset.tags.join(' ')}" data-date="${asset.date}" data-popularity="${asset.popularity}">
            <a href="detail.html?id=${asset.id}">
                <div class="asset-thumb" style="${thumbStyle} ${asset.border ? `border: ${asset.border};` : ''} position: relative; overflow: hidden;">
                    ${!asset.image && asset.fileUrl ? (() => {
                // Generate iframe/preview
                const isHtml = asset.fileUrl.endsWith('.html');

                // Scale Logic: Use asset.previewScale or default to 0.25 (zoom out 4x)
                const scale = asset.previewScale || 0.25;
                const sizePct = 100 / scale; // e.g., if scale is 0.25, size is 400%

                // pointer-events: none ensures clicks go through to the card link
                // background: #ffffff per user request
                const iframeStyle = `position: absolute; top: 0; left: 0; width: ${sizePct}%; height: ${sizePct}%; border: none; transform: scale(${scale}); transform-origin: 0 0; pointer-events: none; opacity: 0; transition: opacity 0.5s ease; background-color: #ffffff;`;

                // For CSS assets, we need to wrap them
                const srcAttr = isHtml ? `src="${asset.fileUrl}"` : `srcdoc='<!DOCTYPE html><html><head><link rel="stylesheet" href="${asset.fileUrl}"><style>body{margin:0;overflow:hidden;background:transparent;}</style></head><body></body></html>'`;

                return `<iframe ${srcAttr} style="${iframeStyle}" loading="lazy" onload="this.style.opacity='1'"></iframe>`;
            })() : ''}
                </div>
                <div class="asset-info">
                    <span class="asset-category">${getCategoryName(asset.category)}</span>
                    <h3 class="asset-title">${asset.title}</h3>
                </div>
            </a>
        </article>
    `}).join('');
}

// Helper: Get Category Name
function getCategoryName(category) {
    switch (category) {
        case 'hands': return '手素材';
        case 'items': return '小物・装飾';
        case 'equipment': return '配信機材';
        case 'css': return 'CSS素材';
        default: return 'その他';
    }
}
