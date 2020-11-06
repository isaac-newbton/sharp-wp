<?php
define('ACA_INCLUDE_PATH', get_stylesheet_directory() . '/inc/');
define('ACA_FONTAWESOME_VERSION', '5.15.1');

include_once ACA_INCLUDE_PATH . 'custom-post-types.php';
include_once ACA_INCLUDE_PATH . 'acf-setup.php';

function aca_theme_setup(){
	add_theme_support('automatic-feed-links');
	add_theme_support('title-tag');
	add_theme_support('customize-selective-refresh-widgets');
	add_theme_support('post-thumbnails', [
		'post',
		'product',
		'recipe'
	]);
	add_theme_support('html5', [
		'comment-list',
		'comment-form',
		'search-form',
		'gallery',
		'caption',
		'style',
		'script'
	]);
	add_theme_support('custom-logo', [
		'height'=>120,
		'width'=>180,
		'flex-width'=>true,
		'flex-height'=>true
	]);

	register_nav_menus([
		'main-nav'=>'Main Navigation',
		'footer-nav'=>'Footer Navigation'
	]);
}
add_action('after_setup_theme', 'aca_theme_setup');

function aca_register_styles() {
	$theme_version = wp_get_theme()->get('Version');

	wp_enqueue_style('aca-style', get_stylesheet_uri(), [], $theme_version);
	wp_enqueue_style('aca-style-min', get_stylesheet_directory_uri() . '/assets/css/main.min.css', [], $theme_version);

	wp_enqueue_style('fontawesome-style', get_stylesheet_directory_uri() . '/inc/fontawesome/css/all.min.css', [], ACA_FONTAWESOME_VERSION);
}
add_action('wp_enqueue_scripts', 'aca_register_styles');

function aca_register_scripts(){
	$theme_version = wp_get_theme()->get('Version');

	wp_enqueue_script('aca-script-min', get_stylesheet_directory_uri() . '/assets/js/main-min.js', [], $theme_version);
	wp_enqueue_script('aca-script-nav-min', get_stylesheet_directory_uri() . '/assets/js/nav-min.js', [], $theme_version, true);

	wp_enqueue_script('fontawesome-style', get_stylesheet_directory_uri() . '/inc/fontawesome/js/all.min.js', [], ACA_FONTAWESOME_VERSION);
}
add_action('wp_enqueue_scripts', 'aca_register_scripts');