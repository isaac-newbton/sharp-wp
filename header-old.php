<!DOCTYPE html>
<html <?php language_attributes('html'); ?> >
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> >

    <div id="page" class="site">

        <button type="button" id="nav_trigger_button" class="active" aria-label="Open Navigation">
            <i class="fa fa-bars"></i>
        </button>

        <nav id="site_nav" class="main_nav noprint">

            <div id="nav_logo_container">
                <?php the_custom_logo(); ?>
            </div>

            <?php wp_nav_menu([
                'theme_location'=>'main-nav',
                'menu_id'=>'main_nav',
                'container_id'=>'main-menu-container',
                'container_class'=>'inactive'
            ]); ?>

            <button id="nav_close_button" aria-label="Close Navigation">
                <i class="fa fa-times"></i>
            </button>

            <div id="nav_search_container">
                <?php get_search_form(); ?>
            </div>

        </nav>

        <div id="content" class="site_content">