<?php

get_header();
?>

<div id="primary">

    <main id="main" class="site_main">

        <?php while(have_posts()): the_post(); ?>
            <?php the_content(); ?>
        <?php endwhile; ?>

    </main>

</div>

<?php
get_footer();