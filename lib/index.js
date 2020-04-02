(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["VersionControl"] = factory(require("react"));
	else
		root["VersionControl"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return VersionControl; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj){\"@babel/helpers - typeof\";if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _createSuper(Derived){return function(){var Super=_getPrototypeOf(Derived),result;if(_isNativeReflectConstruct()){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)===\"object\"||typeof call===\"function\")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect===\"undefined\"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy===\"function\")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}/**\n * @param children\n * @param version\n * @param latestVersion\n * @param checkVersion {Function} Callback executed each iteration of the version check to allow the parent to update the latest version.\n * @param renderHotUpdate {Function} When the system detects an update the component will render the result of executing this function passing the children as first argument.\n * @param debug\n * @param enabled\n * @param options {Object}  Options object\n * @param options.timeout {Number} time version checks\n * @returns {*}\n * @constructor\n */var VersionControl=/*#__PURE__*/function(_Component){_inherits(VersionControl,_Component);var _super=_createSuper(VersionControl);function VersionControl(){var _this;_classCallCheck(this,VersionControl);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_defineProperty(_assertThisInitialized(_this),\"state\",{initialized:false,onLoad:false,hotUpdate:false,version:null,latestVersion:null});_defineProperty(_assertThisInitialized(_this),\"manageUpdate\",function(){window.location.reload(true);});_defineProperty(_assertThisInitialized(_this),\"setDevelopmentEnhancers\",function(){console.info('--------------------------------');console.info('Setting up development enhancers');try{window.setHotUpdate=function(){_this.setState({hotUpdate:!_this.state.hotUpdate});};window.setLoadUpdate=function(){_this.setState({onLoad:!_this.state.onLoad});};console.info('Enhancers are ready, now you can use this methods to update the state, for more info look at the documentation: https://gitlab.com/oscmedgon/versioncontrol/blob/master/README.md');console.table({'window.setHotUpdate':'Set the hot update to true to force show the notification','window.setLoadUpdate':'Set the onLoad, the version control will automatically update the page'});}catch(error){console.error('Error setting up development enhancers, this doesn\\'t affects to the component standard behaviour, but you can report the error.');console.error(error.stack);}});_defineProperty(_assertThisInitialized(_this),\"handleCheckUpdate\",function(force){if(force){_this.props.checkVersion();}if(_this.updateDaemon){clearInterval(_this.updateDaemon);}_this.updateDaemon=setInterval(_this.props.checkVersion,_this.props.timeout);});return _this;}_createClass(VersionControl,[{key:\"componentDidMount\",value:function componentDidMount(){this.setState({initialized:true});if(this.props.debug){this.setDevelopmentEnhancers();}if(this.props.enabled){this.props.checkVersion();this.handleCheckUpdate();}}},{key:\"componentWillUnmount\",value:function componentWillUnmount(){if(this.updateDaemon){clearInterval(this.updateDaemon);}}},{key:\"render\",value:function render(){var _this$state=this.state,hotUpdate=_this$state.hotUpdate,onLoad=_this$state.onLoad;var _this$props=this.props,children=_this$props.children,enabled=_this$props.enabled,renderHotUpdate=_this$props.renderHotUpdate;if(!enabled){return children;}else{if(onLoad){this.manageUpdate();}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,children,hotUpdate&&renderHotUpdate(this.manageUpdate));}}}],[{key:\"getDerivedStateFromProps\",value:function getDerivedStateFromProps(props,state){var version=props.version,latestVersion=props.latestVersion;if(version!==state.version||latestVersion!==state.latestVersion){var newConfig=_objectSpread({},state);if(!newConfig.initialized){if(version!==undefined&&latestVersion!==undefined){if(version!==latestVersion){newConfig.onLoad=true;}newConfig.initialized=true;}}else{if(version!==latestVersion){newConfig.hotUpdate=true;}}newConfig.latestVersion=latestVersion;newConfig.version=version;return newConfig;}return null;}}]);return VersionControl;}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);_defineProperty(VersionControl,\"defaultProps\",{debug:true,enabled:true,timeout:30*60*1000});\n\n//# sourceURL=webpack://VersionControl/./src/index.js?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://VersionControl/external_%7B%22root%22:%22React%22,%22commonjs%22:%22react%22,%22commonjs2%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ })

/******/ });
});