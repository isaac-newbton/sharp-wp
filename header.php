<!DOCTYPE html>
<html <?php language_attributes('html'); ?> >
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> >

    <div id="page" class="site">

        <nav id="site_nav" class="main_nav noprint">

            <?php wp_nav_menu([
                'theme_location'=>'main-nav',
                'menu_id'=>'main_nav'
            ]); ?>

        </nav>

        <div id="content" class="site_content">