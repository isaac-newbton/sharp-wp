/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/cta/index.js":
/*!*********************************!*\
  !*** ./src/blocks/cta/index.js ***!
  \*********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    ColorPalette = _wp$blockEditor.ColorPalette,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl;
var ALLOWED_BLOCKS = ['core/button'];
var name = 'aca/cta';
var settings = {
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
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var title = attributes.title,
        titleColor = attributes.titleColor,
        body = attributes.body,
        bodyColor = attributes.bodyColor,
        bodyAlignment = attributes.bodyAlignment,
        backgroundImage = attributes.backgroundImage,
        overlayColor = attributes.overlayColor,
        overlayOpacity = attributes.overlayOpacity; //custom functions

    function onChangeTitle(newTitle) {
      setAttributes({
        title: newTitle
      });
    }

    function onChangeTitleColor(newColor) {
      setAttributes({
        titleColor: newColor
      });
    }

    function onChangeBody(newBody) {
      setAttributes({
        body: newBody
      });
    }

    function onChangeBodyColor(newColor) {
      setAttributes({
        bodyColor: newColor
      });
    }

    function onChangeBodyAlignment(newAlignment) {
      setAttributes({
        bodyAlignment: newAlignment === undefined ? 'none' : newAlignment
      });
    }

    function onChangeBackgroundImage(newImage) {
      setAttributes({
        backgroundImage: newImage.sizes.full.url
      });
    }

    function onChangeOverlayColor(newColor) {
      setAttributes({
        overlayColor: newColor
      });
    }

    function onChangeOverlayOpacity(newValue) {
      setAttributes({
        overlayOpacity: newValue
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Font Color Settings'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Select a Title color:")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: titleColor,
      onChange: onChangeTitleColor
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Select a Body color:")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: bodyColor,
      onChange: onChangeBodyColor
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Background Settings'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Select a Background image:")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onChangeBackgroundImage,
      type: "image",
      value: backgroundImage,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          onClick: open,
          icon: "upload",
          className: "block-editor-media-placeholder__button is-button is-default is-large"
        }, "Background Image");
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginTop: '20px',
        marginBottom: '40px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Overlay Color:")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: overlayColor,
      onChange: onChangeOverlayColor
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: 'Overlay Opacity',
      value: overlayOpacity,
      onChange: onChangeOverlayOpacity,
      min: 0,
      max: 1,
      step: 0.01
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "cta-container",
      style: {
        backgroundImage: "url(".concat(backgroundImage, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "cta-overlay",
      style: {
        background: overlayColor,
        opacity: overlayOpacity
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
      value: bodyAlignment,
      onChange: onChangeBodyAlignment
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "h2",
      placeholder: "Your CTA Title",
      value: title,
      onChange: onChangeTitle,
      style: {
        color: titleColor,
        textAlign: bodyAlignment
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "p",
      placeholder: "Your CTA Body",
      value: body,
      onChange: onChangeBody,
      style: {
        color: bodyColor,
        textAlign: bodyAlignment
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS
    }))];
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var title = attributes.title,
        titleColor = attributes.titleColor,
        body = attributes.body,
        bodyColor = attributes.bodyColor,
        bodyAlignment = attributes.bodyAlignment,
        backgroundImage = attributes.backgroundImage,
        overlayColor = attributes.overlayColor,
        overlayOpacity = attributes.overlayOpacity;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "cta-container",
      style: {
        backgroundImage: "url(".concat(backgroundImage, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "cta-overlay",
      style: {
        backgroundColor: overlayColor,
        opacity: overlayOpacity
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      style: {
        color: titleColor,
        textAlign: bodyAlignment
      }
    }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "p",
      value: body,
      style: {
        color: bodyColor,
        textAlign: bodyAlignment
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
  }
};

/***/ }),

/***/ "./src/blocks/fullscreen-section/index.js":
/*!************************************************!*\
  !*** ./src/blocks/fullscreen-section/index.js ***!
  \************************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    ColorPalette = _wp$blockEditor.ColorPalette,
    MediaUpload = _wp$blockEditor.MediaUpload;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl;
var name = 'aca/fullscreen-section';
var settings = {
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
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var backgroundImage = attributes.backgroundImage,
        backgroundOverlayColor = attributes.backgroundOverlayColor,
        backgroundOverlayOpacity = attributes.backgroundOverlayOpacity,
        paddingTop = attributes.paddingTop,
        paddingBottom = attributes.paddingBottom; //custom functions

    function onChangeBackgroundImage(newImage) {
      setAttributes({
        backgroundImage: newImage.sizes.full.url
      });
    }

    function onChangeBackgroundOverlayColor(newColor) {
      setAttributes({
        backgroundOverlayColor: newColor
      });
    }

    function onChangeBackgroundOverlayOpacity(newOpacity) {
      setAttributes({
        backgroundOverlayOpacity: newOpacity
      });
    }

    function onChangePaddingTop(newValue) {
      setAttributes({
        paddingTop: newValue
      });
    }

    function onChangePaddingBottom(newValue) {
      setAttributes({
        paddingBottom: newValue
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Background Settings'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Select a Background image:")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onChangeBackgroundImage,
      type: "image",
      value: backgroundImage,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          onClick: open,
          icon: "upload",
          className: "block-editor-media-placeholder__button is-button is-default is-large"
        }, "Background Image");
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginTop: '20px',
        marginBottom: '40px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Background Overlay Color:")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: backgroundOverlayColor,
      onChange: onChangeBackgroundOverlayColor
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: 'Overlay Opacity',
      value: backgroundOverlayOpacity,
      onChange: onChangeBackgroundOverlayOpacity,
      min: 0,
      max: 1,
      step: 0.01
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginTop: '20px',
        marginBottom: '40px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Background Padding:")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: 'Top',
      value: paddingTop,
      onChange: onChangePaddingTop,
      min: 0,
      max: 600,
      step: 1
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: 'Bottom',
      value: paddingBottom,
      onChange: onChangePaddingBottom,
      min: 0,
      max: 600,
      step: 1
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "fullscreen-section-container",
      style: {
        backgroundImage: "url(".concat(backgroundImage, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: "".concat(paddingTop, "px"),
        paddingBottom: "".concat(paddingBottom, "px")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "fullscreen-section-background-overlay",
      style: {
        backgroundColor: backgroundOverlayColor,
        opacity: backgroundOverlayOpacity
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "fullscreen-section-inner-container"
    }))];
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var backgroundImage = attributes.backgroundImage,
        backgroundOverlayColor = attributes.backgroundOverlayColor,
        backgroundOverlayOpacity = attributes.backgroundOverlayOpacity,
        paddingTop = attributes.paddingTop,
        paddingBottom = attributes.paddingBottom;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "fullscreen-section-container",
      style: {
        backgroundImage: "url(".concat(backgroundImage, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: "".concat(paddingTop, "px"),
        paddingBottom: "".concat(paddingBottom, "px")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "fullscreen-section-background-overlay",
      style: {
        backgroundColor: backgroundOverlayColor,
        opacity: backgroundOverlayOpacity
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "fullscreen-section-inner-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "fullscreen-section-inner-content"
    }, "[content goes here]")));
  }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_cta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/cta */ "./src/blocks/cta/index.js");
/* harmony import */ var _blocks_fullscreen_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/fullscreen-section */ "./src/blocks/fullscreen-section/index.js");
var registerBlockType = wp.blocks.registerBlockType;


var blocks = [_blocks_cta__WEBPACK_IMPORTED_MODULE_0__, _blocks_fullscreen_section__WEBPACK_IMPORTED_MODULE_1__];

function registerBlock(block) {
  var name = block.name,
      settings = block.settings;
  registerBlockType(name, settings);
}

blocks.forEach(registerBlock);

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map