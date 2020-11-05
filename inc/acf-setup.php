<?php
define('ACF_PATH', get_stylesheet_directory() . '/inc/plugins/acf/');
define('ACF_URL', get_stylesheet_directory_uri() . '/inc/plugins/acf/');

include_once ACF_PATH . 'acf.php';

function aca_acf_settings_url($url){
	return ACF_URL;
}
add_filter('acf_settings_url', 'aca_acf_settings_url');

if(function_exists('acf_add_local_field_group')){
	#add custom fields
}