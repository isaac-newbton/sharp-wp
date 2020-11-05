<?php

get_header();
?>

<div id="primary">

    <main id="main" class="site_main">

        <article id="post-<?php the_ID(); ?>" class="product">

            <header class="page_header">
                <h1><?php the_title(); ?></h1>
            </header>

        </article>

    </main>

</div>

<?php
get_footer();