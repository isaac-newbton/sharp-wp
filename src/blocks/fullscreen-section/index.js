const {
    InspectorControls,
    ColorPalette,
    MediaUpload,
    InnerBlocks
} = wp.blockEditor;
const {
    PanelBody,
    Button,
    RangeControl,
    ColorPicker
} = wp.components;
const ALLOWED_BLOCKS = ['core/button', 'core/paragraph', 'core/html', 'core/heading', 'core/image'];

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
        },
        innerPadding: {
            type: 'number',
            default: 20
        },
        innerBackgroundColor: {
            type: 'string',
            default: 'rgba(255,255,255,1.0)'
        },
        innerBorderRadius: {
            type: 'number',
            default: 0
        },
        innerMaxWidth: {
            type: 'number',
            default: 1200
        }
    },

    //built-in functions
    edit: ({attributes, setAttributes})=>{
        const {
            backgroundImage,
            backgroundOverlayColor,
            backgroundOverlayOpacity,
            paddingTop,
            paddingBottom,
            innerPadding,
            innerBackgroundColor,
            innerBorderRadius,
            innerMaxWidth
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

        function onChangeInnerPadding(newValue){
            setAttributes({
                innerPadding: newValue
            });
        }

        function onChangeInnerBackgroundColor(newColor){
            setAttributes({
                innerBackgroundColor: 'rgba(' + newColor.r + ', ' + newColor.g + ', ' + newColor.b + ', ' + newColor.a + ')'
            });
        }

        function onChangeInnerBorderRadius(newValue){
            setAttributes({
                innerBorderRadius: newValue
            });
        }

        function onChangeInnerMaxWidth(newValue){
            setAttributes({
                innerMaxWidth: newValue
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
                    <div style={ { marginTop: '20px', marginBottom: '40px' } }>
                        <p><strong>Inner Container:</strong></p>
                        <ColorPicker
                            color={innerBackgroundColor}
                            onChangeComplete={ (color) => onChangeInnerBackgroundColor(color.rgb) }
                            disableAlpha={ false } />
                        <RangeControl
                            label={'Padding'}
                            value={innerPadding}
                            onChange={onChangeInnerPadding}
                            min={0}
                            max={100}
                            step={1} />
                        <RangeControl
                            label={'Corner Radius'}
                            value={innerBorderRadius}
                            onChange={onChangeInnerBorderRadius}
                            min={0}
                            max={100}
                            step={1} />
                        <RangeControl
                            label={'Max Width'}
                            value={innerMaxWidth}
                            onChange={onChangeInnerMaxWidth}
                            min={200}
                            max={1800}
                            step={40} />
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
                    <div className="fullscreen-section-inner-content" style={ {
                        backgroundColor: innerBackgroundColor,
                        padding: innerPadding,
                        borderRadius: innerBorderRadius,
                        maxWidth: innerMaxWidth
                    } }>
                        <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
                    </div>
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
            paddingBottom,
            innerPadding,
            innerBackgroundColor,
            innerBorderRadius,
            innerMaxWidth
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
                    <div className="fullscreen-section-inner-content" style={ {
                        backgroundColor: innerBackgroundColor,
                        padding: innerPadding,
                        borderRadius: innerBorderRadius,
                        maxWidth: innerMaxWidth
                    } }>
                        <InnerBlocks.Content/>
                    </div>
                </div>
            </div>
        );
    }
}