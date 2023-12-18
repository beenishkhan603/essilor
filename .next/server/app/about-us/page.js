(() => {
var exports = {};
exports.id = 554;
exports.ids = [554];
exports.modules = {

/***/ 18038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 98704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 97897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 56786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 41844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 96624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 75281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 57085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 20199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 39569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 17160:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 30893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 12336:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 17887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 98735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 60120:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 68231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 54614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 53750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 70982:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 79618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 78423:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 71437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'about-us',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 46422)), "C:\\Users\\Beenish\\Desktop\\Essolir\\my-app\\app\\about-us\\page.js"],
          
        }]
      },
        {
          
          
        }
      ]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 95764)), "C:\\Users\\Beenish\\Desktop\\Essolir\\my-app\\app\\layout.js"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 95493, 23)), "next/dist/client/components/not-found-error"],
          
        }
      ]
      }.children;
const pages = ["C:\\Users\\Beenish\\Desktop\\Essolir\\my-app\\app\\about-us\\page.js"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/about-us/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.APP_PAGE,
        page: "/about-us/page",
        pathname: "/about-us",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 30299:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 21958))

/***/ }),

/***/ 21958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ about)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(17421);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./components/header/index.js
var header = __webpack_require__(84858);
// EXTERNAL MODULE: ./components/footer/index.js + 1 modules
var footer = __webpack_require__(44472);
// EXTERNAL MODULE: ./components/newsLetter/index.js
var newsLetter = __webpack_require__(57613);
// EXTERNAL MODULE: ./components/dicoverOurBrand/carousel.js
var carousel = __webpack_require__(31909);
// EXTERNAL MODULE: ./components/aboutAccordion/style.module.css
var style_module = __webpack_require__(73771);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(99280);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Add.js
var Add = __webpack_require__(94038);
;// CONCATENATED MODULE: ./components/aboutAccordion/index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 





function Accord() {
    const [accordionOpen1, setAccordionOpen1] = (0,react_.useState)(false);
    const [accordionOpen2, setAccordionOpen2] = (0,react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (style_module_default()).main,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (style_module_default()).mainSub,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                container: true,
                direction: "row",
                height: "100%",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                        item: true,
                        md: 12,
                        sm: 6,
                        xs: 12,
                        lg: 6,
                        height: {
                            xs: "50%",
                            sm: "50%",
                            md: "100%",
                            lg: "100%"
                        },
                        padding: {
                            xs: "10px",
                            sm: "10px",
                            md: "100px",
                            lg: "100px"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (style_module_default()).heading,
                                children: "About Essilor"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Accordion, {
                                onChange: ()=>{
                                    if (accordionOpen2) {
                                        setAccordionOpen2(false);
                                    }
                                    setAccordionOpen1(!accordionOpen1);
                                },
                                expanded: accordionOpen1,
                                className: (style_module_default()).accordion,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(node.AccordionSummary, {
                                        className: (style_module_default()).accordionSummary,
                                        expandIcon: accordionOpen1 ? /*#__PURE__*/ jsx_runtime_.jsx(Close/* default */.Z, {
                                            sx: {
                                                color: "#18b1ae",
                                                fontSize: "28px !important",
                                                fontWeight: 700
                                            }
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(Add/* default */.Z, {
                                            sx: {
                                                color: "#18b1ae",
                                                fontSize: "28px !important",
                                                fontWeight: 700
                                            }
                                        }),
                                        "aria-controls": "panel1a-content",
                                        id: "panel1a-header",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                            variant: "p",
                                            className: (style_module_default()).drawerLink,
                                            children: "Providing optical solutions for all"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(node.AccordionDetails, {
                                        className: (style_module_default()).accordionDetail,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "16px"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                                    variant: "p",
                                                    className: (style_module_default()).text,
                                                    children: `Your eyes are a precious resource. Detecting vision problems,
                  protecting one's eyes and preserving one's eye health are
                  essential for everyone. There are almost 8 billion people in
                  the world, and they all need to take care of their visual
                  health.`
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                                    variant: "p",
                                                    className: (style_module_default()).text2,
                                                    children: "Learn more about our mission."
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Accordion, {
                                onChange: ()=>{
                                    if (accordionOpen1) {
                                        setAccordionOpen1(false);
                                    }
                                    setAccordionOpen2(!accordionOpen2);
                                },
                                expanded: accordionOpen2,
                                className: (style_module_default()).accordion,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(node.AccordionSummary, {
                                        className: (style_module_default()).accordionSummary,
                                        expandIcon: accordionOpen2 ? /*#__PURE__*/ jsx_runtime_.jsx(Close/* default */.Z, {
                                            sx: {
                                                color: "#18b1ae",
                                                fontSize: "28px !important",
                                                fontWeight: 700
                                            }
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(Add/* default */.Z, {
                                            sx: {
                                                color: "#18b1ae",
                                                fontSize: "28px !important",
                                                fontWeight: 700
                                            }
                                        }),
                                        "aria-controls": "panel1a-content",
                                        id: "panel1a-header",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                            variant: "p",
                                            className: (style_module_default()).drawerLink,
                                            children: "Innovation is in our DNA"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(node.AccordionDetails, {
                                        className: (style_module_default()).accordionDetail,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "16px"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                                    variant: "p",
                                                    className: (style_module_default()).text,
                                                    children: `Essilor® lenses do more than correct your vision, because you're more than the numbers on your prescription. For us, an innovation is meaningless unless it has a real impact on your life and the health of your eyes.`
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                                    variant: "p",
                                                    className: (style_module_default()).text2,
                                                    children: "Discover Essilor\xae innovation."
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                        item: true,
                        md: 12,
                        sm: 6,
                        xs: 12,
                        lg: 6,
                        height: {
                            xs: "50%",
                            sm: "50%",
                            md: "100%",
                            lg: "100%"
                        },
                        children: accordionOpen1 ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "https://media.essilor.com/cms/caas/v1/media/109456/data/picture/1d8b8eeb2556134ff9dd1714b1692388.jpg",
                            alt: "pic",
                            className: (style_module_default()).image
                        }) : accordionOpen2 ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "https://media.essilor.com/cms/caas/v1/media/109458/data/picture/296be10e71775209297dd48c5b4693ee.jpg",
                            alt: "pic",
                            className: (style_module_default()).image
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "https://media.essilor.com/cms/caas/v1/media/109460/data/picture/751f95fe05bf4498dbbb6daacb668d5c.jpg",
                            alt: "pic",
                            className: (style_module_default()).image
                        })
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./components/pages/about/style.module.css
var about_style_module = __webpack_require__(54346);
var about_style_module_default = /*#__PURE__*/__webpack_require__.n(about_style_module);
;// CONCATENATED MODULE: ./components/pages/about/index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 








const AboutPage = ()=>{
    const [isMobile, setIsMobile] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        // Check if window is defined (to avoid SSR issues)
        if (false) {}
    }, []);
    const item = [
        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (about_style_module_default()).stats,
                    children: "#1"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (about_style_module_default()).statsText,
                    children: "lens brand recommended by eye care professionals worldwide"
                })
            ]
        }),
        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (about_style_module_default()).stats,
                    children: "+170"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (about_style_module_default()).statsText,
                    children: "years of research on eye health"
                })
            ]
        })
    ];
    const getContent = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (about_style_module_default()).essilorContainer,
            children: /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                direction: "row",
                container: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                    item: true,
                    md: 6,
                    lg: 6,
                    sm: 12,
                    xs: 12,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (about_style_module_default()).heading,
                            children: "Selecting Essilor means choosing a dedicated brand."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (about_style_module_default()).decriptionContent,
                            children: "Opting for Essilor\xae solutions is more than just choosing the global leader in prescription glasses – it's selecting lenses from a committed brand with a mission: see more to be more. With a rich history of French design and lens fabrication dating back to 1849, our distinctive innovation capacity enables us to consistently evolve and offer the best vision solutions to meet diverse needs."
                        })
                    ]
                })
            })
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header["default"], {}),
            /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                className: (about_style_module_default()).aboutContainer,
                children: isMobile ? getContent() : /*#__PURE__*/ jsx_runtime_.jsx(node.Container, {
                    maxWidth: "xl",
                    children: getContent()
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Container, {
                maxWidth: "lg",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                        container: true,
                        direction: "row",
                        className: (about_style_module_default()).whyChooseContainer,
                        justifyContent: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                                item: true,
                                md: 12,
                                sm: 12,
                                xs: 12,
                                lg: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: (about_style_module_default()).whyChoose,
                                    children: "Why choose Essilor?"
                                })
                            }),
                            isMobile ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(carousel["default"], {
                                    items: item
                                })
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                                        item: true,
                                        md: 6,
                                        sm: 6,
                                        xs: 6,
                                        lg: 6,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (about_style_module_default()).stats,
                                                children: "#1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (about_style_module_default()).statsText,
                                                children: "lens brand recommended by eye care professionals worldwide"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                                        item: true,
                                        md: 6,
                                        sm: 6,
                                        xs: 6,
                                        lg: 6,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (about_style_module_default()).stats,
                                                children: "+170"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (about_style_module_default()).statsText,
                                                children: "years of research on eye health"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                        container: true,
                        direction: "row",
                        className: (about_style_module_default()).learneContainer,
                        justifyContent: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                                container: true,
                                direction: "row",
                                justifyContent: "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                                        item: true,
                                        md: 3,
                                        sm: 12,
                                        xs: 12,
                                        lg: 3
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                                        item: true,
                                        md: 6,
                                        sm: 6,
                                        xs: 6,
                                        lg: 6,
                                        justifyContent: "center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (about_style_module_default()).learnProcess,
                                            children: "80% of what we learn is processed through our eyes"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                                        item: true,
                                        md: 3,
                                        sm: 12,
                                        xs: 12,
                                        lg: 3
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                                container: true,
                                direction: "row",
                                justifyContent: "center",
                                className: (about_style_module_default()).decriptionContainer,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                                    item: true,
                                    md: 7,
                                    sm: 12,
                                    xs: 12,
                                    lg: 7,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (about_style_module_default()).description,
                                        children: "This is why, at EssilorLuxottica, we believe that everyone, everywhere should be able to enjoy the life-changing benefits of vision correction and vision protection. Our mission is to help people see more, be more and live life to its fullest. Utilising our portfolio of lens technologies, we aim to enable people everywhere to learn, to work, to express themselves and to fulfill their potential. To meet this objective for all, we create and innovate continually so that we can propose adapted, custom lenses for all lifestyles."
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                direction: "row",
                container: true,
                justifyContent: "center",
                className: (about_style_module_default()).aboutEContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                    item: true,
                    md: 9,
                    lg: 9,
                    sm: 12,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Accord, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(newsLetter["default"], {}),
            /*#__PURE__*/ jsx_runtime_.jsx(footer["default"], {})
        ]
    });
};
/* harmony default export */ const about = (AboutPage);


/***/ }),

/***/ 73771:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "style_main___13V_",
	"mainSub": "style_mainSub__1TBew",
	"accordion": "style_accordion__EIWJe",
	"accordionSummary": "style_accordionSummary__StgGx",
	"accordionDetail": "style_accordionDetail__cNGty",
	"image": "style_image__ax1_B",
	"heading": "style_heading__lmQXN",
	"drawerLink": "style_drawerLink__Img_e",
	"text2": "style_text2__Axxff",
	"text": "style_text__Rl1PX"
};


/***/ }),

/***/ 54346:
/***/ ((module) => {

// Exports
module.exports = {
	"aboutContainer": "style_aboutContainer__HyyiD",
	"whyChooseContainer": "style_whyChooseContainer__22xIm",
	"description": "style_description__0gBJv",
	"decriptionContainer": "style_decriptionContainer__7dB6e",
	"whyChoose": "style_whyChoose__ZkxGr",
	"stats": "style_stats__pOyEA",
	"statsText": "style_statsText__C61tO",
	"learneContainer": "style_learneContainer__OoivW",
	"learnProcess": "style_learnProcess__6Xjom",
	"essilorContainer": "style_essilorContainer___7X1y",
	"decriptionContent": "style_decriptionContent__av11b",
	"heading": "style_heading__RgI0f",
	"knowMore": "style_knowMore__xo8HI",
	"aboutEContainer": "style_aboutEContainer__zRcVr"
};


/***/ }),

/***/ 46422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./components/pages/about/index.js

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Beenish\Desktop\Essolir\my-app\components\pages\about\index.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const about = (__default__);
;// CONCATENATED MODULE: ./app/about-us/page.js



const Page = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(about, {})
    });
};
/* harmony default export */ const page = (Page);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [162,155,229,613,909], () => (__webpack_exec__(71437)));
module.exports = __webpack_exports__;

})();