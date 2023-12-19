"use strict";
exports.id = 909;
exports.ids = [909];
exports.modules = {

/***/ 31909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2797);
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65323);
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63754);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23141);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12119);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11987);
/* __next_internal_client_entry_do_not_use__ default auto */ 

// Import Swiper React components

// Import Swiper styles




// import required modules

function App(props) {
    const { items } = props;
    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Check if window is defined (to avoid SSR issues)
        if (false) {}
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, {
            slidesPerView: isMobile ? "auto" : 4,
            centeredSlides: isMobile ? true : false,
            spaceBetween: 30,
            style: {
                "--swiper-pagination-color": "#fff",
                "--swiper-navigation-size": "30px"
            },
            pagination: {
                clickable: true
            },
            navigation: !isMobile,
            modules: [
                swiper_modules__WEBPACK_IMPORTED_MODULE_7__/* .Pagination */ .tl,
                swiper_modules__WEBPACK_IMPORTED_MODULE_7__/* .Navigation */ .W_
            ],
            className: "mySwiper",
            children: items.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                    children: item
                }, index))
        })
    });
}


/***/ })

};
;