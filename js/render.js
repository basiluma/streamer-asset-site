// Render Function
function renderAssets(container, assets, state) {
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
    container.innerHTML = filteredAssets.map(asset => `
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
