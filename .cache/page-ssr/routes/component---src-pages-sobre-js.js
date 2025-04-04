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
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav */ "./src/components/nav/index.jsx");



function HeroComponent() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_nav__WEBPACK_IMPORTED_MODULE_2__.Nav, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.BoxHero, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.Text, null, "Do campo para a sua mesa, com qualidade e frescor incompar\xE1veis.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.Subtext, null, "Uma vida mais saud\xE1vel come\xE7a com escolhas inteligentes. Aposte em produtos frescos, ricos em nutrientes e sem conservantes para garantir bem-estar e vitalidade todos os dias."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.Button, null, "Conhe\xE7a nossos clientes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.BackgroundCasal, null)));
}

/***/ }),

/***/ "./src/components/Hero/style.js":
/*!**************************************!*\
  !*** ./src/components/Hero/style.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundCasal: () => (/* binding */ BackgroundCasal),
/* harmony export */   BoxHero: () => (/* binding */ BoxHero),
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   Container: () => (/* binding */ Container),
/* harmony export */   Subtext: () => (/* binding */ Subtext),
/* harmony export */   Text: () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _images_hero_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/hero.png */ "./src/images/hero.png");
/* harmony import */ var _images_casal_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/casal.png */ "./src/images/casal.png");



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "style__Container"
})(["background:url(", ") center/cover no-repeat;max-width:100%;height:646px;padding-left:94px;@media (max-width:", "){padding-left:28px;height:auto;max-width:100%;background-size:cover;}@media (max-width:", "){padding-left:28px;height:auto;max-width:100%;background-size:cover;}"], _images_hero_png__WEBPACK_IMPORTED_MODULE_0__["default"], ({
  theme
}) => theme.bp.tablet, ({
  theme
}) => theme.bp.mobile);
const BoxHero = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "style__BoxHero"
})(["display:flex;@media (max-width:", "){flex-direction:column;max-width:100%;margin-top:50px;}@media (max-width:", "){flex-direction:column;max-width:100%;margin-top:100px;}"], ({
  theme
}) => theme.bp.tablet, ({
  theme
}) => theme.bp.mobile);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "style__Text"
})(["display:flex;flex-direction:column;justify-content:center;max-width:620px;padding:180px 0;text-align:start;color:", ";font-weight:600;font-size:30px;line-height:36px;@media (max-width:", "){height:500px;width:700px;padding:20px;}@media (max-width:", "){height:500px;width:320px;padding:20px;}"], ({
  theme
}) => theme.COLORS.BLACK, ({
  theme
}) => theme.bp.tablet, ({
  theme
}) => theme.bp.mobile);
const Subtext = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "style__Subtext"
})(["font-size:18px;font-weight:400;line-height:normal;max-width:528px;margin-top:14px;@media (max-width:", "){height:100px;width:700px;}@media (max-width:", "){height:300px;width:240px;}"], ({
  theme
}) => theme.bp.tablet, ({
  theme
}) => theme.bp.mobile);
const BackgroundCasal = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "style__BackgroundCasal"
})(["background:url(", ")center/cover no-repeat;width:500px;height:500px;margin-left:440px;margin-top:32px;@media (max-width:", "){display:none;}@media (max-width:", "){display:none;}"], _images_casal_png__WEBPACK_IMPORTED_MODULE_1__["default"], ({
  theme
}) => theme.bp.mobile, ({
  theme
}) => theme.bp.tablet);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "style__Button"
})(["width:203px;height:45px;margin-top:34px;background-color:", ";color:", ";box-shadow:0px 4px 4px 0px rgba(0,0,0,0.28);border:none;border-radius:0px 10px;transition:0.3s ease-in-out;&:hover{color:", ";background-color:", ";border:1px solid ", ";}@media (max-width:", "){margin-left:0;width:203px;height:40px;}@media (max-width:", "){margin-left:0;width:203px;height:50px;}"], ({
  theme
}) => theme.COLORS.GREEN, ({
  theme
}) => theme.COLORS.WHITE, ({
  theme
}) => theme.COLORS.BLACK, ({
  theme
}) => theme.COLORS.WHITE, ({
  theme
}) => theme.COLORS.BLACK, ({
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
})(["display:flex;justify-content:space-between;align-items:center;padding:1rem;position:relative;"]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__Logo"
})([""]);
const NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "style__NavLinks"
})(["display:flex;font-weight:400;gap:48px;padding-right:74px;transition:0.5s ease-in-out;@media (max-width:", "){display:", ";flex-direction:column;position:absolute;top:100px;right:15px;background-color:", ";width:100%;text-align:center;padding:2.5rem 0;border-radius:10px;}"], ({
  theme
}) => theme.bp.tablet, ({
  open
}) => open ? "flex" : "none", ({
  theme
}) => theme.COLORS.GREEN);
const BaseLink = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "style__BaseLink"
})(["font-size:18px;color:", ";padding-top:10px;transition:color 0.3s ease-in-out;margin-right:20px;font-weight:400;&:hover{color:", ";}@media (max-width:", "){margin-right:0px;&:hover{color:", ";}}"], ({
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
})(["border-radius:0 10px;border:1px solid #f1f1f1;width:205px;height:34px;flex-shrink:0;padding-inline:auto;text-align:center;font-weight:500;transition:all 0.3s ease-in-out;&:hover{color:", ";background-color:", ";}@media (max-width:", "){justify-content:center;margin:0 auto;}"], ({
  theme
}) => theme.COLORS.BROWN, ({
  theme
}) => theme.COLORS.WHITE, ({
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