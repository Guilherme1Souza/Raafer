"use strict";
exports.id = "component---src-pages-sobre-js";
exports.ids = ["component---src-pages-sobre-js"];
exports.modules = {

/***/ "./src/assets/closeIcon.svg":
/*!**********************************!*\
  !*** ./src/assets/closeIcon.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjRkZGRiI+PHBhdGggZD0ibTI1Ni0yMDAtNTYtNTYgMjI0LTIyNC0yMjQtMjI0IDU2LTU2IDIyNCAyMjQgMjI0LTIyNCA1NiA1Ni0yMjQgMjI0IDIyNCAyMjQtNTYgNTYtMjI0LTIyNC0yMjQgMjI0WiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./src/assets/hamburguer.svg":
/*!***********************************!*\
  !*** ./src/assets/hamburguer.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjRkZGRiI+PHBhdGggZD0iTTEyMC0yNDB2LTgwaDcyMHY4MEgxMjBabTAtMjAwdi04MGg3MjB2ODBIMTIwWm0wLTIwMHYtODBoNzIwdjgwSDEyMFoiLz48L3N2Zz4=");

/***/ }),

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
/* harmony import */ var _nav_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/index.jsx */ "./src/components/nav/index.jsx");



function HeroComponent() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_nav_index_jsx__WEBPACK_IMPORTED_MODULE_2__.Nav, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.BoxHero, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Do campo para a sua mesa, com qualidade e frescor incompar\xE1veis."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.Subtext, null, "Uma vida mais saud\xE1vel come\xE7a com escolhas inteligentes. Aposte em produtos frescos, ricos em nutrientes e sem conservantes para garantir bem-estar e vitalidade todos os dias."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.Button, null, "Conhe\xE7a nossos clientes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.Background, null)));
}

/***/ }),

/***/ "./src/components/Hero/style.js":
/*!**************************************!*\
  !*** ./src/components/Hero/style.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Background: () => (/* binding */ Background),
/* harmony export */   BoxHero: () => (/* binding */ BoxHero),
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   Container: () => (/* binding */ Container),
/* harmony export */   Subtext: () => (/* binding */ Subtext),
/* harmony export */   Text: () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _images_casal_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/casal.png */ "./src/images/casal.png");


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "style__Container"
})(["background-color:", ";background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23655225' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23AB8B3E' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23a9893d' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23a6873c' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23a4853b' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23a1833a' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%239f813a' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%239d7f39' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%239a7d38' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23987b37' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23967936' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23937735' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23917534' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%238f7433' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%238c7232' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%238a7032' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23886e31' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23856c30' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23836A2F' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E\");background-attachment:fixed;background-size:cover;max-width:100%;height:63.3rem;padding-inline:10.9rem;@media (min-width:", "){padding-inline:26.9rem;}@media (max-width:", "){height:auto;max-width:100%;background-size:cover;}@media (max-width:", "){height:auto;max-width:100%;background-size:cover;}@media (max-width:", "){height:auto;max-width:100%;background-size:cover;padding-inline:30px;}"], ({
  theme
}) => theme.COLORS.ORANGE, ({
  theme
}) => theme.bp.hugeDesktop, ({
  theme
}) => theme.bp.smallDesktop, ({
  theme
}) => theme.bp.tablet, ({
  theme
}) => theme.bp.mobile);
const BoxHero = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "style__BoxHero"
})(["display:flex;@media (max-width:", "){gap:14.0rem;padding-left:0;}@media (max-width:", "){max-width:100%;padding-left:0;}@media (max-width:", "){flex-direction:column;max-width:100%;gap:0.2rem;}@media (max-width:", "){flex-direction:column;max-width:100%;}"], ({
  theme
}) => theme.bp.desktop, ({
  theme
}) => theme.bp.smallDesktop, ({
  theme
}) => theme.bp.tablet, ({
  theme
}) => theme.bp.mobile);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "style__Text"
})(["display:flex;flex-direction:column;justify-content:center;padding:180px 40px;color:", ";h1{font-weight:600;font-size:clamp(2.8rem,2vw + 1.6rem,3.6rem);line-height:36px;max-width:800px;text-align:start;}@media (max-width:", "){max-width:800px;}@media (min-width:", "){max-width:620px;padding:80px 0;}@media (max-width:", "){max-width:550px;padding:80px 0;}@media (max-width:", "){padding:80px 0;max-width:550px;line-height:42px;}@media (max-width:", "){height:auto;max-width:700px;padding:20px;margin:10.0rem auto 0.5rem;gap:3.5rem;}@media (max-width:", "){height:auto;max-width:460px;padding:0;margin:6.0rem auto;text-align:start;}"], ({
  theme
}) => theme.COLORS.WHITE, ({
  theme
}) => theme.bp.hugeDesktop, ({
  theme
}) => theme.bp.bigDesktop, ({
  theme
}) => theme.bp.desktop, ({
  theme
}) => theme.bp.smallDesktop, ({
  theme
}) => theme.bp.tablet, ({
  theme
}) => theme.bp.mobile);
const Subtext = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "style__Subtext"
})(["font-size:clamp(1.8rem,1vw + 0.6rem,2.2rem);font-weight:400;line-height:1.3;max-width:750px;margin-top:14px;@media (max-width:", "){max-width:700px;}@media (max-width:", "){max-width:620px;}@media (max-width:", "){max-width:550px;}@media (max-width:", "){max-width:450px;}@media (max-width:", "){height:100px;max-width:700px;}@media (max-width:", "){height:180px;max-width:400px;}"], ({
  theme
}) => theme.bp.hugeDesktop, ({
  theme
}) => theme.bp.bigDesktop, ({
  theme
}) => theme.bp.desktop, ({
  theme
}) => theme.bp.smallDesktop, ({
  theme
}) => theme.bp.tablet, ({
  theme
}) => theme.bp.mobile);
const Background = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "style__Background"
})(["background:url(", ")center/cover no-repeat;width:500px;height:500px;margin-left:300px;margin-top:35px;@media (max-width:", "){width:500px;height:500px;margin-left:190px;margin-top:35px;}@media (max-width:", "){width:400px;height:400px;margin-left:100px;margin-top:137px;}@media (max-width:", "){width:100%;height:400px;margin-left:90px;margin-top:135px;}@media (max-width:", "){width:100%;height:400px;margin-left:-20px;margin-top:135px;}@media (max-width:", "){width:400px;height:400px;margin-left:-20px;margin-top:110px;}@media (max-width:", "){display:flex;justify-content:start;align-items:start;margin:0 auto;width:500px;height:500px;}@media (max-width:", "){width:300px;height:300px;}"], _images_casal_png__WEBPACK_IMPORTED_MODULE_0__["default"], ({
  theme
}) => theme.bp.hugeDesktop, ({
  theme
}) => theme.bp.veryBigDesktop, ({
  theme
}) => theme.bp.bigDesktop, ({
  theme
}) => theme.bp.desktop, ({
  theme
}) => theme.bp.smallDesktop, ({
  theme
}) => theme.bp.tablet, ({
  theme
}) => theme.bp.mobile);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "style__Button"
})(["width:203px;height:45px;margin-top:34px;background-color:", ";color:", ";box-shadow:0px 4px 4px 0px rgba(0,0,0,0.28);border:none;border-radius:0px 10px;transition:0.3s ease-in-out;&:hover{color:", ";background-color:", ";border:1px solid ", ";}@media (max-width:", "){margin-left:0;width:203px;height:40px;}@media (max-width:", "){margin-left:0;width:203px;margin-top:0;}"], ({
  theme
}) => theme.COLORS.GREEN, ({
  theme
}) => theme.COLORS.WHITE, ({
  theme
}) => theme.COLORS.BLACK, ({
  theme
}) => theme.COLORS.WHITE, ({
  theme
}) => theme.COLORS.WHITE, ({
  theme
}) => theme.bp.tablet, ({
  theme
}) => theme.bp.mobile);

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
/* harmony import */ var _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/closeIcon.svg */ "./src/assets/closeIcon.svg");
/* harmony import */ var _assets_hamburguer_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/hamburguer.svg */ "./src/assets/hamburguer.svg");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/components/nav/style.js");






function Nav() {
  const {
    0: menuOpen,
    1: setMenuOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.NavContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.Logo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "Logo da Raafer"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.MenuIcon, {
    onClick: () => setMenuOpen(!menuOpen)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: menuOpen ? _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_2__["default"] : _assets_hamburguer_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "Menu"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.NavLinks, {
    open: menuOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.NavLink, null, "Inicio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.NavLink, null, "Sobre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.NavLink, null, "Contato"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.NavLink, null, "Clientes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.Link, null, "Seja um patrocinador"))));
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
/* harmony export */   MenuIcon: () => (/* binding */ MenuIcon),
/* harmony export */   NavContainer: () => (/* binding */ NavContainer),
/* harmony export */   NavLink: () => (/* binding */ NavLink),
/* harmony export */   NavLinks: () => (/* binding */ NavLinks)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "style__NavContainer"
})(["display:flex;justify-content:space-between;align-items:center;padding:1rem;position:relative;@media (max-width:", "){padding-left:20px;padding-top:2.0rem;}"], ({
  theme
}) => theme.bp.smallDesktop);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__Logo"
})([""]);
const NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "style__NavLinks"
})(["display:flex;font-weight:400;gap:clamp(2.4rem,4vw,4.8rem);padding-right:74px;transition:0.5s ease-in-out;@media (max-width:", "){padding-left:40px;text-align:right;}@media (max-width:", "){padding:20px;text-align:right;}@media (max-width:", "){display:", ";flex-direction:column;position:absolute;top:100px;background-color:", ";width:100%;text-align:center;padding:2.5rem 0;border-radius:10px;}@media (max-width:", "){right:5px;}"], ({
  theme
}) => theme.bp.desktop, ({
  theme
}) => theme.bp.smallDesktop, ({
  theme
}) => theme.bp.tablet, ({
  open
}) => open ? "flex" : "none", ({
  theme
}) => theme.COLORS.GREEN, ({
  theme
}) => theme.bp.mobile);
const BaseLink = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "style__BaseLink"
})(["font-size:2.0rem;color:", ";padding-top:10px;transition:color 0.3s ease-in-out;margin-right:20px;font-weight:400;&:hover{color:", ";}@media (max-width:", "){margin-right:0px;&:hover{color:", ";}}"], ({
  theme
}) => theme.COLORS.WHITE, ({
  theme
}) => theme.COLORS.GREEN || "#008000", ({
  theme
}) => theme.bp.tablet, ({
  theme
}) => theme.COLORS.BROWN);
const NavLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(BaseLink).withConfig({
  displayName: "style__NavLink"
})(["transition:none;"]);
const Link = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(BaseLink).withConfig({
  displayName: "style__Link"
})(["border-radius:0 10px;border:1px solid #f1f1f1;width:205px;height:34px;flex-shrink:0;padding-inline:auto;text-align:center;font-weight:500;transition:all 0.3s ease-in-out;&:hover{color:", ";background-color:", ";}@media (max-width:", "){justify-content:center;margin:0 auto;width:405px;height:34px;padding-top:1px;}@media (max-width:", "){justify-content:center;margin:0 auto;width:80%;height:auto;padding:1rem;}"], ({
  theme
}) => theme.COLORS.BROWN, ({
  theme
}) => theme.COLORS.WHITE, ({
  theme
}) => theme.bp.tablet, ({
  theme
}) => theme.bp.tablet);
const MenuIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__MenuIcon"
})(["display:none;cursor:pointer;font-size:2rem;color:", ";@media (max-width:", "){display:block;}"], ({
  theme
}) => theme.COLORS.WHITE, ({
  theme
}) => theme.bp.tablet);

/***/ }),

/***/ "./src/images/casal.png":
/*!******************************!*\
  !*** ./src/images/casal.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/casal-52ac86a01f86c56ab7776cf1622b08fb.png");

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

/***/ "./src/images/mercado.png":
/*!********************************!*\
  !*** ./src/images/mercado.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/mercado-a338bb95da0202be01e733c9daf28135.png");

/***/ }),

/***/ "./src/images/raafer.jpg":
/*!*******************************!*\
  !*** ./src/images/raafer.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/raafer-a2c048e5f3e6d22cb5a2aaf7ba469f67.jpg");

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _images_raafer_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/raafer.jpg */ "./src/images/raafer.jpg");
/* harmony import */ var _images_mercado_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/mercado.png */ "./src/images/mercado.png");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Hero */ "./src/components/Hero/index.jsx");






const About = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "sobre__About"
})(["padding-block:180px;background:", ";h1{color:", ";text-align:center;font-size:7.6rem;font-weight:600;}span{display:block;color:#1E1E1E;font-size:3.2rem;font-weight:600;}@media (max-width:", "){max-width:480px;font-size:1rem;padding-block:9.0rem;h1{font-size:5rem;}span{font-size:2.5rem;}}"], ({
  theme
}) => theme.COLORS.WHITE, ({
  theme
}) => theme.COLORS.BLACK, ({
  theme
}) => theme.bp.mobile);
const AboutBox = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "sobre__AboutBox"
})(["border-radius:5px;background:", ";box-shadow:4px 4px 20.8px 0px rgba(0,0,0,0.45);width:864px;height:auto;flex-shrink:0;margin:5.0rem auto;padding-top:2.2rem;@media (max-width:", "){max-width:425px;font-size:1rem;}"], ({
  theme
}) => theme.COLORS.WHITE, ({
  theme
}) => theme.bp.mobile);
const AboutImg = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "sobre__AboutImg"
})(["border-radius:100px;width:150px;height:150px;flex-shrink:0;background:url(", ") center;background-size:cover;margin:0 auto;"], _images_raafer_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);
const Position = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "sobre__Position"
})(["width:14rem;color:#1E1E1E;text-align:center;font-size:1.4rem;font-style:normal;font-weight:600;margin:15px auto;line-height:1.8rem;p{color:rgba(0,0,0,0.57);text-align:center;font-size:1.2rem;margin-block:1rem;}@media (max-width:", "){max-width:480px;font-size:1.8rem;p{font-size:1.4rem;}}"], ({
  theme
}) => theme.bp.mobile);
const AboutText = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "sobre__AboutText"
})(["color:#1E1E1E;text-align:center;margin:0 auto;font-size:1.8rem;font-weight:500;line-height:2.2rem;max-width:640px;padding-bottom:3.0rem;@media (max-width:", "){max-width:450px;font-size:1.6rem;padding-inline:1rem;}"], ({
  theme
}) => theme.bp.mobile);
const Pillars = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "sobre__Pillars"
})(["position:relative;background:url(", ");height:500px;background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;display:flex;align-items:center;justify-content:center;color:white;text-align:center;padding:2rem;z-index:1;&::before{content:'';position:absolute;inset:0;background-color:rgba(0,0,0,0.5);z-index:0;}> *{position:relative;z-index:1;h2{color:#FFF;font-size:50px;font-style:normal;font-weight:800;line-height:normal;}}"], _images_mercado_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_4__.HeroComponent, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(About, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "DO RAAFER ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "PARA SUA FAMILIA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AboutBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AboutImg, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Position, null, "Raphael Pires e Fernanda Pires", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "CEOs e Fundadores"), "Raafer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AboutText, null, "\"O Raafer atua h\xE1 mais de quatro anos no mercado, oferecendo solu\xE7\xF5es em alimenta\xE7\xE3o sustent\xE1vel para empresas, seus colaboradores e estabelecimentos comerciais. Nosso compromisso \xE9 promover o bem-estar por meio de uma nutri\xE7\xE3o equilibrada, garantindo a reposi\xE7\xE3o de vitaminas essenciais que elevam a satisfa\xE7\xE3o, qualidade de vida e desempenho no ambiente de trabalho. Acreditamos que uma alimenta\xE7\xE3o adequada fortalece a disposi\xE7\xE3o e o engajamento, tornando o dia a dia mais saud\xE1vel e produtivo. Com inova\xE7\xE3o e excel\xEAncia, ajudamos neg\xF3cios que valorizam o cuidado com as pessoas e a sustentabilidade.\""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Pillars, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Nossos Pilares"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Texto explicando os valores ou pilares da empresa.")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sobre);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-sobre-js.js.map