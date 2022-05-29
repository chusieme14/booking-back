(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/news/form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/news/form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  props: {
    payload: {}
  },
  methods: {
    save: function save() {
      this.$emit('save');
    },
    cancel: function cancel() {
      this.$emit('cancel');
    },
    triggerUpload: function triggerUpload() {
      this.$refs.file_input.click();
    },
    onFileChange: function onFileChange(file) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var imageFile, imageURL;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                imageFile = file[0];

                if (!(file.length > 0)) {
                  _context.next = 12;
                  break;
                }

                if (imageFile.type.match('image.*')) {
                  _context.next = 7;
                  break;
                }

                _this.errorDialog = true;
                _this.errorText = 'Please choose an image file';
                _context.next = 12;
                break;

              case 7:
                imageURL = URL.createObjectURL(imageFile);
                _this.avatar_blob = imageURL;
                _context.next = 11;
                return _this.createImageBase64(imageFile);

              case 11:
                _this.payload.image_base64 = _context.sent;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/news/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/news/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.vue */ "./resources/js/src/pages/news/filter.vue");
/* harmony import */ var _form_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue */ "./resources/js/src/pages/news/form.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    GraduateFilter: _filter_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    NewsForm: _form_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      payload: {
        image_base64: null
      },
      showForm: false,
      isupdate: false,
      isdelete: false,
      selectedItem: {},
      details: {},
      graduates: [],
      data: {
        title: "News",
        isFetching: false,
        keyword: "",
        filter: {}
      },
      footerPages: {
        "items-per-page-options": [5, 10, 15, 20, 30, 40, 50, 100, -1]
      },
      options: {
        itemsPerPage: 15
      },
      total: 0,
      headers: [{
        text: 'Id',
        align: 'start',
        sortable: true,
        value: 'id'
      }, {
        text: 'Image',
        align: 'start',
        sortable: false,
        value: 'image'
      }, {
        text: 'Title',
        align: 'start',
        sortable: true,
        value: 'title'
      }, {
        text: 'Description',
        align: 'start',
        sortable: false,
        value: 'description'
      }, {
        text: 'Date created',
        align: 'start',
        sortable: true,
        value: 'created_at'
      }, {
        text: 'Actions',
        align: 'start',
        sortable: false,
        value: 'action'
      }]
    };
  },
  methods: {
    addNew: function addNew() {
      this.showForm = true;
    },
    fetchPage: function fetchPage() {
      var _this = this;

      this.data.isFetching = true;

      var params = this._createParams(this.options);

      params = params + this._createFilterParams(this.data.filter);
      console.log(this.data.keyword, "keyword");
      if (this.data.keyword) params = params + '&keyword=' + this.data.keyword;
      axios.get("/admin/news?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.graduates = data.data;
        _this.data.isFetching = false;
        _this.total = data.total;
      });
    },
    resetFilter: function resetFilter() {},
    save: function save() {
      var _this2 = this;

      if (this.isupdate) {
        axios.put("/admin/news/".concat(this.payload.id), this.payload).then(function (_ref2) {
          var data = _ref2.data;

          _this2.fetchPage();

          _this2.clear();
        });
        return;
      }

      axios.post("/admin/news", this.payload).then(function (_ref3) {
        var data = _ref3.data;

        _this2.fetchPage();

        _this2.clear();
      });
    },
    cancel: function cancel() {
      this.clear();
    },
    clear: function clear() {
      this.payload.image_base64 = null;
      this.payload.description = "";
      this.payload.title = "";
      this.isupdate = false;
      this.showForm = false;
      this.isdelete = false;
      this.details = {};
      this.selectedItem = {};
    },
    showEdit: function showEdit(data) {
      Object.assign(this.payload, data);
      this.payload.image_base64 = this.payload.image;
      this.isupdate = true;
      this.showForm = true;
    },
    showDelete: function showDelete(val) {
      Object.assign(this.selectedItem, val);
      this.details.title = 'Delete';
      this.details.message = "Are you sure you want to remove ".concat(this.selectedItem.title, "?");
      this.isdelete = true;
    },
    remove: function remove() {
      var _this3 = this;

      axios["delete"]("/admin/news/".concat(this.selectedItem.id)).then(function (_ref4) {
        var data = _ref4.data;

        _this3.fetchPage();

        _this3.cancel();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/news/form.vue?vue&type=template&id=291b89bc&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/news/form.vue?vue&type=template&id=291b89bc& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c("v-card-title", [
        _vm._v(_vm._s(_vm.payload.id ? "Edit" : "Add") + " post"),
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-img", {
            attrs: {
              "max-height": "350",
              src: _vm.payload.image_base64
                ? _vm.payload.image_base64
                : "/sample/no_image.png",
            },
            on: { click: _vm.triggerUpload },
          }),
          _vm._v(" "),
          _c("input", {
            ref: "file_input",
            staticClass: "hidden",
            attrs: { type: "file", accept: "image/x-png,image/gif,image/jpeg" },
            on: {
              change: function ($event) {
                return _vm.onFileChange($event.target.files)
              },
            },
          }),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: { counter: "25", label: "Title" },
            model: {
              value: _vm.payload.title,
              callback: function ($$v) {
                _vm.$set(_vm.payload, "title", $$v)
              },
              expression: "payload.title",
            },
          }),
          _vm._v(" "),
          _c("v-textarea", {
            attrs: { filled: "", label: "Description", "auto-grow": "" },
            model: {
              value: _vm.payload.description,
              callback: function ($$v) {
                _vm.$set(_vm.payload, "description", $$v)
              },
              expression: "payload.description",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { color: "error" }, on: { click: _vm.cancel } },
            [_vm._v("Cancel")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { color: "success" }, on: { click: _vm.save } },
            [_vm._v("Save")]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/news/index.vue?vue&type=template&id=60f5e20a&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/news/index.vue?vue&type=template&id=60f5e20a& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { elevation: "1", "max-height": "90vh" } },
    [
      _c(
        "v-card-text",
        [
          _c("table-header", {
            attrs: { data: _vm.data },
            on: {
              addNew: _vm.addNew,
              refresh: _vm.fetchPage,
              search: _vm.fetchPage,
              resetFilters: _vm.resetFilter,
              filterRecord: _vm.fetchPage,
            },
            scopedSlots: _vm._u([
              {
                key: "custom_filter",
                fn: function () {
                  return [
                    _c("graduate-filter", {
                      attrs: { filter: _vm.data.filter },
                    }),
                  ]
                },
                proxy: true,
              },
            ]),
          }),
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "cursor-pointer table-fix-height",
            attrs: {
              headers: _vm.headers,
              items: _vm.graduates,
              "max-height": "100%",
              "single-select": false,
              "show-select": "",
              search: _vm.data.keyword,
              loading: _vm.data.isFetching,
              "server-items-length": _vm.total,
              "footer-props": _vm.footerPages,
              options: _vm.options,
              "items-per-page": _vm.options.itemsPerPage,
              "fixed-header": "",
            },
            on: {
              "update:options": [
                function ($event) {
                  _vm.options = $event
                },
                _vm.fetchPage,
              ],
            },
            scopedSlots: _vm._u([
              {
                key: "item.image",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _c("v-img", {
                      attrs: {
                        "max-height": "50",
                        "max-width": "100",
                        src: item.image ? item.image : "/sample/no-image.png",
                      },
                    }),
                  ]
                },
              },
              {
                key: "item.description",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n              " +
                        _vm._s(item.description.substring(0, 70) + "...") +
                        "\n          "
                    ),
                  ]
                },
              },
              {
                key: "item.created_at",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n              " +
                        _vm._s(_vm._formatDate(item.created_at)) +
                        "\n          "
                    ),
                  ]
                },
              },
              {
                key: "item.action",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _c("table-action", {
                      attrs: { item: item },
                      on: {
                        editItem: function ($event) {
                          return _vm.showEdit(item)
                        },
                        deleteItem: _vm.showDelete,
                      },
                    }),
                  ]
                },
              },
            ]),
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "800px" },
          model: {
            value: _vm.showForm,
            callback: function ($$v) {
              _vm.showForm = $$v
            },
            expression: "showForm",
          },
        },
        [
          _c("news-form", {
            attrs: { payload: _vm.payload },
            on: { cancel: _vm.cancel, save: _vm.save },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("confirm-dialog", {
        attrs: { details: _vm.details, show: _vm.isdelete },
        on: { cancel: _vm.cancel, confirm: _vm.remove },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/pages/news/filter.vue":
/*!************************************************!*\
  !*** ./resources/js/src/pages/news/filter.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "resources/js/src/pages/news/filter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/news/form.vue":
/*!**********************************************!*\
  !*** ./resources/js/src/pages/news/form.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_291b89bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=291b89bc& */ "./resources/js/src/pages/news/form.vue?vue&type=template&id=291b89bc&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/news/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_291b89bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_291b89bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/news/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/news/form.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/src/pages/news/form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/news/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/news/form.vue?vue&type=template&id=291b89bc&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/pages/news/form.vue?vue&type=template&id=291b89bc& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_291b89bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=291b89bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/news/form.vue?vue&type=template&id=291b89bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_291b89bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_291b89bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/news/index.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/pages/news/index.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_60f5e20a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=60f5e20a& */ "./resources/js/src/pages/news/index.vue?vue&type=template&id=60f5e20a&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/news/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_60f5e20a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_60f5e20a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/news/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/news/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/pages/news/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/news/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/news/index.vue?vue&type=template&id=60f5e20a&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/pages/news/index.vue?vue&type=template&id=60f5e20a& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_60f5e20a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=60f5e20a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/news/index.vue?vue&type=template&id=60f5e20a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_60f5e20a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_60f5e20a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);