<?php
function v_assets_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage the document title.
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'v_assets_setup' );

function v_assets_scripts() {
    // Enqueue Google Fonts
    wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700;800&family=Quicksand:wght@500;700&display=swap', array(), null );

    // Enqueue Main Styles
    // Assuming the CSS files are moved to the theme folder or accessible. 
    // For this conversion, we will try to load them from the theme directory.
    // You might need to copy the 'css' folder into the theme folder.
    wp_enqueue_style( 'v-assets-main', get_template_directory_uri() . '/css/main.css', array(), '1.0.0' );
    
    // Theme stylesheet
    wp_enqueue_style( 'v-assets-style', get_stylesheet_uri() );

    // Enqueue Scripts
    wp_enqueue_script( 'v-assets-header', get_template_directory_uri() . '/js/header.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'v_assets_scripts' );

// Register Custom Post Type
function v_assets_register_cpt() {
    $labels = array(
        'name'                  => _x( 'Assets', 'Post Type General Name', 'v-assets-theme' ),
        'singular_name'         => _x( 'Asset', 'Post Type Singular Name', 'v-assets-theme' ),
        'menu_name'             => __( 'Assets', 'v-assets-theme' ),
        'name_admin_bar'        => __( 'Asset', 'v-assets-theme' ),
        'archives'              => __( 'Asset Archives', 'v-assets-theme' ),
        'attributes'            => __( 'Asset Attributes', 'v-assets-theme' ),
        'parent_item_colon'     => __( 'Parent Asset:', 'v-assets-theme' ),
        'all_items'             => __( 'All Assets', 'v-assets-theme' ),
        'add_new_item'          => __( 'Add New Asset', 'v-assets-theme' ),
        'add_new'               => __( 'Add New', 'v-assets-theme' ),
        'new_item'              => __( 'New Asset', 'v-assets-theme' ),
        'edit_item'             => __( 'Edit Asset', 'v-assets-theme' ),
        'update_item'           => __( 'Update Asset', 'v-assets-theme' ),
        'view_item'             => __( 'View Asset', 'v-assets-theme' ),
        'view_items'            => __( 'View Assets', 'v-assets-theme' ),
        'search_items'          => __( 'Search Asset', 'v-assets-theme' ),
        'not_found'             => __( 'Not found', 'v-assets-theme' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'v-assets-theme' ),
        'featured_image'        => __( 'Featured Image', 'v-assets-theme' ),
        'set_featured_image'    => __( 'Set featured image', 'v-assets-theme' ),
        'remove_featured_image' => __( 'Remove featured image', 'v-assets-theme' ),
        'use_featured_image'    => __( 'Use as featured image', 'v-assets-theme' ),
        'insert_into_item'      => __( 'Insert into asset', 'v-assets-theme' ),
        'uploaded_to_this_item' => __( 'Uploaded to this asset', 'v-assets-theme' ),
        'items_list'            => __( 'Assets list', 'v-assets-theme' ),
        'items_list_navigation' => __( 'Assets list navigation', 'v-assets-theme' ),
        'filter_items_list'     => __( 'Filter assets list', 'v-assets-theme' ),
    );
    $args = array(
        'label'                 => __( 'Asset', 'v-assets-theme' ),
        'description'           => __( 'Streamer Assets', 'v-assets-theme' ),
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
        'taxonomies'            => array( 'asset_category', 'asset_tag' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'post',
        'menu_icon'             => 'dashicons-images-alt2',
    );
    register_post_type( 'download_asset', $args );
}
add_action( 'init', 'v_assets_register_cpt', 0 );

// Register Taxonomies
function v_assets_register_taxonomies() {
    // Category
    $labels_cat = array(
        'name'                       => _x( 'Asset Categories', 'Taxonomy General Name', 'v-assets-theme' ),
        'singular_name'              => _x( 'Asset Category', 'Taxonomy Singular Name', 'v-assets-theme' ),
        'menu_name'                  => __( 'Categories', 'v-assets-theme' ),
    );
    $args_cat = array(
        'labels'                     => $labels_cat,
        'hierarchical'               => true,
        'public'                     => true,
        'show_ui'                    => true,
        'show_admin_column'          => true,
        'show_in_nav_menus'          => true,
        'show_tagcloud'              => true,
    );
    register_taxonomy( 'asset_category', array( 'download_asset' ), $args_cat );

    // Tags
    $labels_tag = array(
        'name'                       => _x( 'Asset Tags', 'Taxonomy General Name', 'v-assets-theme' ),
        'singular_name'              => _x( 'Asset Tag', 'Taxonomy Singular Name', 'v-assets-theme' ),
        'menu_name'                  => __( 'Tags', 'v-assets-theme' ),
    );
    $args_tag = array(
        'labels'                     => $labels_tag,
        'hierarchical'               => false,
        'public'                     => true,
        'show_ui'                    => true,
        'show_admin_column'          => true,
        'show_in_nav_menus'          => true,
        'show_tagcloud'              => true,
    );
    register_taxonomy( 'asset_tag', array( 'download_asset' ), $args_tag );
}
add_action( 'init', 'v_assets_register_taxonomies', 0 );
?>
