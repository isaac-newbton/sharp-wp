jQuery(document).ready(function($){

    var mediaUploader;

    $('#upload_footer_logo_button').on('click', function(e){
        e.preventDefault();
        if(mediaUploader){
            mediaUploader.open();
            return;
        }

        mediaUploader = wp.media.frames.file_frame = wp.media({
            title: 'Choose an image',
            button: {
                text: 'Choose image'
            },
            multiple: false
        });

        mediaUploader.on('select', function(){
            attachment = mediaUploader.state().get('selection').first().toJSON();
            $('#upload_footer_logo_input').val(attachment.url);
            $('#footer_logo').attr('src', attachment.url);
        });

        mediaUploader.open();
    });

});