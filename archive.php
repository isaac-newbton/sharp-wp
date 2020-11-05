<?php

get_header();
?>

<div id="primary">

    <main id="main" class="site_main">

        <?php if(have_posts()): ?>

            <header class="page_header">

                <?php the_archive_title('<h1 class="page_title">', '</h1>'); ?>
                <?php the_archive_description('<div class="archive_description">', '</div>'); ?>

            </header>

            <div class="post_list <?=get_post_type()?>_list">
        
                <?php while(have_posts()): the_post(); ?>

                    <?php get_template_part('template-parts/content', get_post_type()); ?>

                <?php endwhile; ?>

            </div>

        <?php else: ?>

            <?php get_template_part('template-parts/content', 'none'); ?>

        <?php endif; ?>

    </main>

</div>

<?php
get_footer();