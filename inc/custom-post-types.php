<?php
register_post_type('product', [
	'labels'=>[
		'name'=>'Products',
		'singular_name'=>'Product',
		'add_new_item'=>'Add New Product',
		'edit_item'=>'Edit Product',
		'new_item'=>'New Product',
		'view_item'=>'View Product',
		'view_items'=>'View Products',
		'search_items'=>'Search Products',
		'not_found'=>'No products found',
		'not_found_in_trash'=>'No products found in trash',
		'parent_item_colon'=>'Parent Product:',
		'all_items'=>'All Products',
		'archives'=>'Product Archives',
		'attributes'=>'Product Attributes',
		'insert_into_item'=>'Insert into product',
		'uploaded_to_this_item'=>'Uploaded to this product',
		'filter_items_list'=>'Filter products list',
		'items_list_navigation'=>'Products list navigation',
		'items_list'=>'Products list',
		'item_published'=>'Product published',
		'item_published_privately'=>'Product published privately',
		'item_reverted_to_draft'=>'Product reverted to draft',
		'item_scheduled'=>'Product scheduled',
		'item_updated'=>'Product updated'
	],
	'public'=>true,
	'has_archive'=>'products',
	'menu_position'=>20,
	'menu_icon'=>'dashicons-products',
	'supports'=>[
		'thumbnail',
		'title'
	]
]);

register_taxonomy('product_category', 'product', [
	'labels'=>[
		'name'=>'Product Categories',
		'singular_name'=>'Product Category',
		'search_item'=>'Search Product Category',
		'all_items'=>'All Product Categories',
		'parent_item'=>'Parent Product Category',
		'edit_item'=>'Edit Product Category',
		'view_item'=>'View Product Category',
		'update_item'=>'Update Product Category',
		'add_new_item'=>'Add Product Category',
		'new_item_name'=>'New Product Category',
		'separate_items_with_commas'=>'Separate product categories with commas',
		'add_or_remove_items'=>'Add or remove product categories',
		'choose_from_most_used'=>'Choose from the most used product categories',
		'not_found'=>'No product categories found',
		'no_terms'=>'No product categories'
	]
]);

register_post_type('recipe', [
	'labels'=>[
		'name'=>'Recipes',
		'singular_name'=>'Recipe',
		'add_new_item'=>'Add New Recipe',
		'edit_item'=>'Edit Recipe',
		'new_item'=>'New Recipe',
		'view_item'=>'View Recipe',
		'view_items'=>'View Recipes',
		'search_items'=>'Search Recipes',
		'not_found'=>'No recipes found',
		'not_found_in_trash'=>'No recipes found in trash',
		'parent_item_colon'=>'Parent Recipe:',
		'all_items'=>'All Recipes',
		'archives'=>'Recipe Archives',
		'attributes'=>'Recipe Attributes',
		'insert_into_item'=>'Insert into recipe',
		'uploaded_to_this_item'=>'Uploaded to this recipe',
		'filter_items_list'=>'Filter recipes list',
		'items_list_navigation'=>'Recipes list navigation',
		'items_list'=>'Recipes list',
		'item_published'=>'Recipe published',
		'item_published_privately'=>'Recipe published privately',
		'item_reverted_to_draft'=>'Recipe reverted to draft',
		'item_scheduled'=>'Recipe scheduled',
		'item_updated'=>'Recipe updated'
	],
	'public'=>true,
	'has_archive'=>'recipes',
	'menu_position'=>21,
	'menu_icon'=>'dashicons-list-view',
	'supports'=>[
		'thumbnail',
		'title'
	]
]);