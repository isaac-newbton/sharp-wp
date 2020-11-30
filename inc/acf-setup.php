<?php
define('ACF_PATH', get_stylesheet_directory() . '/inc/plugins/acf/');
define('ACF_URL', get_stylesheet_directory_uri() . '/inc/plugins/acf/');

include_once ACF_PATH . 'acf.php';

function aca_acf_settings_url($url){
	return ACF_URL;
}
add_filter('acf_settings_url', 'aca_acf_settings_url');

if(function_exists('acf_add_local_field_group')){
	acf_add_local_field_group([
		'key'=>'group_slider_5fc5022333057',
		'title'=>'Slider',
		'fields'=>[
			[
				'key'=>'field_slides_5fc5024d3cc03',
				'label'=>'Slides',
				'name'=>'slides',
				'type'=>'repeater',
				'layout'=>'table',
				'button_label'=>'Add Slide',
				'sub_fields'=>[
					[
						'key'=>'field_bg_img_5fc503323cc04',
						'label'=>'Background Image',
						'name'=>'background_image',
						'type'=>'image',
						'return_format'=>'array',
						'preview_size'=>'medium',
						'library'=>'all'
					],
					[
						'key'=>'field_content_5fc503653cc05',
						'label'=>'Content',
						'name'=>'content',
						'type'=>'wysiwyg',
						'tabs'=>'all',
						'toolbar'=>'full'
					]
				]
			]
		],
		'location'=>[
			[
				[
					'param'=>'post_type',
					'operator'=>'==',
					'value'=>'page'
				]
			]
		],
		'position'=>'acf_after_title',
		'style'=>'default',
		'label_placement'=>'top',
		'instruction_placement'=>'label',
		'active'=>true
	]);
}