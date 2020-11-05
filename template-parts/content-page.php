<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> >
    <header class="entry_header">
        <?php the_title('<h1 class="entry_title">', '</h1>'); ?>
    </header>
    <div class="entry_content">
        <?php the_content(); ?>
        <?php wp_link_pages([
            'before'=>'<div class="page_links>"' . esc_html__('Pages:'),
            'after'=>'</div>'
        ]); ?>
    </div>
</article> <!--#post-<?php the_ID(); ?>-->