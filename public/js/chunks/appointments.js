(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointments"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/appointment/form.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/appointment/form.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    payload: {},
    show: {}
  },
  data: function data() {
    return {
      minDate: new Date().toISOString().slice(0, 10),
      menu1: false,
      menu2: false,
      minTime: '8:00',
      maxTime: '18:00'
    };
  },
  methods: {
    save: function save() {
      if (!this.$refs.form.validate()) return;
      this.$emit('save', this.payload);
    }
  },
  watch: {
    "show": {
      handler: function handler(val) {
        if (!val && this.$refs.form) {
          this.$refs.form.resetValidation();
        }
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/appointment/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/appointment/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue */ "./resources/js/src/pages/appointment/form.vue");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    ApptForm: _form_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    var _ref;

    return _ref = {
      payload: {},
      showForm: false,
      isdeclined: false,
      isdelete: false,
      isview: false,
      selectedimage: '',
      appointments: [],
      selectedBooking: {}
    }, _defineProperty(_ref, "payload", {
      date: null,
      time: null
    }), _defineProperty(_ref, "details", {}), _defineProperty(_ref, "data", {
      title: "Appointments",
      isFetching: false,
      keyword: "",
      filter: {}
    }), _defineProperty(_ref, "footerPages", {
      "items-per-page-options": [5, 10, 15, 20, 30, 40, 50, 100, -1]
    }), _defineProperty(_ref, "options", {
      itemsPerPage: 15
    }), _defineProperty(_ref, "total", 0), _defineProperty(_ref, "headers", [{
      text: 'Id',
      align: 'start',
      sortable: true,
      value: 'id'
    }, {
      text: 'Student number',
      align: 'start',
      sortable: true,
      value: 'student_number'
    }, {
      text: 'Client',
      align: 'start',
      sortable: true,
      value: 'client'
    }, {
      text: 'Service',
      align: 'start',
      sortable: true,
      value: 'service'
    }, {
      text: 'Requested date',
      align: 'start',
      sortable: true,
      value: 'created_at'
    }, {
      text: 'Action',
      align: 'start',
      sortable: true,
      value: 'action'
    }]), _ref;
  },
  methods: {
    viewDocuments: function viewDocuments(item) {
      Object.assign(this.selectedBooking, item);
      console.log(this.selectedBooking, "sjdhjksdhjshdjksh");
      this.isview = true;
    },
    showAcceptForm: function showAcceptForm(val) {
      Object.assign(this.selectedBooking, val);
      this.showForm = true;
    },
    showDecline: function showDecline(val) {
      this.selectedBooking = {};
      Object.assign(this.selectedBooking, val);
      this.isdeclined = true;
    },
    acceptBooking: function acceptBooking() {
      var _this = this;

      axios.put("/admin/accept-booking/".concat(this.selectedBooking.id), this.payload).then(function (_ref2) {
        var data = _ref2.data;

        _this.fetchPage();

        _this.clear();
      });
    },
    markAsDone: function markAsDone(val) {
      var _this2 = this;

      axios.put("/admin/done-booking/".concat(val.id), val).then(function (_ref3) {
        var data = _ref3.data;

        _this2.fetchPage();

        _this2.clear();
      });
    },
    declineBooking: function declineBooking() {
      var _this3 = this;

      if (!this.$refs.form.validate()) return;
      axios.put("/admin/decline-booking/".concat(this.selectedBooking.id), this.payload).then(function (_ref4) {
        var data = _ref4.data;

        _this3.fetchPage();

        _this3.clear();
      });
    },
    cancel: function cancel() {
      this.clear();
    },
    addNew: function addNew() {
      this.showForm = true;
    },
    fetchPage: function fetchPage() {
      var _this4 = this;

      this.data.isFetching = true;

      var params = this._createParams(this.options);

      params = params + this._createFilterParams(this.data.filter);
      console.log(this.data.keyword, "keyword");

      if (this.data.keyword) {
        params = params + '&keyword=' + this.data.keyword;
      }

      params = params + '&appointment=1';
      axios.get("/admin/bookings?".concat(params)).then(function (_ref5) {
        var data = _ref5.data;
        _this4.appointments = data.data;
        _this4.total = data.total;
        _this4.data.isFetching = false;
      });
    },
    clear: function clear() {
      this.payload.date = null;
      this.payload.name = null;
      this.details = {};
      this.selectedBooking = {};
      this.showForm = false;
      this.isdeclined = false;
      this.isdelete = false;
      this.isview = false;
      this.selectedimage = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/appointment/index.vue?vue&type=style&index=0&id=7c431c9e&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/appointment/index.vue?vue&type=style&index=0&id=7c431c9e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".class-action[data-v-7c431c9e] {\n  display: flex;\n  justify-content: flex-end;\n}\n.class-inner-view[data-v-7c431c9e] {\n  display: flex;\n}\n.class-inner-view div[data-v-7c431c9e]:first-child {\n  width: 300px;\n  display: block;\n  overflow: auto;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/appointment/index.vue?vue&type=style&index=0&id=7c431c9e&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/appointment/index.vue?vue&type=style&index=0&id=7c431c9e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=7c431c9e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/appointment/index.vue?vue&type=style&index=0&id=7c431c9e&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/appointment/form.vue?vue&type=template&id=00b2aca8&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/appointment/form.vue?vue&type=template&id=00b2aca8& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      _c("v-card-title", [_vm._v("Select date and time")]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-form",
            { ref: "form", attrs: { "lazy-validation": "" } },
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "col-text-field",
                          attrs: { cols: "12", sm: "12" },
                        },
                        [
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                "offset-x": "",
                                bottom: "",
                                right: "",
                                "close-on-content-click": false,
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                text: "",
                                                icon: "",
                                                "x-small": "",
                                              },
                                            },
                                            "v-btn",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-calendar"),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.menu1,
                                callback: function ($$v) {
                                  _vm.menu1 = $$v
                                },
                                expression: "menu1",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                attrs: {
                                  color: "success",
                                  min: _vm.minDate,
                                  "no-title": "",
                                },
                                on: {
                                  input: function ($event) {
                                    _vm.menu1 = false
                                  },
                                },
                                model: {
                                  value: _vm.payload.date,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.payload, "date", $$v)
                                  },
                                  expression: "payload.date",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("label", [
                            _c("span", { staticClass: "text-red" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" Date"),
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.date || ""
                                },
                              ],
                              dense: "",
                              filled: "",
                              readonly: "",
                            },
                            on: {
                              click: function ($event) {
                                $event.stopPropagation()
                                _vm.menu1 = true
                              },
                            },
                            model: {
                              value: _vm.payload.date,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "date", $$v)
                              },
                              expression: "payload.date",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "v-menu",
                            {
                              ref: "menu",
                              attrs: {
                                "offset-x": "",
                                "nudge-right": 10,
                                bottom: "",
                                right: "",
                                "close-on-content-click": false,
                                "max-width": "290px",
                                "min-width": "290px",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                text: "",
                                                icon: "",
                                                "x-small": "",
                                              },
                                            },
                                            "v-btn",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [_c("v-icon", [_vm._v("mdi-clock")])],
                                        1
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.menu2,
                                callback: function ($$v) {
                                  _vm.menu2 = $$v
                                },
                                expression: "menu2",
                              },
                            },
                            [
                              _vm._v(" "),
                              _vm.menu2
                                ? _c("v-time-picker", {
                                    attrs: {
                                      "full-width": "",
                                      min: _vm.minTime,
                                      max: _vm.maxTime,
                                      "no-title": "",
                                      color: "success",
                                    },
                                    on: {
                                      "click:minute": function ($event) {
                                        return _vm.$refs.menu.save(_vm.time)
                                      },
                                    },
                                    model: {
                                      value: _vm.payload.time,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.payload, "time", $$v)
                                      },
                                      expression: "payload.time",
                                    },
                                  })
                                : _vm._e(),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("label", [
                            _c("span", { staticClass: "text-red" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" Time"),
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.time || ""
                                },
                              ],
                              dense: "",
                              filled: "",
                              "hide-details": "auto",
                              readonly: "",
                            },
                            on: {
                              click: function ($event) {
                                _vm.menu2 = !_vm.menu2
                              },
                            },
                            model: {
                              value: _vm.payload.time,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "time", $$v)
                              },
                              expression: "payload.time",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
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
            {
              attrs: { color: "error" },
              on: {
                click: function ($event) {
                  return _vm.$emit("cancel")
                },
              },
            },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/appointment/index.vue?vue&type=template&id=7c431c9e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/appointment/index.vue?vue&type=template&id=7c431c9e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
            attrs: { data: _vm.data, hide: ["addNew"] },
            on: {
              addNew: _vm.addNew,
              refresh: _vm.fetchPage,
              search: _vm.fetchPage,
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
              items: _vm.appointments,
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
                key: "item.student_number",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.client.student_number) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "item.client",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.client.fullname) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "item.service",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.service.name) +
                        "\n            "
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
                      "\n                " +
                        _vm._s(_vm._normalFormatDate(item.date_requested)) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "item.action",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    item.status == 1
                      ? _c(
                          "v-row",
                          [
                            _c(
                              "v-tooltip",
                              {
                                attrs: { color: "primary", left: "" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "activator",
                                      fn: function (ref) {
                                        var on = ref.on
                                        var attrs = ref.attrs
                                        return [
                                          _c(
                                            "v-btn",
                                            _vm._g(
                                              _vm._b(
                                                {
                                                  attrs: {
                                                    color: "primary",
                                                    icon: "",
                                                  },
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.viewDocuments(
                                                        item
                                                      )
                                                    },
                                                  },
                                                },
                                                "v-btn",
                                                attrs,
                                                false
                                              ),
                                              on
                                            ),
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { small: "" } },
                                                [
                                                  _vm._v(
                                                    "\n                                mdi-file\n                                "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      },
                                    },
                                  ],
                                  null,
                                  true
                                ),
                              },
                              [
                                _vm._v(
                                  "\n                        View Documents\n                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-tooltip",
                              {
                                attrs: { color: "success", left: "" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "activator",
                                      fn: function (ref) {
                                        var on = ref.on
                                        var attrs = ref.attrs
                                        return [
                                          _c(
                                            "v-btn",
                                            _vm._g(
                                              _vm._b(
                                                {
                                                  attrs: {
                                                    color: "success",
                                                    icon: "",
                                                  },
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.showAcceptForm(
                                                        item
                                                      )
                                                    },
                                                  },
                                                },
                                                "v-btn",
                                                attrs,
                                                false
                                              ),
                                              on
                                            ),
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { small: "" } },
                                                [
                                                  _vm._v(
                                                    "\n                                mdi-check-bold\n                                "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      },
                                    },
                                  ],
                                  null,
                                  true
                                ),
                              },
                              [
                                _vm._v(
                                  "\n                        Accept Booking\n                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-tooltip",
                              {
                                attrs: { color: "error", left: "" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "activator",
                                      fn: function (ref) {
                                        var on = ref.on
                                        var attrs = ref.attrs
                                        return [
                                          _c(
                                            "v-btn",
                                            _vm._g(
                                              _vm._b(
                                                {
                                                  attrs: {
                                                    color: "error",
                                                    icon: "",
                                                  },
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.showDecline(
                                                        item
                                                      )
                                                    },
                                                  },
                                                },
                                                "v-btn",
                                                attrs,
                                                false
                                              ),
                                              on
                                            ),
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { small: "" } },
                                                [
                                                  _vm._v(
                                                    "\n                                mdi-close\n                                "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      },
                                    },
                                  ],
                                  null,
                                  true
                                ),
                              },
                              [
                                _vm._v(
                                  "\n                        Decline Booking\n                    "
                                ),
                              ]
                            ),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    item.status == 5
                      ? [
                          _c(
                            "v-tooltip",
                            {
                              attrs: { color: "success", left: "" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "activator",
                                    fn: function (ref) {
                                      var on = ref.on
                                      var attrs = ref.attrs
                                      return [
                                        _c(
                                          "v-btn",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                attrs: {
                                                  color: "success",
                                                  icon: "",
                                                },
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.markAsDone(item)
                                                  },
                                                },
                                              },
                                              "v-btn",
                                              attrs,
                                              false
                                            ),
                                            on
                                          ),
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { small: "" } },
                                              [
                                                _vm._v(
                                                  "\n                                    mdi-check-all\n                                "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]
                                    },
                                  },
                                ],
                                null,
                                true
                              ),
                            },
                            [
                              _vm._v(
                                "\n                        Mark as Done\n                    "
                              ),
                            ]
                          ),
                        ]
                      : _vm._e(),
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
          attrs: { persistent: "", "max-width": "600px" },
          model: {
            value: _vm.showForm,
            callback: function ($$v) {
              _vm.showForm = $$v
            },
            expression: "showForm",
          },
        },
        [
          _c("appt-form", {
            attrs: { payload: _vm.payload, show: _vm.showForm },
            on: { cancel: _vm.cancel, save: _vm.acceptBooking },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "1000px" },
          model: {
            value: _vm.isview,
            callback: function ($$v) {
              _vm.isview = $$v
            },
            expression: "isview",
          },
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _vm._v(
                    _vm._s(
                      _vm.selectedBooking.service
                        ? _vm.selectedBooking.service.name
                        : ""
                    ) + "\n                "
                  ),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", color: "red" },
                      on: { click: _vm.clear },
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-card-text", { staticClass: "class-inner-view" }, [
                _c(
                  "div",
                  _vm._l(_vm.selectedBooking.documents, function (item) {
                    return _c(
                      "v-btn",
                      {
                        key: item.id,
                        staticClass: "mt-2",
                        attrs: { text: "" },
                        on: {
                          click: function ($event) {
                            _vm.selectedimage = item.image_path
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(item.requirement.name) +
                            "\n                    "
                        ),
                      ]
                    )
                  }),
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("v-img", {
                      attrs: {
                        "lazy-src": _vm.selectedimage,
                        width: "700",
                        src: _vm.selectedimage,
                        contain: "",
                      },
                    }),
                  ],
                  1
                ),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600px" },
          model: {
            value: _vm.isdeclined,
            callback: function ($$v) {
              _vm.isdeclined = $$v
            },
            expression: "isdeclined",
          },
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_vm._v("Decline booking")]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-form",
                    { ref: "form", attrs: { "lazy-validation": "" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          label: "Reason",
                          placeholder: "Reason",
                          rules: [
                            function () {
                              return !!_vm.payload.declined_reason || ""
                            },
                          ],
                        },
                        model: {
                          value: _vm.payload.declined_reason,
                          callback: function ($$v) {
                            _vm.$set(_vm.payload, "declined_reason", $$v)
                          },
                          expression: "payload.declined_reason",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "class-action" },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary mr-2" },
                          on: { click: _vm.clear },
                        },
                        [_vm._v("Cancel")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "error" },
                          on: { click: _vm.declineBooking },
                        },
                        [_vm._v("Decline")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
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

/***/ "./resources/js/src/pages/appointment/form.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/pages/appointment/form.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_00b2aca8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=00b2aca8& */ "./resources/js/src/pages/appointment/form.vue?vue&type=template&id=00b2aca8&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/appointment/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_00b2aca8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_00b2aca8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/appointment/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/appointment/form.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/pages/appointment/form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/appointment/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/appointment/form.vue?vue&type=template&id=00b2aca8&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/pages/appointment/form.vue?vue&type=template&id=00b2aca8& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_00b2aca8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=00b2aca8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/appointment/form.vue?vue&type=template&id=00b2aca8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_00b2aca8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_00b2aca8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/appointment/index.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/pages/appointment/index.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_7c431c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7c431c9e&scoped=true& */ "./resources/js/src/pages/appointment/index.vue?vue&type=template&id=7c431c9e&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/appointment/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_7c431c9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=7c431c9e&lang=scss&scoped=true& */ "./resources/js/src/pages/appointment/index.vue?vue&type=style&index=0&id=7c431c9e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7c431c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_7c431c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c431c9e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/appointment/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/appointment/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/pages/appointment/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/appointment/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/appointment/index.vue?vue&type=style&index=0&id=7c431c9e&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/pages/appointment/index.vue?vue&type=style&index=0&id=7c431c9e&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c431c9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=7c431c9e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/appointment/index.vue?vue&type=style&index=0&id=7c431c9e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c431c9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c431c9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c431c9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c431c9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/pages/appointment/index.vue?vue&type=template&id=7c431c9e&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/pages/appointment/index.vue?vue&type=template&id=7c431c9e&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7c431c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7c431c9e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/appointment/index.vue?vue&type=template&id=7c431c9e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7c431c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7c431c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);