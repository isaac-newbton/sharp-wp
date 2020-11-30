<?php

get_header();
?>

<div id="primary">

    <main id="main" class="site_main">

        <?php if(function_exists('get_field')): $slides = get_field('slides'); ?>
            <?php if($slides && is_array($slides) && !empty($slides)): ?>
                <div id="main_slider_wrapper">
                    <div id="main_slider">
                        <ul class="slides slick-slider-container">
                            <?php foreach($slides as $id=>$slide): ?>
                                <li class="slide" id="slide-<?=$id?>" style="background-image: url(<?=$slide['background_image']['url']?>)">
                                    <div class="slide_overlay"></div>
                                    <div class="slide_content_wrapper">
                                        <div class="slide_content">
                                            <?=$slide['content']?>
                                        </div>
                                    </div>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>
            <?php endif; ?>
        <?php endif; ?>

        <?php while(have_posts()): the_post(); ?>
            <?php the_content(); ?>
        <?php endwhile; ?>

    </main>

</div>

<?php
get_footer();