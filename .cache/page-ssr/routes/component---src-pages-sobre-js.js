"use strict";
exports.id = "component---src-pages-sobre-js";
exports.ids = ["component---src-pages-sobre-js"];
exports.modules = {

/***/ "./src/components/Hero/index.jsx":
/*!***************************************!*\
  !*** ./src/components/Hero/index.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroComponent: () => (/* binding */ HeroComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/components/Hero/style.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav */ "./src/components/nav/index.jsx");



function HeroComponent() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_nav__WEBPACK_IMPORTED_MODULE_2__.Nav, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.Text, null, "Do campo para a sua mesa, com qualidade e frescor incompar\xE1veis."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.Subtext, null, "Uma vida mais saud\xE1vel come\xE7a com escolhas inteligentes. Aposte em produtos frescos, ricos em nutrientes e sem conservantes para garantir bem-estar e vitalidade todos os dias."));
}

/***/ }),

/***/ "./src/components/Hero/style.js":
/*!**************************************!*\
  !*** ./src/components/Hero/style.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Container: () => (/* binding */ Container),
/* harmony export */   Subtext: () => (/* binding */ Subtext),
/* harmony export */   Text: () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _images_hero_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/hero.png */ "./src/images/hero.png");


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "style__Container"
})(["background:url(", ") center/cover no-repeat;max-width:100%;height:662px;padding-left:94px;"], _images_hero_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "style__Text"
})(["display:flex;flex-direction:column;justify-content:center;height:180px;max-width:720px;padding:332px 0 54px;text-align:start;color:", ";font-weight:600;font-size:30px;line-height:36px;"], ({
  theme
}) => theme.COLORS.BLACK);
const Subtext = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "style__Subtext"
})(["font-size:18px;font-weight:400;line-height:normal;max-width:528px;"]);

/***/ }),

/***/ "./src/components/nav/index.jsx":
/*!**************************************!*\
  !*** ./src/components/nav/index.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nav: () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/logo.svg */ "./src/images/logo.svg");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/components/nav/style.js");



function Nav() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.NavContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.Logo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "Logo da Raafer"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.NavLinks, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.NavLink, null, "Inicio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.NavLink, null, "Sobre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.NavLink, null, "Contato"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.NavLink, null, "Clientes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.Link, null, "Seja um patrocinador"))));
}
;

/***/ }),

/***/ "./src/components/nav/style.js":
/*!*************************************!*\
  !*** ./src/components/nav/style.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Link: () => (/* binding */ Link),
/* harmony export */   Logo: () => (/* binding */ Logo),
/* harmony export */   NavContainer: () => (/* binding */ NavContainer),
/* harmony export */   NavLink: () => (/* binding */ NavLink),
/* harmony export */   NavLinks: () => (/* binding */ NavLinks)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "style__NavContainer"
})(["display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;"]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__Logo"
})(["font-size:1.5rem;font-weight:bold;color:", ";"], ({
  theme
}) => theme.COLORS.DARK_GREY || "#333");
const NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "style__NavLinks"
})(["display:flex;font-weight:400;gap:48px;padding-right:74px;"]);
const BaseLink = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "style__BaseLink"
})(["font-size:18px;color:", ";padding-top:10px;transition:color 0.3s ease-in-out;font-weight:400;&:hover{color:", ";}"], ({
  theme
}) => theme.COLORS.WHITE, ({
  theme
}) => theme.COLORS.GREEN || "#008000");
const NavLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(BaseLink).withConfig({
  displayName: "style__NavLink"
})([""]);
const Link = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(BaseLink).withConfig({
  displayName: "style__Link"
})(["border-radius:0 10px;border:1px solid #f1f1f1;width:205px;height:34px;flex-shrink:0;padding-inline:auto;text-align:center;font-weight:500;&:hover{color:", ";background-color:", ";}"], ({
  theme
}) => theme.COLORS.BROWN || "#8B4513", ({
  theme
}) => theme.COLORS.WHITE || "#fff");

/***/ }),

/***/ "./src/images/hero.png":
/*!*****************************!*\
  !*** ./src/images/hero.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/hero-8d1aaaba63debcc5149e9eecdc44ab9c.png");

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/logo-294a3cf79bfe6f1f2f2b866d1c5dde49.svg");

/***/ }),

/***/ "./src/pages/sobre.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/sobre.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero */ "./src/components/Hero/index.jsx");



const Sobre = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Quem Somos | Raafer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: "Saiba mais sobre a hist\xF3ria da Raafer e o nosso compromisso com produtos frescos."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:title",
    content: "Quem Somos | Raafer"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:description",
    content: "Conhe\xE7a nossa trajet\xF3ria e os pilares que nos guiam."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_2__.HeroComponent, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sobre);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-sobre-js.js.map