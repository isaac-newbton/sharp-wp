const { registerBlockType } = wp.blocks;

import * as fullscreenSection from './blocks/fullscreen-section';

const blocks = [
	fullscreenSection
];

function registerBlock(block){
	const { name, settings } = block;
	registerBlockType(name, settings);
}

blocks.forEach(registerBlock);