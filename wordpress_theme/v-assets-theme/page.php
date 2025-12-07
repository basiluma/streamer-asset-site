<?php get_header(); ?>

<main>
    <div class="container">
        <?php
        while ( have_posts() ) :
            the_post();
            ?>
            <div class="page-content" style="background: white; padding: 40px; border-radius: var(--radius-lg); margin-top: 40px;">
                <h1><?php the_title(); ?></h1>
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>
            </div>
        <?php endwhile; ?>
    </div>
</main>

<?php get_footer(); ?>
