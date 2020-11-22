<?php

function aca_load_admin_scripts(){

    wp_enqueue_media();

    wp_register_script('aca-admin-script', get_template_directory_uri() . '/assets/js/admin-min.js', ['jquery'], wp_get_theme()->get('Version'), true);
    wp_enqueue_script('aca-admin-script');

}
add_action('admin_enqueue_scripts', 'aca_load_admin_scripts');