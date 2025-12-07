<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    
    <!-- Header content is currently managed by js/header.js in the static site. 
         For WP, we should ideally convert it to PHP, but for now we'll keep the JS injection 
         or create a placeholder. Let's create a proper WP header structure based on the JS. -->
    <header>
        <div class="container">
            <nav class="navbar">
                <a href="<?php echo home_url(); ?>" class="logo">
                    <span class="logo-icon">✨</span>
                    <span class="logo-text">V-Assets</span>
                </a>
                <div class="nav-links">
                    <a href="<?php echo home_url(); ?>" class="nav-item">ホーム</a>
                    <a href="<?php echo home_url('/terms'); ?>" class="nav-item">利用規約</a>
                    <a href="<?php echo home_url('/request'); ?>" class="nav-item">リクエスト</a>
                </div>
                <!-- Mobile Menu Button (Hidden on Desktop) -->
                <button class="mobile-menu-btn" aria-label="メニューを開く">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </div>
    </header>
    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu-overlay">
        <div class="mobile-menu-content">
            <button class="close-menu-btn" aria-label="メニューを閉じる">×</button>
            <a href="<?php echo home_url(); ?>" class="mobile-nav-item">ホーム</a>
            <a href="<?php echo home_url('/terms'); ?>" class="mobile-nav-item">利用規約</a>
            <a href="<?php echo home_url('/request'); ?>" class="mobile-nav-item">リクエスト</a>
        </div>
    </div>
