<?php

function sharp_add_admin_page(){
    add_menu_page('Sharp Theme Options', 'Sharp', 'manage_options', 'aca_sharp', 'sharp_theme_create_page', 'dashicons-admin-settings', 110);

    add_submenu_page('aca_sharp', 'Sharp Theme Options', 'Settings', 'manage_options', 'aca_sharp', 'sharp_theme_create_page');

    add_action('admin_init', 'sharp_custom_settings');
}
add_action('admin_menu', 'sharp_add_admin_page');

function sharp_custom_settings(){
    register_setting('aca-settings', 'aca_footer_logo');
    register_setting('aca-settings', 'aca_facebook_profile_url', 'sanitize_social_url');
    register_setting('aca-settings', 'aca_twitter_profile_url', 'sanitize_social_url');
    register_setting('aca-settings', 'aca_linkedin_profile_url', 'sanitize_social_url');

    add_settings_section('aca-sharp-settings', 'Theme Settings', 'sharp_options', 'aca_sharp');

    add_settings_field('aca-footer-logo', 'Footer Logo', 'aca_footer_logo', 'aca_sharp', 'aca-sharp-settings');
    add_settings_field('aca-social-fb', 'Facebook URL', 'aca_facebook_url', 'aca_sharp', 'aca-sharp-settings');
    add_settings_field('aca-social-tw', 'Twitter URL', 'aca_twitter_url', 'aca_sharp', 'aca-sharp-settings');
    add_settings_field('aca-social-li', 'Linkedin URL', 'aca_linkedin_url', 'aca_sharp', 'aca-sharp-settings');
}

function aca_footer_logo(){
    $value = esc_attr(get_option('aca_footer_logo'));
    echo '<div><img id="footer_logo" src="'.$value.'" /></div><input type="button" value="Upload Logo" id="upload_footer_logo_button" class="button button-secondary" /><input type="hidden" name="aca_footer_logo" id="upload_footer_logo_input" value="'.$value.'" />';
}

function aca_facebook_url(){
    $value = esc_attr(get_option('aca_facebook_profile_url'));
    echo '<input type="text" name="aca_facebook_profile_url" class="regular-text" value="'.$value.'" />';
}

function aca_twitter_url(){
    $value = esc_attr(get_option('aca_twitter_profile_url'));
    echo '<input type="text" name="aca_twitter_profile_url" class="regular-text" value="'.$value.'" />';
}

function aca_linkedin_url(){
    $value = esc_attr(get_option('aca_linkedin_profile_url'));
    echo '<input type="text" name="aca_linkedin_profile_url" class="regular-text" value="'.$value.'" />';
}

function sanitize_social_url($url){
    $url = sanitize_text_field($url);
    return $url;
}

function sharp_options(){
    echo 'Customize options';
}

function sharp_theme_create_page(){
    require_once get_template_directory() . '/inc/templates/admin-options.php';
}