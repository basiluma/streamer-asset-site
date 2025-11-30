// DOM Elements
// Elements will be grabbed inside init or assumed global if script is at end of body
// But let's define them here for scope access if needed, or just inside init.
// For safety, let's grab them inside DOMContentLoaded or just at top level if we trust the order.
// To match previous logic:

const assetsGrid = document.getElementById('assetsGrid');
const sortSelect = document.getElementById('sortSelect');
const categoryRadios = document.getElementsByName('category');
const filterTags = document.querySelectorAll('.filter-tag');
const searchInput = document.getElementById('searchInput');

// State
const state = {
    currentCategory: 'all',
    currentSort: 'newest',
    activeTags: [],
    searchQuery: ''
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    // assets is global from data.js
    // renderAssets is global from render.js
    renderAssets(assetsGrid, assets, state);

    // Setup UI
    setupEventListeners();
    initSlideshow();
    setupMobileMenu();
});

// Event Listeners
function setupEventListeners() {
    // Sort
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            state.currentSort = e.target.value;
            renderAssets(assetsGrid, assets, state);
        });
    }

    // Category
    categoryRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            state.currentCategory = e.target.value;
            renderAssets(assetsGrid, assets, state);
        });
    });

    // Tags
    filterTags.forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.preventDefault();
            const value = tag.dataset.value;

            if (tag.classList.contains('active')) {
                tag.classList.remove('active');
                state.activeTags = state.activeTags.filter(t => t !== value);
            } else {
                tag.classList.add('active');
                state.activeTags.push(value);
            }
            renderAssets(assetsGrid, assets, state);
        });
    });

    // Search
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.searchQuery = e.target.value;
            renderAssets(assetsGrid, assets, state);
        });
    }
}
