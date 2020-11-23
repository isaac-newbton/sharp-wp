const {
	RichText,
	InspectorControls,
	ColorPalette,
	MediaUpload,
	InnerBlocks,
	BlockControls,
	AlignmentToolbar
} = wp.blockEditor;
const {
	PanelBody,
	Button,
	RangeControl
} = wp.components;
const ALLOWED_BLOCKS = ['core/button'];

export const name = 'aca/cta';

export const settings = {
    title: 'Call 2 Action (C)',
	description: 'A custom call-to-action block',
	icon: 'format-image',
	category: 'layout',

	//custom attributes
	attributes: {
		title: {
			type: 'string',
			source: 'html',
			selector: 'h2'
		},
		titleColor: {
			type: 'string',
			default: 'black'
		},
		body: {
			type: 'string',
			source: 'html',
			selector: 'p'
		},
		bodyColor: {
			type: 'string',
			default: 'black'
		},
		bodyAlignment: {
			type: 'string',
			default: 'none'
		},
		backgroundImage: {
			type: 'string',
			default: null
		},
		overlayColor: {
			type: 'string',
			default: 'black'
		},
		overlayOpacity: {
			type: 'number',
			default: 0.3
		}
	},

	//built-in functions
	edit: ({attributes, setAttributes})=>{
		const {
			title,
			titleColor,
			body,
			bodyColor,
			bodyAlignment,
			backgroundImage,
			overlayColor,
			overlayOpacity
		} = attributes;

		//custom functions
		function onChangeTitle(newTitle){
			setAttributes({title: newTitle});
		}
		function onChangeTitleColor(newColor){
			setAttributes({titleColor: newColor});
		}
		function onChangeBody(newBody){
			setAttributes({body: newBody});
		}
		function onChangeBodyColor(newColor){
			setAttributes({bodyColor: newColor});
		}
		function onChangeBodyAlignment(newAlignment){
			setAttributes({
				bodyAlignment: newAlignment === undefined ? 'none' : newAlignment
			});
		}
		function onChangeBackgroundImage(newImage){
			setAttributes({backgroundImage: newImage.sizes.full.url});
		}
		function onChangeOverlayColor(newColor){
			setAttributes({overlayColor: newColor});
		}
		function onChangeOverlayOpacity(newValue){
			setAttributes({overlayOpacity: newValue});
		}

		return ([
			<InspectorControls style={ {marginBottom:'40px'} }>
				<PanelBody title={ 'Font Color Settings' } >
					<p><strong>Select a Title color:</strong></p>
					<ColorPalette
						value={titleColor}
						onChange={onChangeTitleColor} />
					<p><strong>Select a Body color:</strong></p>
					<ColorPalette
						value={bodyColor}
						onChange={onChangeBodyColor} />
				</PanelBody>
				<PanelBody title={ 'Background Settings' }>
					<p><strong>Select a Background image:</strong></p>
					<MediaUpload
						onSelect={onChangeBackgroundImage}
						type="image"
						value={backgroundImage}
						render={ ({open})=>{
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
						<p><strong>Overlay Color:</strong></p>
						<ColorPalette
							value={overlayColor}
							onChange={onChangeOverlayColor} />
						<RangeControl
							label={'Overlay Opacity'}
							value={overlayOpacity}
							onChange={onChangeOverlayOpacity}
							min={0}
							max={1}
							step={0.01} />
					</div>
				</PanelBody>
			</InspectorControls>,
			<div className="cta-container" style={ {
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat'
			} }>
				<div className="cta-overlay" style={ {
					background: overlayColor,
					opacity: overlayOpacity
				} }></div>
				{
					<BlockControls>
						<AlignmentToolbar
							value={bodyAlignment}
							onChange={onChangeBodyAlignment} />
					</BlockControls>
				}
				<RichText
					key="editable"
					tagName="h2"
					placeholder="Your CTA Title"
					value={title}
					onChange={onChangeTitle}
					style={ {color:titleColor, textAlign:bodyAlignment} } />
				<RichText
					key="editable"
					tagName="p"
					placeholder="Your CTA Body"
					value={body}
					onChange={onChangeBody}
					style={ {color:bodyColor, textAlign:bodyAlignment} } />
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
			</div>
		]);
	},

	save: ({attributes})=>{
		const {
			title,
			titleColor,
			body,
			bodyColor,
			bodyAlignment,
			backgroundImage,
			overlayColor,
			overlayOpacity
		} = attributes;
		return (
			<div className="cta-container" style={ {
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat'
			} }>
				<div className="cta-overlay" style={ {
					backgroundColor: overlayColor,
					opacity: overlayOpacity
				} }></div>
				<h2 style={ { color:titleColor, textAlign:bodyAlignment } }>{title}</h2>
				<RichText.Content
					tagName="p"
					value={body}
					style={ { color:bodyColor, textAlign:bodyAlignment } } />
				<InnerBlocks.Content/>
			</div>
		);
	}
};