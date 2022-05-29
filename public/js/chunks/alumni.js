(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alumni"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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
//
//
//
//
//
//
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
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  // props:{
  //     data:{}
  // },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['Baccalaureate', 'Masteral', 'Doctorate'],
        // title:{
        //     text: "Highest Educational Attainment"
        // },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      isattainment: false,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getAttainment: function getAttainment() {
      var _this = this;

      this.isattainment = false;
      this.hasdata = false;
      var params = '';

      if (this.department_id) {
        localStorage.setItem('department_id', this.department_id);
        localStorage.removeItem('course_id');
        params = params + '&department_id=' + this.department_id;
      }

      if (this.course_id) {
        localStorage.setItem('course_id', this.course_id);
        params = params + '&course_id=' + this.course_id;
      }

      if (this.batch) {
        localStorage.setItem('batch', this.batch);
        params = params + '&batch=' + this.batch;
      }

      axios.get("/admin/get-attainment?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.series = data;

        _this.series.forEach(function (element) {
          if (element > 0) _this.hasdata = true;
        });

        _this.isattainment = true;
      });
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context.sent;
              _context.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context.sent;
              _context.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context.sent;
              _context.next = 11;
              return _this4.getDepartments();

            case 11:
              _context.next = 13;
              return _this4.getCourses();

            case 13:
              _context.next = 15;
              return _this4.getAttainment();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  } // watch:{
  //     "data":{
  //         handler(val){
  //             this.series = val
  //         },immediate:true
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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
//
//
//
//
//
//
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
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  // props:{
  //     data:{}
  // },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          width: 800,
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['Single', 'Married', 'Separated', 'Widowed'],
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      // civil_status:[],
      iscivil: false,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getCivilStatus: function getCivilStatus() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.iscivil = false;
                _this.hasdata = false;
                params = '';

                if (_this.department_id) {
                  localStorage.setItem('department_id', _this.department_id);
                  localStorage.removeItem('course_id');
                  params = params + '&department_id=' + _this.department_id;
                }

                if (_this.course_id) {
                  localStorage.setItem('course_id', _this.course_id);
                  params = params + '&course_id=' + _this.course_id;
                }

                if (_this.batch) {
                  localStorage.setItem('batch', _this.batch);
                  params = params + '&batch=' + _this.batch;
                }

                _context.next = 8;
                return axios.get("/admin/get-civil-statistics?".concat(params)).then(function (_ref) {
                  var data = _ref.data;
                  _this.series = data;

                  _this.series.forEach(function (element) {
                    if (element > 0) _this.hasdata = true;
                  });

                  _this.iscivil = true;
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context2.sent;
              _context2.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context2.sent;
              _context2.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context2.sent;
              _context2.next = 11;
              return _this4.getDepartments();

            case 11:
              _context2.next = 13;
              return _this4.getCourses();

            case 13:
              _context2.next = 15;
              return _this4.getCivilStatus();

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  } // watch:{
  //     "civil_status":{
  //         handler(val){
  //             this.series = val
  //         },immediate:true
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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
//
//
//
//
//
//
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
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  // props:{
  //     data:{}
  // },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['Yes', 'No'],
        // title:{
        //     text: "Relevance of the Curriculum",
        // },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      iscurriculum: false,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getCurriculum: function getCurriculum() {
      var _this = this;

      this.iscurriculum = false;
      this.hasdata = false;
      var params = '';

      if (this.department_id) {
        localStorage.setItem('department_id', this.department_id);
        localStorage.removeItem('course_id');
        params = params + '&department_id=' + this.department_id;
      }

      if (this.course_id) {
        localStorage.setItem('course_id', this.course_id);
        params = params + '&course_id=' + this.course_id;
      }

      if (this.batch) {
        localStorage.setItem('batch', this.batch);
        params = params + '&batch=' + this.batch;
      }

      axios.get("/admin/get-curriculum?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.series = data;

        _this.series.forEach(function (element) {
          if (element > 0) _this.hasdata = true;
        });

        _this.iscurriculum = true;
      });
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context.sent;
              _context.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context.sent;
              _context.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context.sent;
              _context.next = 11;
              return _this4.getDepartments();

            case 11:
              _context.next = 13;
              return _this4.getCourses();

            case 13:
              _context.next = 15;
              return _this4.getCurriculum();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  } // watch:{
  //     "data":{
  //         handler(val){
  //             this.series = val
  //         },immediate:true
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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
//
//
//
//
//
//
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
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  // props:{
  //     data:{}
  // },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['Contractual', 'Permanent', 'Self-employed', 'Casual'],
        // title:{
        //     text: "Employment status",
        // },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      isemploymentstatus: false,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getEmploymentStatus: function getEmploymentStatus() {
      var _this = this;

      this.isemploymentstatus = false;
      this.hasdata = false;
      var params = '';

      if (this.department_id) {
        localStorage.setItem('department_id', this.department_id);
        localStorage.removeItem('course_id');
        params = params + '&department_id=' + this.department_id;
      }

      if (this.course_id) {
        localStorage.setItem('course_id', this.course_id);
        params = params + '&course_id=' + this.course_id;
      }

      if (this.batch) {
        localStorage.setItem('batch', this.batch);
        params = params + '&batch=' + this.batch;
      }

      axios.get("/admin/get-employment-status?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.series = data;

        _this.series.forEach(function (element) {
          if (element > 0) _this.hasdata = true;
        });

        _this.isemploymentstatus = true;
      });
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context.sent;
              _context.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context.sent;
              _context.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context.sent;
              _context.next = 11;
              return _this4.getDepartments();

            case 11:
              _context.next = 13;
              return _this4.getCourses();

            case 13:
              _context.next = 15;
              return _this4.getEmploymentStatus();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  } // watch:{
  //     "data":{
  //         handler(val){
  //             this.series = val
  //         },immediate:true
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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
//
//
//
//
//
//
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
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  // props:{
  //     data:{}
  // },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          width: 800,
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['Employed', 'Unemployed'],
        // title:{
        //     text: "Employment",
        // },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      isemployment: false,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getEmployment: function getEmployment() {
      var _this = this;

      this.isemployment = false;
      this.hasdata = false;
      var params = '';

      if (this.department_id) {
        localStorage.setItem('department_id', this.department_id);
        localStorage.removeItem('course_id');
        params = params + '&department_id=' + this.department_id;
      }

      if (this.course_id) {
        localStorage.setItem('course_id', this.course_id);
        params = params + '&course_id=' + this.course_id;
      }

      if (this.batch) {
        localStorage.setItem('batch', this.batch);
        params = params + '&batch=' + this.batch;
      }

      axios.get("/admin/get-employment?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.series = data;

        _this.series.forEach(function (element) {
          if (element > 0) _this.hasdata = true;
        });

        _this.isemployment = true;
      });
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context.sent;
              _context.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context.sent;
              _context.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context.sent;
              _context.next = 11;
              return _this4.getDepartments();

            case 11:
              _context.next = 13;
              return _this4.getCourses();

            case 13:
              _context.next = 15;
              return _this4.getEmployment();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  } // watch:{
  //     "data":{
  //         handler(val){
  //             this.series = val
  //         },immediate:true
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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
//
//
//
//
//
//
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
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          width: 800,
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['Male', 'Female', 'Transgender', 'Non-binary', 'Prefer not to respond'],
        // title:{
        //     text: "Gender"
        // },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      isgender: false,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getGender: function getGender() {
      var _this = this;

      this.isgender = false;
      this.hasdata = false;
      var params = '';

      if (this.department_id) {
        localStorage.setItem('department_id', this.department_id);
        localStorage.removeItem('course_id');
        params = params + '&department_id=' + this.department_id;
      }

      if (this.course_id) {
        localStorage.setItem('course_id', this.course_id);
        params = params + '&course_id=' + this.course_id;
      }

      if (this.batch) {
        localStorage.setItem('batch', this.batch);
        params = params + '&batch=' + this.batch;
      }

      axios.get("/admin/get-gender?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.series = data;

        _this.series.forEach(function (element) {
          if (element > 0) _this.hasdata = true;
        });

        _this.isgender = true;
      });
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context.sent;
              _context.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context.sent;
              _context.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context.sent;
              _context.next = 11;
              return _this4.getDepartments();

            case 11:
              _context.next = 13;
              return _this4.getCourses();

            case 13:
              _context.next = 15;
              return _this4.getGender();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/income.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/income.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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
//
//
//
//
//
//
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
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  // props:{
  //     data:{}
  // },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          width: 800,
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['below 5,000', '5,000 - 10,000', '10,000 - 15,000', '15,000 - 20,000', '20,000 - 25,000', 'above 25,000'],
        // title:{
        //     text: "Gross Monthly Income",
        // },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      isincome: false,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getIncome: function getIncome() {
      var _this = this;

      this.isincome = false;
      this.hasdata = false;
      var params = '';

      if (this.department_id) {
        localStorage.setItem('department_id', this.department_id);
        localStorage.removeItem('course_id');
        params = params + '&department_id=' + this.department_id;
      }

      if (this.course_id) {
        localStorage.setItem('course_id', this.course_id);
        params = params + '&course_id=' + this.course_id;
      }

      if (this.batch) {
        localStorage.setItem('batch', this.batch);
        params = params + '&batch=' + this.batch;
      }

      axios.get("/admin/get-income?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.series = data;

        _this.series.forEach(function (element) {
          if (element > 0) _this.hasdata = true;
        });

        _this.isincome = true;
      });
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context.sent;
              _context.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context.sent;
              _context.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context.sent;
              _context.next = 11;
              return _this4.getDepartments();

            case 11:
              _context.next = 13;
              return _this4.getCourses();

            case 13:
              _context.next = 15;
              return _this4.getIncome();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  } // watch:{
  //     "data":{
  //         handler(val){
  //             this.series = val
  //         },immediate:true
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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
//
//
//
//
//
//
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
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  // props:{
  //     data:{}
  // },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['Yes', 'No'],
        // title:{
        //     text: "Promotion",
        // },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      ispromotion: true,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getPromotion: function getPromotion() {
      var _this = this;

      this.ispromotion = false;
      this.hasdata = false;
      var params = '';

      if (this.department_id) {
        localStorage.setItem('department_id', this.department_id);
        localStorage.removeItem('course_id');
        params = params + '&department_id=' + this.department_id;
      }

      if (this.course_id) {
        localStorage.setItem('course_id', this.course_id);
        params = params + '&course_id=' + this.course_id;
      }

      if (this.batch) {
        localStorage.setItem('batch', this.batch);
        params = params + '&batch=' + this.batch;
      }

      axios.get("/admin/get-promotion?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.series = data;

        _this.series.forEach(function (element) {
          if (element > 0) _this.hasdata = true;
        });

        _this.ispromotion = true;
      });
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context.sent;
              _context.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context.sent;
              _context.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context.sent;
              _context.next = 11;
              return _this4.getDepartments();

            case 11:
              _context.next = 13;
              return _this4.getCourses();

            case 13:
              _context.next = 15;
              return _this4.getPromotion();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  } // watch:{
  //     "data":{
  //         handler(val){
  //             this.series = val
  //         },immediate:true
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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
//
//
//
//
//
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
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    data: {}
  },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          width: 800,
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['City', 'Municipalty'],
        // title:{
        //     text: "Location of Residents",
        // },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      isresidence: false,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getResidence: function getResidence() {
      var _this = this;

      this.isresidence = false;
      this.hasdata = false;
      var params = '';

      if (this.department_id) {
        localStorage.setItem('department_id', this.department_id);
        localStorage.removeItem('course_id');
        params = params + '&department_id=' + this.department_id;
      }

      if (this.course_id) {
        localStorage.setItem('course_id', this.course_id);
        params = params + '&course_id=' + this.course_id;
      }

      if (this.batch) {
        localStorage.setItem('batch', this.batch);
        params = params + '&batch=' + this.batch;
      }

      axios.get("/admin/get-residence?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.series = data;

        _this.series.forEach(function (element) {
          if (element > 0) _this.hasdata = true;
        });

        _this.isresidence = true;
      });
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context.sent;
              _context.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context.sent;
              _context.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context.sent;
              _context.next = 11;
              return _this4.getDepartments();

            case 11:
              _context.next = 13;
              return _this4.getCourses();

            case 13:
              _context.next = 15;
              return _this4.getResidence();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  } // watch:{
  //     "data":{
  //         handler(val){
  //             this.series = val
  //         },immediate:true
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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
//
//
//
//
//
//
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
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  // props:{
  //     data:{}
  // },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['Less than a month', '1 - 6 months', '7 - 11 months', '1 - 2 years', '2 - 3 years', '3 - 4 years'],
        // title:{
        //     text: "Time to Get the Job",
        // },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      istime_jobs: false,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getTimeJobs: function getTimeJobs() {
      var _this = this;

      this.istime_jobs = false;
      this.hasdata = false;
      var params = '';

      if (this.department_id) {
        localStorage.setItem('department_id', this.department_id);
        localStorage.removeItem('course_id');
        params = params + '&department_id=' + this.department_id;
      }

      if (this.course_id) {
        localStorage.setItem('course_id', this.course_id);
        params = params + '&course_id=' + this.course_id;
      }

      if (this.batch) {
        localStorage.setItem('batch', this.batch);
        params = params + '&batch=' + this.batch;
      }

      axios.get("/admin/get-time-jobs?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.series = data;

        _this.series.forEach(function (element) {
          if (element > 0) _this.hasdata = true;
        });

        _this.istime_jobs = true;
      });
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context.sent;
              _context.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context.sent;
              _context.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context.sent;
              _context.next = 11;
              return _this4.getDepartments();

            case 11:
              _context.next = 13;
              return _this4.getCourses();

            case 13:
              _context.next = 15;
              return _this4.getTimeJobs();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  } // watch:{
  //     "data":{
  //         handler(val){
  //             this.series = val
  //         },immediate:true
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/work.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/work.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);


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
//
//
//
//
//
//
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
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  // props:{
  //     data:{}
  // },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        labels: ['Local', 'Abroad'],
        // title:{
        //     text: "Place of work",
        // },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      iswork: false,
      batch: null,
      department_id: null,
      course_id: null,
      courses: [],
      departments: [],
      hasdata: false
    };
  },
  methods: {
    getWork: function getWork() {
      var _this = this;

      this.iswork = false;
      this.hasdata = false;
      var params = '';

      if (this.department_id) {
        localStorage.setItem('department_id', this.department_id);
        localStorage.removeItem('course_id');
        params = params + '&department_id=' + this.department_id;
      }

      if (this.course_id) {
        localStorage.setItem('course_id', this.course_id);
        params = params + '&course_id=' + this.course_id;
      }

      if (this.batch) {
        localStorage.setItem('batch', this.batch);
        params = params + '&batch=' + this.batch;
      }

      axios.get("/admin/get-work?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.series = data;

        _this.series.forEach(function (element) {
          if (element > 0) _this.hasdata = true;
        });

        _this.iswork = true;
      });
    },
    getCourses: function getCourses() {
      var _this2 = this;

      var params = '';

      if (this.department_id) {
        params = 'department_id=' + this.department_id;
      }

      axios.get("/admin/courses?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data;
      });
    },
    getDepartments: function getDepartments() {
      var _this3 = this;

      axios.get("/admin/departments").then(function (_ref3) {
        var data = _ref3.data;
        _this3.departments = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(localStorage.getItem('department_id'));

            case 2:
              _this4.department_id = _context.sent;
              _context.next = 5;
              return parseInt(localStorage.getItem('course_id'));

            case 5:
              _this4.course_id = _context.sent;
              _context.next = 8;
              return localStorage.getItem('batch');

            case 8:
              _this4.batch = _context.sent;
              _context.next = 11;
              return _this4.getDepartments();

            case 11:
              _context.next = 13;
              return _this4.getCourses();

            case 13:
              _context.next = 15;
              return _this4.getWork();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 10;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, "-").concat(start + 1));
      }

      return schoolYear;
    }
  } // watch:{
  //     "data":{
  //         handler(val){
  //             this.series = val
  //         },immediate:true
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/view.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/view.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    menus: function menus() {
      return [{
        // text: this._lang('client.view.profile'),
        text: 'Civil-status',
        route: "civil-status",
        icon: "mdi-account-group-outline"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Gender',
        route: "gender",
        icon: "mdi-gender-male-female-variant"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Location of Residents',
        route: "residents",
        icon: "mdi-map-marker-check"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Employment',
        route: "employment",
        icon: "mdi-briefcase"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Employment status',
        route: "employment-status",
        icon: "mdi-sass"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Place of work',
        route: "place-work",
        icon: "mdi-domain"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Educational Attainment',
        route: "educational-attainment",
        icon: "mdi-school"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Gross Monthly Income',
        route: "gross-monthly-income",
        icon: "mdi-cash"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Time to Get the Job',
        route: "time-get-job",
        icon: "mdi-map-clock"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Relevance of the Curriculum',
        route: "relevance-curriculum",
        icon: "mdi-book-search"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Promotion',
        route: "promotion",
        icon: "mdi-transfer-up"
      } // {
      //     // text: this._lang('client.view.subscriptions'),
      //     text:'Documents',
      //     route: "client-document",
      //     icon: "mdi-file-document",
      // },
      // {
      //     // text: this._lang('client.view.payments'),
      //     text:'Bookings',
      //     route: "client-booking",
      //     icon: "mdi-bookmark-check-outline",
      // },
      // {
      //     // text: this._lang('client.view.payments'),
      //     text:'Credit',
      //     route: "client-credit",
      //     icon: "mdi-credit-card-outline",
      // },
      ];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=template&id=1d2fea5e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=template&id=1d2fea5e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "class-chart-head" },
        [
          _vm._v("Highest Educational Attainment\n        "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getAttainment(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getAttainment },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getAttainment },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.isattainment && _vm.hasdata
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasdata ? _c("h3", [_vm._v("No data found")]) : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=template&id=d6d3ff72&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=template&id=d6d3ff72& ***!
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
    [
      _c(
        "v-card-title",
        { staticClass: "class-chart-head" },
        [
          _vm._v("Civil Status\n        "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getCivilStatus(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getCivilStatus },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getCivilStatus },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.iscivil && _vm.hasdata
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasdata ? _c("h3", [_vm._v("No data found")]) : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=template&id=012ea0b6&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=template&id=012ea0b6& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "class-chart-head" },
        [
          _vm._v("Relevance of the Curriculum\n        "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getCurriculum(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getCurriculum },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getCurriculum },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.iscurriculum && _vm.hasdata
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasdata ? _c("h3", [_vm._v("No data found")]) : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=template&id=46502948&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=template&id=46502948& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "class-chart-head" },
        [
          _vm._v("Employment status\n        "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getEmploymentStatus(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getEmploymentStatus },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getEmploymentStatus },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.isemploymentstatus && _vm.hasdata
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasdata ? _c("h3", [_vm._v("No data found")]) : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=template&id=7ec867e7&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=template&id=7ec867e7& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "class-chart-head" },
        [
          _vm._v("Employment\n        "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getEmployment(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getEmployment },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getEmployment },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.isemployment && _vm.hasdata
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasdata ? _c("h3", [_vm._v("No data found")]) : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=template&id=c89b2488&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=template&id=c89b2488& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "class-chart-head" },
        [
          _vm._v("Gender\n        "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getGender(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getGender },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getGender },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.isgender && _vm.hasdata
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasdata ? _c("h3", [_vm._v("No data found")]) : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/income.vue?vue&type=template&id=d2572eb8&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/income.vue?vue&type=template&id=d2572eb8& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "class-chart-head" },
        [
          _vm._v("Gross Monthly Income\n       "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getIncome(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getIncome },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getIncome },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.isincome && _vm.hasdata
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasdata ? _c("h3", [_vm._v("No data found")]) : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=template&id=521cc5f8&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=template&id=521cc5f8& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "class-chart-head" },
        [
          _vm._v("Promotion\n        "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getPromotion(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getPromotion },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getPromotion },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.ispromotion && _vm.hasdata
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasdata ? _c("h3", [_vm._v("No data found")]) : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=template&id=68238a4a&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=template&id=68238a4a& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "class-chart-head" },
        [
          _vm._v("Location of Residents\n         "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getResidence(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getResidence },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getResidence },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.isresidence
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=template&id=44c2b610&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=template&id=44c2b610& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "class-chart-head" },
        [
          _vm._v("Time to Get the Job\n        "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getTimeJobs(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getTimeJobs },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getTimeJobs },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.istime_jobs && _vm.hasdata
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasdata ? _c("h3", [_vm._v("No data found")]) : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/work.vue?vue&type=template&id=070676cc&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/charts/work.vue?vue&type=template&id=070676cc& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
        { staticClass: "class-chart-head" },
        [
          _vm._v("Place of work\n        "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.departments,
              "item-text": "abbreviation",
              "item-value": "id",
              "hide-details": "auto",
              label: "Department",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: {
              change: function ($event) {
                _vm.getWork(), _vm.getCourses()
              },
            },
            model: {
              value: _vm.department_id,
              callback: function ($$v) {
                _vm.department_id = $$v
              },
              expression: "department_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.courses,
              "item-text": "code",
              "item-value": "id",
              "hide-details": "auto",
              label: "Course",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getWork },
            model: {
              value: _vm.course_id,
              callback: function ($$v) {
                _vm.course_id = $$v
              },
              expression: "course_id",
            },
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "class-year",
            attrs: {
              items: _vm.years,
              "hide-details": "auto",
              label: "Year Graduated",
              placeholder: "All",
              filled: "",
              dense: "",
            },
            on: { change: _vm.getWork },
            model: {
              value: _vm.batch,
              callback: function ($$v) {
                _vm.batch = $$v
              },
              expression: "batch",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "dashboard-main-container" }, [
        _c(
          "div",
          { staticClass: "dashboard-inner-container" },
          [
            _vm.iswork && _vm.hasdata
              ? _c("apexchart", {
                  attrs: {
                    width: "800",
                    type: "pie",
                    options: _vm.chartOptions,
                    series: _vm.series,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasdata ? _c("h3", [_vm._v("No data found")]) : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/view.vue?vue&type=template&id=f5e50498&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/dashboard/view.vue?vue&type=template&id=f5e50498& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("content-view-statistics", { attrs: { menus: _vm.menus } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/attainment.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/attainment.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attainment_vue_vue_type_template_id_1d2fea5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attainment.vue?vue&type=template&id=1d2fea5e& */ "./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=template&id=1d2fea5e&");
/* harmony import */ var _attainment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attainment.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _attainment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _attainment_vue_vue_type_template_id_1d2fea5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _attainment_vue_vue_type_template_id_1d2fea5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/attainment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attainment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./attainment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attainment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=template&id=1d2fea5e&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=template&id=1d2fea5e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attainment_vue_vue_type_template_id_1d2fea5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./attainment.vue?vue&type=template&id=1d2fea5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/attainment.vue?vue&type=template&id=1d2fea5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attainment_vue_vue_type_template_id_1d2fea5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attainment_vue_vue_type_template_id_1d2fea5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/civil-status.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/civil-status.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _civil_status_vue_vue_type_template_id_d6d3ff72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./civil-status.vue?vue&type=template&id=d6d3ff72& */ "./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=template&id=d6d3ff72&");
/* harmony import */ var _civil_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./civil-status.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _civil_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _civil_status_vue_vue_type_template_id_d6d3ff72___WEBPACK_IMPORTED_MODULE_0__["render"],
  _civil_status_vue_vue_type_template_id_d6d3ff72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/civil-status.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_civil_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./civil-status.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_civil_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=template&id=d6d3ff72&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=template&id=d6d3ff72& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_civil_status_vue_vue_type_template_id_d6d3ff72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./civil-status.vue?vue&type=template&id=d6d3ff72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/civil-status.vue?vue&type=template&id=d6d3ff72&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_civil_status_vue_vue_type_template_id_d6d3ff72___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_civil_status_vue_vue_type_template_id_d6d3ff72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/curriculum.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/curriculum.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curriculum_vue_vue_type_template_id_012ea0b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curriculum.vue?vue&type=template&id=012ea0b6& */ "./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=template&id=012ea0b6&");
/* harmony import */ var _curriculum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curriculum.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _curriculum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _curriculum_vue_vue_type_template_id_012ea0b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _curriculum_vue_vue_type_template_id_012ea0b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/curriculum.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_curriculum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./curriculum.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_curriculum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=template&id=012ea0b6&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=template&id=012ea0b6& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_curriculum_vue_vue_type_template_id_012ea0b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./curriculum.vue?vue&type=template&id=012ea0b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/curriculum.vue?vue&type=template&id=012ea0b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_curriculum_vue_vue_type_template_id_012ea0b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_curriculum_vue_vue_type_template_id_012ea0b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/employment-status.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/employment-status.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _employment_status_vue_vue_type_template_id_46502948___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employment-status.vue?vue&type=template&id=46502948& */ "./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=template&id=46502948&");
/* harmony import */ var _employment_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employment-status.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _employment_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _employment_status_vue_vue_type_template_id_46502948___WEBPACK_IMPORTED_MODULE_0__["render"],
  _employment_status_vue_vue_type_template_id_46502948___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/employment-status.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./employment-status.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=template&id=46502948&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=template&id=46502948& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_status_vue_vue_type_template_id_46502948___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./employment-status.vue?vue&type=template&id=46502948& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/employment-status.vue?vue&type=template&id=46502948&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_status_vue_vue_type_template_id_46502948___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_status_vue_vue_type_template_id_46502948___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/employment.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/employment.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _employment_vue_vue_type_template_id_7ec867e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employment.vue?vue&type=template&id=7ec867e7& */ "./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=template&id=7ec867e7&");
/* harmony import */ var _employment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employment.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _employment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _employment_vue_vue_type_template_id_7ec867e7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _employment_vue_vue_type_template_id_7ec867e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/employment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./employment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=template&id=7ec867e7&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=template&id=7ec867e7& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_vue_vue_type_template_id_7ec867e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./employment.vue?vue&type=template&id=7ec867e7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/employment.vue?vue&type=template&id=7ec867e7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_vue_vue_type_template_id_7ec867e7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employment_vue_vue_type_template_id_7ec867e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/gender.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/gender.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gender_vue_vue_type_template_id_c89b2488___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gender.vue?vue&type=template&id=c89b2488& */ "./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=template&id=c89b2488&");
/* harmony import */ var _gender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gender.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _gender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _gender_vue_vue_type_template_id_c89b2488___WEBPACK_IMPORTED_MODULE_0__["render"],
  _gender_vue_vue_type_template_id_c89b2488___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/gender.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./gender.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=template&id=c89b2488&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=template&id=c89b2488& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gender_vue_vue_type_template_id_c89b2488___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./gender.vue?vue&type=template&id=c89b2488& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/gender.vue?vue&type=template&id=c89b2488&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gender_vue_vue_type_template_id_c89b2488___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gender_vue_vue_type_template_id_c89b2488___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/income.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/income.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _income_vue_vue_type_template_id_d2572eb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./income.vue?vue&type=template&id=d2572eb8& */ "./resources/js/src/pages/dashboard/charts/income.vue?vue&type=template&id=d2572eb8&");
/* harmony import */ var _income_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./income.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/income.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _income_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _income_vue_vue_type_template_id_d2572eb8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _income_vue_vue_type_template_id_d2572eb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/income.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/income.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/income.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_income_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./income.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/income.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_income_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/income.vue?vue&type=template&id=d2572eb8&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/income.vue?vue&type=template&id=d2572eb8& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_income_vue_vue_type_template_id_d2572eb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./income.vue?vue&type=template&id=d2572eb8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/income.vue?vue&type=template&id=d2572eb8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_income_vue_vue_type_template_id_d2572eb8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_income_vue_vue_type_template_id_d2572eb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/promotion.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/promotion.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _promotion_vue_vue_type_template_id_521cc5f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotion.vue?vue&type=template&id=521cc5f8& */ "./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=template&id=521cc5f8&");
/* harmony import */ var _promotion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotion.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _promotion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _promotion_vue_vue_type_template_id_521cc5f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _promotion_vue_vue_type_template_id_521cc5f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/promotion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_promotion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./promotion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_promotion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=template&id=521cc5f8&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=template&id=521cc5f8& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_promotion_vue_vue_type_template_id_521cc5f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./promotion.vue?vue&type=template&id=521cc5f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/promotion.vue?vue&type=template&id=521cc5f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_promotion_vue_vue_type_template_id_521cc5f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_promotion_vue_vue_type_template_id_521cc5f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/residence.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/residence.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _residence_vue_vue_type_template_id_68238a4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./residence.vue?vue&type=template&id=68238a4a& */ "./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=template&id=68238a4a&");
/* harmony import */ var _residence_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./residence.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _residence_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _residence_vue_vue_type_template_id_68238a4a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _residence_vue_vue_type_template_id_68238a4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/residence.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_residence_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./residence.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_residence_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=template&id=68238a4a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=template&id=68238a4a& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_residence_vue_vue_type_template_id_68238a4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./residence.vue?vue&type=template&id=68238a4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/residence.vue?vue&type=template&id=68238a4a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_residence_vue_vue_type_template_id_68238a4a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_residence_vue_vue_type_template_id_68238a4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/time-job.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/time-job.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _time_job_vue_vue_type_template_id_44c2b610___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time-job.vue?vue&type=template&id=44c2b610& */ "./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=template&id=44c2b610&");
/* harmony import */ var _time_job_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-job.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _time_job_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _time_job_vue_vue_type_template_id_44c2b610___WEBPACK_IMPORTED_MODULE_0__["render"],
  _time_job_vue_vue_type_template_id_44c2b610___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/time-job.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_time_job_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./time-job.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_time_job_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=template&id=44c2b610&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=template&id=44c2b610& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_time_job_vue_vue_type_template_id_44c2b610___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./time-job.vue?vue&type=template&id=44c2b610& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/time-job.vue?vue&type=template&id=44c2b610&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_time_job_vue_vue_type_template_id_44c2b610___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_time_job_vue_vue_type_template_id_44c2b610___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/work.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/work.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _work_vue_vue_type_template_id_070676cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work.vue?vue&type=template&id=070676cc& */ "./resources/js/src/pages/dashboard/charts/work.vue?vue&type=template&id=070676cc&");
/* harmony import */ var _work_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./work.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/charts/work.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _work_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _work_vue_vue_type_template_id_070676cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _work_vue_vue_type_template_id_070676cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/charts/work.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/work.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/work.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_work_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./work.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/work.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_work_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/charts/work.vue?vue&type=template&id=070676cc&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/charts/work.vue?vue&type=template&id=070676cc& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_work_vue_vue_type_template_id_070676cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./work.vue?vue&type=template&id=070676cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/charts/work.vue?vue&type=template&id=070676cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_work_vue_vue_type_template_id_070676cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_work_vue_vue_type_template_id_070676cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/dashboard/view.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/pages/dashboard/view.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_f5e50498___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=f5e50498& */ "./resources/js/src/pages/dashboard/view.vue?vue&type=template&id=f5e50498&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/dashboard/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_f5e50498___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_f5e50498___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/dashboard/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/dashboard/view.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/view.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/dashboard/view.vue?vue&type=template&id=f5e50498&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/pages/dashboard/view.vue?vue&type=template&id=f5e50498& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_f5e50498___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=f5e50498& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/dashboard/view.vue?vue&type=template&id=f5e50498&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_f5e50498___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_f5e50498___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);