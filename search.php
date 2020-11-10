<?php

get_header();
?>

<div id="primary">

    <main id="main" class="site_main">

        <form action="/" class="search">
            <div class="search_box">
                <input type="text" name="s" id="search_input" placeholder="Enter search term" value="<?php the_search_query(); ?>">
                <button type="submit"><i class="fa fa-search"></i></button>
            </div>
        </form>

        <?php if(have_posts()): ?>

            <header class="page_header">
                <h1 class="page_title">Search Results</h1>
            </header>

            <ul class="results">
                <?php while(have_posts()): the_post(); ?>

                    <li class="result">
                        <?php get_template_part('template-parts/content', 'search'); ?>
                    </li>

                <?php endwhile; ?>
            </ul>

            <?php the_posts_pagination([
                'mid_size'=>2,
                'prev_text'=>'<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                'next_text'=>'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
            ]); ?>

        <?php else: ?>

            <div class="no_results">
                <h2>No Results Found</h2>
                <p>Sorry, but nothing matched your search. Please try again.</p>
            </div>

        <?php endif; ?>

    </main>

</div>

<?php
get_footer();