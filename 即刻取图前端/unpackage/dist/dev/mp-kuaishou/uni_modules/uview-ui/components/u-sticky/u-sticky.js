(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uni_modules/uview-ui/components/u-sticky/u-sticky"],{

/***/ 296:
/*!****************************************************************************************************************!*\
  !*** F:/开源项目/jikeapi/jike-getpic-api/jike-getpic/即刻取图前端/uni_modules/uview-ui/components/u-sticky/u-sticky.vue ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_sticky_vue_vue_type_template_id_e18bd96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-sticky.vue?vue&type=template&id=e18bd96e&scoped=true& */ 297);
/* harmony import */ var _u_sticky_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-sticky.vue?vue&type=script&lang=js& */ 299);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_sticky_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_sticky_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _u_sticky_vue_vue_type_style_index_0_id_e18bd96e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./u-sticky.vue?vue&type=style&index=0&id=e18bd96e&lang=scss&scoped=true& */ 302);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _u_sticky_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_sticky_vue_vue_type_template_id_e18bd96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_sticky_vue_vue_type_template_id_e18bd96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e18bd96e",
  null,
  false,
  _u_sticky_vue_vue_type_template_id_e18bd96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni_modules/uview-ui/components/u-sticky/u-sticky.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 297:
/*!***********************************************************************************************************************************************************!*\
  !*** F:/开源项目/jikeapi/jike-getpic-api/jike-getpic/即刻取图前端/uni_modules/uview-ui/components/u-sticky/u-sticky.vue?vue&type=template&id=e18bd96e&scoped=true& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_sticky_vue_vue_type_template_id_e18bd96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-sticky.vue?vue&type=template&id=e18bd96e&scoped=true& */ 298);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_sticky_vue_vue_type_template_id_e18bd96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_sticky_vue_vue_type_template_id_e18bd96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_sticky_vue_vue_type_template_id_e18bd96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_sticky_vue_vue_type_template_id_e18bd96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 298:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/开源项目/jikeapi/jike-getpic-api/jike-getpic/即刻取图前端/uni_modules/uview-ui/components/u-sticky/u-sticky.vue?vue&type=template&id=e18bd96e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var s0 = _vm.__get_style([_vm.style])

  var s1 = _vm.__get_style([_vm.stickyContent])

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        s0: s0,
        s1: s1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 299:
/*!*****************************************************************************************************************************************!*\
  !*** F:/开源项目/jikeapi/jike-getpic-api/jike-getpic/即刻取图前端/uni_modules/uview-ui/components/u-sticky/u-sticky.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_sticky_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-sticky.vue?vue&type=script&lang=js& */ 300);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_sticky_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_sticky_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_sticky_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_sticky_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_sticky_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 300:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/开源项目/jikeapi/jike-getpic-api/jike-getpic/即刻取图前端/uni_modules/uview-ui/components/u-sticky/u-sticky.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 34));















var _props = _interopRequireDefault(__webpack_require__(/*! ./props.js */ 301));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};};
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * sticky 吸顶
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @description 该组件与CSS中position: sticky属性实现的效果一致，当组件达到预设的到顶部距离时， 就会固定在指定位置，组件位置大于预设的顶部距离时，会重新按照正常的布局排列。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @tutorial https://www.uviewui.com/components/sticky.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @property {String ｜ Number}	offsetTop		吸顶时与顶部的距离，单位px（默认 0 ）
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @property {String ｜ Number}	customNavHeight	自定义导航栏的高度 （h5 默认44  其他默认 0 ）
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @property {Boolean}			disabled		是否开启吸顶功能 （默认 false ）
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @property {String}			bgColor			组件背景颜色（默认 '#ffffff' ）
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @property {String ｜ Number}	zIndex			吸顶时的z-index值
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @property {String ｜ Number}	index			自定义标识，用于区分是哪一个组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @property {Object}			customStyle		组件的样式，对象形式
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @event {Function} fixed		组件吸顶时触发
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @event {Function} unfixed	组件取消吸顶时触发
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @example <u-sticky offsetTop="200"><view>塞下秋来风景异，衡阳雁去无留意</view></u-sticky>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */var _default =
{
  name: 'u-sticky',
  mixins: [uni.$u.mpMixin, uni.$u.mixin, _props.default],
  data: function data() {
    return {
      cssSticky: false, // 是否使用css的sticky实现
      stickyTop: 0, // 吸顶的top值，因为可能受自定义导航栏影响，最终的吸顶值非offsetTop值
      elId: uni.$u.guid(),
      left: 0, // js模式时，吸顶的内容因为处于postition: fixed模式，为了和原来保持一致的样式，需要记录并重新设置它的left，height，width属性
      width: 'auto',
      height: 'auto',
      fixed: false // js模式时，是否处于吸顶模式
    };
  },
  computed: {
    style: function style() {
      var style = {};
      if (!this.disabled) {
        if (this.cssSticky) {
          style.position = 'sticky';
          style.zIndex = this.uZindex;
          style.top = uni.$u.addUnit(this.stickyTop);
        } else {
          style.height = this.fixed ? this.height + 'px' : 'auto';
        }
      } else {
        // 无需吸顶时，设置会默认的relative(nvue)和非nvue的static静态模式即可




        style.position = 'static';

      }
      style.backgroundColor = this.bgColor;
      return uni.$u.deepMerge(uni.$u.addStyle(this.customStyle), style);
    },
    // 吸顶内容的样式
    stickyContent: function stickyContent() {
      var style = {};
      if (!this.cssSticky) {
        style.position = this.fixed ? 'fixed' : 'static';
        style.top = this.stickyTop + 'px';
        style.left = this.left + 'px';
        style.width = this.width == 'auto' ? 'auto' : this.width + 'px';
        style.zIndex = this.uZindex;
      }
      return style;
    },
    uZindex: function uZindex() {
      return this.zIndex ? this.zIndex : uni.$u.zIndex.sticky;
    } },

  mounted: function mounted() {
    this.init();
  },
  methods: {
    init: function init() {
      this.getStickyTop();
      // 判断使用的模式
      this.checkSupportCssSticky();
      // 如果不支持css sticky，则使用js方案，此方案性能比不上css方案
      if (!this.cssSticky) {
        !this.disabled && this.initObserveContent();
      }
    },
    initObserveContent: function initObserveContent() {var _this = this;
      // 获取吸顶内容的高度，用于在js吸顶模式时，给父元素一个填充高度，防止"塌陷"
      this.$uGetRect('#' + this.elId).then(function (res) {
        _this.height = res.height;
        _this.left = res.left;
        _this.width = res.width;
        _this.$nextTick(function () {
          _this.observeContent();
        });
      });
    },
    observeContent: function observeContent() {var _this2 = this;
      // 先断掉之前的观察
      this.disconnectObserver('contentObserver');
      var contentObserver = uni.createIntersectionObserver({
        // 检测的区间范围
        thresholds: [0.95, 0.98, 1] });

      // 到屏幕顶部的高度时触发
      contentObserver.relativeToViewport({
        top: -this.stickyTop });

      // 绑定观察的元素
      contentObserver.observe("#".concat(this.elId), function (res) {
        _this2.setFixed(res.boundingClientRect.top);
      });
      this.contentObserver = contentObserver;
    },
    setFixed: function setFixed(top) {
      // 判断是否出于吸顶条件范围
      var fixed = top <= this.stickyTop;
      this.fixed = fixed;
    },
    disconnectObserver: function disconnectObserver(observerName) {
      // 断掉观察，释放资源
      var observer = this[observerName];
      observer && observer.disconnect();
    },
    getStickyTop: function getStickyTop() {
      this.stickyTop = uni.$u.getPx(this.offsetTop) + uni.$u.getPx(this.customNavHeight);
    },
    checkSupportCssSticky: function checkSupportCssSticky() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:







                // 如果安卓版本高于8.0，依然认为是支持css sticky的(因为安卓7在某些机型，可能不支持sticky)
                if (uni.$u.os() === 'android' && Number(uni.$u.sys().system) > 8) {
                  _this3.cssSticky = true;
                }

                // APP-Vue和微信平台，通过computedStyle判断是否支持css sticky




                // ios上，从ios6开始，都是支持css sticky的
                if (uni.$u.os() === 'ios') {
                  _this3.cssSticky = true;
                }

                // nvue，是支持css sticky的
              case 2:case "end":return _context.stop();}}}, _callee);}))();


    },
    // 在APP和微信小程序上，通过uni.createSelectorQuery可以判断是否支持css sticky
    checkComputedStyle: function checkComputedStyle() {
      // 方法内进行判断，避免在其他平台生成无用代码









    },
    // H5通过创建元素的形式嗅探是否支持css sticky
    // 判断浏览器是否支持sticky属性
    checkCssStickyForH5: function checkCssStickyForH5() {
      // 方法内进行判断，避免在其他平台生成无用代码












    } },

  beforeDestroy: function beforeDestroy() {
    this.disconnectObserver('contentObserver');
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 302:
/*!**************************************************************************************************************************************************************************!*\
  !*** F:/开源项目/jikeapi/jike-getpic-api/jike-getpic/即刻取图前端/uni_modules/uview-ui/components/u-sticky/u-sticky.vue?vue&type=style&index=0&id=e18bd96e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_sticky_vue_vue_type_style_index_0_id_e18bd96e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-sticky.vue?vue&type=style&index=0&id=e18bd96e&lang=scss&scoped=true& */ 303);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_sticky_vue_vue_type_style_index_0_id_e18bd96e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_sticky_vue_vue_type_style_index_0_id_e18bd96e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_sticky_vue_vue_type_style_index_0_id_e18bd96e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_sticky_vue_vue_type_style_index_0_id_e18bd96e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_sticky_vue_vue_type_style_index_0_id_e18bd96e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 303:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/开源项目/jikeapi/jike-getpic-api/jike-getpic/即刻取图前端/uni_modules/uview-ui/components/u-sticky/u-sticky.vue?vue&type=style&index=0&id=e18bd96e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRjov5byA5rqQ6aG555uuL2ppa2VhcGkvamlrZS1nZXRwaWMtYXBpL2ppa2UtZ2V0cGljL+WNs+WIu+WPluWbvuWJjeerry91bmlfbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3Utc3RpY2t5L3Utc3RpY2t5LnZ1ZT83ZjI0Iiwid2VicGFjazovLy9GOi/lvIDmupDpobnnm64vamlrZWFwaS9qaWtlLWdldHBpYy1hcGkvamlrZS1nZXRwaWMv5Y2z5Yi75Y+W5Zu+5YmN56uvL3VuaV9tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1zdGlja3kvdS1zdGlja3kudnVlP2I1ZDAiLCJ3ZWJwYWNrOi8vL0Y6L+W8gOa6kOmhueebri9qaWtlYXBpL2ppa2UtZ2V0cGljLWFwaS9qaWtlLWdldHBpYy/ljbPliLvlj5blm77liY3nq68vdW5pX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXN0aWNreS91LXN0aWNreS52dWU/NDdhNyIsIndlYnBhY2s6Ly8vRjov5byA5rqQ6aG555uuL2ppa2VhcGkvamlrZS1nZXRwaWMtYXBpL2ppa2UtZ2V0cGljL+WNs+WIu+WPluWbvuWJjeerry91bmlfbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3Utc3RpY2t5L3Utc3RpY2t5LnZ1ZT83NGI0IiwidW5pLWFwcDovLy91bmlfbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3Utc3RpY2t5L3Utc3RpY2t5LnZ1ZSIsIndlYnBhY2s6Ly8vRjov5byA5rqQ6aG555uuL2ppa2VhcGkvamlrZS1nZXRwaWMtYXBpL2ppa2UtZ2V0cGljL+WNs+WIu+WPluWbvuWJjeerry91bmlfbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3Utc3RpY2t5L3Utc3RpY2t5LnZ1ZT8zZmY1Iiwid2VicGFjazovLy9GOi/lvIDmupDpobnnm64vamlrZWFwaS9qaWtlLWdldHBpYy1hcGkvamlrZS1nZXRwaWMv5Y2z5Yi75Y+W5Zu+5YmN56uvL3VuaV9tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1zdGlja3kvdS1zdGlja3kudnVlP2JiZjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpSTtBQUNqSTtBQUM0RDtBQUNMO0FBQ3NDOzs7QUFHN0Y7QUFDb0w7QUFDcEwsZ0JBQWdCLDZMQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLCtGQUFNO0FBQ1IsRUFBRSx3R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtR0FBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUE2cUIsQ0FBZ0Isa3NCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2dCanNCLGdGLCtzQkFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBLGtCQURBO0FBRUEsd0RBRkE7QUFHQSxNQUhBLGtCQUdBO0FBQ0E7QUFDQSxzQkFEQSxFQUNBO0FBQ0Esa0JBRkEsRUFFQTtBQUNBLHlCQUhBO0FBSUEsYUFKQSxFQUlBO0FBQ0EsbUJBTEE7QUFNQSxvQkFOQTtBQU9BLGtCQVBBLENBT0E7QUFQQTtBQVNBLEdBYkE7QUFjQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0EsT0FSQSxNQVFBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0F0QkE7QUF1QkE7QUFDQSxpQkF4QkEsMkJBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FsQ0E7QUFtQ0EsV0FuQ0EscUJBbUNBO0FBQ0E7QUFDQSxLQXJDQSxFQWRBOztBQXFEQSxTQXJEQSxxQkFxREE7QUFDQTtBQUNBLEdBdkRBO0FBd0RBO0FBQ0EsUUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FUQTtBQVVBLHNCQVZBLGdDQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0EsT0FQQTtBQVFBLEtBcEJBO0FBcUJBLGtCQXJCQSw0QkFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUZBOztBQUlBO0FBQ0E7QUFDQSw0QkFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQSxLQXJDQTtBQXNDQSxZQXRDQSxvQkFzQ0EsR0F0Q0EsRUFzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTFDQTtBQTJDQSxzQkEzQ0EsOEJBMkNBLFlBM0NBLEVBMkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0EvQ0E7QUFnREEsZ0JBaERBLDBCQWdEQTtBQUNBO0FBQ0EsS0FsREE7QUFtREEseUJBbkRBLG1DQW1EQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQXZCQTs7O0FBMkJBLEtBOUVBO0FBK0VBO0FBQ0Esc0JBaEZBLGdDQWdGQTtBQUNBOzs7Ozs7Ozs7O0FBVUEsS0EzRkE7QUE0RkE7QUFDQTtBQUNBLHVCQTlGQSxpQ0E4RkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQWFBLEtBNUdBLEVBeERBOztBQXNLQSxlQXRLQSwyQkFzS0E7QUFDQTtBQUNBLEdBeEtBLEU7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQUE7QUFBNHlDLENBQWdCLHl3Q0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQWgwQztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InVuaV9tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1zdGlja3kvdS1zdGlja3kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3Utc3RpY2t5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMThiZDk2ZSZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Utc3RpY2t5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdS1zdGlja3kudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3Utc3RpY2t5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUxOGJkOTZlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZTE4YmQ5NmVcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXN0aWNreS91LXN0aWNreS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTE2LTAhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5qcyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFxwYWdlLW1ldGEuanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3Utc3RpY2t5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMThiZDk2ZSZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgdmFyIHMwID0gX3ZtLl9fZ2V0X3N0eWxlKFtfdm0uc3R5bGVdKVxuXG4gIHZhciBzMSA9IF92bS5fX2dldF9zdHlsZShbX3ZtLnN0aWNreUNvbnRlbnRdKVxuXG4gIF92bS4kbXAuZGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAge1xuICAgICAgJHJvb3Q6IHtcbiAgICAgICAgczA6IHMwLFxuICAgICAgICBzMTogczFcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMi0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi91LXN0aWNreS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEyLTEhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3Utc3RpY2t5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlld1xyXG5cdFx0Y2xhc3M9XCJ1LXN0aWNreVwiXHJcblx0XHQ6aWQ9XCJlbElkXCJcclxuXHRcdDpzdHlsZT1cIltzdHlsZV1cIlxyXG5cdD5cclxuXHRcdDx2aWV3XHJcblx0XHRcdDpzdHlsZT1cIltzdGlja3lDb250ZW50XVwiXHJcblx0XHRcdGNsYXNzPVwidS1zdGlja3lfX2NvbnRlbnRcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8c2xvdCAvPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHByb3BzIGZyb20gJy4vcHJvcHMuanMnOztcclxuXHQvKipcclxuXHQgKiBzdGlja3kg5ZC46aG2XHJcblx0ICogQGRlc2NyaXB0aW9uIOivpee7hOS7tuS4jkNTU+S4rXBvc2l0aW9uOiBzdGlja3nlsZ7mgKflrp7njrDnmoTmlYjmnpzkuIDoh7TvvIzlvZPnu4Tku7bovr7liLDpooTorr7nmoTliLDpobbpg6jot53nprvml7bvvIwg5bCx5Lya5Zu65a6a5Zyo5oyH5a6a5L2N572u77yM57uE5Lu25L2N572u5aSn5LqO6aKE6K6+55qE6aG26YOo6Led56a75pe277yM5Lya6YeN5paw5oyJ54Wn5q2j5bi455qE5biD5bGA5o6S5YiX44CCXHJcblx0ICogQHR1dG9yaWFsIGh0dHBzOi8vd3d3LnV2aWV3dWkuY29tL2NvbXBvbmVudHMvc3RpY2t5Lmh0bWxcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZyDvvZwgTnVtYmVyfVx0b2Zmc2V0VG9wXHRcdOWQuOmhtuaXtuS4jumhtumDqOeahOi3neemu++8jOWNleS9jXB477yI6buY6K6kIDAg77yJXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmcg772cIE51bWJlcn1cdGN1c3RvbU5hdkhlaWdodFx06Ieq5a6a5LmJ5a+86Iiq5qCP55qE6auY5bqmIO+8iGg1IOm7mOiupDQ0ICDlhbbku5bpu5jorqQgMCDvvIlcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59XHRcdFx0ZGlzYWJsZWRcdFx05piv5ZCm5byA5ZCv5ZC46aG25Yqf6IO9IO+8iOm7mOiupCBmYWxzZSDvvIlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ31cdFx0XHRiZ0NvbG9yXHRcdFx057uE5Lu26IOM5pmv6aKc6Imy77yI6buY6K6kICcjZmZmZmZmJyDvvIlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZyDvvZwgTnVtYmVyfVx0ekluZGV4XHRcdFx05ZC46aG25pe255qEei1pbmRleOWAvFxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIO+9nCBOdW1iZXJ9XHRpbmRleFx0XHRcdOiHquWumuS5ieagh+ivhu+8jOeUqOS6juWMuuWIhuaYr+WTquS4gOS4que7hOS7tlxyXG5cdCAqIEBwcm9wZXJ0eSB7T2JqZWN0fVx0XHRcdGN1c3RvbVN0eWxlXHRcdOe7hOS7tueahOagt+W8j++8jOWvueixoeW9ouW8j1xyXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IGZpeGVkXHRcdOe7hOS7tuWQuOmhtuaXtuinpuWPkVxyXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IHVuZml4ZWRcdOe7hOS7tuWPlua2iOWQuOmhtuaXtuinpuWPkVxyXG5cdCAqIEBleGFtcGxlIDx1LXN0aWNreSBvZmZzZXRUb3A9XCIyMDBcIj48dmlldz7loZ7kuIvnp4vmnaXpo47mma/lvILvvIzooaHpmLPpm4Hljrvml6DnlZnmhI88L3ZpZXc+PC91LXN0aWNreT5cclxuXHQgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAndS1zdGlja3knLFxyXG5cdFx0bWl4aW5zOiBbdW5pLiR1Lm1wTWl4aW4sIHVuaS4kdS5taXhpbiwgcHJvcHNdLFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRjc3NTdGlja3k6IGZhbHNlLCAvLyDmmK/lkKbkvb/nlKhjc3PnmoRzdGlja3nlrp7njrBcclxuXHRcdFx0XHRzdGlja3lUb3A6IDAsIC8vIOWQuOmhtueahHRvcOWAvO+8jOWboOS4uuWPr+iDveWPl+iHquWumuS5ieWvvOiIquagj+W9seWTje+8jOacgOe7iOeahOWQuOmhtuWAvOmdnm9mZnNldFRvcOWAvFxyXG5cdFx0XHRcdGVsSWQ6IHVuaS4kdS5ndWlkKCksXHJcblx0XHRcdFx0bGVmdDogMCwgLy8ganPmqKHlvI/ml7bvvIzlkLjpobbnmoTlhoXlrrnlm6DkuLrlpITkuo5wb3N0aXRpb246IGZpeGVk5qih5byP77yM5Li65LqG5ZKM5Y6f5p2l5L+d5oyB5LiA6Ie055qE5qC35byP77yM6ZyA6KaB6K6w5b2V5bm26YeN5paw6K6+572u5a6D55qEbGVmdO+8jGhlaWdodO+8jHdpZHRo5bGe5oCnXHJcblx0XHRcdFx0d2lkdGg6ICdhdXRvJyxcclxuXHRcdFx0XHRoZWlnaHQ6ICdhdXRvJyxcclxuXHRcdFx0XHRmaXhlZDogZmFsc2UsIC8vIGpz5qih5byP5pe277yM5piv5ZCm5aSE5LqO5ZC46aG25qih5byPXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRzdHlsZSgpIHtcclxuXHRcdFx0XHRjb25zdCBzdHlsZSA9IHt9XHJcblx0XHRcdFx0aWYoIXRoaXMuZGlzYWJsZWQpIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmNzc1N0aWNreSkge1xyXG5cdFx0XHRcdFx0XHRzdHlsZS5wb3NpdGlvbiA9ICdzdGlja3knXHJcblx0XHRcdFx0XHRcdHN0eWxlLnpJbmRleCA9IHRoaXMudVppbmRleFxyXG5cdFx0XHRcdFx0XHRzdHlsZS50b3AgPSB1bmkuJHUuYWRkVW5pdCh0aGlzLnN0aWNreVRvcClcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHN0eWxlLmhlaWdodCA9IHRoaXMuZml4ZWQgPyB0aGlzLmhlaWdodCArICdweCcgOiAnYXV0bydcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8g5peg6ZyA5ZC46aG25pe277yM6K6+572u5Lya6buY6K6k55qEcmVsYXRpdmUobnZ1ZSnlkozpnZ5udnVl55qEc3RhdGlj6Z2Z5oCB5qih5byP5Y2z5Y+vXHJcblx0XHRcdFx0XHQvLyAjaWZkZWYgQVBQLU5WVUVcclxuXHRcdFx0XHRcdHN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHQvLyAjaWZuZGVmIEFQUC1OVlVFXHJcblx0XHRcdFx0XHRzdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnXHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5iZ0NvbG9yXHJcblx0XHRcdFx0cmV0dXJuIHVuaS4kdS5kZWVwTWVyZ2UodW5pLiR1LmFkZFN0eWxlKHRoaXMuY3VzdG9tU3R5bGUpLCBzdHlsZSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5ZC46aG25YaF5a6555qE5qC35byPXHJcblx0XHRcdHN0aWNreUNvbnRlbnQoKSB7XHJcblx0XHRcdFx0Y29uc3Qgc3R5bGUgPSB7fVxyXG5cdFx0XHRcdGlmICghdGhpcy5jc3NTdGlja3kpIHtcclxuXHRcdFx0XHRcdHN0eWxlLnBvc2l0aW9uID0gdGhpcy5maXhlZCA/ICdmaXhlZCcgOiAnc3RhdGljJ1xyXG5cdFx0XHRcdFx0c3R5bGUudG9wID0gdGhpcy5zdGlja3lUb3AgKyAncHgnXHJcblx0XHRcdFx0XHRzdHlsZS5sZWZ0ID0gdGhpcy5sZWZ0ICsgJ3B4J1xyXG5cdFx0XHRcdFx0c3R5bGUud2lkdGggPSB0aGlzLndpZHRoID09ICdhdXRvJyA/ICdhdXRvJyA6IHRoaXMud2lkdGggKyAncHgnXHJcblx0XHRcdFx0XHRzdHlsZS56SW5kZXggPSB0aGlzLnVaaW5kZXhcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHN0eWxlXHJcblx0XHRcdH0sXHJcblx0XHRcdHVaaW5kZXgoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuekluZGV4ID8gdGhpcy56SW5kZXggOiB1bmkuJHUuekluZGV4LnN0aWNreVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy5pbml0KClcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGluaXQoKSB7XHJcblx0XHRcdFx0dGhpcy5nZXRTdGlja3lUb3AoKVxyXG5cdFx0XHRcdC8vIOWIpOaWreS9v+eUqOeahOaooeW8j1xyXG5cdFx0XHRcdHRoaXMuY2hlY2tTdXBwb3J0Q3NzU3RpY2t5KClcclxuXHRcdFx0XHQvLyDlpoLmnpzkuI3mlK/mjIFjc3Mgc3RpY2t577yM5YiZ5L2/55SoanPmlrnmoYjvvIzmraTmlrnmoYjmgKfog73mr5TkuI3kuIpjc3PmlrnmoYhcclxuXHRcdFx0XHRpZiAoIXRoaXMuY3NzU3RpY2t5KSB7XHJcblx0XHRcdFx0XHQhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLmluaXRPYnNlcnZlQ29udGVudCgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpbml0T2JzZXJ2ZUNvbnRlbnQoKSB7XHJcblx0XHRcdFx0Ly8g6I635Y+W5ZC46aG25YaF5a6555qE6auY5bqm77yM55So5LqO5ZyoanPlkLjpobbmqKHlvI/ml7bvvIznu5nniLblhYPntKDkuIDkuKrloavlhYXpq5jluqbvvIzpmLLmraJcIuWhjOmZt1wiXHJcblx0XHRcdFx0dGhpcy4kdUdldFJlY3QoJyMnICsgdGhpcy5lbElkKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuaGVpZ2h0ID0gcmVzLmhlaWdodFxyXG5cdFx0XHRcdFx0dGhpcy5sZWZ0ID0gcmVzLmxlZnRcclxuXHRcdFx0XHRcdHRoaXMud2lkdGggPSByZXMud2lkdGhcclxuXHRcdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5vYnNlcnZlQ29udGVudCgpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdG9ic2VydmVDb250ZW50KCkge1xyXG5cdFx0XHRcdC8vIOWFiOaWreaOieS5i+WJjeeahOinguWvn1xyXG5cdFx0XHRcdHRoaXMuZGlzY29ubmVjdE9ic2VydmVyKCdjb250ZW50T2JzZXJ2ZXInKVxyXG5cdFx0XHRcdGNvbnN0IGNvbnRlbnRPYnNlcnZlciA9IHVuaS5jcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcih7XHJcblx0XHRcdFx0XHQvLyDmo4DmtYvnmoTljLrpl7TojIPlm7RcclxuXHRcdFx0XHRcdHRocmVzaG9sZHM6IFswLjk1LCAwLjk4LCAxXVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8g5Yiw5bGP5bmV6aG26YOo55qE6auY5bqm5pe26Kem5Y+RXHJcblx0XHRcdFx0Y29udGVudE9ic2VydmVyLnJlbGF0aXZlVG9WaWV3cG9ydCh7XHJcblx0XHRcdFx0XHR0b3A6IC10aGlzLnN0aWNreVRvcFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8g57uR5a6a6KeC5a+f55qE5YWD57SgXHJcblx0XHRcdFx0Y29udGVudE9ic2VydmVyLm9ic2VydmUoYCMke3RoaXMuZWxJZH1gLCByZXMgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRGaXhlZChyZXMuYm91bmRpbmdDbGllbnRSZWN0LnRvcClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHRoaXMuY29udGVudE9ic2VydmVyID0gY29udGVudE9ic2VydmVyXHJcblx0XHRcdH0sXHJcblx0XHRcdHNldEZpeGVkKHRvcCkge1xyXG5cdFx0XHRcdC8vIOWIpOaWreaYr+WQpuWHuuS6juWQuOmhtuadoeS7tuiMg+WbtFxyXG5cdFx0XHRcdGNvbnN0IGZpeGVkID0gdG9wIDw9IHRoaXMuc3RpY2t5VG9wXHJcblx0XHRcdFx0dGhpcy5maXhlZCA9IGZpeGVkXHJcblx0XHRcdH0sXHJcblx0XHRcdGRpc2Nvbm5lY3RPYnNlcnZlcihvYnNlcnZlck5hbWUpIHtcclxuXHRcdFx0XHQvLyDmlq3mjonop4Llr5/vvIzph4rmlL7otYTmupBcclxuXHRcdFx0XHRjb25zdCBvYnNlcnZlciA9IHRoaXNbb2JzZXJ2ZXJOYW1lXVxyXG5cdFx0XHRcdG9ic2VydmVyICYmIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRTdGlja3lUb3AoKSB7XHJcblx0XHRcdFx0dGhpcy5zdGlja3lUb3AgPSB1bmkuJHUuZ2V0UHgodGhpcy5vZmZzZXRUb3ApICsgdW5pLiR1LmdldFB4KHRoaXMuY3VzdG9tTmF2SGVpZ2h0KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBjaGVja1N1cHBvcnRDc3NTdGlja3koKSB7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEg1XHJcblx0XHRcdFx0Ly8gSDXvvIzkuIDoiKzpg73mmK/njrDku6PmtY/op4jlmajvvIzmmK/mlK/mjIFjc3Mgc3RpY2t555qE77yM6L+Z6YeM5L2/55So5Yib5bu65YWD57Sg5ZeF5o6i55qE5b2i5byP5Yik5patXHJcblx0XHRcdFx0aWYgKHRoaXMuY2hlY2tDc3NTdGlja3lGb3JINSgpKSB7XHJcblx0XHRcdFx0XHR0aGlzLmNzc1N0aWNreSA9IHRydWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdC8vIOWmguaenOWuieWNk+eJiOacrOmrmOS6jjguMO+8jOS+neeEtuiupOS4uuaYr+aUr+aMgWNzcyBzdGlja3nnmoQo5Zug5Li65a6J5Y2TN+WcqOafkOS6m+acuuWei++8jOWPr+iDveS4jeaUr+aMgXN0aWNreSlcclxuXHRcdFx0XHRpZiAodW5pLiR1Lm9zKCkgPT09ICdhbmRyb2lkJyAmJiBOdW1iZXIodW5pLiR1LnN5cygpLnN5c3RlbSkgPiA4KSB7XHJcblx0XHRcdFx0XHR0aGlzLmNzc1N0aWNreSA9IHRydWVcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIEFQUC1WdWXlkozlvq7kv6HlubPlj7DvvIzpgJrov4djb21wdXRlZFN0eWxl5Yik5pat5piv5ZCm5pSv5oyBY3NzIHN0aWNreVxyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtVlVFIHx8IE1QLVdFSVhJTlxyXG5cdFx0XHRcdHRoaXMuY3NzU3RpY2t5ID0gYXdhaXQgdGhpcy5jaGVja0NvbXB1dGVkU3R5bGUoKVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cclxuXHRcdFx0XHQvLyBpb3PkuIrvvIzku45pb3M25byA5aeL77yM6YO95piv5pSv5oyBY3NzIHN0aWNreeeahFxyXG5cdFx0XHRcdGlmICh1bmkuJHUub3MoKSA9PT0gJ2lvcycpIHtcclxuXHRcdFx0XHRcdHRoaXMuY3NzU3RpY2t5ID0gdHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gbnZ1Ze+8jOaYr+aUr+aMgWNzcyBzdGlja3nnmoRcclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLU5WVUVcclxuXHRcdFx0XHR0aGlzLmNzc1N0aWNreSA9IHRydWVcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5ZyoQVBQ5ZKM5b6u5L+h5bCP56iL5bqP5LiK77yM6YCa6L+HdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnnlj6/ku6XliKTmlq3mmK/lkKbmlK/mjIFjc3Mgc3RpY2t5XHJcblx0XHRcdGNoZWNrQ29tcHV0ZWRTdHlsZSgpIHtcclxuXHRcdFx0XHQvLyDmlrnms5XlhoXov5vooYzliKTmlq3vvIzpgb/lhY3lnKjlhbbku5blubPlj7DnlJ/miJDml6DnlKjku6PnoIFcclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLVZVRSB8fCBNUC1XRUlYSU5cclxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcblx0XHRcdFx0XHR1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpLnNlbGVjdCgnLnUtc3RpY2t5JykuZmllbGRzKHtcclxuXHRcdFx0XHRcdFx0Y29tcHV0ZWRTdHlsZTogW1wicG9zaXRpb25cIl1cclxuXHRcdFx0XHRcdH0pLmV4ZWMoZSA9PiB7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoJ3N0aWNreScgPT09IGVbMF0ucG9zaXRpb24pXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIEg16YCa6L+H5Yib5bu65YWD57Sg55qE5b2i5byP5ZeF5o6i5piv5ZCm5pSv5oyBY3NzIHN0aWNreVxyXG5cdFx0XHQvLyDliKTmlq3mtY/op4jlmajmmK/lkKbmlK/mjIFzdGlja3nlsZ7mgKdcclxuXHRcdFx0Y2hlY2tDc3NTdGlja3lGb3JINSgpIHtcclxuXHRcdFx0XHQvLyDmlrnms5XlhoXov5vooYzliKTmlq3vvIzpgb/lhY3lnKjlhbbku5blubPlj7DnlJ/miJDml6DnlKjku6PnoIFcclxuXHRcdFx0XHQvLyAjaWZkZWYgSDVcclxuXHRcdFx0XHRjb25zdCB2ZW5kb3JMaXN0ID0gWycnLCAnLXdlYmtpdC0nLCAnLW1zLScsICctbW96LScsICctby0nXSxcclxuXHRcdFx0XHRcdHZlbmRvckxpc3RMZW5ndGggPSB2ZW5kb3JMaXN0Lmxlbmd0aCxcclxuXHRcdFx0XHRcdHN0aWNreUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdmVuZG9yTGlzdExlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRzdGlja3lFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gdmVuZG9yTGlzdFtpXSArICdzdGlja3knXHJcblx0XHRcdFx0XHRpZiAoc3RpY2t5RWxlbWVudC5zdHlsZS5wb3NpdGlvbiAhPT0gJycpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0YmVmb3JlRGVzdHJveSgpIHtcclxuXHRcdFx0dGhpcy5kaXNjb25uZWN0T2JzZXJ2ZXIoJ2NvbnRlbnRPYnNlcnZlcicpXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHQudS1zdGlja3kge1xyXG5cdFx0LyogI2lmZGVmIEFQUC1WVUUgfHwgTVAtV0VJWElOICovXHJcblx0XHQvLyDmraTlpITpu5jorqTlhplzdGlja3nlsZ7mgKfvvIzmmK/kuLrkuobnu5nlvq7kv6HlkoxBUFDpgJrov4d1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeeafpeivouaYr+WQpuaUr+aMgWNzcyBzdGlja3nkvb/nlKhcclxuXHRcdHBvc2l0aW9uOiBzdGlja3k7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxcXFxkaXN0XFxcXGxvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGNzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTEhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcc3R5bGVQb3N0TG9hZGVyLmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFxzYXNzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdS1zdGlja3kudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTE4YmQ5NmUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cXFxcZGlzdFxcXFxsb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcc2Fzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTQhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3Utc3RpY2t5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUxOGJkOTZlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NTUzOTgwMjExNjJcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDovUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-sticky/u-sticky-create-component',
    {
        'uni_modules/uview-ui/components/u-sticky/u-sticky-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(296))
        })
    },
    [['uni_modules/uview-ui/components/u-sticky/u-sticky-create-component']]
]);
