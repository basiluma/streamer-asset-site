import { assets } from './data.js';
import { renderAssets } from './render.js';
import { initSlideshow, setupMobileMenu } from './ui.js';
import { initHeader } from './header.js';

// DOM Elements
const assetsGrid = document.getElementById('assetsGrid');
const sortSelect = document.getElementById('sortSelect');
const mobileSortSelect = document.getElementById('mobileSortSelect');
const categorySelect = document.getElementById('categorySelect');
const mobileCategorySelect = document.getElementById('mobileCategorySelect');
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
    // Header
    initHeader();

    // Initial Render (only if assetsGrid exists)
    if (assetsGrid) {
        renderAssets(assetsGrid, assets, state);
    }

    // Setup UI
    setupEventListeners();

    // Only init slideshow if slides exist
    if (document.querySelector('.slide')) {
        initSlideshow();
    }

    setupMobileMenu();
});

// Event Listeners
function setupEventListeners() {
    // Sort
    const handleSortChange = (e) => {
        const newValue = e.target.value;
        state.currentSort = newValue;

        // Sync values
        if (sortSelect && sortSelect !== e.target) sortSelect.value = newValue;
        if (mobileSortSelect && mobileSortSelect !== e.target) mobileSortSelect.value = newValue;

        if (assetsGrid) renderAssets(assetsGrid, assets, state);
    };

    if (sortSelect) sortSelect.addEventListener('change', handleSortChange);
    if (mobileSortSelect) mobileSortSelect.addEventListener('change', handleSortChange);


    // Category
    const handleCategoryChange = (e) => {
        const newValue = e.target.value;
        state.currentCategory = newValue;

        // Sync values
        if (categorySelect && categorySelect !== e.target) categorySelect.value = newValue;
        if (mobileCategorySelect && mobileCategorySelect !== e.target) mobileCategorySelect.value = newValue;

        if (assetsGrid) renderAssets(assetsGrid, assets, state);
    };

    if (categorySelect) categorySelect.addEventListener('change', handleCategoryChange);
    if (mobileCategorySelect) mobileCategorySelect.addEventListener('change', handleCategoryChange);


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
            if (assetsGrid) renderAssets(assetsGrid, assets, state);
        });
    });

    // Search
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.searchQuery = e.target.value;
            if (assetsGrid) renderAssets(assetsGrid, assets, state);
        });
    }
}
