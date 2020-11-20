<h1>Theme Options</h1>
<?php settings_errors(); ?>
<form action="options.php" method="post">
    <?php settings_fields('aca-settings'); ?>
    <?php do_settings_sections('aca_sharp'); ?>
    <?php submit_button(); ?>
</form>