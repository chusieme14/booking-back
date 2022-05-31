(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employees"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/staff/form.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/staff/form.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      services: [],
      designations: [],
      selectService: [],
      data: {
        title: "Requirements",
        isFetching: false,
        keyword: "",
        filter: {}
      },
      footerPages: {
        "items-per-page-options": [5]
      },
      options: {
        itemsPerPage: 5
      },
      total: 0,
      headers: [{
        text: 'Id',
        align: 'start',
        sortable: true,
        value: 'id'
      }, {
        text: 'Name',
        align: 'start',
        sortable: true,
        value: 'name'
      }]
    };
  },
  methods: {
    save: function save() {
      if (!this.$refs.form.validate()) return;
      this.payload.service_ids = this._pluck(this.selectService, 'id');
      this.$emit('save', this.payload);
    },
    getServices: function getServices() {
      var _this = this;

      this.data.isFetching = true;

      var params = this._createParams(this.options);

      if (this.data.keyword) {
        params = params + '&keyword=' + this.data.keyword;
      }

      axios.get("/admin/services?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.services = data.data;
        _this.total = data.total;
        _this.data.isFetching = false;
      });
    },
    getDesignations: function getDesignations() {
      var _this2 = this;

      axios.get("/admin/designations").then(function (_ref2) {
        var data = _ref2.data;
        _this2.designations = data.data;
      });
    }
  },
  watch: {
    "show": {
      handler: function handler(val) {
        if (!val && this.$refs.form) {
          this.$refs.form.resetValidation();
        } else {
          this.selectService = [];

          if (this.payload.services.length) {
            Object.assign(this.selectService, this.payload.services);
            this.getServices();
          }

          this.getDesignations();
        }
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/staff/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/staff/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue */ "./resources/js/src/pages/staff/form.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ServiceForm: _form_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var _ref;

    return _ref = {
      payload: {},
      showForm: false,
      isdelete: false,
      employees: []
    }, _defineProperty(_ref, "payload", {}), _defineProperty(_ref, "details", {}), _defineProperty(_ref, "data", {
      title: "Employees",
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
      text: 'Employee id',
      align: 'start',
      sortable: true,
      value: 'employeeID'
    }, {
      text: 'First name',
      align: 'start',
      sortable: true,
      value: 'first_name'
    }, {
      text: 'Last name',
      align: 'start',
      sortable: true,
      value: 'last_name'
    }, {
      text: 'Middle name',
      align: 'start',
      sortable: true,
      value: 'middle_name'
    }, {
      text: 'Username',
      align: 'start',
      sortable: true,
      value: 'username'
    }, {
      text: 'Designation',
      align: 'start',
      sortable: true,
      value: 'designation'
    }, {
      text: 'Action',
      align: 'start',
      sortable: false,
      value: 'action'
    }]), _ref;
  },
  methods: {
    viewDepartment: function viewDepartment(val) {// this.$router.push({ name: 'dep-civil-status', params: { department_id: val.id } })
    },
    cancel: function cancel() {
      this.clear();
    },
    addNew: function addNew() {
      this.showForm = true;
    },
    fetchPage: function fetchPage() {
      var _this = this;

      console.log(this.options, "option");
      this.data.isFetching = true;

      var params = this._createParams(this.options);

      params = params + this._createFilterParams(this.data.filter);
      console.log(this.data.keyword, "keyword");
      if (this.data.keyword) params = params + '&keyword=' + this.data.keyword;
      axios.get("/admin/staffs?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this.employees = data.data;
        _this.total = data.total;
        _this.data.isFetching = false;
      });
    },
    save: function save() {
      var _this2 = this;

      if (this.payload.id) {
        delete this.payload.created_at;
        delete this.payload.updated_at;
        axios.put("/admin/staffs/".concat(this.payload.id), this.payload).then(function (_ref3) {
          var data = _ref3.data;

          _this2.fetchPage();

          _this2.clear();
        });
        return;
      }

      axios.post("/admin/staffs", this.payload).then(function (_ref4) {
        var data = _ref4.data;

        _this2.fetchPage();

        _this2.clear();
      });
    },
    showEdit: function showEdit(val) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object.assign(_this3.payload, val);

              case 2:
                _this3.showForm = true;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    showDelete: function showDelete(val) {
      Object.assign(this.payload, val);
      this.details.title = 'Delete';
      this.details.message = "Are you sure you want to remove \"".concat(this.payload.name, "\"?");
      this.isdelete = true;
    },
    remove: function remove() {
      var _this4 = this;

      axios["delete"]("/admin/staffs/".concat(this.payload.id)).then(function (_ref5) {
        var data = _ref5.data;

        _this4.fetchPage();

        _this4.clear();
      });
    },
    clear: function clear() {
      this.payload = {};
      this.payload.requirements = [];
      this.showForm = false;
      this.isdelete = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/staff/form.vue?vue&type=template&id=e86798f2&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/staff/form.vue?vue&type=template&id=e86798f2& ***!
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
    [
      _c(
        "v-card-title",
        [
          _vm._v(
            _vm._s(_vm.payload.id ? "Edit" : "Add") + " service\n        "
          ),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mr-2",
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
                          attrs: { cols: "12", sm: "4" },
                        },
                        [
                          _c("label", [
                            _c("span", { staticClass: "text-red" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" First name "),
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.first_name || ""
                                },
                              ],
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.first_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "first_name", $$v)
                              },
                              expression: "payload.first_name",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "col-text-field",
                          attrs: { cols: "12", sm: "4" },
                        },
                        [
                          _c("label", [
                            _c("span", { staticClass: "text-red" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" Last name "),
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.last_name || ""
                                },
                              ],
                              "hide-details": "auto",
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.last_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "last_name", $$v)
                              },
                              expression: "payload.last_name",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "col-text-field",
                          attrs: { cols: "12", sm: "4" },
                        },
                        [
                          _c("label", [
                            _c("span", { staticClass: "text-red" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" Middle name"),
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.middle_name || ""
                                },
                              ],
                              "hide-details": "auto",
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.middle_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "middle_name", $$v)
                              },
                              expression: "payload.middle_name",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "col-text-field",
                          attrs: { cols: "12", sm: "4" },
                        },
                        [
                          _c("label", [
                            _c("span", { staticClass: "text-red" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" Employee id "),
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.employeeID || ""
                                },
                              ],
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.employeeID,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "employeeID", $$v)
                              },
                              expression: "payload.employeeID",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "col-text-field",
                          attrs: { cols: "12", sm: "4" },
                        },
                        [
                          _c("label", [
                            _c("span", { staticClass: "text-red" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" Designation "),
                          ]),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.designation_id || ""
                                },
                              ],
                              "hide-details": "auto",
                              items: _vm.designations,
                              "item-text": "name",
                              "item-value": "id",
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.designation_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "designation_id", $$v)
                              },
                              expression: "payload.designation_id",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "col-text-field",
                          attrs: { cols: "12", sm: "4" },
                        },
                        [
                          _c("label", [
                            _c("span", { staticClass: "text-red" }, [
                              _vm._v("*"),
                            ]),
                            _vm._v(" Username"),
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [
                                function () {
                                  return !!_vm.payload.username || ""
                                },
                              ],
                              "hide-details": "auto",
                              filled: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.payload.username,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "username", $$v)
                              },
                              expression: "payload.username",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  !_vm.payload.id
                    ? _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "col-text-field",
                              attrs: { cols: "12", sm: "6" },
                            },
                            [
                              _c("label", [
                                _c("span", { staticClass: "text-red" }, [
                                  _vm._v("*"),
                                ]),
                                _vm._v(" Password "),
                              ]),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  rules: [
                                    function () {
                                      return !!_vm.payload.password || ""
                                    },
                                  ],
                                  type: "password",
                                  filled: "",
                                  dense: "",
                                },
                                model: {
                                  value: _vm.payload.password,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.payload, "password", $$v)
                                  },
                                  expression: "payload.password",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "col-text-field",
                              attrs: { cols: "12", sm: "6" },
                            },
                            [
                              _c("label", [
                                _c("span", { staticClass: "text-red" }, [
                                  _vm._v("*"),
                                ]),
                                _vm._v(" Retype password"),
                              ]),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  rules: [
                                    function () {
                                      return (
                                        _vm.payload.c_password ==
                                          _vm.payload.password || ""
                                      )
                                    },
                                  ],
                                  "hide-details": "auto",
                                  type: "password",
                                  filled: "",
                                  dense: "",
                                },
                                model: {
                                  value: _vm.payload.c_password,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.payload, "c_password", $$v)
                                  },
                                  expression: "payload.c_password",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _vm._v("Select Requirements\n                "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      dense: "",
                      placeholder: "Search",
                      label: "Search",
                    },
                    on: {
                      keydown: function ($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.getServices.apply(null, arguments)
                      },
                    },
                    model: {
                      value: _vm.data.keyword,
                      callback: function ($$v) {
                        _vm.$set(_vm.data, "keyword", $$v)
                      },
                      expression: "data.keyword",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-data-table", {
                    staticClass: "cursor-pointer table-fix-height",
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.services,
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
                        _vm.getServices,
                      ],
                    },
                    model: {
                      value: _vm.selectService,
                      callback: function ($$v) {
                        _vm.selectService = $$v
                      },
                      expression: "selectService",
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/staff/index.vue?vue&type=template&id=545a719f&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/staff/index.vue?vue&type=template&id=545a719f& ***!
  \*************************************************************************************************************************************************************************************************************/
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
            attrs: { data: _vm.data, hide: ["filter"] },
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
              items: _vm.employees,
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
              "click:row": _vm.viewDepartment,
            },
            scopedSlots: _vm._u([
              {
                key: "item.designation",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.designation.name) +
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
                    _c(
                      "v-row",
                      [
                        _c("table-action", {
                          attrs: { item: item },
                          on: {
                            editItem: _vm.showEdit,
                            deleteItem: _vm.showDelete,
                          },
                        }),
                      ],
                      1
                    ),
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
          _c("service-form", {
            attrs: { payload: _vm.payload, show: _vm.showForm },
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

/***/ "./resources/js/src/pages/staff/form.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/pages/staff/form.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_e86798f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=e86798f2& */ "./resources/js/src/pages/staff/form.vue?vue&type=template&id=e86798f2&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/staff/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_e86798f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_e86798f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/staff/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/staff/form.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/pages/staff/form.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/staff/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/staff/form.vue?vue&type=template&id=e86798f2&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/pages/staff/form.vue?vue&type=template&id=e86798f2& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_e86798f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=e86798f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/staff/form.vue?vue&type=template&id=e86798f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_e86798f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_e86798f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/staff/index.vue":
/*!************************************************!*\
  !*** ./resources/js/src/pages/staff/index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_545a719f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=545a719f& */ "./resources/js/src/pages/staff/index.vue?vue&type=template&id=545a719f&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/staff/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_545a719f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_545a719f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/staff/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/staff/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/pages/staff/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/staff/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/staff/index.vue?vue&type=template&id=545a719f&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/pages/staff/index.vue?vue&type=template&id=545a719f& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_545a719f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=545a719f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/staff/index.vue?vue&type=template&id=545a719f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_545a719f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_545a719f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);