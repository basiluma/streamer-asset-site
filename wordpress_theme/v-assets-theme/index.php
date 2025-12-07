<?php get_header(); ?>

<main>
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>配信を彩る、<br>プレミアムな素材たち。</h1>
            <p>Vtuber・ストリーマー向けの高品質な配信素材を無料でダウンロード。<br>
                クレジット表記不要、商用利用も可能です。</p>
            <div class="search-box">
                <input type="text" id="search-input" placeholder="素材を検索 (例: 手, マイク, 猫耳...)">
            </div>
            <div class="hero-tags">
                <span>人気のタグ:</span>
                <a href="#" class="hero-tag">#雑談配信</a>
                <a href="#" class="hero-tag">#歌枠</a>
                <a href="#" class="hero-tag">#ゲーム実況</a>
            </div>
        </div>
    </section>

    <div class="container main-layout">
        <!-- Sidebar Filters -->
        <aside class="sidebar">
            <div class="filter-group">
                <h3>カテゴリー</h3>
                <label class="filter-option">
                    <input type="checkbox" name="category" value="all" checked>
                    すべて
                </label>
                <?php
                $categories = get_terms( array(
                    'taxonomy' => 'asset_category',
                    'hide_empty' => false,
                ) );
                if ( ! empty( $categories ) && ! is_wp_error( $categories ) ) {
                    foreach ( $categories as $category ) {
                        echo '<label class="filter-option">';
                        echo '<input type="checkbox" name="category" value="' . esc_attr( $category->slug ) . '"> ';
                        echo esc_html( $category->name );
                        echo '</label>';
                    }
                }
                ?>
            </div>
        </aside>

        <!-- Asset Grid -->
        <div class="content">
            <div class="sort-bar">
                <span id="result-count">全<?php echo wp_count_posts('download_asset')->publish; ?>件</span>
                <select id="sort-select">
                    <option value="new">新着順</option>
                    <option value="popular">人気順</option>
                </select>
            </div>

            <div class="asset-grid" id="asset-grid">
                <?php
                $args = array(
                    'post_type' => 'download_asset',
                    'posts_per_page' => -1, // Show all for now, or implement pagination
                );
                $query = new WP_Query( $args );

                if ( $query->have_posts() ) :
                    while ( $query->have_posts() ) : $query->the_post();
                        $image_url = get_post_meta( get_the_ID(), 'asset_image_url', true );
                        $color = get_post_meta( get_the_ID(), 'asset_color', true );
                        // Fallback to featured image if set
                        if ( has_post_thumbnail() ) {
                            $image_url = get_the_post_thumbnail_url( get_the_ID(), 'medium' );
                        }
                        ?>
                        <a href="<?php the_permalink(); ?>" class="asset-card" data-category="<?php 
                            $cats = get_the_terms( get_the_ID(), 'asset_category' );
                            if($cats) { echo esc_attr($cats[0]->slug); }
                        ?>">
                            <div class="card-img" style="background-color: <?php echo esc_attr($color); ?>;">
                                <?php if($image_url): ?>
                                    <img src="<?php echo esc_url($image_url); ?>" alt="<?php the_title(); ?>" loading="lazy">
                                <?php endif; ?>
                            </div>
                            <div class="card-body">
                                <span class="card-cat"><?php 
                                    if($cats) { echo esc_html($cats[0]->name); }
                                ?></span>
                                <h3 class="card-title"><?php the_title(); ?></h3>
                                <div class="card-meta">
                                    <span class="card-date"><?php echo get_the_date('Y.m.d'); ?></span>
                                    <button class="like-btn">♥</button>
                                </div>
                            </div>
                        </a>
                        <?php
                    endwhile;
                    wp_reset_postdata();
                else :
                    echo '<p>素材が見つかりませんでした。</p>';
                endif;
                ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>
