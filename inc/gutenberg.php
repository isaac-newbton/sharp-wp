<?php

function aca_gutenberg_default_options(){
	add_theme_support('editor-color-palette', [
		[
			'name'=>'White',
			'slug'=>'white',
			'color'=>'#ffffff'
		],
		[
			'name'=>'Black',
			'slug'=>'black',
			'color'=>'#000000'
		],
		[
			'name'=>'Primary Accent',
			'slug'=>'primary-accent',
			'color'=>'#a21111'
		]
	]);
	add_theme_support('editor-font-sizes', [
		[
			'name'=>'Normal',
			'slug'=>'normal',
			'size'=>16
		],
		[
			'name'=>'Small',
			'slug'=>'small',
			'size'=>13
		],
		[
			'name'=>'Large',
			'slug'=>'large',
			'size'=>22
		]
	]);
}
add_action('init', 'aca_gutenberg_default_options');

function aca_gutenberg_blocks(){
	$theme_version = wp_get_theme()->get('Version');

	wp_register_script('custom-blocks-js', get_template_directory_uri() . '/build/index.js', ['wp-blocks', 'wp-block-editor', 'wp-components'], $theme_version);
	register_block_type('aca/fullscreen-section', [
		'editor_script'=>'custom-blocks-js'
	]);
}
add_action('init', 'aca_gutenberg_blocks');