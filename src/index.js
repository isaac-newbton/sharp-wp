const { registerBlockType } = wp.blocks;

import * as cta from './blocks/cta';
import * as fullscreenSection from './blocks/fullscreen-section';

const blocks = [
	cta,
	fullscreenSection
];

function registerBlock(block){
	const { name, settings } = block;
	registerBlockType(name, settings);
}

blocks.forEach(registerBlock);