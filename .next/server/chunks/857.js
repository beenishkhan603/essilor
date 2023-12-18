exports.id = 857;
exports.ids = [857];
exports.modules = {

/***/ 14474:
/***/ (() => {



/***/ }),

/***/ 44472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ footer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(17421);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Add.js
var Add = __webpack_require__(94038);
// EXTERNAL MODULE: ./node_modules/@mui/base/node/TextareaAutosize/index.js
var TextareaAutosize = __webpack_require__(76978);
// EXTERNAL MODULE: ./components/contact/style.module.css
var style_module = __webpack_require__(2379);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./components/contact/index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 




const ContactForm = ()=>{
    const [formData, setFormData] = (0,react_.useState)({
        email: "",
        message: ""
    });
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prevData)=>({
                ...prevData,
                [name]: value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Handle form submission (e.g., send data to a backend)
        console.log("Form submitted:", formData);
    // You can add code here to send the data to a backend service
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleSubmit,
        className: (style_module_default()).contactForm,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: "Email:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(node.TextField, {
                        className: (style_module_default()).textFields,
                        type: "email",
                        name: "name",
                        fullWidth: true,
                        value: formData.name,
                        onChange: handleChange
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                    children: [
                        "Message:",
                        /*#__PURE__*/ jsx_runtime_.jsx(TextareaAutosize.TextareaAutosize, {
                            className: (style_module_default()).description,
                            minRows: 3
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "submit",
                className: (style_module_default()).submitBtn,
                children: "Submit"
            })
        ]
    });
};
/* harmony default export */ const contact = (ContactForm);

// EXTERNAL MODULE: ./components/global.css
var global = __webpack_require__(65323);
// EXTERNAL MODULE: ./components/footer/style.module.css
var footer_style_module = __webpack_require__(56485);
var footer_style_module_default = /*#__PURE__*/__webpack_require__.n(footer_style_module);
;// CONCATENATED MODULE: ./components/footer/index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 







const Footer = ()=>{
    const [isMobile, setIsMobile] = (0,react_.useState)(false);
    const brands = [
        {
            name: "Blanc",
            url: ""
        },
        {
            name: "Matterhorn",
            url: ""
        },
        {
            name: "Elbrus",
            url: ""
        },
        {
            name: "Ben Nevis",
            url: ""
        },
        {
            name: "Tatra",
            url: ""
        },
        {
            name: "Hamilton",
            url: ""
        }
    ];
    (0,react_.useEffect)(()=>{
        // Check if window is defined (to avoid SSR issues)
        if (false) {}
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
        className: `primaryBg ${(footer_style_module_default()).footerContainer}`,
        component: "footer",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Container, {
            maxWidth: "lg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                    container: true,
                    spacing: 5,
                    children: [
                        isMobile ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Accordion, {
                                className: (footer_style_module_default()).footerAccordian,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(node.AccordionSummary, {
                                        expandIcon: /*#__PURE__*/ jsx_runtime_.jsx(Add/* default */.Z, {
                                            style: {
                                                color: "#fff"
                                            }
                                        }),
                                        "aria-controls": "panel1a-content",
                                        id: "panel1a-header",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (footer_style_module_default()).footerHeading,
                                            children: "Brand"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(node.AccordionDetails, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: (footer_style_module_default()).list,
                                            children: brands.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: (footer_style_module_default()).listItem,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                                        href: item.url,
                                                        children: item.name
                                                    })
                                                }, index))
                                        })
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                                item: true,
                                xs: 12,
                                sm: 4,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (footer_style_module_default()).footerHeading,
                                        children: "Brand"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: (footer_style_module_default()).list,
                                        children: brands.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: (footer_style_module_default()).listItem,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                                    href: item.url,
                                                    children: item.name
                                                })
                                            }, index))
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                            item: true,
                            xs: 12,
                            sm: 4,
                            style: {
                                marginBottom: "1%"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (footer_style_module_default()).footerHeading,
                                    children: "Contct Us"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(contact, {})
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                            item: true,
                            xs: 12,
                            sm: 4
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
                    mt: 2,
                    className: (footer_style_module_default()).subFooter,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Privacy policy | Terms and conditions of use"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const footer = (Footer);


/***/ }),

/***/ 84858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79536);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74147);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20094);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6176);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(43610);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17421);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65099);
/* harmony import */ var _mui_icons_material_Language__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60933);
/* harmony import */ var _mui_icons_material_LocationOn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(30321);
/* harmony import */ var _mui_icons_material_DragHandle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63610);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99280);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(94038);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59670);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


















const NavBar = ()=>{
    const [drawerOpen, setDrawerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [accordionOpen, setAccordionOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [drop, setDrop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const pages = [
        {
            name: "About us",
            url: "/about-us"
        },
        {
            name: "Our products",
            url: ""
        },
        {
            name: "Help me choose",
            url: ""
        }
    ];
    const handleDrawerOpen = ()=>{
        setDrawerOpen(true);
    };
    const handleDrawerClose = ()=>{
        setDrawerOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3___default()), {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().appbar),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5___default()), {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().navContent),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                    sx: {
                                        flexGrow: 1,
                                        display: {
                                            xs: "none",
                                            md: "flex"
                                        },
                                        width: "100%"
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        width: "100%",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                display: "flex",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "https://media.essilor.com/cms/caas/v1/media/111038/data/picture/ad4c95e15735798f651c1308f70ee60b.png",
                                                            alt: "logo",
                                                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo)
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().barItem),
                                                        children: pages.map((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                onClick: ()=>page.name == "Our products" && setDrop(!drop),
                                                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().barItemBtn),
                                                                sx: {
                                                                    my: 2,
                                                                    color: "white",
                                                                    display: "block"
                                                                },
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().barItemContent),
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().barItemText),
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                href: page.url,
                                                                                children: page.name
                                                                            })
                                                                        }),
                                                                        page.name == "Our products" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                                            sx: {
                                                                                color: "#fff",
                                                                                fontSize: "16px !important"
                                                                            },
                                                                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().barItemIcon)
                                                                        }) : null
                                                                    ]
                                                                })
                                                            }, page.name))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().barItemGlobe),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Language__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    sx: {
                                                        color: "#fff",
                                                        alignSelf: "center",
                                                        fontSize: "42px !important"
                                                    }
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                    sx: {
                                        flexGrow: 1,
                                        display: {
                                            xs: "flex",
                                            md: "none"
                                        },
                                        width: "100%"
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().barItemMbl),
                                        children: [
                                            !drawerOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_DragHandle__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                sx: {
                                                    color: "#fff",
                                                    alignSelf: "center",
                                                    fontSize: "28px !important",
                                                    cursor: "pointer"
                                                },
                                                onClick: handleDrawerOpen
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                sx: {
                                                    color: "#fff",
                                                    alignSelf: "center",
                                                    fontSize: "28px !important",
                                                    cursor: "pointer"
                                                },
                                                onClick: handleDrawerClose
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "https://media.essilor.com/cms/caas/v1/media/111038/data/picture/ad4c95e15735798f651c1308f70ee60b.png",
                                                alt: "logo",
                                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo)
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_LocationOn__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                sx: {
                                                    color: "#fff",
                                                    alignSelf: "center",
                                                    fontSize: "28px !important",
                                                    cursor: "pointer"
                                                }
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        drop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().navigationDropdown),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().navigationDropdownContent),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardheading),
                                                children: "Lenses for you"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardText),
                                                children: "Essilor lenses are the number one brand in spectacle lenses recommended by opticians around the world. We have a vision solution for every lifestyle and need."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "/products/",
                                                children: "Discover all products"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().linksWrapper),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailHeading),
                                                        children: "Correct"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/product-detail",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailLink),
                                                            children: "Blanc"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/product-detail",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailLink),
                                                            children: "Matterhorn"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailHeading),
                                                        children: "Protection"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/product-detail",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailLink),
                                                            children: "Elbrus"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/product-detail",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailLink),
                                                            children: "Ben Nevis"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/product-detail",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailLink),
                                                            children: "Tatra"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailHeading),
                                                        children: "Enhance"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/product-detail",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailLink),
                                                            children: "Hamilton"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_13___default()), {
                anchor: "top",
                open: drawerOpen,
                onClose: handleDrawerClose,
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().drawerMain),
                classes: {
                    backDrop: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().drawerBackDrop),
                    paper: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().drawerPaper)
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_List__WEBPACK_IMPORTED_MODULE_14___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/about-us",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_15___default()), {
                                button: true,
                                onClick: handleDrawerClose,
                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().listItem),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                    variant: "h6",
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().drawerLink),
                                    children: "About us"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_15___default()), {
                                button: true,
                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().listItem),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Accordion, {
                                    onChange: ()=>setAccordionOpen(!accordionOpen),
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().accordion),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.AccordionSummary, {
                                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().accordionSummary),
                                            expandIcon: accordionOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}),
                                            "aria-controls": "panel1a-content",
                                            id: "panel1a-header",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                variant: "h6",
                                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().drawerLink),
                                                children: "Our products"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.AccordionDetails, {
                                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().accordionDetail),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailHeading),
                                                    children: "Correct"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/product-detail",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailLink),
                                                        children: "Blanc"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/product-detail",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailLink),
                                                        children: "Matterhorn"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailHeading),
                                                    children: "Protection"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/product-detail",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailLink),
                                                        children: "Elbrus"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/product-detail",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailLink),
                                                        children: "Ben Nevis"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/product-detail",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailLink),
                                                            children: "Tatra"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailHeading),
                                                    children: "Enhance"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/product-detail",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailLink),
                                                        children: "Hamilton"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailbtn),
                                                    children: "Discover all products"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/products",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_15___default()), {
                                button: true,
                                onClick: handleDrawerClose,
                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().listItem),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                    variant: "h6",
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().drawerLink),
                                    children: "Help me choose"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);


/***/ }),

/***/ 2379:
/***/ ((module) => {

// Exports
module.exports = {
	"submitBtn": "style_submitBtn__sU6__",
	"contactForm": "style_contactForm__JWVb_",
	"textFields": "style_textFields__JV6Gq",
	"description": "style_description__mktXK"
};


/***/ }),

/***/ 56485:
/***/ ((module) => {

// Exports
module.exports = {
	"footerContainer": "style_footerContainer__axGtW",
	"list": "style_list__Dl6he",
	"listItem": "style_listItem__vMIUu",
	"subFooter": "style_subFooter__avC6t",
	"footerHeading": "style_footerHeading__AtDYH",
	"footerAccordian": "style_footerAccordian__8nzXm"
};


/***/ }),

/***/ 59670:
/***/ ((module) => {

// Exports
module.exports = {
	"appbar": "style_appbar__2INBY",
	"navContent": "style_navContent__CA9MM",
	"logo": "style_logo__9TFHR",
	"barItem": "style_barItem__kEFn_",
	"barItemBtn": "style_barItemBtn__KI8ML",
	"barItemContent": "style_barItemContent__d8qeg",
	"barItemText": "style_barItemText__Q8fL5",
	"barItemIcon": "style_barItemIcon__q_co2",
	"barItemGlobe": "style_barItemGlobe__Zq9Jt",
	"barItemMbl": "style_barItemMbl__sXKF7",
	"drawerMain": "style_drawerMain__sr8aM",
	"drawerPaper": "style_drawerPaper__PTNuX",
	"listItem": "style_listItem__mryO3",
	"drawerLink": "style_drawerLink__CGSog",
	"accordion": "style_accordion__R0NYG",
	"accordionSummary": "style_accordionSummary__kf_Q9",
	"accordionDetail": "style_accordionDetail__cyEsY",
	"detailHeading": "style_detailHeading__eqZja",
	"detailLink": "style_detailLink__tQSPC",
	"detailbtn": "style_detailbtn__SsSCZ",
	"navigationDropdown": "style_navigationDropdown__ZN4HF",
	"navigationDropdownContent": "style_navigationDropdownContent__VuCBD",
	"card": "style_card__lMj6G",
	"cardheading": "style_cardheading__6NIDd",
	"cardText": "style_cardText__7gGDX",
	"linksWrapper": "style_linksWrapper__ubvxy"
};


/***/ }),

/***/ 95764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67272);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);


const metadata = {
    title: "Essolir",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("head", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://fonts.googleapis.com/css?family=Noto+Sans",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        charset: "UTF-8",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 67272:
/***/ (() => {



/***/ }),

/***/ 65323:
/***/ (() => {



/***/ })

};
;