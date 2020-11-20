jQuery(document).ready(function($){

    var mediaUploader;

    $('#upload_footer_logo_button').click(function(e){
        e.preventDefault();
        if(mediaUploader){
            mediaUploader.open();
            return;
        }

        mediaUploader = wp.media.frames.file_frame = wp.media({
            title: 'Upload an image',
            button: {
                text: 'Choose image'
            },
            multiple: false
        });
    });

});