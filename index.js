/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pug/pages/landing-page-dates-dropdown/landing-page-dates-dropdown.js":
/*!**********************************************************************************!*\
  !*** ./src/pug/pages/landing-page-dates-dropdown/landing-page-dates-dropdown.js ***!
  \**********************************************************************************/
/***/ (function() {

var _document$querySelect;
var datePickerElement = (_document$querySelect = document.querySelector('.landing-page__dates-dropdown')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.querySelector('.smg-date-picker');
datePickerElement === null || datePickerElement === void 0 ? void 0 : datePickerElement.classList.add('opened');

/***/ }),

/***/ "./src/pug/pages/landing-page/landing-page.js":
/*!****************************************************!*\
  !*** ./src/pug/pages/landing-page/landing-page.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _landing_page_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page.scss */ "./src/pug/pages/landing-page/landing-page.scss");
/* harmony import */ var _ui_kit_includes_main_page_slider_main_page_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui-kit/includes/main-page-slider/main-page-slider */ "./src/pug/ui-kit/includes/main-page-slider/main-page-slider.js");
/* harmony import */ var smg_date_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! smg-date-picker */ "./node_modules/smg-date-picker/dist/index.js");
/* harmony import */ var smg_date_picker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(smg_date_picker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var smg_date_picker_dist_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! smg-date-picker/dist/style.css */ "./node_modules/smg-date-picker/dist/style.css");




var searchFormElement = document.querySelector('.landing-page__search-form');
var anchorElement = document.querySelector('.search-card__dates-wrapper');
var focusedCustomSelectElement = searchFormElement === null || searchFormElement === void 0 ? void 0 : searchFormElement.querySelector('.custom-select__button');
var firstOutputElement = anchorElement === null || anchorElement === void 0 ? void 0 : anchorElement.querySelector('.search-card__check-in-date').querySelector('.custom-select__text');
var secondOutputElement = anchorElement === null || anchorElement === void 0 ? void 0 : anchorElement.querySelector('.search-card__check-out-date').querySelector('.custom-select__text');
focusedCustomSelectElement === null || focusedCustomSelectElement === void 0 || focusedCustomSelectElement.focus();
if (anchorElement && firstOutputElement && secondOutputElement) {
  var datePicker = new smg_date_picker__WEBPACK_IMPORTED_MODULE_2__.SMGDatePicker({
    anchorElement: anchorElement,
    firstOutputElement: firstOutputElement,
    secondOutputElement: secondOutputElement,
    mode: smg_date_picker__WEBPACK_IMPORTED_MODULE_2__.CalendarMode.Range,
    localization: smg_date_picker__WEBPACK_IMPORTED_MODULE_2__.Localization.Ru
  });
  datePicker.create();
}
searchFormElement === null || searchFormElement === void 0 ? void 0 : searchFormElement.addEventListener('submit', function (evt) {
  return evt.preventDefault();
});

/***/ }),

/***/ "./src/pug/pages/registration/registration.js":
/*!****************************************************!*\
  !*** ./src/pug/pages/registration/registration.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registration_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration.scss */ "./src/pug/pages/registration/registration.scss");
var _document$querySelect;

var registrationPageFocusedElement = (_document$querySelect = document.querySelector('.registration__form')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.querySelector('.custom-text-field__input');
registrationPageFocusedElement === null || registrationPageFocusedElement === void 0 ? void 0 : registrationPageFocusedElement.focus();

/***/ }),

/***/ "./src/pug/pages/room-details/room-details.js":
/*!****************************************************!*\
  !*** ./src/pug/pages/room-details/room-details.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _room_details_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room-details.scss */ "./src/pug/pages/room-details/room-details.scss");
var _document$querySelect;

var roomDetailsPageFocusedElement = (_document$querySelect = document.querySelector('.room-details__container')) === null || _document$querySelect === void 0 || (_document$querySelect = _document$querySelect.querySelector('.booking-card__check-in-date')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.querySelector('.custom-select__button');
roomDetailsPageFocusedElement === null || roomDetailsPageFocusedElement === void 0 ? void 0 : roomDetailsPageFocusedElement.focus();

/***/ }),

/***/ "./src/pug/pages/search-room/search-room.js":
/*!**************************************************!*\
  !*** ./src/pug/pages/search-room/search-room.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_room_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-room.scss */ "./src/pug/pages/search-room/search-room.scss");
var _document$querySelect;

var customSelectButtonElement = (_document$querySelect = document.querySelector('.room-list__container')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.querySelector('.custom-select__button');
customSelectButtonElement === null || customSelectButtonElement === void 0 ? void 0 : customSelectButtonElement.focus();

/***/ }),

/***/ "./src/pug/pages/sign-in/sign-in.js":
/*!******************************************!*\
  !*** ./src/pug/pages/sign-in/sign-in.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sign_in_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in.scss */ "./src/pug/pages/sign-in/sign-in.scss");
var _document$querySelect;

var signInPageFocusedElement = (_document$querySelect = document.querySelector('.sign-in__form')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.querySelector('.custom-text-field__input');
signInPageFocusedElement === null || signInPageFocusedElement === void 0 ? void 0 : signInPageFocusedElement.focus();

/***/ }),

/***/ "./src/pug/ui-kit/cards/booking-card/booking-card.js":
/*!***********************************************************!*\
  !*** ./src/pug/ui-kit/cards/booking-card/booking-card.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _booking_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-card.scss */ "./src/pug/ui-kit/cards/booking-card/booking-card.scss");


/***/ }),

/***/ "./src/pug/ui-kit/cards/calendar/calendar.js":
/*!***************************************************!*\
  !*** ./src/pug/ui-kit/cards/calendar/calendar.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calendar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.scss */ "./src/pug/ui-kit/cards/calendar/calendar.scss");


/***/ }),

/***/ "./src/pug/ui-kit/cards/log-in-card/log-in-card.js":
/*!*********************************************************!*\
  !*** ./src/pug/ui-kit/cards/log-in-card/log-in-card.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _log_in_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-in-card.scss */ "./src/pug/ui-kit/cards/log-in-card/log-in-card.scss");


/***/ }),

/***/ "./src/pug/ui-kit/cards/register-card/register-card.js":
/*!*************************************************************!*\
  !*** ./src/pug/ui-kit/cards/register-card/register-card.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-card.scss */ "./src/pug/ui-kit/cards/register-card/register-card.scss");


/***/ }),

/***/ "./src/pug/ui-kit/cards/room-card/room-card.js":
/*!*****************************************************!*\
  !*** ./src/pug/ui-kit/cards/room-card/room-card.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _room_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room-card.scss */ "./src/pug/ui-kit/cards/room-card/room-card.scss");


/***/ }),

/***/ "./src/pug/ui-kit/cards/search-card/search-card.js":
/*!*********************************************************!*\
  !*** ./src/pug/ui-kit/cards/search-card/search-card.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-card.scss */ "./src/pug/ui-kit/cards/search-card/search-card.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/bullet-list/bullet-list.js":
/*!************************************************************!*\
  !*** ./src/pug/ui-kit/includes/bullet-list/bullet-list.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bullet_list_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet-list.scss */ "./src/pug/ui-kit/includes/bullet-list/bullet-list.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/button-contained/button-contained.js":
/*!**********************************************************************!*\
  !*** ./src/pug/ui-kit/includes/button-contained/button-contained.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_contained_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-contained.scss */ "./src/pug/ui-kit/includes/button-contained/button-contained.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/button-icon-contained/button-icon-contained.js":
/*!********************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/button-icon-contained/button-icon-contained.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_icon_contained_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-icon-contained.scss */ "./src/pug/ui-kit/includes/button-icon-contained/button-icon-contained.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/button-outlined/button-outlined.js":
/*!********************************************************************!*\
  !*** ./src/pug/ui-kit/includes/button-outlined/button-outlined.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_outlined_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-outlined.scss */ "./src/pug/ui-kit/includes/button-outlined/button-outlined.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/button-text/button-text.js":
/*!************************************************************!*\
  !*** ./src/pug/ui-kit/includes/button-text/button-text.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_text_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-text.scss */ "./src/pug/ui-kit/includes/button-text/button-text.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/chart/chart.js":
/*!************************************************!*\
  !*** ./src/pug/ui-kit/includes/chart/chart.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chart_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart.scss */ "./src/pug/ui-kit/includes/chart/chart.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/colors-item/colors-item.js":
/*!************************************************************!*\
  !*** ./src/pug/ui-kit/includes/colors-item/colors-item.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors_item_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors-item.scss */ "./src/pug/ui-kit/includes/colors-item/colors-item.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/custom-checkbox/custom-checkbox.js":
/*!********************************************************************!*\
  !*** ./src/pug/ui-kit/includes/custom-checkbox/custom-checkbox.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_checkbox_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-checkbox.scss */ "./src/pug/ui-kit/includes/custom-checkbox/custom-checkbox.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/custom-radio/custom-radio.js":
/*!**************************************************************!*\
  !*** ./src/pug/ui-kit/includes/custom-radio/custom-radio.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_radio_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-radio.scss */ "./src/pug/ui-kit/includes/custom-radio/custom-radio.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/custom-select/custom-select.js":
/*!****************************************************************!*\
  !*** ./src/pug/ui-kit/includes/custom-select/custom-select.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_select_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-select.scss */ "./src/pug/ui-kit/includes/custom-select/custom-select.scss");

var customSelectElements = document.querySelectorAll('.custom-select');
var handleCustomSelectElementFocus = function handleCustomSelectElementFocus(customSelectWrapperElement) {
  customSelectWrapperElement.classList.add('custom-select__wrapper--focused');
};
var handleCustomSelectElementBlur = function handleCustomSelectElementBlur(customSelectWrapperElement) {
  customSelectWrapperElement.classList.remove('custom-select__wrapper--focused');
};
customSelectElements.forEach(function (customSelectElement) {
  var customSelectButtonElement = customSelectElement.querySelector('.custom-select__button');
  var customSelectWrapperElement = customSelectElement.querySelector('.custom-select__wrapper');
  customSelectButtonElement.addEventListener('focus', function () {
    return handleCustomSelectElementFocus(customSelectWrapperElement);
  });
});
customSelectElements.forEach(function (customSelectElement) {
  var customSelectButtonElement = customSelectElement.querySelector('.custom-select__button');
  var customSelectWrapperElement = customSelectElement.querySelector('.custom-select__wrapper');
  customSelectButtonElement.addEventListener('blur', function () {
    return handleCustomSelectElementBlur(customSelectWrapperElement);
  });
});

/***/ }),

/***/ "./src/pug/ui-kit/includes/custom-text-field/custom-text-field.js":
/*!************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/custom-text-field/custom-text-field.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_text_field_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-text-field.scss */ "./src/pug/ui-kit/includes/custom-text-field/custom-text-field.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/dropdown-guests/dropdown-guests.js":
/*!********************************************************************!*\
  !*** ./src/pug/ui-kit/includes/dropdown-guests/dropdown-guests.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_guests_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-guests.scss */ "./src/pug/ui-kit/includes/dropdown-guests/dropdown-guests.scss");

var dropdownGuestsButtons = document.querySelectorAll('.dropdown-guests__button');
var handleDropdownGuestsButtonFocus = function handleDropdownGuestsButtonFocus(dropdownGuestsInput) {
  dropdownGuestsInput.checked = true;
};
dropdownGuestsButtons.forEach(function (dropDownButton) {
  var dropdownGuestsInput = dropDownButton.closest('.dropdown-guests').querySelector('.dropdown-guests__input');
  var dropdownGuestsTextButtons = dropdownGuestsInput.closest('.dropdown-guests').querySelectorAll('.button-text');
  dropDownButton.addEventListener('focus', function () {
    return handleDropdownGuestsButtonFocus(dropdownGuestsInput);
  });
  dropdownGuestsTextButtons.forEach(function (textButton) {
    textButton.addEventListener('focus', function () {
      return handleDropdownGuestsButtonFocus(dropdownGuestsInput);
    });
  });
});

/***/ }),

/***/ "./src/pug/ui-kit/includes/dropdown/dropdown.js":
/*!******************************************************!*\
  !*** ./src/pug/ui-kit/includes/dropdown/dropdown.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.scss */ "./src/pug/ui-kit/includes/dropdown/dropdown.scss");

var dropdownButtons = document.querySelectorAll('.dropdown__button');
var handleDropdownButtonFocus = function handleDropdownButtonFocus(dropdownInput) {
  dropdownInput.checked = true;
};
dropdownButtons.forEach(function (button) {
  var dropdownInput = button.closest('.dropdown').querySelector('.dropdown__input');
  button.addEventListener('focus', function () {
    return handleDropdownButtonFocus(dropdownInput);
  });
});

/***/ }),

/***/ "./src/pug/ui-kit/includes/expandable-checkbox-list/expandable-checkbox-list.js":
/*!**************************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/expandable-checkbox-list/expandable-checkbox-list.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _expandable_checkbox_list_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expandable-checkbox-list.scss */ "./src/pug/ui-kit/includes/expandable-checkbox-list/expandable-checkbox-list.scss");

var expandableCheckboxLists = document.querySelectorAll('.expandable-checkbox-list');
var handleExpandableCheckboxListInputFocus = function handleExpandableCheckboxListInputFocus(showHideListInput) {
  showHideListInput.checked = true;
};
expandableCheckboxLists.forEach(function (list) {
  var showHideListInput = list.querySelector('.expandable-checkbox-list__input');
  var checkboxInputs = list.querySelectorAll('.custom-checkbox__input');
  checkboxInputs.forEach(function (input) {
    input.addEventListener('focus', function () {
      return handleExpandableCheckboxListInputFocus(showHideListInput);
    });
  });
});

/***/ }),

/***/ "./src/pug/ui-kit/includes/feature-comfort/feature-comfort.js":
/*!********************************************************************!*\
  !*** ./src/pug/ui-kit/includes/feature-comfort/feature-comfort.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feature_comfort_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature-comfort.scss */ "./src/pug/ui-kit/includes/feature-comfort/feature-comfort.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/feature-convenience/feature-convenience.js":
/*!****************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/feature-convenience/feature-convenience.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feature_convenience_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature-convenience.scss */ "./src/pug/ui-kit/includes/feature-convenience/feature-convenience.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/feature-cosiness/feature-cosiness.js":
/*!**********************************************************************!*\
  !*** ./src/pug/ui-kit/includes/feature-cosiness/feature-cosiness.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feature_cosiness_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature-cosiness.scss */ "./src/pug/ui-kit/includes/feature-cosiness/feature-cosiness.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/footer-main/footer-main.js":
/*!************************************************************!*\
  !*** ./src/pug/ui-kit/includes/footer-main/footer-main.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer-main.scss */ "./src/pug/ui-kit/includes/footer-main/footer-main.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/footer-mobile/footer-mobile.js":
/*!****************************************************************!*\
  !*** ./src/pug/ui-kit/includes/footer-mobile/footer-mobile.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_mobile_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer-mobile.scss */ "./src/pug/ui-kit/includes/footer-mobile/footer-mobile.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/header-main/header-main.js":
/*!************************************************************!*\
  !*** ./src/pug/ui-kit/includes/header-main/header-main.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-main.scss */ "./src/pug/ui-kit/includes/header-main/header-main.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/header/header.js":
/*!**************************************************!*\
  !*** ./src/pug/ui-kit/includes/header/header.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.scss */ "./src/pug/ui-kit/includes/header/header.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/label-primary/label-primary.js":
/*!****************************************************************!*\
  !*** ./src/pug/ui-kit/includes/label-primary/label-primary.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _label_primary_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label-primary.scss */ "./src/pug/ui-kit/includes/label-primary/label-primary.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/like-button/like-button.js":
/*!************************************************************!*\
  !*** ./src/pug/ui-kit/includes/like-button/like-button.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _like_button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./like-button.scss */ "./src/pug/ui-kit/includes/like-button/like-button.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/main-page-slider/main-page-slider.js":
/*!**********************************************************************!*\
  !*** ./src/pug/ui-kit/includes/main-page-slider/main-page-slider.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_page_slider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page-slider.scss */ "./src/pug/ui-kit/includes/main-page-slider/main-page-slider.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/main-title/main-title.js":
/*!**********************************************************!*\
  !*** ./src/pug/ui-kit/includes/main-title/main-title.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_title_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-title.scss */ "./src/pug/ui-kit/includes/main-title/main-title.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/pagination/pagination.js":
/*!**********************************************************!*\
  !*** ./src/pug/ui-kit/includes/pagination/pagination.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagination_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.scss */ "./src/pug/ui-kit/includes/pagination/pagination.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/range-slider/range-slider.js":
/*!**************************************************************!*\
  !*** ./src/pug/ui-kit/includes/range-slider/range-slider.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.mjs");
/* harmony import */ var _range_slider_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range-slider.scss */ "./src/pug/ui-kit/includes/range-slider/range-slider.scss");


var sliderContainerELement = document.querySelector('.range-slider__slider');
if (sliderContainerELement) {
  nouislider__WEBPACK_IMPORTED_MODULE_0__["default"].create(sliderContainerELement, {
    start: [33, 66],
    connect: true,
    range: {
      'min': 0,
      'max': 100
    }
  });
}

/***/ }),

/***/ "./src/pug/ui-kit/includes/rating/rating.js":
/*!**************************************************!*\
  !*** ./src/pug/ui-kit/includes/rating/rating.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rating_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rating.scss */ "./src/pug/ui-kit/includes/rating/rating.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/registration-sign-in-slider/registration-sign-in-slider.js":
/*!********************************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/registration-sign-in-slider/registration-sign-in-slider.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registration_sign_in_slider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration-sign-in-slider.scss */ "./src/pug/ui-kit/includes/registration-sign-in-slider/registration-sign-in-slider.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/review/review.js":
/*!**************************************************!*\
  !*** ./src/pug/ui-kit/includes/review/review.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _review_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review.scss */ "./src/pug/ui-kit/includes/review/review.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/rich-checkbox-button-group/rich-checkbox-button-group.js":
/*!******************************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/rich-checkbox-button-group/rich-checkbox-button-group.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rich_checkbox_button_rich_checkbox_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rich-checkbox-button/rich-checkbox-button */ "./src/pug/ui-kit/includes/rich-checkbox-button/rich-checkbox-button.js");
/* harmony import */ var _rich_checkbox_button_group_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rich-checkbox-button-group.scss */ "./src/pug/ui-kit/includes/rich-checkbox-button-group/rich-checkbox-button-group.scss");



/***/ }),

/***/ "./src/pug/ui-kit/includes/rich-checkbox-button/rich-checkbox-button.js":
/*!******************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/rich-checkbox-button/rich-checkbox-button.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rich_checkbox_button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rich-checkbox-button.scss */ "./src/pug/ui-kit/includes/rich-checkbox-button/rich-checkbox-button.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/slider/slider.js":
/*!**************************************************!*\
  !*** ./src/pug/ui-kit/includes/slider/slider.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.scss */ "./src/pug/ui-kit/includes/slider/slider.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/subscription-text-field/subscription-text-field.js":
/*!************************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/subscription-text-field/subscription-text-field.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subscription_text_field_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscription-text-field.scss */ "./src/pug/ui-kit/includes/subscription-text-field/subscription-text-field.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/toggle/toggle.js":
/*!**************************************************!*\
  !*** ./src/pug/ui-kit/includes/toggle/toggle.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle.scss */ "./src/pug/ui-kit/includes/toggle/toggle.scss");


/***/ }),

/***/ "./src/pug/ui-kit/includes/types-item/types-item.js":
/*!**********************************************************!*\
  !*** ./src/pug/ui-kit/includes/types-item/types-item.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_item_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types-item.scss */ "./src/pug/ui-kit/includes/types-item/types-item.scss");


/***/ }),

/***/ "./node_modules/smg-date-picker/dist/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/smg-date-picker/dist/style.css ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/fonts/fonts.css":
/*!*****************************!*\
  !*** ./src/fonts/fonts.css ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/pages/landing-page/landing-page.scss":
/*!******************************************************!*\
  !*** ./src/pug/pages/landing-page/landing-page.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/pages/registration/registration.scss":
/*!******************************************************!*\
  !*** ./src/pug/pages/registration/registration.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/pages/room-details/room-details.scss":
/*!******************************************************!*\
  !*** ./src/pug/pages/room-details/room-details.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/pages/search-room/search-room.scss":
/*!****************************************************!*\
  !*** ./src/pug/pages/search-room/search-room.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/pages/sign-in/sign-in.scss":
/*!********************************************!*\
  !*** ./src/pug/pages/sign-in/sign-in.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/cards/booking-card/booking-card.scss":
/*!*************************************************************!*\
  !*** ./src/pug/ui-kit/cards/booking-card/booking-card.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/cards/calendar/calendar.scss":
/*!*****************************************************!*\
  !*** ./src/pug/ui-kit/cards/calendar/calendar.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/cards/log-in-card/log-in-card.scss":
/*!***********************************************************!*\
  !*** ./src/pug/ui-kit/cards/log-in-card/log-in-card.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/cards/register-card/register-card.scss":
/*!***************************************************************!*\
  !*** ./src/pug/ui-kit/cards/register-card/register-card.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/cards/room-card/room-card.scss":
/*!*******************************************************!*\
  !*** ./src/pug/ui-kit/cards/room-card/room-card.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/cards/search-card/search-card.scss":
/*!***********************************************************!*\
  !*** ./src/pug/ui-kit/cards/search-card/search-card.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/bullet-list/bullet-list.scss":
/*!**************************************************************!*\
  !*** ./src/pug/ui-kit/includes/bullet-list/bullet-list.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/button-contained/button-contained.scss":
/*!************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/button-contained/button-contained.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/button-icon-contained/button-icon-contained.scss":
/*!**********************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/button-icon-contained/button-icon-contained.scss ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/button-outlined/button-outlined.scss":
/*!**********************************************************************!*\
  !*** ./src/pug/ui-kit/includes/button-outlined/button-outlined.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/button-text/button-text.scss":
/*!**************************************************************!*\
  !*** ./src/pug/ui-kit/includes/button-text/button-text.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/chart/chart.scss":
/*!**************************************************!*\
  !*** ./src/pug/ui-kit/includes/chart/chart.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/colors-item/colors-item.scss":
/*!**************************************************************!*\
  !*** ./src/pug/ui-kit/includes/colors-item/colors-item.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/custom-checkbox/custom-checkbox.scss":
/*!**********************************************************************!*\
  !*** ./src/pug/ui-kit/includes/custom-checkbox/custom-checkbox.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/custom-radio/custom-radio.scss":
/*!****************************************************************!*\
  !*** ./src/pug/ui-kit/includes/custom-radio/custom-radio.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/custom-select/custom-select.scss":
/*!******************************************************************!*\
  !*** ./src/pug/ui-kit/includes/custom-select/custom-select.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/custom-text-field/custom-text-field.scss":
/*!**************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/custom-text-field/custom-text-field.scss ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/dropdown-guests/dropdown-guests.scss":
/*!**********************************************************************!*\
  !*** ./src/pug/ui-kit/includes/dropdown-guests/dropdown-guests.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/dropdown/dropdown.scss":
/*!********************************************************!*\
  !*** ./src/pug/ui-kit/includes/dropdown/dropdown.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/expandable-checkbox-list/expandable-checkbox-list.scss":
/*!****************************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/expandable-checkbox-list/expandable-checkbox-list.scss ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/feature-comfort/feature-comfort.scss":
/*!**********************************************************************!*\
  !*** ./src/pug/ui-kit/includes/feature-comfort/feature-comfort.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/feature-convenience/feature-convenience.scss":
/*!******************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/feature-convenience/feature-convenience.scss ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/feature-cosiness/feature-cosiness.scss":
/*!************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/feature-cosiness/feature-cosiness.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/footer-main/footer-main.scss":
/*!**************************************************************!*\
  !*** ./src/pug/ui-kit/includes/footer-main/footer-main.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/footer-mobile/footer-mobile.scss":
/*!******************************************************************!*\
  !*** ./src/pug/ui-kit/includes/footer-mobile/footer-mobile.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/header-main/header-main.scss":
/*!**************************************************************!*\
  !*** ./src/pug/ui-kit/includes/header-main/header-main.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/header/header.scss":
/*!****************************************************!*\
  !*** ./src/pug/ui-kit/includes/header/header.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/label-primary/label-primary.scss":
/*!******************************************************************!*\
  !*** ./src/pug/ui-kit/includes/label-primary/label-primary.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/like-button/like-button.scss":
/*!**************************************************************!*\
  !*** ./src/pug/ui-kit/includes/like-button/like-button.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/main-page-slider/main-page-slider.scss":
/*!************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/main-page-slider/main-page-slider.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/main-title/main-title.scss":
/*!************************************************************!*\
  !*** ./src/pug/ui-kit/includes/main-title/main-title.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/pagination/pagination.scss":
/*!************************************************************!*\
  !*** ./src/pug/ui-kit/includes/pagination/pagination.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/range-slider/range-slider.scss":
/*!****************************************************************!*\
  !*** ./src/pug/ui-kit/includes/range-slider/range-slider.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/rating/rating.scss":
/*!****************************************************!*\
  !*** ./src/pug/ui-kit/includes/rating/rating.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/registration-sign-in-slider/registration-sign-in-slider.scss":
/*!**********************************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/registration-sign-in-slider/registration-sign-in-slider.scss ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/review/review.scss":
/*!****************************************************!*\
  !*** ./src/pug/ui-kit/includes/review/review.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/rich-checkbox-button-group/rich-checkbox-button-group.scss":
/*!********************************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/rich-checkbox-button-group/rich-checkbox-button-group.scss ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/rich-checkbox-button/rich-checkbox-button.scss":
/*!********************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/rich-checkbox-button/rich-checkbox-button.scss ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/slider/slider.scss":
/*!****************************************************!*\
  !*** ./src/pug/ui-kit/includes/slider/slider.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/subscription-text-field/subscription-text-field.scss":
/*!**************************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/subscription-text-field/subscription-text-field.scss ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/toggle/toggle.scss":
/*!****************************************************!*\
  !*** ./src/pug/ui-kit/includes/toggle/toggle.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pug/ui-kit/includes/types-item/types-item.scss":
/*!************************************************************!*\
  !*** ./src/pug/ui-kit/includes/types-item/types-item.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/smg-date-picker/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/smg-date-picker/dist/index.js ***!
  \****************************************************/
/***/ (function(module) {

!function(e,t){if(true)module.exports=t();else { var n, a; }}(self,(()=>(()=>{"use strict";var e={613:(e,t,a)=>{a.r(t)},750:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CalendarModel=void 0;const n=a(813);t.CalendarModel=class{constructor(e=(new Date).getMonth(),t=(new Date).getFullYear()){this.calendarData=[],this.getCalendarData=()=>this.calendarData,this.getHeaderData=()=>this.headerData,this.createData=(e,t)=>{const a=(0,n.createCalendarData)(e,t);this.calendarData=a,this.headerData={currentMonth:e,currentYear:t}},this.createData(e,t)}}},638:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CalendarPresenter=void 0;const n=a(473),r=a(277),i=a(750),d=a(870),s=a(348),l=a(382);t.CalendarPresenter=class{constructor(e=null,t=null,a=null,c=n.CalendarMode.Single,o=r.Localization.Eng,u){this.anchorElement=e,this.firstOutputElement=t,this.secondOutputElement=a,this.mode=c,this.localization=o,this.callback=u,this.init=()=>{},this.handleAnchorElementClick=e=>{e.classList.toggle("opened")},this.create=()=>{if(this.anchorElement){const e=new i.CalendarModel,t=e.getCalendarData(),a=e.getHeaderData();this.anchorElement.classList.add("smg-date-picker-anchor");const n={anchorElementDateValue:this.anchorElement.getAttribute("data-date"),anchorElementStartDateValue:this.anchorElement.getAttribute("data-start-date"),anchorElementFinishDateValue:this.anchorElement.getAttribute("data-finish-date")},r=new d.CalendarView(this.localization,t,a,this.anchorElement,this.firstOutputElement,this.secondOutputElement,this.callback,this.mode).build(n);this.anchorElement.addEventListener("click",(()=>this.handleAnchorElementClick(r))),document.addEventListener("click",(e=>(0,l.handleOutsideDatePickerClick)(e,this.anchorElement,r))),document.addEventListener("keydown",(e=>(0,s.handleDocumentKeydown)(e,r))),this.anchorElement.after(r)}}}}},870:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CalendarView=void 0;const n=a(558),r=a(383),i=a(759),d=a(769),s=a(281),l=a(322),c=a(929),o=a(475),u=a(637),m=a(950),h=a(302),p=a(496),g=a(473);t.CalendarView=class{constructor(e,t,a,_=null,y=null,k=null,b,E){this.localization=e,this.calendarData=t,this.headerData=a,this.anchorElement=_,this.firstOutputElement=y,this.secondOutputElement=k,this.callback=b,this.mode=E,this.headerElement=null,this.calendarControls=null,this.datePickerContainerElement=null,this.datePickerElement=null,this.firstOutputElementInitialValue=null,this.secondOutputElementInitialValue=null,this.createHeader=()=>(0,o.buildHeader)(this.localization,this.headerData),this.createWeekdays=()=>(0,u.buildWeekdayNames)(this.localization),this.createDays=e=>(0,s.buildCalendarDays)(this.calendarData,e),this.createControls=()=>(0,l.buildControls)(this.localization),this.createCalendarContainer=()=>(0,d.buildCalendarContainer)(),this.createDatePicker=()=>(0,c.buildDatePicker)(),this.build=e=>{this.headerElement=this.createHeader();const t=this.createWeekdays(),a=this.createDays(e),n=a.querySelectorAll(".smg-date-picker__day");switch(this.calendarControls=this.createControls(),this.datePickerContainerElement=this.createCalendarContainer(),this.datePickerElement=this.createDatePicker(),this.datePickerContainerElement.append(this.headerElement),this.datePickerContainerElement.append(t),this.datePickerContainerElement.append(a),this.datePickerContainerElement.append(this.calendarControls),this.datePickerElement.append(this.datePickerContainerElement),this.setNextMonthButtonClickHandler(),this.setPrevMonthButtonClickHandler(),this.setClearButtonClickHandler(this.firstOutputElementInitialValue,this.secondOutputElementInitialValue),this.setApplyButtonClickHandler(),this.mode){case g.CalendarMode.Single:this.setDayElementClickHandler(n);break;case g.CalendarMode.Range:this.setRangeModeDayElementClickHandler(n)}return this.datePickerElement},this.setNextMonthButtonClickHandler=()=>{if(this.anchorElement&&this.headerElement&&this.datePickerContainerElement){const e=this.headerElement.querySelector(".smg-date-picker__right-arrow"),t=this.mode===g.CalendarMode.Single?this.setDayElementClickHandler:this.setRangeModeDayElementClickHandler;null==e||e.addEventListener("click",(()=>(0,r.handleNextMonthButtonClick)(this.anchorElement,this.headerElement,this.datePickerContainerElement,this.localization,t)))}},this.setPrevMonthButtonClickHandler=()=>{if(this.headerElement&&this.datePickerContainerElement){const e=this.headerElement.querySelector(".smg-date-picker__left-arrow"),t=this.mode===g.CalendarMode.Single?this.setDayElementClickHandler:this.setRangeModeDayElementClickHandler;null==e||e.addEventListener("click",(()=>(0,i.handlePrevMonthButtonClick)(this.anchorElement,this.headerElement,this.datePickerContainerElement,this.localization,t)))}},this.setDayElementClickHandler=e=>{this.anchorElement&&this.firstOutputElement&&e.forEach((t=>{t.addEventListener("click",(()=>(0,n.handleDayElementClick)(this.anchorElement,this.firstOutputElement,t,e)))}))},this.setRangeModeDayElementClickHandler=e=>{this.anchorElement&&this.firstOutputElement&&e.forEach((t=>{t.addEventListener("click",(()=>(0,p.handleRangeModeDayElementClick)(this.anchorElement,this.firstOutputElement,this.secondOutputElement,t,e)))}))},this.setClearButtonClickHandler=(e,t)=>{if(this.anchorElement&&this.firstOutputElement&&this.calendarControls){const a=this.calendarControls.querySelector(".smg-date-picker__clear-button");null==a||a.addEventListener("click",(()=>(0,m.handleClearButtonClick)(this.anchorElement,this.firstOutputElement,this.secondOutputElement,e,t)))}},this.setApplyButtonClickHandler=()=>{if(this.anchorElement&&this.firstOutputElement&&this.calendarControls){const e=this.calendarControls.querySelector(".smg-date-picker__apply-button");null==e||e.addEventListener("click",(()=>(0,h.handleApplyButtonClick)(this.anchorElement,this.datePickerElement,this.callback)))}},this.firstOutputElement&&(this.firstOutputElementInitialValue=null==y?void 0:y.textContent),this.secondOutputElement&&(this.secondOutputElementInitialValue=null==k?void 0:k.textContent)}}},722:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.buildDatePicker=t.buildCalendarContainer=t.buildControls=t.buildCalendarDays=t.buildWeekdayNames=t.buildHeader=void 0;const n=a(594);t.buildHeader=(e,t)=>{const{currentMonth:a,currentYear:r}=t,i=document.createElement("div");i.classList.add("smg-date-picker__header");const d=document.createElement("div");d.classList.add("smg-date-picker__left-arrow");const s=document.createElement("div");s.classList.add("smg-date-picker__title"),s.textContent=`${Object.values(n.Lang[e].months)[a]} ${r}`,s.setAttribute("data-month",a.toString()),s.setAttribute("data-year",r.toString());const l=document.createElement("div");return l.classList.add("smg-date-picker__right-arrow"),i.append(d),i.append(s),i.append(l),i},t.buildWeekdayNames=e=>{const t=document.createElement("div");return t.classList.add("smg-date-picker__weekday-names"),Object.values(n.Lang[e].weekdays).forEach((e=>{const a=document.createElement("div"),n=document.createElement("span");a.classList.add("smg-date-picker__weekday"),n.classList.add("smg-date-picker__weekday-name"),n.textContent=e,a.append(n),t.append(a)})),t},t.buildCalendarDays=(e,t)=>{const{anchorElementDateValue:a,anchorElementStartDateValue:n,anchorElementFinishDateValue:r}=t,i=n&&r,d=document.createElement("div");return d.classList.add("smg-date-picker__days"),e.forEach((e=>{const t=i&&new Date(e.date)>new Date(n)&&new Date(e.date)<new Date(r),s=new Date(e.date)>new Date,l=document.createElement("div"),c=document.createElement("span");l.classList.add("smg-date-picker__day"),l.setAttribute("data-date",e.date),e.isOutsideSelectedPeriod&&l.classList.add("smg-date-picker__day--outside-period"),e.isCurrentDay&&l.classList.add("smg-date-picker__day--current"),e.date===a&&l.classList.add("smg-date-picker__day--start"),e.date===n&&l.classList.add("smg-date-picker__day--start"),e.date===r&&l.classList.add("smg-date-picker__day--finish"),t&&l.classList.add("smg-date-picker__day--within-the-range"),s&&l.classList.add("smg-date-picker__day--after-today"),c.classList.add("smg-date-picker__day-number"),c.textContent=e.value.toString(),l.append(c),d.append(l)})),d};const r=(e,t)=>{const a=document.createElement("div");a.classList.add("smg-date-picker__button-text"),t&&a.classList.add(t);const n=document.createElement("button");return n.textContent=e,a.append(n),a};t.buildControls=()=>{const e=document.createElement("div");e.classList.add("smg-date-picker__controls");const t=r("очистить","smg-date-picker__clear-button"),a=r("применить","smg-date-picker__apply-button");return e.append(t),e.append(a),e},t.buildCalendarContainer=()=>{const e=document.createElement("div");return e.classList.add("smg-date-picker__container"),e},t.buildDatePicker=()=>{const e=document.createElement("div");return e.classList.add("smg-date-picker"),e}},813:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createCalendarData=void 0,t.createCalendarData=(e,t)=>{const a=null!=e?e:(new Date).getMonth(),n=null!=t?t:(new Date).getFullYear(),r=new Date(n,a),i=r.getDay()||7,d=new Date(Number(r)-864e5).getDate(),s=d-i+1,l=new Date(n,a+1),c=new Date(Number(l)-864e5).getDate(),o=Array.from({length:d}).map(((e,t)=>({value:t+1,date:new Date(n,a-1,t+1).toISOString(),isOutsideSelectedPeriod:!0}))).slice(s),u=Array.from({length:c}).map(((e,t)=>{const r=t+1,i=r===(new Date).getDate()&&a===(new Date).getMonth()&&n===(new Date).getFullYear();return{value:r,date:new Date(n,a,r).toISOString(),isOutsideSelectedPeriod:!1,isCurrentDay:i}})),m=new Date(Number(new Date(n,a+2))-86400).getDate(),h=Array.from({length:m}).map(((e,t)=>({value:t+1,date:new Date(n,a+1,t+1).toISOString(),isOutsideSelectedPeriod:!0}))),p=[...o,...u];if(0==p.length%7)return[...p,...h.slice(0,7)];{let e=p.length;for(;e%7!=0;)e++;const t=e-p.length;return[...p,...h.slice(0,t)]}}},78:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createSMGDatePicker=void 0;const n=a(722),r=a(473),i=a(813),d=a(594),s=a(277);a(613),t.createSMGDatePicker=({anchorElement:e,firstOutputElement:t,secondOutputElement:a,mode:l=r.CalendarMode.Single,localization:c=s.Localization.Eng,callback:o})=>{const u={currentMonth:(new Date).getMonth(),currentYear:(new Date).getFullYear()},m=(0,i.createCalendarData)();e.classList.add("smg-date-picker-anchor");const h=(0,n.buildDatePicker)(),p=(0,n.buildCalendarContainer)(),g=(0,n.buildHeader)(c,u),_=(0,n.buildWeekdayNames)(c),y={anchorElementDateValue:e.getAttribute("data-date"),anchorElementStartDateValue:e.getAttribute("data-start-date"),anchorElementFinishDateValue:e.getAttribute("data-finish-date")},k=(0,n.buildCalendarDays)(m,y),b=k.querySelectorAll(".smg-date-picker__day"),E=(0,n.buildControls)(),D=E.querySelector(".smg-date-picker__clear-button"),v=E.querySelector(".smg-date-picker__apply-button");p.append(g),p.append(_),p.append(k),p.append(E),h.append(p),e.after(h);const C=g.querySelector(".smg-date-picker__right-arrow"),f=g.querySelector(".smg-date-picker__left-arrow"),L=a=>{a.forEach((n=>{n.addEventListener("click",(()=>((a,n)=>{const r=a.getAttribute("data-date");new Date(r)<new Date||(n.forEach((e=>{e.classList.remove("smg-date-picker__day--start")})),a.classList.add("smg-date-picker__day--start"),t.textContent=new Date(r).toLocaleDateString(),e.setAttribute("data-date",r))})(n,a)))}))},A=n=>{n.forEach((r=>{r.addEventListener("click",(()=>((n,r)=>{const i=n.getAttribute("data-date");if(!(new Date(i)<new Date)){const d=e.getAttribute("data-start-date"),s=e.getAttribute("data-finish-date"),l=d&&!s,c=d&&s;if(!d&&!s&&(n.classList.add("smg-date-picker__day--start"),t.textContent=new Date(i).toLocaleDateString(),e.setAttribute("data-start-date",i)),l)if(new Date(i)<new Date(d))r.forEach((e=>{e.classList.remove("smg-date-picker__day--start")})),n.classList.add("smg-date-picker__day--start"),t.textContent=new Date(i).toLocaleDateString(),e.setAttribute("data-start-date",i);else{const s=Array.from(r).findIndex((e=>e.classList.contains("smg-date-picker__day--start"))),l=Array.from(r).findIndex((e=>e===n));r.forEach(((e,t)=>{t>s&&t<l&&e.classList.add("smg-date-picker__day--within-the-range")})),n.classList.add("smg-date-picker__day--finish"),a?(t.textContent=new Date(d).toLocaleDateString(),a.textContent=new Date(i).toLocaleDateString()):t.textContent=`${new Date(d).toLocaleDateString()} - ${new Date(i).toLocaleDateString()}`,e.setAttribute("data-finish-date",i)}c&&(r.forEach((e=>{e.classList.remove("smg-date-picker__day--start"),e.classList.remove("smg-date-picker__day--finish"),e.classList.remove("smg-date-picker__day--within-the-range")})),n.classList.add("smg-date-picker__day--start"),t.textContent=new Date(i).toLocaleDateString(),e.setAttribute("data-start-date",i),e.removeAttribute("data-finish-date"))}})(r,n)))}))};switch(e.addEventListener("click",(()=>{h.classList.toggle("opened")})),document.addEventListener("click",(t=>(t=>{const a=t.composedPath().includes(h),n=t.composedPath().includes(e);a||n||h.classList.remove("opened")})(t))),document.addEventListener("keydown",(e=>(e=>{"Escape"===e.key&&h.classList.remove("opened")})(e))),null==C||C.addEventListener("click",(()=>{const t=g.querySelector(".smg-date-picker__title"),a=Number(null==t?void 0:t.getAttribute("data-month")),s=11===a?0:a+1,o=Number(null==t?void 0:t.getAttribute("data-year")),u=11===a?o+1:o;t&&(t.setAttribute("data-month",`${s}`),t.setAttribute("data-year",`${u}`),t.textContent=`${Object.values(d.Lang[c].months)[s]} ${u}`);const m=(0,i.createCalendarData)(s,u),h={anchorElementDateValue:e.getAttribute("data-date"),anchorElementStartDateValue:e.getAttribute("data-start-date"),anchorElementFinishDateValue:e.getAttribute("data-finish-date")},_=(0,n.buildCalendarDays)(m,h),y=_.querySelectorAll(".smg-date-picker__day");switch(l){case r.CalendarMode.Single:L(y);break;case r.CalendarMode.Range:A(y)}const k=p.querySelector(".smg-date-picker__days");null==k||k.replaceWith(_)})),null==f||f.addEventListener("click",(()=>{const t=g.querySelector(".smg-date-picker__title"),a=Number(null==t?void 0:t.getAttribute("data-month")),s=0===a?11:a-1,o=Number(null==t?void 0:t.getAttribute("data-year")),u=0===a?o-1:o;t&&(null==t||t.setAttribute("data-month",`${s}`),null==t||t.setAttribute("data-year",`${u}`),t.textContent=`${Object.values(d.Lang[c].months)[s]} ${u}`);const m=(0,i.createCalendarData)(s,u),h={anchorElementDateValue:e.getAttribute("data-date"),anchorElementStartDateValue:e.getAttribute("data-start-date"),anchorElementFinishDateValue:e.getAttribute("data-finish-date")},_=(0,n.buildCalendarDays)(m,h),y=_.querySelectorAll(".smg-date-picker__day");switch(l){case r.CalendarMode.Single:L(y);break;case r.CalendarMode.Range:A(y)}const k=p.querySelector(".smg-date-picker__days");null==k||k.replaceWith(_)})),null==D||D.addEventListener("click",(()=>{t.textContent="",a&&(a.textContent=""),e.removeAttribute("data-date"),e.removeAttribute("data-start-date"),e.removeAttribute("data-finish-date"),document.querySelectorAll(".smg-date-picker__day").forEach((e=>{e.classList.remove("smg-date-picker__day--start"),e.classList.remove("smg-date-picker__day--finish"),e.classList.remove("smg-date-picker__day--within-the-range")}))})),null==v||v.addEventListener("click",(()=>{const t=e.getAttribute("data-date"),a=e.getAttribute("data-start-date"),n=e.getAttribute("data-finish-date");o&&a&&n&&o(a,n),o&&t&&o(t),(t||a&&n)&&h.classList.toggle("opened")})),l){case r.CalendarMode.Single:L(b);break;case r.CalendarMode.Range:A(b)}}},473:(e,t)=>{var a;Object.defineProperty(t,"__esModule",{value:!0}),t.CalendarMode=void 0,function(e){e.Single="Single",e.Range="Range"}(a||(t.CalendarMode=a={}))},902:(e,t)=>{var a;Object.defineProperty(t,"__esModule",{value:!0}),t.EnglishControls=void 0,function(e){e.Clear="Clear",e.Apply="Apply"}(a||(t.EnglishControls=a={}))},68:(e,t)=>{var a;Object.defineProperty(t,"__esModule",{value:!0}),t.EnglishMonths=void 0,function(e){e.January="January",e.February="February",e.March="March",e.April="April",e.May="May",e.June="June",e.July="July",e.August="August",e.September="September",e.October="October",e.November="November",e.December="December"}(a||(t.EnglishMonths=a={}))},608:(e,t)=>{var a;Object.defineProperty(t,"__esModule",{value:!0}),t.EnglishWeekdays=void 0,function(e){e.Mon="Mon",e.Tue="Tue",e.Wed="Wed",e.Thu="Thu",e.Fri="Fri",e.Sat="Sat",e.Sun="Sun"}(a||(t.EnglishWeekdays=a={}))},277:(e,t)=>{var a;Object.defineProperty(t,"__esModule",{value:!0}),t.Localization=void 0,function(e){e.Eng="Eng",e.Ru="Ru"}(a||(t.Localization=a={}))},594:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Lang=void 0;const n=a(277),r=a(902),i=a(68),d=a(608),s=a(3),l=a(336),c=a(450);t.Lang={[n.Localization.Eng]:{months:i.EnglishMonths,weekdays:d.EnglishWeekdays,controls:r.EnglishControls},[n.Localization.Ru]:{months:l.RussianMonths,weekdays:c.RussianWeekdays,controls:s.RussianControls}}},3:(e,t)=>{var a;Object.defineProperty(t,"__esModule",{value:!0}),t.RussianControls=void 0,function(e){e.Clear="Очистить",e.Apply="Применить"}(a||(t.RussianControls=a={}))},336:(e,t)=>{var a;Object.defineProperty(t,"__esModule",{value:!0}),t.RussianMonths=void 0,function(e){e.January="Январь",e.February="Февраль",e.March="Март",e.April="Апрель",e.May="Май",e.June="Июнь",e.July="Июль",e.August="Август",e.September="Сентябрь",e.October="Октябрь",e.November="Ноябрь",e.December="Декабрь"}(a||(t.RussianMonths=a={}))},450:(e,t)=>{var a;Object.defineProperty(t,"__esModule",{value:!0}),t.RussianWeekdays=void 0,function(e){e.Mon="Пн",e.Tue="Вт",e.Wed="Ср",e.Thu="Чт",e.Fri="Пт",e.Sat="Сб",e.Sun="Вс"}(a||(t.RussianWeekdays=a={}))},302:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.handleApplyButtonClick=void 0,t.handleApplyButtonClick=(e,t,a)=>{const n=e.getAttribute("data-date"),r=e.getAttribute("data-start-date"),i=e.getAttribute("data-finish-date");a&&r&&i&&a(r,i),a&&n&&a(n),(n||r&&i)&&t.classList.toggle("opened")}},950:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.handleClearButtonClick=void 0,t.handleClearButtonClick=(e,t,a,n,r)=>{t&&n&&(t.textContent=n),a&&r&&(a.textContent=r),e&&(e.removeAttribute("data-date"),e.removeAttribute("data-start-date"),e.removeAttribute("data-finish-date")),document.querySelectorAll(".smg-date-picker__day").forEach((e=>{e.classList.remove("smg-date-picker__day--start"),e.classList.remove("smg-date-picker__day--finish"),e.classList.remove("smg-date-picker__day--within-the-range")}))}},496:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.handleRangeModeDayElementClick=void 0,t.handleRangeModeDayElementClick=(e,t,a,n,r)=>{const i=n.getAttribute("data-date");if(!(new Date(i)<new Date)){const d=e.getAttribute("data-start-date"),s=e.getAttribute("data-finish-date"),l=d&&!s,c=d&&s;if(!d&&!s&&(n.classList.add("smg-date-picker__day--start"),t.textContent=new Date(i).toLocaleDateString(),e.setAttribute("data-start-date",i)),l)if(new Date(i)<new Date(d))r.forEach((e=>{e.classList.remove("smg-date-picker__day--start")})),n.classList.add("smg-date-picker__day--start"),t.textContent=new Date(i).toLocaleDateString(),e.setAttribute("data-start-date",i);else{const s=Array.from(r).findIndex((e=>e.classList.contains("smg-date-picker__day--start"))),l=Array.from(r).findIndex((e=>e===n));r.forEach(((e,t)=>{t>s&&t<l&&e.classList.add("smg-date-picker__day--within-the-range")})),n.classList.add("smg-date-picker__day--finish"),a?(t.textContent=new Date(d).toLocaleDateString(),a.textContent=new Date(i).toLocaleDateString()):t.textContent=`${new Date(d).toLocaleDateString()} - ${new Date(i).toLocaleDateString()}`,e.setAttribute("data-finish-date",i)}c&&(r.forEach((e=>{e.classList.remove("smg-date-picker__day--start"),e.classList.remove("smg-date-picker__day--finish"),e.classList.remove("smg-date-picker__day--within-the-range")})),n.classList.add("smg-date-picker__day--start"),t.textContent=new Date(i).toLocaleDateString(),e.setAttribute("data-start-date",i),e.removeAttribute("data-finish-date"))}}},558:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.handleDayElementClick=void 0,t.handleDayElementClick=(e,t,a,n)=>{const r=a.getAttribute("data-date");new Date(r)<new Date||(n.forEach((e=>{e.classList.remove("smg-date-picker__day--start")})),a.classList.add("smg-date-picker__day--start"),t.textContent=new Date(r).toLocaleDateString(),e.setAttribute("data-date",r))}},348:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.handleDocumentKeydown=void 0,t.handleDocumentKeydown=(e,t)=>{"Escape"===e.key&&t.classList.remove("opened")}},383:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.handleNextMonthButtonClick=void 0;const n=a(813),r=a(594),i=a(281);t.handleNextMonthButtonClick=(e,t,a,d,s)=>{const l=t.querySelector(".smg-date-picker__title"),c=Number(null==l?void 0:l.getAttribute("data-month")),o=11===c?0:c+1,u=Number(null==l?void 0:l.getAttribute("data-year")),m=11===c?u+1:u;l&&(l.setAttribute("data-month",`${o}`),l.setAttribute("data-year",`${m}`),l.textContent=`${Object.values(r.Lang[d].months)[o]} ${m}`);const h=(0,n.createCalendarData)(o,m),p={anchorElementDateValue:e.getAttribute("data-date"),anchorElementStartDateValue:e.getAttribute("data-start-date"),anchorElementFinishDateValue:e.getAttribute("data-finish-date")},g=(0,i.buildCalendarDays)(h,p);s(g.querySelectorAll(".smg-date-picker__day"));const _=a.querySelector(".smg-date-picker__days");null==_||_.replaceWith(g)}},382:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.handleOutsideDatePickerClick=void 0,t.handleOutsideDatePickerClick=(e,t,a)=>{const n=e.composedPath().includes(a),r=e.composedPath().includes(t);n||r||a.classList.remove("opened")}},759:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.handlePrevMonthButtonClick=void 0;const n=a(813),r=a(594),i=a(281);t.handlePrevMonthButtonClick=(e,t,a,d,s)=>{const l=t.querySelector(".smg-date-picker__title"),c=Number(null==l?void 0:l.getAttribute("data-month")),o=0===c?11:c-1,u=Number(null==l?void 0:l.getAttribute("data-year")),m=0===c?u-1:u;l&&(null==l||l.setAttribute("data-month",`${o}`),null==l||l.setAttribute("data-year",`${m}`),l.textContent=`${Object.values(r.Lang[d].months)[o]} ${m}`);const h=(0,n.createCalendarData)(o,m),p={anchorElementDateValue:e.getAttribute("data-date"),anchorElementStartDateValue:e.getAttribute("data-start-date"),anchorElementFinishDateValue:e.getAttribute("data-finish-date")},g=(0,i.buildCalendarDays)(h,p);s(g.querySelectorAll(".smg-date-picker__day"));const _=a.querySelector(".smg-date-picker__days");null==_||_.replaceWith(g)}},743:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SMGDatePicker=void 0;const n=a(638),r=a(473),i=a(277);t.SMGDatePicker=class{constructor({anchorElement:e,firstOutputElement:t,secondOutputElement:a,mode:d,localization:s,callback:l}){this.anchorElement=null,this.firstOutputElement=null,this.secondOutputElement=null,this.mode=r.CalendarMode.Single,this.localization=i.Localization.Eng,this.callback=null,this.create=()=>{new n.CalendarPresenter(this.anchorElement,this.firstOutputElement,this.secondOutputElement,this.mode,this.localization,this.callback).create()},this.anchorElement=e,this.firstOutputElement=t,this.secondOutputElement=a,this.mode=d,this.localization=s,this.callback=l}}},769:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.buildCalendarContainer=void 0,t.buildCalendarContainer=()=>{const e=document.createElement("div");return e.classList.add("smg-date-picker__container"),e}},281:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.buildCalendarDays=void 0,t.buildCalendarDays=(e,t)=>{const{anchorElementDateValue:a,anchorElementStartDateValue:n,anchorElementFinishDateValue:r}=t,i=n&&r,d=document.createElement("div");return d.classList.add("smg-date-picker__days"),e.forEach((e=>{const t=i&&new Date(e.date)>new Date(n)&&new Date(e.date)<new Date(r),s=new Date(e.date)>new Date,l=document.createElement("button"),c=document.createElement("span");l.classList.add("smg-date-picker__day"),l.setAttribute("data-date",e.date),e.isOutsideSelectedPeriod&&l.classList.add("smg-date-picker__day--outside-period"),e.isCurrentDay&&l.classList.add("smg-date-picker__day--current"),e.date===a&&l.classList.add("smg-date-picker__day--start"),e.date===n&&l.classList.add("smg-date-picker__day--start"),e.date===r&&l.classList.add("smg-date-picker__day--finish"),t&&l.classList.add("smg-date-picker__day--within-the-range"),s?l.classList.add("smg-date-picker__day--after-today"):l.disabled=!0,c.classList.add("smg-date-picker__day-number"),c.textContent=e.value.toString(),l.append(c),d.append(l)})),d}},322:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.buildControls=void 0;const n=a(594),r=(e,t)=>{const a=document.createElement("div");a.classList.add("smg-date-picker__button-text"),t&&a.classList.add(t);const n=document.createElement("button");return n.textContent=e,a.append(n),a};t.buildControls=e=>{const t=document.createElement("div");t.classList.add("smg-date-picker__controls");const a=n.Lang[e].controls.Clear,i=n.Lang[e].controls.Apply,d=r(a,"smg-date-picker__clear-button"),s=r(i,"smg-date-picker__apply-button");return t.append(d),t.append(s),t}},929:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.buildDatePicker=void 0,t.buildDatePicker=()=>{const e=document.createElement("div");return e.classList.add("smg-date-picker"),e}},475:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.buildHeader=void 0;const n=a(594);t.buildHeader=(e,t)=>{const{currentMonth:a,currentYear:r}=t,i=document.createElement("div");i.classList.add("smg-date-picker__header");const d=document.createElement("button");d.classList.add("smg-date-picker__left-arrow");const s=document.createElement("div");s.classList.add("smg-date-picker__title"),s.textContent=`${Object.values(n.Lang[e].months)[a]} ${r}`,s.setAttribute("data-month",a.toString()),s.setAttribute("data-year",r.toString());const l=document.createElement("button");return l.classList.add("smg-date-picker__right-arrow"),i.append(d),i.append(s),i.append(l),i}},637:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.buildWeekdayNames=void 0;const n=a(594);t.buildWeekdayNames=e=>{const t=document.createElement("div");return t.classList.add("smg-date-picker__weekday-names"),Object.values(n.Lang[e].weekdays).forEach((e=>{const a=document.createElement("div"),n=document.createElement("span");a.classList.add("smg-date-picker__weekday"),n.classList.add("smg-date-picker__weekday-name"),n.textContent=e,a.append(n),t.append(a)})),t}}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.Localization=e.CalendarMode=e.createSMGDatePicker=e.SMGDatePicker=void 0;const t=a(473);Object.defineProperty(e,"CalendarMode",{enumerable:!0,get:function(){return t.CalendarMode}});const r=a(78);Object.defineProperty(e,"createSMGDatePicker",{enumerable:!0,get:function(){return r.createSMGDatePicker}});const i=a(277);Object.defineProperty(e,"Localization",{enumerable:!0,get:function(){return i.Localization}});const d=a(743);Object.defineProperty(e,"SMGDatePicker",{enumerable:!0,get:function(){return d.SMGDatePicker}})})(),n})()));

/***/ }),

/***/ "./src/pug/pages/room-details/room-details-1.jpg":
/*!*******************************************************!*\
  !*** ./src/pug/pages/room-details/room-details-1.jpg ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/room-details-1.jpg";

/***/ }),

/***/ "./src/pug/pages/room-details/room-details-2.jpg":
/*!*******************************************************!*\
  !*** ./src/pug/pages/room-details/room-details-2.jpg ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/room-details-2.jpg";

/***/ }),

/***/ "./src/pug/pages/room-details/room-details-3.jpg":
/*!*******************************************************!*\
  !*** ./src/pug/pages/room-details/room-details-3.jpg ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/room-details-3.jpg";

/***/ }),

/***/ "./src/pug/ui-kit/includes/main-page-slider/landing-bg-1.jpg":
/*!*******************************************************************!*\
  !*** ./src/pug/ui-kit/includes/main-page-slider/landing-bg-1.jpg ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/landing-bg-1.jpg";

/***/ }),

/***/ "./src/pug/ui-kit/includes/main-page-slider/landing-bg-2.jpg":
/*!*******************************************************************!*\
  !*** ./src/pug/ui-kit/includes/main-page-slider/landing-bg-2.jpg ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/landing-bg-2.jpg";

/***/ }),

/***/ "./src/pug/ui-kit/includes/main-page-slider/landing-bg-3.jpg":
/*!*******************************************************************!*\
  !*** ./src/pug/ui-kit/includes/main-page-slider/landing-bg-3.jpg ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/landing-bg-3.jpg";

/***/ }),

/***/ "./src/pug/ui-kit/includes/registration-sign-in-slider/reg-sign-in-1.jpg":
/*!*******************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/registration-sign-in-slider/reg-sign-in-1.jpg ***!
  \*******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/reg-sign-in-1.jpg";

/***/ }),

/***/ "./src/pug/ui-kit/includes/registration-sign-in-slider/reg-sign-in-2.jpg":
/*!*******************************************************************************!*\
  !*** ./src/pug/ui-kit/includes/registration-sign-in-slider/reg-sign-in-2.jpg ***!
  \*******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/reg-sign-in-2.jpg";

/***/ }),

/***/ "./src/pug/ui-kit/includes/review/image.jpg":
/*!**************************************************!*\
  !*** ./src/pug/ui-kit/includes/review/image.jpg ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/image.jpg";

/***/ }),

/***/ "./src/pug/ui-kit/includes/slider/1.jpg":
/*!**********************************************!*\
  !*** ./src/pug/ui-kit/includes/slider/1.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/1.jpg";

/***/ }),

/***/ "./src/pug/ui-kit/includes/slider/10.jpg":
/*!***********************************************!*\
  !*** ./src/pug/ui-kit/includes/slider/10.jpg ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/10.jpg";

/***/ }),

/***/ "./src/pug/ui-kit/includes/slider/11.jpg":
/*!***********************************************!*\
  !*** ./src/pug/ui-kit/includes/slider/11.jpg ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/11.jpg";

/***/ }),

/***/ "./src/pug/ui-kit/includes/slider/12.jpg":
/*!***********************************************!*\
  !*** ./src/pug/ui-kit/includes/slider/12.jpg ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/12.jpg";

/***/ }),

/***/ "./src/pug/ui-kit/includes/slider/2.jpg":
/*!**********************************************!*\
  !*** ./src/pug/ui-kit/includes/slider/2.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/2.jpg";

/***/ }),

/***/ "./src/pug/ui-kit/includes/slider/3.jpg":
/*!**********************************************!*\
  !*** ./src/pug/ui-kit/includes/slider/3.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/3.jpg";

/***/ }),

/***/ "./src/pug/ui-kit/includes/slider/4.jpg":
/*!**********************************************!*\
  !*** ./src/pug/ui-kit/includes/slider/4.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/4.jpg";

/***/ }),

/***/ "./src/pug/ui-kit/includes/slider/5.jpg":
/*!**********************************************!*\
  !*** ./src/pug/ui-kit/includes/slider/5.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/5.jpg";

/***/ }),

/***/ "./src/pug/ui-kit/includes/slider/6.jpg":
/*!**********************************************!*\
  !*** ./src/pug/ui-kit/includes/slider/6.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/6.jpg";

/***/ }),

/***/ "./src/pug/ui-kit/includes/slider/7.jpg":
/*!**********************************************!*\
  !*** ./src/pug/ui-kit/includes/slider/7.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/7.jpg";

/***/ }),

/***/ "./src/pug/ui-kit/includes/slider/8.jpg":
/*!**********************************************!*\
  !*** ./src/pug/ui-kit/includes/slider/8.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/8.jpg";

/***/ }),

/***/ "./src/pug/ui-kit/includes/slider/9.jpg":
/*!**********************************************!*\
  !*** ./src/pug/ui-kit/includes/slider/9.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/9.jpg";

/***/ }),

/***/ "./node_modules/nouislider/dist/nouislider.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PipsMode: function() { return /* binding */ PipsMode; },
/* harmony export */   PipsType: function() { return /* binding */ PipsType; },
/* harmony export */   create: function() { return /* binding */ initialize; },
/* harmony export */   cssClasses: function() { return /* binding */ cssClasses; }
/* harmony export */ });

var PipsMode;
(function (PipsMode) {
    PipsMode["Range"] = "range";
    PipsMode["Steps"] = "steps";
    PipsMode["Positions"] = "positions";
    PipsMode["Count"] = "count";
    PipsMode["Values"] = "values";
})(PipsMode || (PipsMode = {}));
var PipsType;
(function (PipsType) {
    PipsType[PipsType["None"] = -1] = "None";
    PipsType[PipsType["NoValue"] = 0] = "NoValue";
    PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
    PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
})(PipsType || (PipsType = {}));
//region Helper Methods
function isValidFormatter(entry) {
    return isValidPartialFormatter(entry) && typeof entry.from === "function";
}
function isValidPartialFormatter(entry) {
    // partial formatters only need a to function and not a from function
    return typeof entry === "object" && typeof entry.to === "function";
}
function removeElement(el) {
    el.parentElement.removeChild(el);
}
function isSet(value) {
    return value !== null && value !== undefined;
}
// Bindable version
function preventDefault(e) {
    e.preventDefault();
}
// Removes duplicates from an array.
function unique(array) {
    return array.filter(function (a) {
        return !this[a] ? (this[a] = true) : false;
    }, {});
}
// Round a value to the closest 'to'.
function closest(value, to) {
    return Math.round(value / to) * to;
}
// Current position of an element relative to the document.
function offset(elem, orientation) {
    var rect = elem.getBoundingClientRect();
    var doc = elem.ownerDocument;
    var docElem = doc.documentElement;
    var pageOffset = getPageOffset(doc);
    // getBoundingClientRect contains left scroll in Chrome on Android.
    // I haven't found a feature detection that proves this. Worst case
    // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
    if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
        pageOffset.x = 0;
    }
    return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
}
// Checks whether a value is numerical.
function isNumeric(a) {
    return typeof a === "number" && !isNaN(a) && isFinite(a);
}
// Sets a class and removes it after [duration] ms.
function addClassFor(element, className, duration) {
    if (duration > 0) {
        addClass(element, className);
        setTimeout(function () {
            removeClass(element, className);
        }, duration);
    }
}
// Limits a value to 0 - 100
function limit(a) {
    return Math.max(Math.min(a, 100), 0);
}
// Wraps a variable as an array, if it isn't one yet.
// Note that an input array is returned by reference!
function asArray(a) {
    return Array.isArray(a) ? a : [a];
}
// Counts decimals
function countDecimals(numStr) {
    numStr = String(numStr);
    var pieces = numStr.split(".");
    return pieces.length > 1 ? pieces[1].length : 0;
}
// http://youmightnotneedjquery.com/#add_class
function addClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
        el.classList.add(className);
    }
    else {
        el.className += " " + className;
    }
}
// http://youmightnotneedjquery.com/#remove_class
function removeClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
        el.classList.remove(className);
    }
    else {
        el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
}
// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
}
// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
function getPageOffset(doc) {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
    var x = supportPageOffset
        ? window.pageXOffset
        : isCSS1Compat
            ? doc.documentElement.scrollLeft
            : doc.body.scrollLeft;
    var y = supportPageOffset
        ? window.pageYOffset
        : isCSS1Compat
            ? doc.documentElement.scrollTop
            : doc.body.scrollTop;
    return {
        x: x,
        y: y,
    };
}
// we provide a function to compute constants instead
// of accessing window.* as soon as the module needs it
// so that we do not compute anything if not needed
function getActions() {
    // Determine the events to bind. IE11 implements pointerEvents without
    // a prefix, which breaks compatibility with the IE10 implementation.
    return window.navigator.pointerEnabled
        ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup",
        }
        : window.navigator.msPointerEnabled
            ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp",
            }
            : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend",
            };
}
// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
// Issue #785
function getSupportsPassive() {
    var supportsPassive = false;
    /* eslint-disable */
    try {
        var opts = Object.defineProperty({}, "passive", {
            get: function () {
                supportsPassive = true;
            },
        });
        // @ts-ignore
        window.addEventListener("test", null, opts);
    }
    catch (e) { }
    /* eslint-enable */
    return supportsPassive;
}
function getSupportsTouchActionNone() {
    return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
}
//endregion
//region Range Calculation
// Determine the size of a sub-range in relation to a full range.
function subRangeRatio(pa, pb) {
    return 100 / (pb - pa);
}
// (percentage) How many percent is this value of this range?
function fromPercentage(range, value, startRange) {
    return (value * 100) / (range[startRange + 1] - range[startRange]);
}
// (percentage) Where is this value on this range?
function toPercentage(range, value) {
    return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
}
// (value) How much is this percentage on this range?
function isPercentage(range, value) {
    return (value * (range[1] - range[0])) / 100 + range[0];
}
function getJ(value, arr) {
    var j = 1;
    while (value >= arr[j]) {
        j += 1;
    }
    return j;
}
// (percentage) Input a value, find where, on a scale of 0-100, it applies.
function toStepping(xVal, xPct, value) {
    if (value >= xVal.slice(-1)[0]) {
        return 100;
    }
    var j = getJ(value, xVal);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
}
// (value) Input a percentage, find where it is on the specified range.
function fromStepping(xVal, xPct, value) {
    // There is no range group that fits 100
    if (value >= 100) {
        return xVal.slice(-1)[0];
    }
    var j = getJ(value, xPct);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
}
// (percentage) Get the step that applies at a certain value.
function getStep(xPct, xSteps, snap, value) {
    if (value === 100) {
        return value;
    }
    var j = getJ(value, xPct);
    var a = xPct[j - 1];
    var b = xPct[j];
    // If 'snap' is set, steps are used as fixed points on the slider.
    if (snap) {
        // Find the closest position, a or b.
        if (value - a > (b - a) / 2) {
            return b;
        }
        return a;
    }
    if (!xSteps[j - 1]) {
        return value;
    }
    return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
}
//endregion
//region Spectrum
var Spectrum = /** @class */ (function () {
    function Spectrum(entry, snap, singleStep) {
        this.xPct = [];
        this.xVal = [];
        this.xSteps = [];
        this.xNumSteps = [];
        this.xHighestCompleteStep = [];
        this.xSteps = [singleStep || false];
        this.xNumSteps = [false];
        this.snap = snap;
        var index;
        var ordered = [];
        // Map the object keys to an array.
        Object.keys(entry).forEach(function (index) {
            ordered.push([asArray(entry[index]), index]);
        });
        // Sort all entries by value (numeric sort).
        ordered.sort(function (a, b) {
            return a[0][0] - b[0][0];
        });
        // Convert all entries to subranges.
        for (index = 0; index < ordered.length; index++) {
            this.handleEntryPoint(ordered[index][1], ordered[index][0]);
        }
        // Store the actual step values.
        // xSteps is sorted in the same order as xPct and xVal.
        this.xNumSteps = this.xSteps.slice(0);
        // Convert all numeric steps to the percentage of the subrange they represent.
        for (index = 0; index < this.xNumSteps.length; index++) {
            this.handleStepPoint(index, this.xNumSteps[index]);
        }
    }
    Spectrum.prototype.getDistance = function (value) {
        var distances = [];
        for (var index = 0; index < this.xNumSteps.length - 1; index++) {
            distances[index] = fromPercentage(this.xVal, value, index);
        }
        return distances;
    };
    // Calculate the percentual distance over the whole scale of ranges.
    // direction: 0 = backwards / 1 = forwards
    Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
        var xPct_index = 0;
        // Calculate range where to start calculation
        if (value < this.xPct[this.xPct.length - 1]) {
            while (value > this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
        }
        else if (value === this.xPct[this.xPct.length - 1]) {
            xPct_index = this.xPct.length - 2;
        }
        // If looking backwards and the value is exactly at a range separator then look one range further
        if (!direction && value === this.xPct[xPct_index + 1]) {
            xPct_index++;
        }
        if (distances === null) {
            distances = [];
        }
        var start_factor;
        var rest_factor = 1;
        var rest_rel_distance = distances[xPct_index];
        var range_pct = 0;
        var rel_range_distance = 0;
        var abs_distance_counter = 0;
        var range_counter = 0;
        // Calculate what part of the start range the value is
        if (direction) {
            start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }
        else {
            start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }
        // Do until the complete distance across ranges is calculated
        while (rest_rel_distance > 0) {
            // Calculate the percentage of total range
            range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
            // Detect if the margin, padding or limit is larger then the current range and calculate
            if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                // If larger then take the percentual distance of the whole range
                rel_range_distance = range_pct * start_factor;
                // Rest factor of relative percentual distance still to be calculated
                rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                // Set start factor to 1 as for next range it does not apply.
                start_factor = 1;
            }
            else {
                // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                // No rest left as the rest fits in current range
                rest_factor = 0;
            }
            if (direction) {
                abs_distance_counter = abs_distance_counter - rel_range_distance;
                // Limit range to first range when distance becomes outside of minimum range
                if (this.xPct.length + range_counter >= 1) {
                    range_counter--;
                }
            }
            else {
                abs_distance_counter = abs_distance_counter + rel_range_distance;
                // Limit range to last range when distance becomes outside of maximum range
                if (this.xPct.length - range_counter >= 1) {
                    range_counter++;
                }
            }
            // Rest of relative percentual distance still to be calculated
            rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
        }
        return value + abs_distance_counter;
    };
    Spectrum.prototype.toStepping = function (value) {
        value = toStepping(this.xVal, this.xPct, value);
        return value;
    };
    Spectrum.prototype.fromStepping = function (value) {
        return fromStepping(this.xVal, this.xPct, value);
    };
    Spectrum.prototype.getStep = function (value) {
        value = getStep(this.xPct, this.xSteps, this.snap, value);
        return value;
    };
    Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
        var j = getJ(value, this.xPct);
        // When at the top or stepping down, look at the previous sub-range
        if (value === 100 || (isDown && value === this.xPct[j - 1])) {
            j = Math.max(j - 1, 1);
        }
        return (this.xVal[j] - this.xVal[j - 1]) / size;
    };
    Spectrum.prototype.getNearbySteps = function (value) {
        var j = getJ(value, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[j - 2],
                step: this.xNumSteps[j - 2],
                highestStep: this.xHighestCompleteStep[j - 2],
            },
            thisStep: {
                startValue: this.xVal[j - 1],
                step: this.xNumSteps[j - 1],
                highestStep: this.xHighestCompleteStep[j - 1],
            },
            stepAfter: {
                startValue: this.xVal[j],
                step: this.xNumSteps[j],
                highestStep: this.xHighestCompleteStep[j],
            },
        };
    };
    Spectrum.prototype.countStepDecimals = function () {
        var stepDecimals = this.xNumSteps.map(countDecimals);
        return Math.max.apply(null, stepDecimals);
    };
    Spectrum.prototype.hasNoSize = function () {
        return this.xVal[0] === this.xVal[this.xVal.length - 1];
    };
    // Outside testing
    Spectrum.prototype.convert = function (value) {
        return this.getStep(this.toStepping(value));
    };
    Spectrum.prototype.handleEntryPoint = function (index, value) {
        var percentage;
        // Covert min/max syntax to 0 and 100.
        if (index === "min") {
            percentage = 0;
        }
        else if (index === "max") {
            percentage = 100;
        }
        else {
            percentage = parseFloat(index);
        }
        // Check for correct input.
        if (!isNumeric(percentage) || !isNumeric(value[0])) {
            throw new Error("noUiSlider: 'range' value isn't numeric.");
        }
        // Store values.
        this.xPct.push(percentage);
        this.xVal.push(value[0]);
        var value1 = Number(value[1]);
        // NaN will evaluate to false too, but to keep
        // logging clear, set step explicitly. Make sure
        // not to override the 'step' setting with false.
        if (!percentage) {
            if (!isNaN(value1)) {
                this.xSteps[0] = value1;
            }
        }
        else {
            this.xSteps.push(isNaN(value1) ? false : value1);
        }
        this.xHighestCompleteStep.push(0);
    };
    Spectrum.prototype.handleStepPoint = function (i, n) {
        // Ignore 'false' stepping.
        if (!n) {
            return;
        }
        // Step over zero-length ranges (#948);
        if (this.xVal[i] === this.xVal[i + 1]) {
            this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
            return;
        }
        // Factor to range ratio
        this.xSteps[i] =
            fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
        var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
        var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
        var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
        this.xHighestCompleteStep[i] = step;
    };
    return Spectrum;
}());
//endregion
//region Options
/*	Every input option is tested and parsed. This will prevent
    endless validation in internal methods. These tests are
    structured with an item for every option available. An
    option can be marked as required by setting the 'r' flag.
    The testing function is provided with three arguments:
        - The provided value for the option;
        - A reference to the options object;
        - The name for the option;

    The testing function returns false when an error is detected,
    or true when everything is OK. It can also modify the option
    object, to make sure all values can be correctly looped elsewhere. */
//region Defaults
var defaultFormatter = {
    to: function (value) {
        return value === undefined ? "" : value.toFixed(2);
    },
    from: Number,
};
var cssClasses = {
    target: "target",
    base: "base",
    origin: "origin",
    handle: "handle",
    handleLower: "handle-lower",
    handleUpper: "handle-upper",
    touchArea: "touch-area",
    horizontal: "horizontal",
    vertical: "vertical",
    background: "background",
    connect: "connect",
    connects: "connects",
    ltr: "ltr",
    rtl: "rtl",
    textDirectionLtr: "txt-dir-ltr",
    textDirectionRtl: "txt-dir-rtl",
    draggable: "draggable",
    drag: "state-drag",
    tap: "state-tap",
    active: "active",
    tooltip: "tooltip",
    pips: "pips",
    pipsHorizontal: "pips-horizontal",
    pipsVertical: "pips-vertical",
    marker: "marker",
    markerHorizontal: "marker-horizontal",
    markerVertical: "marker-vertical",
    markerNormal: "marker-normal",
    markerLarge: "marker-large",
    markerSub: "marker-sub",
    value: "value",
    valueHorizontal: "value-horizontal",
    valueVertical: "value-vertical",
    valueNormal: "value-normal",
    valueLarge: "value-large",
    valueSub: "value-sub",
};
// Namespaces of internal event listeners
var INTERNAL_EVENT_NS = {
    tooltips: ".__tooltips",
    aria: ".__aria",
};
//endregion
function testStep(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'step' is not numeric.");
    }
    // The step option can still be used to set stepping
    // for linear sliders. Overwritten if set in 'range'.
    parsed.singleStep = entry;
}
function testKeyboardPageMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
    }
    parsed.keyboardPageMultiplier = entry;
}
function testKeyboardMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
    }
    parsed.keyboardMultiplier = entry;
}
function testKeyboardDefaultStep(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
    }
    parsed.keyboardDefaultStep = entry;
}
function testRange(parsed, entry) {
    // Filter incorrect input.
    if (typeof entry !== "object" || Array.isArray(entry)) {
        throw new Error("noUiSlider: 'range' is not an object.");
    }
    // Catch missing start or end.
    if (entry.min === undefined || entry.max === undefined) {
        throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
    }
    parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
}
function testStart(parsed, entry) {
    entry = asArray(entry);
    // Validate input. Values aren't tested, as the public .val method
    // will always provide a valid location.
    if (!Array.isArray(entry) || !entry.length) {
        throw new Error("noUiSlider: 'start' option is incorrect.");
    }
    // Store the number of handles.
    parsed.handles = entry.length;
    // When the slider is initialized, the .val method will
    // be called with the start options.
    parsed.start = entry;
}
function testSnap(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'snap' option must be a boolean.");
    }
    // Enforce 100% stepping within subranges.
    parsed.snap = entry;
}
function testAnimate(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'animate' option must be a boolean.");
    }
    // Enforce 100% stepping within subranges.
    parsed.animate = entry;
}
function testAnimationDuration(parsed, entry) {
    if (typeof entry !== "number") {
        throw new Error("noUiSlider: 'animationDuration' option must be a number.");
    }
    parsed.animationDuration = entry;
}
function testConnect(parsed, entry) {
    var connect = [false];
    var i;
    // Map legacy options
    if (entry === "lower") {
        entry = [true, false];
    }
    else if (entry === "upper") {
        entry = [false, true];
    }
    // Handle boolean options
    if (entry === true || entry === false) {
        for (i = 1; i < parsed.handles; i++) {
            connect.push(entry);
        }
        connect.push(false);
    }
    // Reject invalid input
    else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
        throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
    }
    else {
        connect = entry;
    }
    parsed.connect = connect;
}
function testOrientation(parsed, entry) {
    // Set orientation to an a numerical value for easy
    // array selection.
    switch (entry) {
        case "horizontal":
            parsed.ort = 0;
            break;
        case "vertical":
            parsed.ort = 1;
            break;
        default:
            throw new Error("noUiSlider: 'orientation' option is invalid.");
    }
}
function testMargin(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'margin' option must be numeric.");
    }
    // Issue #582
    if (entry === 0) {
        return;
    }
    parsed.margin = parsed.spectrum.getDistance(entry);
}
function testLimit(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'limit' option must be numeric.");
    }
    parsed.limit = parsed.spectrum.getDistance(entry);
    if (!parsed.limit || parsed.handles < 2) {
        throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
}
function testPadding(parsed, entry) {
    var index;
    if (!isNumeric(entry) && !Array.isArray(entry)) {
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
    }
    if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
    }
    if (entry === 0) {
        return;
    }
    if (!Array.isArray(entry)) {
        entry = [entry, entry];
    }
    // 'getDistance' returns false for invalid values.
    parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
    for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
        // last "range" can't contain step size as it is purely an endpoint.
        if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
            throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
        }
    }
    var totalPadding = entry[0] + entry[1];
    var firstValue = parsed.spectrum.xVal[0];
    var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
    if (totalPadding / (lastValue - firstValue) > 1) {
        throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
    }
}
function testDirection(parsed, entry) {
    // Set direction as a numerical value for easy parsing.
    // Invert connection for RTL sliders, so that the proper
    // handles get the connect/background classes.
    switch (entry) {
        case "ltr":
            parsed.dir = 0;
            break;
        case "rtl":
            parsed.dir = 1;
            break;
        default:
            throw new Error("noUiSlider: 'direction' option was not recognized.");
    }
}
function testBehaviour(parsed, entry) {
    // Make sure the input is a string.
    if (typeof entry !== "string") {
        throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
    }
    // Check if the string contains any keywords.
    // None are required.
    var tap = entry.indexOf("tap") >= 0;
    var drag = entry.indexOf("drag") >= 0;
    var fixed = entry.indexOf("fixed") >= 0;
    var snap = entry.indexOf("snap") >= 0;
    var hover = entry.indexOf("hover") >= 0;
    var unconstrained = entry.indexOf("unconstrained") >= 0;
    var dragAll = entry.indexOf("drag-all") >= 0;
    var smoothSteps = entry.indexOf("smooth-steps") >= 0;
    if (fixed) {
        if (parsed.handles !== 2) {
            throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
        }
        // Use margin to enforce fixed state
        testMargin(parsed, parsed.start[1] - parsed.start[0]);
    }
    if (unconstrained && (parsed.margin || parsed.limit)) {
        throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
    }
    parsed.events = {
        tap: tap || snap,
        drag: drag,
        dragAll: dragAll,
        smoothSteps: smoothSteps,
        fixed: fixed,
        snap: snap,
        hover: hover,
        unconstrained: unconstrained,
    };
}
function testTooltips(parsed, entry) {
    if (entry === false) {
        return;
    }
    if (entry === true || isValidPartialFormatter(entry)) {
        parsed.tooltips = [];
        for (var i = 0; i < parsed.handles; i++) {
            parsed.tooltips.push(entry);
        }
    }
    else {
        entry = asArray(entry);
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a formatter for all handles.");
        }
        entry.forEach(function (formatter) {
            if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
            }
        });
        parsed.tooltips = entry;
    }
}
function testHandleAttributes(parsed, entry) {
    if (entry.length !== parsed.handles) {
        throw new Error("noUiSlider: must pass a attributes for all handles.");
    }
    parsed.handleAttributes = entry;
}
function testAriaFormat(parsed, entry) {
    if (!isValidPartialFormatter(entry)) {
        throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
    }
    parsed.ariaFormat = entry;
}
function testFormat(parsed, entry) {
    if (!isValidFormatter(entry)) {
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
    }
    parsed.format = entry;
}
function testKeyboardSupport(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
    }
    parsed.keyboardSupport = entry;
}
function testDocumentElement(parsed, entry) {
    // This is an advanced option. Passed values are used without validation.
    parsed.documentElement = entry;
}
function testCssPrefix(parsed, entry) {
    if (typeof entry !== "string" && entry !== false) {
        throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
    }
    parsed.cssPrefix = entry;
}
function testCssClasses(parsed, entry) {
    if (typeof entry !== "object") {
        throw new Error("noUiSlider: 'cssClasses' must be an object.");
    }
    if (typeof parsed.cssPrefix === "string") {
        parsed.cssClasses = {};
        Object.keys(entry).forEach(function (key) {
            parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
        });
    }
    else {
        parsed.cssClasses = entry;
    }
}
// Test all developer settings and parse to assumption-safe values.
function testOptions(options) {
    // To prove a fix for #537, freeze options here.
    // If the object is modified, an error will be thrown.
    // Object.freeze(options);
    var parsed = {
        margin: null,
        limit: null,
        padding: null,
        animate: true,
        animationDuration: 300,
        ariaFormat: defaultFormatter,
        format: defaultFormatter,
    };
    // Tests are executed in the order they are presented here.
    var tests = {
        step: { r: false, t: testStep },
        keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
        keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
        keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
        start: { r: true, t: testStart },
        connect: { r: true, t: testConnect },
        direction: { r: true, t: testDirection },
        snap: { r: false, t: testSnap },
        animate: { r: false, t: testAnimate },
        animationDuration: { r: false, t: testAnimationDuration },
        range: { r: true, t: testRange },
        orientation: { r: false, t: testOrientation },
        margin: { r: false, t: testMargin },
        limit: { r: false, t: testLimit },
        padding: { r: false, t: testPadding },
        behaviour: { r: true, t: testBehaviour },
        ariaFormat: { r: false, t: testAriaFormat },
        format: { r: false, t: testFormat },
        tooltips: { r: false, t: testTooltips },
        keyboardSupport: { r: true, t: testKeyboardSupport },
        documentElement: { r: false, t: testDocumentElement },
        cssPrefix: { r: true, t: testCssPrefix },
        cssClasses: { r: true, t: testCssClasses },
        handleAttributes: { r: false, t: testHandleAttributes },
    };
    var defaults = {
        connect: false,
        direction: "ltr",
        behaviour: "tap",
        orientation: "horizontal",
        keyboardSupport: true,
        cssPrefix: "noUi-",
        cssClasses: cssClasses,
        keyboardPageMultiplier: 5,
        keyboardMultiplier: 1,
        keyboardDefaultStep: 10,
    };
    // AriaFormat defaults to regular format, if any.
    if (options.format && !options.ariaFormat) {
        options.ariaFormat = options.format;
    }
    // Run all options through a testing mechanism to ensure correct
    // input. It should be noted that options might get modified to
    // be handled properly. E.g. wrapping integers in arrays.
    Object.keys(tests).forEach(function (name) {
        // If the option isn't set, but it is required, throw an error.
        if (!isSet(options[name]) && defaults[name] === undefined) {
            if (tests[name].r) {
                throw new Error("noUiSlider: '" + name + "' is required.");
            }
            return;
        }
        tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
    });
    // Forward pips options
    parsed.pips = options.pips;
    // All recent browsers accept unprefixed transform.
    // We need -ms- for IE9 and -webkit- for older Android;
    // Assume use of -webkit- if unprefixed and -ms- are not supported.
    // https://caniuse.com/#feat=transforms2d
    var d = document.createElement("div");
    var msPrefix = d.style.msTransform !== undefined;
    var noPrefix = d.style.transform !== undefined;
    parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
    // Pips don't move, so we can place them using left/top.
    var styles = [
        ["left", "top"],
        ["right", "bottom"],
    ];
    parsed.style = styles[parsed.dir][parsed.ort];
    return parsed;
}
//endregion
function scope(target, options, originalOptions) {
    var actions = getActions();
    var supportsTouchActionNone = getSupportsTouchActionNone();
    var supportsPassive = supportsTouchActionNone && getSupportsPassive();
    // All variables local to 'scope' are prefixed with 'scope_'
    // Slider DOM Nodes
    var scope_Target = target;
    var scope_Base;
    var scope_Handles;
    var scope_Connects;
    var scope_Pips;
    var scope_Tooltips;
    // Slider state values
    var scope_Spectrum = options.spectrum;
    var scope_Values = [];
    var scope_Locations = [];
    var scope_HandleNumbers = [];
    var scope_ActiveHandlesCount = 0;
    var scope_Events = {};
    // Document Nodes
    var scope_Document = target.ownerDocument;
    var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
    var scope_Body = scope_Document.body;
    // For horizontal sliders in standard ltr documents,
    // make .noUi-origin overflow to the left so the document doesn't scroll.
    var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
    // Creates a node, adds it to target, returns the new node.
    function addNodeTo(addTarget, className) {
        var div = scope_Document.createElement("div");
        if (className) {
            addClass(div, className);
        }
        addTarget.appendChild(div);
        return div;
    }
    // Append a origin to the base
    function addOrigin(base, handleNumber) {
        var origin = addNodeTo(base, options.cssClasses.origin);
        var handle = addNodeTo(origin, options.cssClasses.handle);
        addNodeTo(handle, options.cssClasses.touchArea);
        handle.setAttribute("data-handle", String(handleNumber));
        if (options.keyboardSupport) {
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
            // 0 = focusable and reachable
            handle.setAttribute("tabindex", "0");
            handle.addEventListener("keydown", function (event) {
                return eventKeydown(event, handleNumber);
            });
        }
        if (options.handleAttributes !== undefined) {
            var attributes_1 = options.handleAttributes[handleNumber];
            Object.keys(attributes_1).forEach(function (attribute) {
                handle.setAttribute(attribute, attributes_1[attribute]);
            });
        }
        handle.setAttribute("role", "slider");
        handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
        if (handleNumber === 0) {
            addClass(handle, options.cssClasses.handleLower);
        }
        else if (handleNumber === options.handles - 1) {
            addClass(handle, options.cssClasses.handleUpper);
        }
        origin.handle = handle;
        return origin;
    }
    // Insert nodes for connect elements
    function addConnect(base, add) {
        if (!add) {
            return false;
        }
        return addNodeTo(base, options.cssClasses.connect);
    }
    // Add handles to the slider base.
    function addElements(connectOptions, base) {
        var connectBase = addNodeTo(base, options.cssClasses.connects);
        scope_Handles = [];
        scope_Connects = [];
        scope_Connects.push(addConnect(connectBase, connectOptions[0]));
        // [::::O====O====O====]
        // connectOptions = [0, 1, 1, 1]
        for (var i = 0; i < options.handles; i++) {
            // Keep a list of all added handles.
            scope_Handles.push(addOrigin(base, i));
            scope_HandleNumbers[i] = i;
            scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
        }
    }
    // Initialize a single slider.
    function addSlider(addTarget) {
        // Apply classes and data to the target.
        addClass(addTarget, options.cssClasses.target);
        if (options.dir === 0) {
            addClass(addTarget, options.cssClasses.ltr);
        }
        else {
            addClass(addTarget, options.cssClasses.rtl);
        }
        if (options.ort === 0) {
            addClass(addTarget, options.cssClasses.horizontal);
        }
        else {
            addClass(addTarget, options.cssClasses.vertical);
        }
        var textDirection = getComputedStyle(addTarget).direction;
        if (textDirection === "rtl") {
            addClass(addTarget, options.cssClasses.textDirectionRtl);
        }
        else {
            addClass(addTarget, options.cssClasses.textDirectionLtr);
        }
        return addNodeTo(addTarget, options.cssClasses.base);
    }
    function addTooltip(handle, handleNumber) {
        if (!options.tooltips || !options.tooltips[handleNumber]) {
            return false;
        }
        return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
    }
    function isSliderDisabled() {
        return scope_Target.hasAttribute("disabled");
    }
    // Disable the slider dragging if any handle is disabled
    function isHandleDisabled(handleNumber) {
        var handleOrigin = scope_Handles[handleNumber];
        return handleOrigin.hasAttribute("disabled");
    }
    function disable(handleNumber) {
        if (handleNumber !== null && handleNumber !== undefined) {
            scope_Handles[handleNumber].setAttribute("disabled", "");
            scope_Handles[handleNumber].handle.removeAttribute("tabindex");
        }
        else {
            scope_Target.setAttribute("disabled", "");
            scope_Handles.forEach(function (handle) {
                handle.handle.removeAttribute("tabindex");
            });
        }
    }
    function enable(handleNumber) {
        if (handleNumber !== null && handleNumber !== undefined) {
            scope_Handles[handleNumber].removeAttribute("disabled");
            scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
        }
        else {
            scope_Target.removeAttribute("disabled");
            scope_Handles.forEach(function (handle) {
                handle.removeAttribute("disabled");
                handle.handle.setAttribute("tabindex", "0");
            });
        }
    }
    function removeTooltips() {
        if (scope_Tooltips) {
            removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
            scope_Tooltips.forEach(function (tooltip) {
                if (tooltip) {
                    removeElement(tooltip);
                }
            });
            scope_Tooltips = null;
        }
    }
    // The tooltips option is a shorthand for using the 'update' event.
    function tooltips() {
        removeTooltips();
        // Tooltips are added with options.tooltips in original order.
        scope_Tooltips = scope_Handles.map(addTooltip);
        bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
            if (!scope_Tooltips || !options.tooltips) {
                return;
            }
            if (scope_Tooltips[handleNumber] === false) {
                return;
            }
            var formattedValue = values[handleNumber];
            if (options.tooltips[handleNumber] !== true) {
                formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
            }
            scope_Tooltips[handleNumber].innerHTML = formattedValue;
        });
    }
    function aria() {
        removeEvent("update" + INTERNAL_EVENT_NS.aria);
        bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
            // Update Aria Values for all handles, as a change in one changes min and max values for the next.
            scope_HandleNumbers.forEach(function (index) {
                var handle = scope_Handles[index];
                var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                var now = positions[index];
                // Formatted value for display
                var text = String(options.ariaFormat.to(unencoded[index]));
                // Map to slider range values
                min = scope_Spectrum.fromStepping(min).toFixed(1);
                max = scope_Spectrum.fromStepping(max).toFixed(1);
                now = scope_Spectrum.fromStepping(now).toFixed(1);
                handle.children[0].setAttribute("aria-valuemin", min);
                handle.children[0].setAttribute("aria-valuemax", max);
                handle.children[0].setAttribute("aria-valuenow", now);
                handle.children[0].setAttribute("aria-valuetext", text);
            });
        });
    }
    function getGroup(pips) {
        // Use the range.
        if (pips.mode === PipsMode.Range || pips.mode === PipsMode.Steps) {
            return scope_Spectrum.xVal;
        }
        if (pips.mode === PipsMode.Count) {
            if (pips.values < 2) {
                throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
            }
            // Divide 0 - 100 in 'count' parts.
            var interval = pips.values - 1;
            var spread = 100 / interval;
            var values = [];
            // List these parts and have them handled as 'positions'.
            while (interval--) {
                values[interval] = interval * spread;
            }
            values.push(100);
            return mapToRange(values, pips.stepped);
        }
        if (pips.mode === PipsMode.Positions) {
            // Map all percentages to on-range values.
            return mapToRange(pips.values, pips.stepped);
        }
        if (pips.mode === PipsMode.Values) {
            // If the value must be stepped, it needs to be converted to a percentage first.
            if (pips.stepped) {
                return pips.values.map(function (value) {
                    // Convert to percentage, apply step, return to value.
                    return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                });
            }
            // Otherwise, we can simply use the values.
            return pips.values;
        }
        return []; // pips.mode = never
    }
    function mapToRange(values, stepped) {
        return values.map(function (value) {
            return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
        });
    }
    function generateSpread(pips) {
        function safeIncrement(value, increment) {
            // Avoid floating point variance by dropping the smallest decimal places.
            return Number((value + increment).toFixed(7));
        }
        var group = getGroup(pips);
        var indexes = {};
        var firstInRange = scope_Spectrum.xVal[0];
        var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
        var ignoreFirst = false;
        var ignoreLast = false;
        var prevPct = 0;
        // Create a copy of the group, sort it and filter away all duplicates.
        group = unique(group.slice().sort(function (a, b) {
            return a - b;
        }));
        // Make sure the range starts with the first element.
        if (group[0] !== firstInRange) {
            group.unshift(firstInRange);
            ignoreFirst = true;
        }
        // Likewise for the last one.
        if (group[group.length - 1] !== lastInRange) {
            group.push(lastInRange);
            ignoreLast = true;
        }
        group.forEach(function (current, index) {
            // Get the current step and the lower + upper positions.
            var step;
            var i;
            var q;
            var low = current;
            var high = group[index + 1];
            var newPct;
            var pctDifference;
            var pctPos;
            var type;
            var steps;
            var realSteps;
            var stepSize;
            var isSteps = pips.mode === PipsMode.Steps;
            // When using 'steps' mode, use the provided steps.
            // Otherwise, we'll step on to the next subrange.
            if (isSteps) {
                step = scope_Spectrum.xNumSteps[index];
            }
            // Default to a 'full' step.
            if (!step) {
                step = high - low;
            }
            // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
            if (high === undefined) {
                high = low;
            }
            // Make sure step isn't 0, which would cause an infinite loop (#654)
            step = Math.max(step, 0.0000001);
            // Find all steps in the subrange.
            for (i = low; i <= high; i = safeIncrement(i, step)) {
                // Get the percentage value for the current step,
                // calculate the size for the subrange.
                newPct = scope_Spectrum.toStepping(i);
                pctDifference = newPct - prevPct;
                steps = pctDifference / (pips.density || 1);
                realSteps = Math.round(steps);
                // This ratio represents the amount of percentage-space a point indicates.
                // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                // Round the percentage offset to an even number, then divide by two
                // to spread the offset on both sides of the range.
                stepSize = pctDifference / realSteps;
                // Divide all points evenly, adding the correct number to this subrange.
                // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                for (q = 1; q <= realSteps; q += 1) {
                    // The ratio between the rounded value and the actual size might be ~1% off.
                    // Correct the percentage offset by the number of points
                    // per subrange. density = 1 will result in 100 points on the
                    // full range, 2 for 50, 4 for 25, etc.
                    pctPos = prevPct + q * stepSize;
                    indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                }
                // Determine the point type.
                type = group.indexOf(i) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
                // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                if (!index && ignoreFirst && i !== high) {
                    type = 0;
                }
                if (!(i === high && ignoreLast)) {
                    // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                    indexes[newPct.toFixed(5)] = [i, type];
                }
                // Update the percentage count.
                prevPct = newPct;
            }
        });
        return indexes;
    }
    function addMarking(spread, filterFunc, formatter) {
        var _a, _b;
        var element = scope_Document.createElement("div");
        var valueSizeClasses = (_a = {},
            _a[PipsType.None] = "",
            _a[PipsType.NoValue] = options.cssClasses.valueNormal,
            _a[PipsType.LargeValue] = options.cssClasses.valueLarge,
            _a[PipsType.SmallValue] = options.cssClasses.valueSub,
            _a);
        var markerSizeClasses = (_b = {},
            _b[PipsType.None] = "",
            _b[PipsType.NoValue] = options.cssClasses.markerNormal,
            _b[PipsType.LargeValue] = options.cssClasses.markerLarge,
            _b[PipsType.SmallValue] = options.cssClasses.markerSub,
            _b);
        var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
        var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
        addClass(element, options.cssClasses.pips);
        addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
        function getClasses(type, source) {
            var a = source === options.cssClasses.value;
            var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
            var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
            return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
        }
        function addSpread(offset, value, type) {
            // Apply the filter function, if it is set.
            type = filterFunc ? filterFunc(value, type) : type;
            if (type === PipsType.None) {
                return;
            }
            // Add a marker for every point
            var node = addNodeTo(element, false);
            node.className = getClasses(type, options.cssClasses.marker);
            node.style[options.style] = offset + "%";
            // Values are only appended for points marked '1' or '2'.
            if (type > PipsType.NoValue) {
                node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.value);
                node.setAttribute("data-value", String(value));
                node.style[options.style] = offset + "%";
                node.innerHTML = String(formatter.to(value));
            }
        }
        // Append all points.
        Object.keys(spread).forEach(function (offset) {
            addSpread(offset, spread[offset][0], spread[offset][1]);
        });
        return element;
    }
    function removePips() {
        if (scope_Pips) {
            removeElement(scope_Pips);
            scope_Pips = null;
        }
    }
    function pips(pips) {
        // Fix #669
        removePips();
        var spread = generateSpread(pips);
        var filter = pips.filter;
        var format = pips.format || {
            to: function (value) {
                return String(Math.round(value));
            },
        };
        scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
        return scope_Pips;
    }
    // Shorthand for base dimensions.
    function baseSize() {
        var rect = scope_Base.getBoundingClientRect();
        var alt = ("offset" + ["Width", "Height"][options.ort]);
        return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
    }
    // Handler for attaching events trough a proxy.
    function attachEvent(events, element, callback, data) {
        // This function can be used to 'filter' events to the slider.
        // element is a node, not a nodeList
        var method = function (event) {
            var e = fixEvent(event, data.pageOffset, data.target || element);
            // fixEvent returns false if this event has a different target
            // when handling (multi-) touch events;
            if (!e) {
                return false;
            }
            // doNotReject is passed by all end events to make sure released touches
            // are not rejected, leaving the slider "stuck" to the cursor;
            if (isSliderDisabled() && !data.doNotReject) {
                return false;
            }
            // Stop if an active 'tap' transition is taking place.
            if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                return false;
            }
            // Ignore right or middle clicks on start #454
            if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                return false;
            }
            // Ignore right or middle clicks on start #454
            if (data.hover && e.buttons) {
                return false;
            }
            // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
            // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
            // touch-action: manipulation, but that allows panning, which breaks
            // sliders after zooming/on non-responsive pages.
            // See: https://bugs.webkit.org/show_bug.cgi?id=133112
            if (!supportsPassive) {
                e.preventDefault();
            }
            e.calcPoint = e.points[options.ort];
            // Call the event handler with the event [ and additional data ].
            callback(e, data);
            return;
        };
        var methods = [];
        // Bind a closure on the target for every event type.
        events.split(" ").forEach(function (eventName) {
            element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
            methods.push([eventName, method]);
        });
        return methods;
    }
    // Provide a clean event with standardized offset values.
    function fixEvent(e, pageOffset, eventTarget) {
        // Filter the event to register the type, which can be
        // touch, mouse or pointer. Offset changes need to be
        // made on an event specific basis.
        var touch = e.type.indexOf("touch") === 0;
        var mouse = e.type.indexOf("mouse") === 0;
        var pointer = e.type.indexOf("pointer") === 0;
        var x = 0;
        var y = 0;
        // IE10 implemented pointer events with a prefix;
        if (e.type.indexOf("MSPointer") === 0) {
            pointer = true;
        }
        // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
        // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
        // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
        if (e.type === "mousedown" && !e.buttons && !e.touches) {
            return false;
        }
        // The only thing one handle should be concerned about is the touches that originated on top of it.
        if (touch) {
            // Returns true if a touch originated on the target.
            var isTouchOnTarget = function (checkTouch) {
                var target = checkTouch.target;
                return (target === eventTarget ||
                    eventTarget.contains(target) ||
                    (e.composed && e.composedPath().shift() === eventTarget));
            };
            // In the case of touchstart events, we need to make sure there is still no more than one
            // touch on the target so we look amongst all touches.
            if (e.type === "touchstart") {
                var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                // Do not support more than one touch per handle.
                if (targetTouches.length > 1) {
                    return false;
                }
                x = targetTouches[0].pageX;
                y = targetTouches[0].pageY;
            }
            else {
                // In the other cases, find on changedTouches is enough.
                var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                // Cancel if the target touch has not moved.
                if (!targetTouch) {
                    return false;
                }
                x = targetTouch.pageX;
                y = targetTouch.pageY;
            }
        }
        pageOffset = pageOffset || getPageOffset(scope_Document);
        if (mouse || pointer) {
            x = e.clientX + pageOffset.x;
            y = e.clientY + pageOffset.y;
        }
        e.pageOffset = pageOffset;
        e.points = [x, y];
        e.cursor = mouse || pointer; // Fix #435
        return e;
    }
    // Translate a coordinate in the document to a percentage on the slider
    function calcPointToPercentage(calcPoint) {
        var location = calcPoint - offset(scope_Base, options.ort);
        var proposal = (location * 100) / baseSize();
        // Clamp proposal between 0% and 100%
        // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
        // are used (e.g. contained handles feature)
        proposal = limit(proposal);
        return options.dir ? 100 - proposal : proposal;
    }
    // Find handle closest to a certain percentage on the slider
    function getClosestHandle(clickedPosition) {
        var smallestDifference = 100;
        var handleNumber = false;
        scope_Handles.forEach(function (handle, index) {
            // Disabled handles are ignored
            if (isHandleDisabled(index)) {
                return;
            }
            var handlePosition = scope_Locations[index];
            var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
            // Initial state
            var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
            // Difference with this handle is smaller than the previously checked handle
            var isCloser = differenceWithThisHandle < smallestDifference;
            var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
            if (isCloser || isCloserAfter || clickAtEdge) {
                handleNumber = index;
                smallestDifference = differenceWithThisHandle;
            }
        });
        return handleNumber;
    }
    // Fire 'end' when a mouse or pen leaves the document.
    function documentLeave(event, data) {
        if (event.type === "mouseout" &&
            event.target.nodeName === "HTML" &&
            event.relatedTarget === null) {
            eventEnd(event, data);
        }
    }
    // Handle movement on document for handle and range drag.
    function eventMove(event, data) {
        // Fix #498
        // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
        // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
        // IE9 has .buttons and .which zero on mousemove.
        // Firefox breaks the spec MDN defines.
        if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
            return eventEnd(event, data);
        }
        // Check if we are moving up or down
        var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
        // Convert the movement into a percentage of the slider width/height
        var proposal = (movement * 100) / data.baseSize;
        moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
    }
    // Unbind move events on document, call callbacks.
    function eventEnd(event, data) {
        // The handle is no longer active, so remove the class.
        if (data.handle) {
            removeClass(data.handle, options.cssClasses.active);
            scope_ActiveHandlesCount -= 1;
        }
        // Unbind the move and end events, which are added on 'start'.
        data.listeners.forEach(function (c) {
            scope_DocumentElement.removeEventListener(c[0], c[1]);
        });
        if (scope_ActiveHandlesCount === 0) {
            // Remove dragging class.
            removeClass(scope_Target, options.cssClasses.drag);
            setZindex();
            // Remove cursor styles and text-selection events bound to the body.
            if (event.cursor) {
                scope_Body.style.cursor = "";
                scope_Body.removeEventListener("selectstart", preventDefault);
            }
        }
        if (options.events.smoothSteps) {
            data.handleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
            });
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
            });
        }
        data.handleNumbers.forEach(function (handleNumber) {
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            fireEvent("end", handleNumber);
        });
    }
    // Bind move events on document.
    function eventStart(event, data) {
        // Ignore event if any handle is disabled
        if (data.handleNumbers.some(isHandleDisabled)) {
            return;
        }
        var handle;
        if (data.handleNumbers.length === 1) {
            var handleOrigin = scope_Handles[data.handleNumbers[0]];
            handle = handleOrigin.children[0];
            scope_ActiveHandlesCount += 1;
            // Mark the handle as 'active' so it can be styled.
            addClass(handle, options.cssClasses.active);
        }
        // A drag should never propagate up to the 'tap' event.
        event.stopPropagation();
        // Record the event listeners.
        var listeners = [];
        // Attach the move and end events.
        var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
            // The event target has changed so we need to propagate the original one so that we keep
            // relying on it to extract target touches.
            target: event.target,
            handle: handle,
            connect: data.connect,
            listeners: listeners,
            startCalcPoint: event.calcPoint,
            baseSize: baseSize(),
            pageOffset: event.pageOffset,
            handleNumbers: data.handleNumbers,
            buttonsProperty: event.buttons,
            locations: scope_Locations.slice(),
        });
        var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
            target: event.target,
            handle: handle,
            listeners: listeners,
            doNotReject: true,
            handleNumbers: data.handleNumbers,
        });
        var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
            target: event.target,
            handle: handle,
            listeners: listeners,
            doNotReject: true,
            handleNumbers: data.handleNumbers,
        });
        // We want to make sure we pushed the listeners in the listener list rather than creating
        // a new one as it has already been passed to the event handlers.
        listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
        // Text selection isn't an issue on touch devices,
        // so adding cursor styles can be skipped.
        if (event.cursor) {
            // Prevent the 'I' cursor and extend the range-drag cursor.
            scope_Body.style.cursor = getComputedStyle(event.target).cursor;
            // Mark the target with a dragging state.
            if (scope_Handles.length > 1) {
                addClass(scope_Target, options.cssClasses.drag);
            }
            // Prevent text selection when dragging the handles.
            // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
            // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
            // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
            // The 'cursor' flag is false.
            // See: http://caniuse.com/#search=selectstart
            scope_Body.addEventListener("selectstart", preventDefault, false);
        }
        data.handleNumbers.forEach(function (handleNumber) {
            fireEvent("start", handleNumber);
        });
    }
    // Move closest handle to tapped location.
    function eventTap(event) {
        // The tap event shouldn't propagate up
        event.stopPropagation();
        var proposal = calcPointToPercentage(event.calcPoint);
        var handleNumber = getClosestHandle(proposal);
        // Tackle the case that all handles are 'disabled'.
        if (handleNumber === false) {
            return;
        }
        // Flag the slider as it is now in a transitional state.
        // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
        if (!options.events.snap) {
            addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
        }
        setHandle(handleNumber, proposal, true, true);
        setZindex();
        fireEvent("slide", handleNumber, true);
        fireEvent("update", handleNumber, true);
        if (!options.events.snap) {
            fireEvent("change", handleNumber, true);
            fireEvent("set", handleNumber, true);
        }
        else {
            eventStart(event, { handleNumbers: [handleNumber] });
        }
    }
    // Fires a 'hover' event for a hovered mouse/pen position.
    function eventHover(event) {
        var proposal = calcPointToPercentage(event.calcPoint);
        var to = scope_Spectrum.getStep(proposal);
        var value = scope_Spectrum.fromStepping(to);
        Object.keys(scope_Events).forEach(function (targetEvent) {
            if ("hover" === targetEvent.split(".")[0]) {
                scope_Events[targetEvent].forEach(function (callback) {
                    callback.call(scope_Self, value);
                });
            }
        });
    }
    // Handles keydown on focused handles
    // Don't move the document when pressing arrow keys on focused handles
    function eventKeydown(event, handleNumber) {
        if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
            return false;
        }
        var horizontalKeys = ["Left", "Right"];
        var verticalKeys = ["Down", "Up"];
        var largeStepKeys = ["PageDown", "PageUp"];
        var edgeKeys = ["Home", "End"];
        if (options.dir && !options.ort) {
            // On an right-to-left slider, the left and right keys act inverted
            horizontalKeys.reverse();
        }
        else if (options.ort && !options.dir) {
            // On a top-to-bottom slider, the up and down keys act inverted
            verticalKeys.reverse();
            largeStepKeys.reverse();
        }
        // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
        var key = event.key.replace("Arrow", "");
        var isLargeDown = key === largeStepKeys[0];
        var isLargeUp = key === largeStepKeys[1];
        var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
        var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
        var isMin = key === edgeKeys[0];
        var isMax = key === edgeKeys[1];
        if (!isDown && !isUp && !isMin && !isMax) {
            return true;
        }
        event.preventDefault();
        var to;
        if (isUp || isDown) {
            var direction = isDown ? 0 : 1;
            var steps = getNextStepsForHandle(handleNumber);
            var step = steps[direction];
            // At the edge of a slider, do nothing
            if (step === null) {
                return false;
            }
            // No step set, use the default of 10% of the sub-range
            if (step === false) {
                step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
            }
            if (isLargeUp || isLargeDown) {
                step *= options.keyboardPageMultiplier;
            }
            else {
                step *= options.keyboardMultiplier;
            }
            // Step over zero-length ranges (#948);
            step = Math.max(step, 0.0000001);
            // Decrement for down steps
            step = (isDown ? -1 : 1) * step;
            to = scope_Values[handleNumber] + step;
        }
        else if (isMax) {
            // End key
            to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
        }
        else {
            // Home key
            to = options.spectrum.xVal[0];
        }
        setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
        fireEvent("slide", handleNumber);
        fireEvent("update", handleNumber);
        fireEvent("change", handleNumber);
        fireEvent("set", handleNumber);
        return false;
    }
    // Attach events to several slider parts.
    function bindSliderEvents(behaviour) {
        // Attach the standard drag event to the handles.
        if (!behaviour.fixed) {
            scope_Handles.forEach(function (handle, index) {
                // These events are only bound to the visual handle
                // element, not the 'real' origin element.
                attachEvent(actions.start, handle.children[0], eventStart, {
                    handleNumbers: [index],
                });
            });
        }
        // Attach the tap event to the slider base.
        if (behaviour.tap) {
            attachEvent(actions.start, scope_Base, eventTap, {});
        }
        // Fire hover events
        if (behaviour.hover) {
            attachEvent(actions.move, scope_Base, eventHover, {
                hover: true,
            });
        }
        // Make the range draggable.
        if (behaviour.drag) {
            scope_Connects.forEach(function (connect, index) {
                if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                    return;
                }
                var handleBefore = scope_Handles[index - 1];
                var handleAfter = scope_Handles[index];
                var eventHolders = [connect];
                var handlesToDrag = [handleBefore, handleAfter];
                var handleNumbersToDrag = [index - 1, index];
                addClass(connect, options.cssClasses.draggable);
                // When the range is fixed, the entire range can
                // be dragged by the handles. The handle in the first
                // origin will propagate the start event upward,
                // but it needs to be bound manually on the other.
                if (behaviour.fixed) {
                    eventHolders.push(handleBefore.children[0]);
                    eventHolders.push(handleAfter.children[0]);
                }
                if (behaviour.dragAll) {
                    handlesToDrag = scope_Handles;
                    handleNumbersToDrag = scope_HandleNumbers;
                }
                eventHolders.forEach(function (eventHolder) {
                    attachEvent(actions.start, eventHolder, eventStart, {
                        handles: handlesToDrag,
                        handleNumbers: handleNumbersToDrag,
                        connect: connect,
                    });
                });
            });
        }
    }
    // Attach an event to this slider, possibly including a namespace
    function bindEvent(namespacedEvent, callback) {
        scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
        scope_Events[namespacedEvent].push(callback);
        // If the event bound is 'update,' fire it immediately for all handles.
        if (namespacedEvent.split(".")[0] === "update") {
            scope_Handles.forEach(function (a, index) {
                fireEvent("update", index);
            });
        }
    }
    function isInternalNamespace(namespace) {
        return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
    }
    // Undo attachment of event
    function removeEvent(namespacedEvent) {
        var event = namespacedEvent && namespacedEvent.split(".")[0];
        var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
        Object.keys(scope_Events).forEach(function (bind) {
            var tEvent = bind.split(".")[0];
            var tNamespace = bind.substring(tEvent.length);
            if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                // only delete protected internal event if intentional
                if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                    delete scope_Events[bind];
                }
            }
        });
    }
    // External event handling
    function fireEvent(eventName, handleNumber, tap) {
        Object.keys(scope_Events).forEach(function (targetEvent) {
            var eventType = targetEvent.split(".")[0];
            if (eventName === eventType) {
                scope_Events[targetEvent].forEach(function (callback) {
                    callback.call(
                    // Use the slider public API as the scope ('this')
                    scope_Self, 
                    // Return values as array, so arg_1[arg_2] is always valid.
                    scope_Values.map(options.format.to), 
                    // Handle index, 0 or 1
                    handleNumber, 
                    // Un-formatted slider values
                    scope_Values.slice(), 
                    // Event is fired by tap, true or false
                    tap || false, 
                    // Left offset of the handle, in relation to the slider
                    scope_Locations.slice(), 
                    // add the slider public API to an accessible parameter when this is unavailable
                    scope_Self);
                });
            }
        });
    }
    // Split out the handle positioning logic so the Move event can use it, too
    function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
        var distance;
        // For sliders with multiple handles, limit movement to the other handle.
        // Apply the margin option by adding it to the handle positions.
        if (scope_Handles.length > 1 && !options.events.unconstrained) {
            if (lookBackward && handleNumber > 0) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                to = Math.max(to, distance);
            }
            if (lookForward && handleNumber < scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                to = Math.min(to, distance);
            }
        }
        // The limit option has the opposite effect, limiting handles to a
        // maximum distance from another. Limit must be > 0, as otherwise
        // handles would be unmovable.
        if (scope_Handles.length > 1 && options.limit) {
            if (lookBackward && handleNumber > 0) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                to = Math.min(to, distance);
            }
            if (lookForward && handleNumber < scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                to = Math.max(to, distance);
            }
        }
        // The padding option keeps the handles a certain distance from the
        // edges of the slider. Padding must be > 0.
        if (options.padding) {
            if (handleNumber === 0) {
                distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                to = Math.max(to, distance);
            }
            if (handleNumber === scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                to = Math.min(to, distance);
            }
        }
        if (!smoothSteps) {
            to = scope_Spectrum.getStep(to);
        }
        // Limit percentage to the 0 - 100 range
        to = limit(to);
        // Return false if handle can't move
        if (to === reference[handleNumber] && !getValue) {
            return false;
        }
        return to;
    }
    // Uses slider orientation to create CSS rules. a = base value;
    function inRuleOrder(v, a) {
        var o = options.ort;
        return (o ? a : v) + ", " + (o ? v : a);
    }
    // Moves handle(s) by a percentage
    // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
    function moveHandles(upward, proposal, locations, handleNumbers, connect) {
        var proposals = locations.slice();
        // Store first handle now, so we still have it in case handleNumbers is reversed
        var firstHandle = handleNumbers[0];
        var smoothSteps = options.events.smoothSteps;
        var b = [!upward, upward];
        var f = [upward, !upward];
        // Copy handleNumbers so we don't change the dataset
        handleNumbers = handleNumbers.slice();
        // Check to see which handle is 'leading'.
        // If that one can't move the second can't either.
        if (upward) {
            handleNumbers.reverse();
        }
        // Step 1: get the maximum percentage that any of the handles can move
        if (handleNumbers.length > 1) {
            handleNumbers.forEach(function (handleNumber, o) {
                var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                // Stop if one of the handles can't move.
                if (to === false) {
                    proposal = 0;
                }
                else {
                    proposal = to - proposals[handleNumber];
                    proposals[handleNumber] = to;
                }
            });
        }
        // If using one handle, check backward AND forward
        else {
            b = f = [true];
        }
        var state = false;
        // Step 2: Try to set the handles with the found percentage
        handleNumbers.forEach(function (handleNumber, o) {
            state =
                setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
        });
        // Step 3: If a handle moved, fire events
        if (state) {
            handleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                fireEvent("slide", handleNumber);
            });
            // If target is a connect, then fire drag event
            if (connect != undefined) {
                fireEvent("drag", firstHandle);
            }
        }
    }
    // Takes a base value and an offset. This offset is used for the connect bar size.
    // In the initial design for this feature, the origin element was 1% wide.
    // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
    // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
    function transformDirection(a, b) {
        return options.dir ? 100 - a - b : a;
    }
    // Updates scope_Locations and scope_Values, updates visual state
    function updateHandlePosition(handleNumber, to) {
        // Update locations.
        scope_Locations[handleNumber] = to;
        // Convert the value to the slider stepping/range.
        scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
        var translation = transformDirection(to, 0) - scope_DirOffset;
        var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
        scope_Handles[handleNumber].style[options.transformRule] = translateRule;
        updateConnect(handleNumber);
        updateConnect(handleNumber + 1);
    }
    // Handles before the slider middle are stacked later = higher,
    // Handles after the middle later is lower
    // [[7] [8] .......... | .......... [5] [4]
    function setZindex() {
        scope_HandleNumbers.forEach(function (handleNumber) {
            var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
            var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
            scope_Handles[handleNumber].style.zIndex = String(zIndex);
        });
    }
    // Test suggested values and apply margin, step.
    // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
    function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
        if (!exactInput) {
            to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
        }
        if (to === false) {
            return false;
        }
        updateHandlePosition(handleNumber, to);
        return true;
    }
    // Updates style attribute for connect nodes
    function updateConnect(index) {
        // Skip connects set to false
        if (!scope_Connects[index]) {
            return;
        }
        var l = 0;
        var h = 100;
        if (index !== 0) {
            l = scope_Locations[index - 1];
        }
        if (index !== scope_Connects.length - 1) {
            h = scope_Locations[index];
        }
        // We use two rules:
        // 'translate' to change the left/top offset;
        // 'scale' to change the width of the element;
        // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
        var connectWidth = h - l;
        var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
        var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
        scope_Connects[index].style[options.transformRule] =
            translateRule + " " + scaleRule;
    }
    // Parses value passed to .set method. Returns current value if not parse-able.
    function resolveToValue(to, handleNumber) {
        // Setting with null indicates an 'ignore'.
        // Inputting 'false' is invalid.
        if (to === null || to === false || to === undefined) {
            return scope_Locations[handleNumber];
        }
        // If a formatted number was passed, attempt to decode it.
        if (typeof to === "number") {
            to = String(to);
        }
        to = options.format.from(to);
        if (to !== false) {
            to = scope_Spectrum.toStepping(to);
        }
        // If parsing the number failed, use the current value.
        if (to === false || isNaN(to)) {
            return scope_Locations[handleNumber];
        }
        return to;
    }
    // Set the slider value.
    function valueSet(input, fireSetEvent, exactInput) {
        var values = asArray(input);
        var isInit = scope_Locations[0] === undefined;
        // Event fires by default
        fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
        // Animation is optional.
        // Make sure the initial values were set before using animated placement.
        if (options.animate && !isInit) {
            addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
        }
        // First pass, without lookAhead but with lookBackward. Values are set from left to right.
        scope_HandleNumbers.forEach(function (handleNumber) {
            setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
        });
        var i = scope_HandleNumbers.length === 1 ? 0 : 1;
        // Spread handles evenly across the slider if the range has no size (min=max)
        if (isInit && scope_Spectrum.hasNoSize()) {
            exactInput = true;
            scope_Locations[0] = 0;
            if (scope_HandleNumbers.length > 1) {
                var space_1 = 100 / (scope_HandleNumbers.length - 1);
                scope_HandleNumbers.forEach(function (handleNumber) {
                    scope_Locations[handleNumber] = handleNumber * space_1;
                });
            }
        }
        // Secondary passes. Now that all base values are set, apply constraints.
        // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
        for (; i < scope_HandleNumbers.length; ++i) {
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
            });
        }
        setZindex();
        scope_HandleNumbers.forEach(function (handleNumber) {
            fireEvent("update", handleNumber);
            // Fire the event only for handles that received a new value, as per #579
            if (values[handleNumber] !== null && fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        });
    }
    // Reset slider to initial values
    function valueReset(fireSetEvent) {
        valueSet(options.start, fireSetEvent);
    }
    // Set value for a single handle
    function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
        // Ensure numeric input
        handleNumber = Number(handleNumber);
        if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
            throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
        }
        // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
        // The exactInput argument can be used to ignore slider stepping (#436)
        setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
        fireEvent("update", handleNumber);
        if (fireSetEvent) {
            fireEvent("set", handleNumber);
        }
    }
    // Get the slider value.
    function valueGet(unencoded) {
        if (unencoded === void 0) { unencoded = false; }
        if (unencoded) {
            // return a copy of the raw values
            return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
        }
        var values = scope_Values.map(options.format.to);
        // If only one handle is used, return a single value.
        if (values.length === 1) {
            return values[0];
        }
        return values;
    }
    // Removes classes from the root and empties it.
    function destroy() {
        // remove protected internal listeners
        removeEvent(INTERNAL_EVENT_NS.aria);
        removeEvent(INTERNAL_EVENT_NS.tooltips);
        Object.keys(options.cssClasses).forEach(function (key) {
            removeClass(scope_Target, options.cssClasses[key]);
        });
        while (scope_Target.firstChild) {
            scope_Target.removeChild(scope_Target.firstChild);
        }
        delete scope_Target.noUiSlider;
    }
    function getNextStepsForHandle(handleNumber) {
        var location = scope_Locations[handleNumber];
        var nearbySteps = scope_Spectrum.getNearbySteps(location);
        var value = scope_Values[handleNumber];
        var increment = nearbySteps.thisStep.step;
        var decrement = null;
        // If snapped, directly use defined step value
        if (options.snap) {
            return [
                value - nearbySteps.stepBefore.startValue || null,
                nearbySteps.stepAfter.startValue - value || null,
            ];
        }
        // If the next value in this step moves into the next step,
        // the increment is the start of the next step - the current value
        if (increment !== false) {
            if (value + increment > nearbySteps.stepAfter.startValue) {
                increment = nearbySteps.stepAfter.startValue - value;
            }
        }
        // If the value is beyond the starting point
        if (value > nearbySteps.thisStep.startValue) {
            decrement = nearbySteps.thisStep.step;
        }
        else if (nearbySteps.stepBefore.step === false) {
            decrement = false;
        }
        // If a handle is at the start of a step, it always steps back into the previous step first
        else {
            decrement = value - nearbySteps.stepBefore.highestStep;
        }
        // Now, if at the slider edges, there is no in/decrement
        if (location === 100) {
            increment = null;
        }
        else if (location === 0) {
            decrement = null;
        }
        // As per #391, the comparison for the decrement step can have some rounding issues.
        var stepDecimals = scope_Spectrum.countStepDecimals();
        // Round per #391
        if (increment !== null && increment !== false) {
            increment = Number(increment.toFixed(stepDecimals));
        }
        if (decrement !== null && decrement !== false) {
            decrement = Number(decrement.toFixed(stepDecimals));
        }
        return [decrement, increment];
    }
    // Get the current step size for the slider.
    function getNextSteps() {
        return scope_HandleNumbers.map(getNextStepsForHandle);
    }
    // Updatable: margin, limit, padding, step, range, animate, snap
    function updateOptions(optionsToUpdate, fireSetEvent) {
        // Spectrum is created using the range, snap, direction and step options.
        // 'snap' and 'step' can be updated.
        // If 'snap' and 'step' are not passed, they should remain unchanged.
        var v = valueGet();
        var updateAble = [
            "margin",
            "limit",
            "padding",
            "range",
            "animate",
            "snap",
            "step",
            "format",
            "pips",
            "tooltips",
        ];
        // Only change options that we're actually passed to update.
        updateAble.forEach(function (name) {
            // Check for undefined. null removes the value.
            if (optionsToUpdate[name] !== undefined) {
                originalOptions[name] = optionsToUpdate[name];
            }
        });
        var newOptions = testOptions(originalOptions);
        // Load new options into the slider state
        updateAble.forEach(function (name) {
            if (optionsToUpdate[name] !== undefined) {
                options[name] = newOptions[name];
            }
        });
        scope_Spectrum = newOptions.spectrum;
        // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
        options.margin = newOptions.margin;
        options.limit = newOptions.limit;
        options.padding = newOptions.padding;
        // Update pips, removes existing.
        if (options.pips) {
            pips(options.pips);
        }
        else {
            removePips();
        }
        // Update tooltips, removes existing.
        if (options.tooltips) {
            tooltips();
        }
        else {
            removeTooltips();
        }
        // Invalidate the current positioning so valueSet forces an update.
        scope_Locations = [];
        valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
    }
    // Initialization steps
    function setupSlider() {
        // Create the base element, initialize HTML and set classes.
        // Add handles and connect elements.
        scope_Base = addSlider(scope_Target);
        addElements(options.connect, scope_Base);
        // Attach user events.
        bindSliderEvents(options.events);
        // Use the public value method to set the start values.
        valueSet(options.start);
        if (options.pips) {
            pips(options.pips);
        }
        if (options.tooltips) {
            tooltips();
        }
        aria();
    }
    setupSlider();
    var scope_Self = {
        destroy: destroy,
        steps: getNextSteps,
        on: bindEvent,
        off: removeEvent,
        get: valueGet,
        set: valueSet,
        setHandle: valueSetHandle,
        reset: valueReset,
        disable: disable,
        enable: enable,
        // Exposed for unit testing, don't use this in your application.
        __moveHandles: function (upward, proposal, handleNumbers) {
            moveHandles(upward, proposal, scope_Locations, handleNumbers);
        },
        options: originalOptions,
        updateOptions: updateOptions,
        target: scope_Target,
        removePips: removePips,
        removeTooltips: removeTooltips,
        getPositions: function () {
            return scope_Locations.slice();
        },
        getTooltips: function () {
            return scope_Tooltips;
        },
        getOrigins: function () {
            return scope_Handles;
        },
        pips: pips, // Issue #594
    };
    return scope_Self;
}
// Run the standard initializer
function initialize(target, originalOptions) {
    if (!target || !target.nodeName) {
        throw new Error("noUiSlider: create requires a single element, got: " + target);
    }
    // Throw an error if the slider was already initialized.
    if (target.noUiSlider) {
        throw new Error("noUiSlider: Slider was already initialized.");
    }
    // Test the options and create the slider environment;
    var options = testOptions(originalOptions);
    var api = scope(target, options, originalOptions);
    target.noUiSlider = api;
    return api;
}


/* harmony default export */ __webpack_exports__["default"] = ({
    // Exposed for unit testing, don't use this in your application.
    __spectrum: Spectrum,
    // A reference to the default classes, allows global changes.
    // Use the cssClasses option for changes to one slider.
    cssClasses: cssClasses,
    create: initialize,
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pug_ui_kit_includes_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pug/ui-kit/includes/header/header */ "./src/pug/ui-kit/includes/header/header.js");
/* harmony import */ var _pug_ui_kit_includes_header_main_header_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pug/ui-kit/includes/header-main/header-main */ "./src/pug/ui-kit/includes/header-main/header-main.js");
/* harmony import */ var _pug_ui_kit_includes_colors_item_colors_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pug/ui-kit/includes/colors-item/colors-item */ "./src/pug/ui-kit/includes/colors-item/colors-item.js");
/* harmony import */ var _pug_ui_kit_includes_types_item_types_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pug/ui-kit/includes/types-item/types-item */ "./src/pug/ui-kit/includes/types-item/types-item.js");
/* harmony import */ var _pug_ui_kit_includes_custom_text_field_custom_text_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pug/ui-kit/includes/custom-text-field/custom-text-field */ "./src/pug/ui-kit/includes/custom-text-field/custom-text-field.js");
/* harmony import */ var _pug_ui_kit_includes_custom_select_custom_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pug/ui-kit/includes/custom-select/custom-select */ "./src/pug/ui-kit/includes/custom-select/custom-select.js");
/* harmony import */ var _pug_ui_kit_includes_subscription_text_field_subscription_text_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pug/ui-kit/includes/subscription-text-field/subscription-text-field */ "./src/pug/ui-kit/includes/subscription-text-field/subscription-text-field.js");
/* harmony import */ var _pug_ui_kit_includes_custom_checkbox_custom_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pug/ui-kit/includes/custom-checkbox/custom-checkbox */ "./src/pug/ui-kit/includes/custom-checkbox/custom-checkbox.js");
/* harmony import */ var _pug_ui_kit_includes_range_slider_range_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pug/ui-kit/includes/range-slider/range-slider */ "./src/pug/ui-kit/includes/range-slider/range-slider.js");
/* harmony import */ var _pug_ui_kit_includes_button_contained_button_contained__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pug/ui-kit/includes/button-contained/button-contained */ "./src/pug/ui-kit/includes/button-contained/button-contained.js");
/* harmony import */ var _pug_ui_kit_includes_button_outlined_button_outlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pug/ui-kit/includes/button-outlined/button-outlined */ "./src/pug/ui-kit/includes/button-outlined/button-outlined.js");
/* harmony import */ var _pug_ui_kit_includes_button_text_button_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pug/ui-kit/includes/button-text/button-text */ "./src/pug/ui-kit/includes/button-text/button-text.js");
/* harmony import */ var _pug_ui_kit_includes_button_icon_contained_button_icon_contained__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pug/ui-kit/includes/button-icon-contained/button-icon-contained */ "./src/pug/ui-kit/includes/button-icon-contained/button-icon-contained.js");
/* harmony import */ var _pug_ui_kit_includes_pagination_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pug/ui-kit/includes/pagination/pagination */ "./src/pug/ui-kit/includes/pagination/pagination.js");
/* harmony import */ var _pug_ui_kit_includes_custom_radio_custom_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pug/ui-kit/includes/custom-radio/custom-radio */ "./src/pug/ui-kit/includes/custom-radio/custom-radio.js");
/* harmony import */ var _pug_ui_kit_includes_label_primary_label_primary__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pug/ui-kit/includes/label-primary/label-primary */ "./src/pug/ui-kit/includes/label-primary/label-primary.js");
/* harmony import */ var _pug_ui_kit_includes_toggle_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../pug/ui-kit/includes/toggle/toggle */ "./src/pug/ui-kit/includes/toggle/toggle.js");
/* harmony import */ var _pug_ui_kit_includes_like_button_like_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../pug/ui-kit/includes/like-button/like-button */ "./src/pug/ui-kit/includes/like-button/like-button.js");
/* harmony import */ var _pug_ui_kit_includes_rating_rating__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../pug/ui-kit/includes/rating/rating */ "./src/pug/ui-kit/includes/rating/rating.js");
/* harmony import */ var _pug_ui_kit_includes_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../pug/ui-kit/includes/dropdown/dropdown */ "./src/pug/ui-kit/includes/dropdown/dropdown.js");
/* harmony import */ var _pug_ui_kit_includes_dropdown_guests_dropdown_guests__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../pug/ui-kit/includes/dropdown-guests/dropdown-guests */ "./src/pug/ui-kit/includes/dropdown-guests/dropdown-guests.js");
/* harmony import */ var _pug_ui_kit_includes_rich_checkbox_button_group_rich_checkbox_button_group__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../pug/ui-kit/includes/rich-checkbox-button-group/rich-checkbox-button-group */ "./src/pug/ui-kit/includes/rich-checkbox-button-group/rich-checkbox-button-group.js");
/* harmony import */ var _pug_ui_kit_includes_bullet_list_bullet_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../pug/ui-kit/includes/bullet-list/bullet-list */ "./src/pug/ui-kit/includes/bullet-list/bullet-list.js");
/* harmony import */ var _pug_ui_kit_includes_expandable_checkbox_list_expandable_checkbox_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../pug/ui-kit/includes/expandable-checkbox-list/expandable-checkbox-list */ "./src/pug/ui-kit/includes/expandable-checkbox-list/expandable-checkbox-list.js");
/* harmony import */ var _pug_ui_kit_includes_feature_comfort_feature_comfort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../pug/ui-kit/includes/feature-comfort/feature-comfort */ "./src/pug/ui-kit/includes/feature-comfort/feature-comfort.js");
/* harmony import */ var _pug_ui_kit_includes_feature_convenience_feature_convenience__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../pug/ui-kit/includes/feature-convenience/feature-convenience */ "./src/pug/ui-kit/includes/feature-convenience/feature-convenience.js");
/* harmony import */ var _pug_ui_kit_includes_feature_cosiness_feature_cosiness__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../pug/ui-kit/includes/feature-cosiness/feature-cosiness */ "./src/pug/ui-kit/includes/feature-cosiness/feature-cosiness.js");
/* harmony import */ var _pug_ui_kit_includes_review_review__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../pug/ui-kit/includes/review/review */ "./src/pug/ui-kit/includes/review/review.js");
/* harmony import */ var _pug_ui_kit_includes_main_title_main_title__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../pug/ui-kit/includes/main-title/main-title */ "./src/pug/ui-kit/includes/main-title/main-title.js");
/* harmony import */ var _pug_ui_kit_includes_slider_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../pug/ui-kit/includes/slider/slider */ "./src/pug/ui-kit/includes/slider/slider.js");
/* harmony import */ var _pug_ui_kit_includes_footer_main_footer_main__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../pug/ui-kit/includes/footer-main/footer-main */ "./src/pug/ui-kit/includes/footer-main/footer-main.js");
/* harmony import */ var _pug_ui_kit_includes_footer_mobile_footer_mobile__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../pug/ui-kit/includes/footer-mobile/footer-mobile */ "./src/pug/ui-kit/includes/footer-mobile/footer-mobile.js");
/* harmony import */ var _pug_ui_kit_includes_chart_chart__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../pug/ui-kit/includes/chart/chart */ "./src/pug/ui-kit/includes/chart/chart.js");
/* harmony import */ var _pug_ui_kit_includes_registration_sign_in_slider_registration_sign_in_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../pug/ui-kit/includes/registration-sign-in-slider/registration-sign-in-slider */ "./src/pug/ui-kit/includes/registration-sign-in-slider/registration-sign-in-slider.js");
/* harmony import */ var _pug_ui_kit_cards_search_card_search_card__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../pug/ui-kit/cards/search-card/search-card */ "./src/pug/ui-kit/cards/search-card/search-card.js");
/* harmony import */ var _pug_ui_kit_cards_register_card_register_card__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../pug/ui-kit/cards/register-card/register-card */ "./src/pug/ui-kit/cards/register-card/register-card.js");
/* harmony import */ var _pug_ui_kit_cards_booking_card_booking_card__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../pug/ui-kit/cards/booking-card/booking-card */ "./src/pug/ui-kit/cards/booking-card/booking-card.js");
/* harmony import */ var _pug_ui_kit_cards_log_in_card_log_in_card__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../pug/ui-kit/cards/log-in-card/log-in-card */ "./src/pug/ui-kit/cards/log-in-card/log-in-card.js");
/* harmony import */ var _pug_ui_kit_cards_calendar_calendar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../pug/ui-kit/cards/calendar/calendar */ "./src/pug/ui-kit/cards/calendar/calendar.js");
/* harmony import */ var _pug_ui_kit_cards_room_card_room_card__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../pug/ui-kit/cards/room-card/room-card */ "./src/pug/ui-kit/cards/room-card/room-card.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _fonts_fonts_css__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../fonts/fonts.css */ "./src/fonts/fonts.css");
/* harmony import */ var _pug_ui_kit_includes_review_image_jpg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../pug/ui-kit/includes/review/image.jpg */ "./src/pug/ui-kit/includes/review/image.jpg");
/* harmony import */ var _pug_ui_kit_includes_slider_1_jpg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../pug/ui-kit/includes/slider/1.jpg */ "./src/pug/ui-kit/includes/slider/1.jpg");
/* harmony import */ var _pug_ui_kit_includes_slider_2_jpg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../pug/ui-kit/includes/slider/2.jpg */ "./src/pug/ui-kit/includes/slider/2.jpg");
/* harmony import */ var _pug_ui_kit_includes_slider_3_jpg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../pug/ui-kit/includes/slider/3.jpg */ "./src/pug/ui-kit/includes/slider/3.jpg");
/* harmony import */ var _pug_ui_kit_includes_slider_4_jpg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../pug/ui-kit/includes/slider/4.jpg */ "./src/pug/ui-kit/includes/slider/4.jpg");
/* harmony import */ var _pug_ui_kit_includes_slider_5_jpg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../pug/ui-kit/includes/slider/5.jpg */ "./src/pug/ui-kit/includes/slider/5.jpg");
/* harmony import */ var _pug_ui_kit_includes_slider_6_jpg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../pug/ui-kit/includes/slider/6.jpg */ "./src/pug/ui-kit/includes/slider/6.jpg");
/* harmony import */ var _pug_ui_kit_includes_slider_7_jpg__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../pug/ui-kit/includes/slider/7.jpg */ "./src/pug/ui-kit/includes/slider/7.jpg");
/* harmony import */ var _pug_ui_kit_includes_slider_8_jpg__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../pug/ui-kit/includes/slider/8.jpg */ "./src/pug/ui-kit/includes/slider/8.jpg");
/* harmony import */ var _pug_ui_kit_includes_slider_9_jpg__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../pug/ui-kit/includes/slider/9.jpg */ "./src/pug/ui-kit/includes/slider/9.jpg");
/* harmony import */ var _pug_ui_kit_includes_slider_10_jpg__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../pug/ui-kit/includes/slider/10.jpg */ "./src/pug/ui-kit/includes/slider/10.jpg");
/* harmony import */ var _pug_ui_kit_includes_slider_11_jpg__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../pug/ui-kit/includes/slider/11.jpg */ "./src/pug/ui-kit/includes/slider/11.jpg");
/* harmony import */ var _pug_ui_kit_includes_slider_12_jpg__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../pug/ui-kit/includes/slider/12.jpg */ "./src/pug/ui-kit/includes/slider/12.jpg");
/* harmony import */ var _pug_ui_kit_includes_main_page_slider_landing_bg_1_jpg__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../pug/ui-kit/includes/main-page-slider/landing-bg-1.jpg */ "./src/pug/ui-kit/includes/main-page-slider/landing-bg-1.jpg");
/* harmony import */ var _pug_ui_kit_includes_main_page_slider_landing_bg_2_jpg__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../pug/ui-kit/includes/main-page-slider/landing-bg-2.jpg */ "./src/pug/ui-kit/includes/main-page-slider/landing-bg-2.jpg");
/* harmony import */ var _pug_ui_kit_includes_main_page_slider_landing_bg_3_jpg__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../pug/ui-kit/includes/main-page-slider/landing-bg-3.jpg */ "./src/pug/ui-kit/includes/main-page-slider/landing-bg-3.jpg");
/* harmony import */ var _pug_ui_kit_includes_registration_sign_in_slider_reg_sign_in_1_jpg__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../pug/ui-kit/includes/registration-sign-in-slider/reg-sign-in-1.jpg */ "./src/pug/ui-kit/includes/registration-sign-in-slider/reg-sign-in-1.jpg");
/* harmony import */ var _pug_ui_kit_includes_registration_sign_in_slider_reg_sign_in_2_jpg__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../pug/ui-kit/includes/registration-sign-in-slider/reg-sign-in-2.jpg */ "./src/pug/ui-kit/includes/registration-sign-in-slider/reg-sign-in-2.jpg");
/* harmony import */ var _pug_pages_room_details_room_details_1_jpg__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../pug/pages/room-details/room-details-1.jpg */ "./src/pug/pages/room-details/room-details-1.jpg");
/* harmony import */ var _pug_pages_room_details_room_details_2_jpg__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../pug/pages/room-details/room-details-2.jpg */ "./src/pug/pages/room-details/room-details-2.jpg");
/* harmony import */ var _pug_pages_room_details_room_details_3_jpg__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../pug/pages/room-details/room-details-3.jpg */ "./src/pug/pages/room-details/room-details-3.jpg");
/* harmony import */ var _pug_pages_landing_page_landing_page__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../pug/pages/landing-page/landing-page */ "./src/pug/pages/landing-page/landing-page.js");
/* harmony import */ var _pug_pages_landing_page_dates_dropdown_landing_page_dates_dropdown__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../pug/pages/landing-page-dates-dropdown/landing-page-dates-dropdown */ "./src/pug/pages/landing-page-dates-dropdown/landing-page-dates-dropdown.js");
/* harmony import */ var _pug_pages_landing_page_dates_dropdown_landing_page_dates_dropdown__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(_pug_pages_landing_page_dates_dropdown_landing_page_dates_dropdown__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var _pug_pages_search_room_search_room__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../pug/pages/search-room/search-room */ "./src/pug/pages/search-room/search-room.js");
/* harmony import */ var _pug_pages_room_details_room_details__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../pug/pages/room-details/room-details */ "./src/pug/pages/room-details/room-details.js");
/* harmony import */ var _pug_pages_registration_registration__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../pug/pages/registration/registration */ "./src/pug/pages/registration/registration.js");
/* harmony import */ var _pug_pages_sign_in_sign_in__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../pug/pages/sign-in/sign-in */ "./src/pug/pages/sign-in/sign-in.js");
// импорты компонентов




































// импорты карточек








// импорты стилей и шрифтов




// импорты изображений























// импорты страниц







}();
/******/ })()
;
//# sourceMappingURL=index.js.map