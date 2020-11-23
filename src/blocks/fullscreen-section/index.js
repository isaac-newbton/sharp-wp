const {
    InspectorControls,
    ColorPalette,
    MediaUpload
} = wp.blockEditor;
const {
    PanelBody,
    Button,
    RangeControl
} = wp.components;

export const name = 'aca/fullscreen-section';

export const settings = {
    title: 'Fullscreen Section',
    description: 'A section with a background image that fills the entire screen',
    icon: 'format-image',
    category: 'layout',

    //custom attributes
    attributes: {
        backgroundImage: {
            type: 'string',
            default: null
        },
        backgroundOverlayColor: {
            type: 'string',
            default: 'black'
        },
        backgroundOverlayOpacity: {
            type: 'number',
            default: 0.3
        },
        paddingTop: {
            type: 'number',
            default: 60
        },
        paddingBottom: {
            type: 'number',
            default: 60
        }
    },

    //built-in functions
    edit: ({attributes, setAttributes})=>{
        const {
            backgroundImage,
            backgroundOverlayColor,
            backgroundOverlayOpacity,
            paddingTop,
            paddingBottom
        } = attributes;

        //custom functions
        function onChangeBackgroundImage(newImage){
            setAttributes({
                backgroundImage: newImage.sizes.full.url
            });
        }

        function onChangeBackgroundOverlayColor(newColor){
            setAttributes({
                backgroundOverlayColor: newColor
            });
        }

        function onChangeBackgroundOverlayOpacity(newOpacity){
            setAttributes({
                backgroundOverlayOpacity: newOpacity
            });
        }

        function onChangePaddingTop(newValue){
            setAttributes({
                paddingTop: newValue
            });
        }

        function onChangePaddingBottom(newValue){
            setAttributes({
                paddingBottom: newValue
            });
        }

        return ([
            <InspectorControls style={ {marginBottom:'40px'} }>
                <PanelBody title={ 'Background Settings' } >
                    <p><strong>Select a Background image:</strong></p>
                    <MediaUpload
                        onSelect={onChangeBackgroundImage}
                        type="image"
                        value={backgroundImage}
                        render={ ({open}) => {
                            return (
                                <Button
                                    onClick={open}
                                    icon="upload"
                                    className="block-editor-media-placeholder__button is-button is-default is-large" >
                                        Background Image
                                </Button>
                            )
                        } } />
                    <div style={ { marginTop: '20px', marginBottom: '40px' } }>
                        <p><strong>Background Overlay Color:</strong></p>
                        <ColorPalette
                            value={backgroundOverlayColor}
                            onChange={onChangeBackgroundOverlayColor} />
                        <RangeControl
                            label={'Overlay Opacity'}
                            value={backgroundOverlayOpacity}
                            onChange={onChangeBackgroundOverlayOpacity}
                            min={0}
                            max={1}
                            step={0.01} />
                    </div>
                    <div style={ { marginTop: '20px', marginBottom: '40px' } }>
                        <p><strong>Background Padding:</strong></p>
                        <RangeControl
                            label={'Top'}
                            value={paddingTop}
                            onChange={onChangePaddingTop}
                            min={0}
                            max={600}
                            step={1} />
                        <RangeControl
                            label={'Bottom'}
                            value={paddingBottom}
                            onChange={onChangePaddingBottom}
                            min={0}
                            max={600}
                            step={1} />
                    </div>
                </PanelBody>
            </InspectorControls>,
            <div className="fullscreen-section-container" style={ {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
				backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                paddingTop: `${paddingTop}px`,
                paddingBottom: `${paddingBottom}px`
            } }>
                <div className="fullscreen-section-background-overlay" style={ {
					backgroundColor: backgroundOverlayColor,
					opacity: backgroundOverlayOpacity
				} }></div>
                <div className="fullscreen-section-inner-container">

                </div>
            </div>
        ]);
    },

    save: ({attributes})=>{
        const {
            backgroundImage,
            backgroundOverlayColor,
            backgroundOverlayOpacity,
            paddingTop,
            paddingBottom
        } = attributes;
        return (
            <div className="fullscreen-section-container" style={ {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
				backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                paddingTop: `${paddingTop}px`,
                paddingBottom: `${paddingBottom}px`
            } }>
                <div className="fullscreen-section-background-overlay" style={ {
					backgroundColor: backgroundOverlayColor,
					opacity: backgroundOverlayOpacity
				} }></div>
                <div className="fullscreen-section-inner-container">
                    <div className="fullscreen-section-inner-content">
                        [content goes here]
                    </div>
                </div>
            </div>
        );
    }
}