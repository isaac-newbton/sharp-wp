<section class="no_results not_found">
    <header class="page_header">
        <h1 class="page_title"><?php esc_html_e('Nothing found'); ?></h1>
    </header>

    <div class="page_content">
        
        <?php if(is_search()): ?>

        <?php else: ?>

            <p><?php esc_html_e('We cannot find what you are looking for. Try entering a search term.'); ?></p>
            <?php get_search_form(); ?>

        <?php endif; ?>

    </div>
</section>