<form action="/" class="search" role="search">
    <div class="search_box">
        <label for="search_input" id="search_input_label" class="sr_only">Search</label>
        <input type="text" name="s" id="search_input" placeholder="Search" value="<?php the_search_query(); ?>" aria-labelledby="search_input_label">
        <button type="submit" aria-label="Submit"><i class="fa fa-search"></i></button>
    </div>
</form>