<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <header class="entry_header">
        <?php the_title(sprintf('<h3 class="entry_title"><a href="%s">', esc_url(get_permalink())), '</a></h3>'); ?>
    </header>
    <div class="entry_summary">
        <?php the_excerpt(); ?>
        <p class="read_more">
            <a href="<?php the_permalink(); ?>">Read More</a>
        </p>
    </div>
</article>