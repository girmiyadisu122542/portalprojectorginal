"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_alumni_finance_official_transcript_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/finance/official_transcript/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/finance/official_transcript/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  created: function created() {
    this.allApplicants();
  },
  data: function data() {
    return {
      applicants: {}
    };
  },
  methods: {
    allApplicants: function allApplicants() {
      var _this = this;

      this.axios.get('/api/user/officialApplicants').then(function (_ref) {
        var data = _ref.data;
        _this.applicants = data;
      })["catch"]();
    } // deleteFreshStudent(id) {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'error',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             this.axios.delete('/api/user/fresh_students/' + id)
    //                 .then(() => {
    //                     this.freshStudents = this.freshStudents.filter(student => {
    //                         return student.id != id
    //                     })
    //                     //Notification.success(); 
    //                     Toast.fire({
    //                         icon: 'error',
    //                         title: 'Student deleted successfully!'
    //                     })
    //                 }).catch(error => {
    //                     this.flashMessage.error({
    //                         message: error.response.data.message,
    //                         time: 5000
    //                     });
    //                 })
    //         }
    //     })
    // }

  }
});

/***/ }),

/***/ "./resources/js/views/alumni/finance/official_transcript/index.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/views/alumni/finance/official_transcript/index.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_1688e5c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1688e5c6& */ "./resources/js/views/alumni/finance/official_transcript/index.vue?vue&type=template&id=1688e5c6&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/alumni/finance/official_transcript/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1688e5c6___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_1688e5c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/alumni/finance/official_transcript/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/alumni/finance/official_transcript/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/alumni/finance/official_transcript/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/finance/official_transcript/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/alumni/finance/official_transcript/index.vue?vue&type=template&id=1688e5c6&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/alumni/finance/official_transcript/index.vue?vue&type=template&id=1688e5c6& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1688e5c6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1688e5c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1688e5c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=1688e5c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/finance/official_transcript/index.vue?vue&type=template&id=1688e5c6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/finance/official_transcript/index.vue?vue&type=template&id=1688e5c6&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/finance/official_transcript/index.vue?vue&type=template&id=1688e5c6& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "pagetitle" }, [
      _c("h1", [_vm._v(" List of Official Transcript Applicants")]),
      _vm._v(" "),
      _c("nav", [
        _c("ol", { staticClass: "breadcrumb" }, [
          _c(
            "li",
            { staticClass: "breadcrumb-item" },
            [_c("router-link", { attrs: { to: "/" } }, [_vm._v("Home")])],
            1
          ),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item" }, [_vm._v("Applicants")]),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item active" }, [_vm._v("Data")]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "section" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c(
                "h5",
                { staticClass: "card-title" },
                [
                  _vm._v("Fresh Students List\r\n                            "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary",
                      staticStyle: { float: "right" },
                      attrs: { to: "/home/create-fresh_students" },
                    },
                    [_vm._v(" Add Fresh Students")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns",
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "table-responsive" }, [
                    _c(
                      "table",
                      { staticClass: "table align-items-center table-flush" },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.applicants, function (official, index) {
                            return _c("tr", { key: official.id }, [
                              _c("th", { attrs: { scope: "row" } }, [
                                _vm._v(_vm._s(index + 1)),
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(official.first_name))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(official.lastname_name)),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(official.grand_father_name)),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(official.grand_father_name)),
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "btn btn-primary",
                                      attrs: {
                                        to: {
                                          name: "EditFreshStudent",
                                          params: { id: official.id },
                                        },
                                      },
                                    },
                                    [_c("i", { staticClass: "ri-edit-2-fill" })]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger",
                                      on: {
                                        click: function ($event) {
                                          $event.preventDefault()
                                          return _vm.deleteFreshStudent(
                                            official.id
                                          )
                                        },
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "bi bi-trash-fill",
                                      }),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ])
                          }),
                          0
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _vm._m(2),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dataTable-top" }, [
      _c("div", { staticClass: "dataTable-dropdown" }, [
        _c("label", [
          _c("select", { staticClass: "dataTable-selector" }, [
            _c("option", { attrs: { value: "5" } }, [_vm._v("5")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "10", selected: "" } }, [
              _vm._v("10"),
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "15" } }, [_vm._v("15")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "20" } }, [_vm._v("20")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "25" } }, [_vm._v("25")]),
          ]),
          _vm._v(" entries per page"),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "dataTable-search" }, [
        _c("input", {
          staticClass: "dataTable-input",
          attrs: { placeholder: "Search...", type: "text" },
        }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "table-light" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col", "data-sortable": "" } }, [
          _c("a", { staticClass: "dataTable-sorter", attrs: { href: "#" } }, [
            _vm._v("#"),
          ]),
        ]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col", "data-sortable": "" } }, [
          _c("a", { staticClass: "dataTable-sorter", attrs: { href: "#" } }, [
            _vm._v("First Name"),
          ]),
        ]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col", "data-sortable": "" } }, [
          _c("a", { staticClass: "dataTable-sorter", attrs: { href: "#" } }, [
            _vm._v("Last Name"),
          ]),
        ]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col", "data-sortable": "" } }, [
          _c("a", { staticClass: "dataTable-sorter", attrs: { href: "#" } }, [
            _vm._v("Bank Statement"),
          ]),
        ]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col", "data-sortable": "" } }, [
          _c("a", { staticClass: "dataTable-sorter", attrs: { href: "#" } }, [
            _vm._v("Reciept Number "),
          ]),
        ]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col", "data-sortable": "" } }, [
          _c("a", { staticClass: "dataTable-sorter", attrs: { href: "#" } }, [
            _vm._v("Actions"),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dataTable-bottom" }, [
      _c("div", { staticClass: "dataTable-info" }, [
        _vm._v("Showing 1 to 5 of 5 entries"),
      ]),
      _vm._v(" "),
      _c("nav", { staticClass: "dataTable-pagination" }, [
        _c("ul", { staticClass: "dataTable-pagination-list" }),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);