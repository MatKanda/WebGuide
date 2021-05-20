/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/animations/animationHide.ts":
/*!*****************************************!*\
  !*** ./src/animations/animationHide.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationHide": () => (/* binding */ animationHide)
/* harmony export */ });
function animationHide(element) {
    var start = [40, 40, 40, 0];
    var end = [255, 255, 255, 1];
    //@ts-ignore
    $(element).animate({ 'aaa': 0 }, {
        duration: 500,
        step: function (now) {
            $(this).css('background-color', 'rgba(' +
                parseInt((start[0] + (end[0] - start[0]) * now).toString()) + ',' +
                parseInt((start[1] + (end[1] - start[1]) * now).toString()) + ',' +
                parseInt((start[2] + (end[2] - start[2]) * now).toString()) + ')');
        }
    });
}


/***/ }),

/***/ "./src/animations/animationShow.ts":
/*!*****************************************!*\
  !*** ./src/animations/animationShow.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationShow": () => (/* binding */ animationShow)
/* harmony export */ });
function animationShow(element) {
    var start = [40, 40, 40, 0];
    var end = [255, 255, 255, 1];
    //@ts-ignore
    $(element).animate({ 'aaa': 1 }, {
        duration: 500,
        step: function (now) {
            $(this).css('background-color', 'rgba(' +
                parseInt((start[0] + (end[0] - start[0]) * now).toString()) + ',' +
                parseInt((start[1] + (end[1] - start[1]) * now).toString()) + ',' +
                parseInt((start[2] + (end[2] - start[2]) * now).toString()) + ')');
        }
    });
}


/***/ }),

/***/ "./src/animations/finishGuide.ts":
/*!***************************************!*\
  !*** ./src/animations/finishGuide.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "finishGuide": () => (/* binding */ finishGuide)
/* harmony export */ });
function finishGuide() {
    setTimeout(function () {
        popupDivs.forEach(function (div) { div.style.display = "none"; });
        bodyElement.style.background = bodyElement.getAttribute("data-background");
        bodyElement.style.color = bodyElement.getAttribute("data-color");
        bodyElement.style.opacity = "1";
        bodyElement.removeAttribute("data-background");
        bodyElement.removeAttribute("data-color");
        // bodyElement.style.background = "rgba(255, 255, 255, 0)";
        allHtmlElements.forEach(function (element) {
            element.style.background = element.getAttribute("data-background");
            element.style.color = element.getAttribute("data-color");
            element.style.opacity = "1";
            element.removeAttribute("data-background");
            element.removeAttribute("data-color");
        });
    }, 400);
}


/***/ }),

/***/ "./src/animations/index.ts":
/*!*********************************!*\
  !*** ./src/animations/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationHide": () => (/* reexport safe */ _animationHide__WEBPACK_IMPORTED_MODULE_0__.animationHide),
/* harmony export */   "animationShow": () => (/* reexport safe */ _animationShow__WEBPACK_IMPORTED_MODULE_1__.animationShow),
/* harmony export */   "finishGuide": () => (/* reexport safe */ _finishGuide__WEBPACK_IMPORTED_MODULE_2__.finishGuide)
/* harmony export */ });
/* harmony import */ var _animationHide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animationHide */ "./src/animations/animationHide.ts");
/* harmony import */ var _animationShow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animationShow */ "./src/animations/animationShow.ts");
/* harmony import */ var _finishGuide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finishGuide */ "./src/animations/finishGuide.ts");





/***/ }),

/***/ "./src/init/arrangeOrder.ts":
/*!**********************************!*\
  !*** ./src/init/arrangeOrder.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrangeOrder": () => (/* binding */ arrangeOrder)
/* harmony export */ });
function arrangeOrder(array) {
    for (var i = 1; i <= numberOfElements; i++)
        for (var j = 0; j < array.length; j++)
            if (array[j].hasAttribute("data-guide-step")) {
                if (array[j].getAttribute("data-guide-step") === i.toString()) //problem s porovnanim bolo treba tostring
                    elements.push(array[j]);
            }
            else {
                console.log("ERROR : Missing guide-step in your HTML element");
            }
}


/***/ }),

/***/ "./src/init/guideInit.ts":
/*!*******************************!*\
  !*** ./src/init/guideInit.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "guideInit": () => (/* binding */ guideInit)
/* harmony export */ });
/* harmony import */ var _arrangeOrder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrangeOrder */ "./src/init/arrangeOrder.ts");
/* harmony import */ var _popupDiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popupDiv */ "./src/popupDiv/index.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/animations/index.ts");



function guideInit(input) {
    var currentNode, ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);
    numberOfElements = 0;
    currentPopupDivsIndex = 0;
    idCounter = 1;
    var search;
    var tmpArray = [];
    while (currentNode = ni.nextNode()) {
        if (currentNode.getAttribute("data-guide") === "true") {
            tmpArray.push(currentNode);
            numberOfElements++;
        }
        if (search === 1) {
            allHtmlElements.push(currentNode);
            currentNode.setAttribute("data-backGround", getComputedStyle(currentNode).getPropertyValue('backGround'));
            currentNode.setAttribute("data-color", getComputedStyle(currentNode).getPropertyValue('color'));
            currentNode.style.background = "rgba(255,255,255,0)";
            currentNode.style.color = "#000000";
        }
        if (currentNode.tagName === "BODY") {
            bodyElement = currentNode;
            bodyElement.setAttribute("data-backGround", getComputedStyle(currentNode).getPropertyValue('backGround'));
            bodyElement.setAttribute("data-color", getComputedStyle(currentNode).getPropertyValue('color'));
            currentNode.style.background = "rgba(0, 0, 0, 0.85)";
            search = 1;
        }
    }
    (0,_arrangeOrder__WEBPACK_IMPORTED_MODULE_0__.arrangeOrder)(tmpArray);
    for (var i = 0; i < numberOfElements; i++)
        (0,_popupDiv__WEBPACK_IMPORTED_MODULE_1__.createPopupDiv)(elements[i], input);
    popupDivs[currentPopupDivsIndex].style.display = "block";
    popupDivs[currentPopupDivsIndex].style.opacity = "0";
    //@ts-ignore
    $(popupDivs[currentPopupDivsIndex]).animate({
        opacity: 1
    }, 500);
    (0,_animations__WEBPACK_IMPORTED_MODULE_2__.animationShow)(elements[currentPopupDivsIndex]);
}


/***/ }),

/***/ "./src/init/index.ts":
/*!***************************!*\
  !*** ./src/init/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "guideInit": () => (/* reexport safe */ _guideInit__WEBPACK_IMPORTED_MODULE_0__.guideInit)
/* harmony export */ });
/* harmony import */ var _guideInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guideInit */ "./src/init/guideInit.ts");



/***/ }),

/***/ "./src/popupDiv/buttons.ts":
/*!*********************************!*\
  !*** ./src/popupDiv/buttons.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNextButton": () => (/* binding */ createNextButton),
/* harmony export */   "createPrevButton": () => (/* binding */ createPrevButton),
/* harmony export */   "createExitButton": () => (/* binding */ createExitButton)
/* harmony export */ });
/* harmony import */ var _nextWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nextWindow */ "./src/popupDiv/nextWindow.ts");
/* harmony import */ var _prevWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prevWindow */ "./src/popupDiv/prevWindow.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/animations/index.ts");



function createNextButton(newDiv) {
    var nextButton = document.createElement("button");
    if (newDiv.id === "popupDiv" + numberOfElements)
        nextButton.appendChild(document.createTextNode("Finish"));
    else
        nextButton.appendChild(document.createTextNode("Next"));
    nextButton.style.marginLeft = "17px";
    nextButton.style.display = "inline-block";
    nextButton.style.borderRadius = "50px";
    nextButton.id = "nextButton" + (idCounter - 1);
    nextButton.addEventListener("click", function () { (0,_nextWindow__WEBPACK_IMPORTED_MODULE_0__.nextWindow)(); });
    return nextButton;
}
function createPrevButton(newDiv) {
    var prevButton = document.createElement("button");
    prevButton.appendChild(document.createTextNode("Prev"));
    prevButton.style.marginLeft = "5px";
    prevButton.style.borderRadius = "50px";
    prevButton.id = "prevButton" + (idCounter - 1);
    prevButton.addEventListener('click', function () { (0,_prevWindow__WEBPACK_IMPORTED_MODULE_1__.prevWindow)(); });
    newDiv.appendChild(prevButton);
    return prevButton;
}
function createExitButton() {
    var exitButton = document.createElement("button");
    exitButton.appendChild(document.createTextNode("X"));
    exitButton.id = "exitButton" + (idCounter - 1);
    exitButton.addEventListener("click", function () {
        (0,_animations__WEBPACK_IMPORTED_MODULE_2__.finishGuide)();
    });
    return exitButton;
}


/***/ }),

/***/ "./src/popupDiv/createPopupDiv.ts":
/*!****************************************!*\
  !*** ./src/popupDiv/createPopupDiv.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopupDiv": () => (/* binding */ createPopupDiv)
/* harmony export */ });
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setStyle */ "./src/popupDiv/setStyle.ts");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ "./src/popupDiv/elements.ts");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons */ "./src/popupDiv/buttons.ts");



function createPopupDiv(currentNode, inputMessage) {
    var newDiv = document.createElement("div");
    newDiv.id = "popupDiv" + idCounter;
    popupDivs.push(newDiv);
    idCounter++;
    var exitButton = (0,_buttons__WEBPACK_IMPORTED_MODULE_2__.createExitButton)();
    newDiv.appendChild(exitButton);
    var newP = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.createParagraph)(inputMessage);
    newDiv.appendChild(newP);
    var nextButton = (0,_buttons__WEBPACK_IMPORTED_MODULE_2__.createNextButton)(newDiv);
    newDiv.appendChild(nextButton);
    if (newDiv.id !== "popupDiv1") {
        var prevButton = (0,_buttons__WEBPACK_IMPORTED_MODULE_2__.createPrevButton)(newDiv);
        newDiv.appendChild(prevButton);
    }
    var progress = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.createProgressBar)();
    newDiv.appendChild(progress);
    document.body.appendChild(newDiv);
    (0,_setStyle__WEBPACK_IMPORTED_MODULE_0__.setStyle)(newDiv, currentNode, exitButton);
}


/***/ }),

/***/ "./src/popupDiv/elements.ts":
/*!**********************************!*\
  !*** ./src/popupDiv/elements.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProgressBar": () => (/* binding */ createProgressBar),
/* harmony export */   "createParagraph": () => (/* binding */ createParagraph)
/* harmony export */ });
function createProgressBar() {
    var progress = document.createElement("progress");
    progress.style.marginLeft = "5px";
    progress.value = idCounter - 2;
    progress.max = elements.length;
    return progress;
}
function createParagraph(inputMessage) {
    var newP = document.createElement("p");
    if (inputMessage[idCounter - 2] !== null && inputMessage[idCounter - 2] !== undefined)
        newP.appendChild(document.createTextNode(inputMessage[idCounter - 2]));
    else
        newP.appendChild(document.createTextNode("NO MESSAGE WRITTEN"));
    newP.style.marginLeft = "12px";
    newP.style.marginRight = "12px";
    newP.style.marginTop = "0";
    newP.style.color = "black";
    newP.id = "p" + (idCounter - 1);
    return newP;
}


/***/ }),

/***/ "./src/popupDiv/index.ts":
/*!*******************************!*\
  !*** ./src/popupDiv/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopupDiv": () => (/* reexport safe */ _createPopupDiv__WEBPACK_IMPORTED_MODULE_0__.createPopupDiv),
/* harmony export */   "setStyle": () => (/* reexport safe */ _setStyle__WEBPACK_IMPORTED_MODULE_1__.setStyle),
/* harmony export */   "nextWindow": () => (/* reexport safe */ _nextWindow__WEBPACK_IMPORTED_MODULE_2__.nextWindow),
/* harmony export */   "prevWindow": () => (/* reexport safe */ _prevWindow__WEBPACK_IMPORTED_MODULE_3__.prevWindow)
/* harmony export */ });
/* harmony import */ var _createPopupDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopupDiv */ "./src/popupDiv/createPopupDiv.ts");
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setStyle */ "./src/popupDiv/setStyle.ts");
/* harmony import */ var _nextWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nextWindow */ "./src/popupDiv/nextWindow.ts");
/* harmony import */ var _prevWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prevWindow */ "./src/popupDiv/prevWindow.ts");






/***/ }),

/***/ "./src/popupDiv/nextWindow.ts":
/*!************************************!*\
  !*** ./src/popupDiv/nextWindow.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nextWindow": () => (/* binding */ nextWindow)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations */ "./src/animations/index.ts");

function nextWindow() {
    if (currentPopupDivsIndex >= popupDivs.length - 1) {
        (0,_animations__WEBPACK_IMPORTED_MODULE_0__.finishGuide)();
    }
    else {
        //@ts-ignore
        $(popupDivs[currentPopupDivsIndex]).animate({
            opacity: 0.0
        }, 500);
        (0,_animations__WEBPACK_IMPORTED_MODULE_0__.animationHide)(elements[currentPopupDivsIndex]);
        document.getElementById("nextButton" + (currentPopupDivsIndex + 1)).disabled = true;
        document.getElementById("prevButton" + (currentPopupDivsIndex + 2)).disabled = false;
        (0,_animations__WEBPACK_IMPORTED_MODULE_0__.animationShow)(elements[currentPopupDivsIndex + 1]);
        setTimeout(function () {
            if (currentPopupDivsIndex === 0)
                popupDivs[0].style.display = "none";
            else
                popupDivs[currentPopupDivsIndex - 1].style.display = "none";
        }, 500);
        currentPopupDivsIndex++;
        popupDivs[currentPopupDivsIndex].style.display = "block";
        popupDivs[currentPopupDivsIndex].style.opacity = "0";
        //@ts-ignore
        $(popupDivs[currentPopupDivsIndex]).animate({
            opacity: 1
        }, 500);
    }
}


/***/ }),

/***/ "./src/popupDiv/prevWindow.ts":
/*!************************************!*\
  !*** ./src/popupDiv/prevWindow.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prevWindow": () => (/* binding */ prevWindow)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations */ "./src/animations/index.ts");

function prevWindow() {
    if (currentPopupDivsIndex < 1) {
        alert("koniec");
        popupDivs[currentPopupDivsIndex--].style.display = "none";
    }
    else {
        // popupDivs[currentPopupDivsIndex--].style.display = "none";   //
        // popupDivs[currentPopupDivsIndex].style.display = "block";   //
        //@ts-ignore
        $(popupDivs[currentPopupDivsIndex]).animate({
            opacity: 0.0
        }, 500);
        (0,_animations__WEBPACK_IMPORTED_MODULE_0__.animationShow)(elements[currentPopupDivsIndex - 1]);
        document.getElementById("nextButton" + (currentPopupDivsIndex)).disabled = false;
        document.getElementById("prevButton" + (currentPopupDivsIndex + 1)).disabled = true;
        (0,_animations__WEBPACK_IMPORTED_MODULE_0__.animationHide)(elements[currentPopupDivsIndex]);
        setTimeout(function () {
            popupDivs[currentPopupDivsIndex + 1].style.display = "none";
        }, 500);
        currentPopupDivsIndex--;
        popupDivs[currentPopupDivsIndex].style.display = "block";
        popupDivs[currentPopupDivsIndex].style.opacity = "0";
        //@ts-ignore
        $(popupDivs[currentPopupDivsIndex]).animate({
            opacity: 1
        }, 500);
    }
}


/***/ }),

/***/ "./src/popupDiv/setStyle.ts":
/*!**********************************!*\
  !*** ./src/popupDiv/setStyle.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setStyle": () => (/* binding */ setStyle)
/* harmony export */ });
function setStyle(div, currentNode, exitButton) {
    var position = currentNode.getAttribute("data-guide-position");
    div.style.position = "absolute";
    div.style.borderRadius = "20px";
    div.style.maxWidth = "20%";
    div.style.minWidth = "300px";
    div.style.width = "auto";
    div.style.height = "auto";
    div.style.backgroundColor = "white";
    div.style.zIndex = "200";
    div.style.opacity = "1";
    exitButton.style.background = "#ffffff";
    exitButton.style.border = "none";
    exitButton.style.color = "red";
    exitButton.style.position = "relative";
    if (position === "U") {
        div.style.top = currentNode.offsetTop - div.offsetHeight - 4 + 'px';
        div.style.left = currentNode.offsetLeft + 'px';
        exitButton.style.paddingTop = "2%";
        exitButton.style.left = div.offsetWidth - exitButton.offsetWidth + 'px';
    }
    else if (position === "R") {
        div.style.top = currentNode.offsetTop - currentNode.offsetHeight / 2 + 'px';
        div.style.left = currentNode.offsetLeft + currentNode.offsetWidth + 1 + 'px';
        exitButton.style.paddingTop = "2%";
        exitButton.style.left = div.offsetWidth - exitButton.offsetWidth + 'px';
    }
    else if (position === "L") {
        div.style.top = currentNode.offsetTop - currentNode.offsetHeight / 2 + 'px';
        div.style.left = currentNode.offsetLeft - div.offsetWidth - 1 + 'px';
        exitButton.style.paddingTop = "2%";
        exitButton.style.left = div.style.width + 'px';
    }
    else {
        div.style.top = currentNode.offsetTop + currentNode.offsetHeight + 1 + 'px';
        div.style.left = currentNode.offsetLeft + 'px';
        exitButton.style.paddingTop = "2%";
        exitButton.style.left = div.offsetWidth - exitButton.offsetWidth + 'px';
    }
    div.style.display = "none";
}


/***/ }),

/***/ "./src/startGuide.ts":
/*!***************************!*\
  !*** ./src/startGuide.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "webGuide": () => (/* binding */ webGuide)
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/init/index.ts");

function webGuide(input) {
    window.elements = [];
    window.popupDivs = [];
    window.numberOfElements = 0;
    window.currentPopupDivsIndex = 0;
    window.idCounter = 1;
    window.bodyElement = null;
    window.allHtmlElements = [];
    (0,_init__WEBPACK_IMPORTED_MODULE_0__.guideInit)(input);
}


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "webGuide": () => (/* reexport safe */ _startGuide__WEBPACK_IMPORTED_MODULE_0__.webGuide),
/* harmony export */   "guideInit": () => (/* reexport safe */ _init__WEBPACK_IMPORTED_MODULE_1__.guideInit),
/* harmony export */   "createPopupDiv": () => (/* reexport safe */ _popupDiv__WEBPACK_IMPORTED_MODULE_2__.createPopupDiv),
/* harmony export */   "nextWindow": () => (/* reexport safe */ _popupDiv__WEBPACK_IMPORTED_MODULE_2__.nextWindow),
/* harmony export */   "prevWindow": () => (/* reexport safe */ _popupDiv__WEBPACK_IMPORTED_MODULE_2__.prevWindow),
/* harmony export */   "setStyle": () => (/* reexport safe */ _popupDiv__WEBPACK_IMPORTED_MODULE_2__.setStyle),
/* harmony export */   "animationHide": () => (/* reexport safe */ _animations__WEBPACK_IMPORTED_MODULE_3__.animationHide),
/* harmony export */   "animationShow": () => (/* reexport safe */ _animations__WEBPACK_IMPORTED_MODULE_3__.animationShow),
/* harmony export */   "finishGuide": () => (/* reexport safe */ _animations__WEBPACK_IMPORTED_MODULE_3__.finishGuide)
/* harmony export */ });
/* harmony import */ var _startGuide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startGuide */ "./src/startGuide.ts");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./src/init/index.ts");
/* harmony import */ var _popupDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popupDiv */ "./src/popupDiv/index.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ "./src/animations/index.ts");





// @ts-ignore
window.webGuide = _startGuide__WEBPACK_IMPORTED_MODULE_0__.webGuide;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItZ3VpZGUvLi9zcmMvYW5pbWF0aW9ucy9hbmltYXRpb25IaWRlLnRzIiwid2VicGFjazovL3dlYi1ndWlkZS8uL3NyYy9hbmltYXRpb25zL2FuaW1hdGlvblNob3cudHMiLCJ3ZWJwYWNrOi8vd2ViLWd1aWRlLy4vc3JjL2FuaW1hdGlvbnMvZmluaXNoR3VpZGUudHMiLCJ3ZWJwYWNrOi8vd2ViLWd1aWRlLy4vc3JjL2FuaW1hdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd2ViLWd1aWRlLy4vc3JjL2luaXQvYXJyYW5nZU9yZGVyLnRzIiwid2VicGFjazovL3dlYi1ndWlkZS8uL3NyYy9pbml0L2d1aWRlSW5pdC50cyIsIndlYnBhY2s6Ly93ZWItZ3VpZGUvLi9zcmMvaW5pdC9pbmRleC50cyIsIndlYnBhY2s6Ly93ZWItZ3VpZGUvLi9zcmMvcG9wdXBEaXYvYnV0dG9ucy50cyIsIndlYnBhY2s6Ly93ZWItZ3VpZGUvLi9zcmMvcG9wdXBEaXYvY3JlYXRlUG9wdXBEaXYudHMiLCJ3ZWJwYWNrOi8vd2ViLWd1aWRlLy4vc3JjL3BvcHVwRGl2L2VsZW1lbnRzLnRzIiwid2VicGFjazovL3dlYi1ndWlkZS8uL3NyYy9wb3B1cERpdi9pbmRleC50cyIsIndlYnBhY2s6Ly93ZWItZ3VpZGUvLi9zcmMvcG9wdXBEaXYvbmV4dFdpbmRvdy50cyIsIndlYnBhY2s6Ly93ZWItZ3VpZGUvLi9zcmMvcG9wdXBEaXYvcHJldldpbmRvdy50cyIsIndlYnBhY2s6Ly93ZWItZ3VpZGUvLi9zcmMvcG9wdXBEaXYvc2V0U3R5bGUudHMiLCJ3ZWJwYWNrOi8vd2ViLWd1aWRlLy4vc3JjL3N0YXJ0R3VpZGUudHMiLCJ3ZWJwYWNrOi8vd2ViLWd1aWRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYi1ndWlkZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViLWd1aWRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViLWd1aWRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViLWd1aWRlLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU8sU0FBUyxhQUFhLENBQUMsT0FBb0I7SUFDOUMsSUFBTSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QixJQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRS9CLFlBQVk7SUFDWixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxFQUFFO1FBQzNCLFFBQVEsRUFBRSxHQUFHO1FBQUUsSUFBSSxZQUFDLEdBQUc7WUFDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPO2dCQUNuQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxHQUFHO2dCQUNqRSxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxHQUFHO2dCQUNqRSxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMs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LENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMvQyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbkMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztLQUMzRTtTQUFNLElBQUksUUFBUSxLQUFLLEdBQUcsRUFBRTtRQUN6QixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM1RSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM3RSxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbkMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztLQUMzRTtTQUFNLElBQUksUUFBUSxLQUFLLEdBQUcsRUFBRTtRQUN6QixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM1RSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyRSxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbkMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUksR0FBc0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztLQUN0RTtTQUFNO1FBQ0gsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDNUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDL0MsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ25DLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7S0FDM0U7SUFHRCxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDL0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzFDZ0M7QUFFMUIsU0FBUyxRQUFRLENBQUMsS0FBZTtJQUNwQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixNQUFNLENBQUMsU0FBUyxHQUFDLEVBQUUsQ0FBQztJQUNwQixNQUFNLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLE1BQU0sQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7SUFDakMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDckIsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsTUFBTSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsZ0RBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQixDQUFDOzs7Ozs7O1VDWEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05zQztBQUVUO0FBQ047QUFDSTtBQUNFO0FBRTdCLGFBQWE7QUFDYixNQUFNLENBQUMsUUFBUSxHQUFDLGlEQUFRLENBQUMiLCJmaWxlIjoiV2ViR3VpZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYW5pbWF0aW9uSGlkZShlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBbNDAsIDQwLCA0MCwgMF07XHJcbiAgICBjb25zdCBlbmQgPSBbMjU1LCAyNTUsIDI1NSwgMV07XHJcblxyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICAkKGVsZW1lbnQpLmFuaW1hdGUoeydhYWEnOiAwfSwgeyAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgZHVyYXRpb246IDUwMCwgc3RlcChub3cpIHsgICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYmEoJyArXHJcbiAgICAgICAgICAgICAgICBwYXJzZUludCgoc3RhcnRbMF0gKyAoZW5kWzBdIC0gc3RhcnRbMF0pICogbm93KS50b1N0cmluZygpKSArICcsJyArXHJcbiAgICAgICAgICAgICAgICBwYXJzZUludCgoc3RhcnRbMV0gKyAoZW5kWzFdIC0gc3RhcnRbMV0pICogbm93KS50b1N0cmluZygpKSArICcsJyArXHJcbiAgICAgICAgICAgICAgICBwYXJzZUludCgoc3RhcnRbMl0gKyAoZW5kWzJdIC0gc3RhcnRbMl0pICogbm93KS50b1N0cmluZygpKSArICcpJ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gYW5pbWF0aW9uU2hvdyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0ID0gWzQwLCA0MCwgNDAsIDBdO1xyXG4gICAgY29uc3QgZW5kID0gWzI1NSwgMjU1LCAyNTUsIDFdO1xyXG4vL0B0cy1pZ25vcmVcclxuICAgICQoZWxlbWVudCkuYW5pbWF0ZSh7J2FhYSc6IDF9LCB7Ly9AdHMtaWdub3JlXHJcbiAgICAgICAgZHVyYXRpb246IDUwMCwgc3RlcChub3cpIHsvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAncmdiYSgnICtcclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KChzdGFydFswXSArIChlbmRbMF0gLSBzdGFydFswXSkgKiBub3cpLnRvU3RyaW5nKCkpICsgJywnICtcclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KChzdGFydFsxXSArIChlbmRbMV0gLSBzdGFydFsxXSkgKiBub3cpLnRvU3RyaW5nKCkpICsgJywnICtcclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KChzdGFydFsyXSArIChlbmRbMl0gLSBzdGFydFsyXSkgKiBub3cpLnRvU3RyaW5nKCkpICsgJyknXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBmaW5pc2hHdWlkZSgpIHtcclxuICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICBwb3B1cERpdnMuZm9yRWFjaChkaXY9PntkaXYuc3R5bGUuZGlzcGxheT1cIm5vbmVcIn0pO1xyXG4gICAgICAgIGJvZHlFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBib2R5RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJhY2tncm91bmRcIik7XHJcbiAgICAgICAgYm9keUVsZW1lbnQuc3R5bGUuY29sb3IgPSBib2R5RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbG9yXCIpO1xyXG4gICAgICAgIGJvZHlFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICBib2R5RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWJhY2tncm91bmRcIik7XHJcbiAgICAgICAgYm9keUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1jb2xvclwiKTtcclxuICAgICAgICAvLyBib2R5RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCI7XHJcbiAgICAgICAgYWxsSHRtbEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1iYWNrZ3JvdW5kXCIpO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbG9yXCIpO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWJhY2tncm91bmRcIik7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1jb2xvclwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sNDAwKTtcclxufSIsImV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9uSGlkZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9uU2hvdyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZmluaXNoR3VpZGUnOyIsImV4cG9ydCBmdW5jdGlvbiBhcnJhbmdlT3JkZXIoYXJyYXk6SFRNTEVsZW1lbnRbXSl7XHJcbiAgICBmb3IgKHZhciBpPTE7aTw9bnVtYmVyT2ZFbGVtZW50cztpKyspXHJcbiAgICAgICAgZm9yKHZhciBqPTA7ajxhcnJheS5sZW5ndGg7aisrKVxyXG4gICAgICAgICAgICBpZihhcnJheVtqXS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWd1aWRlLXN0ZXBcIikpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhcnJheVtqXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWd1aWRlLXN0ZXBcIikgPT09IGkudG9TdHJpbmcoKSkgLy9wcm9ibGVtIHMgcG9yb3ZuYW5pbSBib2xvIHRyZWJhIHRvc3RyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaChhcnJheVtqXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgOiBNaXNzaW5nIGd1aWRlLXN0ZXAgaW4geW91ciBIVE1MIGVsZW1lbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxufSIsImltcG9ydCB7YXJyYW5nZU9yZGVyfSBmcm9tIFwiLi9hcnJhbmdlT3JkZXJcIjtcclxuaW1wb3J0IHtjcmVhdGVQb3B1cERpdn0gZnJvbSBcIi4uL3BvcHVwRGl2XCI7XHJcbmltcG9ydCB7YW5pbWF0aW9uU2hvd30gZnJvbSBcIi4uL2FuaW1hdGlvbnNcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ3VpZGVJbml0KGlucHV0OiBzdHJpbmdbXSkge1xyXG4gICAgbGV0IGN1cnJlbnROb2RlLCBuaSA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UKTtcclxuXHJcbiAgICBudW1iZXJPZkVsZW1lbnRzID0gMDtcclxuICAgIGN1cnJlbnRQb3B1cERpdnNJbmRleCA9IDA7XHJcbiAgICBpZENvdW50ZXIgPSAxO1xyXG5cclxuICAgIGxldCBzZWFyY2g6IG51bWJlcjtcclxuICAgIGNvbnN0IHRtcEFycmF5ID0gW107XHJcbiAgICB3aGlsZSAoY3VycmVudE5vZGUgPSBuaS5uZXh0Tm9kZSgpIGFzIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtZ3VpZGVcIikgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHRtcEFycmF5LnB1c2goY3VycmVudE5vZGUpO1xyXG4gICAgICAgICAgICBudW1iZXJPZkVsZW1lbnRzKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VhcmNoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGFsbEh0bWxFbGVtZW50cy5wdXNoKGN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS1iYWNrR3JvdW5kXCIsIGdldENvbXB1dGVkU3R5bGUoY3VycmVudE5vZGUpLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tHcm91bmQnKSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnNldEF0dHJpYnV0ZShcImRhdGEtY29sb3JcIiwgZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSkuZ2V0UHJvcGVydHlWYWx1ZSgnY29sb3InKSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMjU1LDI1NSwyNTUsMClcIjtcclxuICAgICAgICAgICAgY3VycmVudE5vZGUuc3R5bGUuY29sb3IgPSBcIiMwMDAwMDBcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS50YWdOYW1lID09PSBcIkJPRFlcIikge1xyXG4gICAgICAgICAgICBib2R5RWxlbWVudCA9IGN1cnJlbnROb2RlO1xyXG4gICAgICAgICAgICBib2R5RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJhY2tHcm91bmRcIiwgZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSkuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja0dyb3VuZCcpKTtcclxuICAgICAgICAgICAgYm9keUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2xvclwiLCBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKS5nZXRQcm9wZXJ0eVZhbHVlKCdjb2xvcicpKTtcclxuICAgICAgICAgICAgY3VycmVudE5vZGUuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLCAwLCAwLCAwLjg1KVwiO1xyXG4gICAgICAgICAgICBzZWFyY2ggPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXJyYW5nZU9yZGVyKHRtcEFycmF5KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZFbGVtZW50czsgaSsrKVxyXG4gICAgICAgIGNyZWF0ZVBvcHVwRGl2KGVsZW1lbnRzW2ldLCBpbnB1dCk7XHJcblxyXG4gICAgcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgJChwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfSwgNTAwKTtcclxuICAgIGFuaW1hdGlvblNob3coZWxlbWVudHNbY3VycmVudFBvcHVwRGl2c0luZGV4XSk7XHJcblxyXG59IiwiZXhwb3J0IHtndWlkZUluaXR9IGZyb20gJy4vZ3VpZGVJbml0JzsiLCJpbXBvcnQge25leHRXaW5kb3d9IGZyb20gXCIuL25leHRXaW5kb3dcIjtcclxuaW1wb3J0IHtwcmV2V2luZG93fSBmcm9tIFwiLi9wcmV2V2luZG93XCI7XHJcbmltcG9ydCB7ZmluaXNoR3VpZGV9IGZyb20gXCIuLi9hbmltYXRpb25zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV4dEJ1dHRvbihuZXdEaXYpe1xyXG4gICAgY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKG5ld0Rpdi5pZCA9PT0gXCJwb3B1cERpdlwiICsgbnVtYmVyT2ZFbGVtZW50cylcclxuICAgICAgICBuZXh0QnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRmluaXNoXCIpKTtcclxuICAgIGVsc2VcclxuICAgICAgICBuZXh0QnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTmV4dFwiKSk7XHJcblxyXG4gICAgbmV4dEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIxN3B4XCI7XHJcbiAgICBuZXh0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgbmV4dEJ1dHRvbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjUwcHhcIjtcclxuICAgIG5leHRCdXR0b24uaWQ9XCJuZXh0QnV0dG9uXCIrKGlkQ291bnRlci0xKTtcclxuXHJcbiAgICBuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7bmV4dFdpbmRvdygpO30pO1xyXG5cclxuICAgIHJldHVybiBuZXh0QnV0dG9uO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJldkJ1dHRvbihuZXdEaXYpe1xyXG4gICAgY29uc3QgcHJldkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBwcmV2QnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiUHJldlwiKSk7XHJcbiAgICBwcmV2QnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjVweFwiO1xyXG4gICAgcHJldkJ1dHRvbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjUwcHhcIjtcclxuICAgIHByZXZCdXR0b24uaWQ9XCJwcmV2QnV0dG9uXCIrKGlkQ291bnRlci0xKTtcclxuICAgIHByZXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7cHJldldpbmRvdygpO30pO1xyXG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKHByZXZCdXR0b24pO1xyXG4gICAgcmV0dXJuIHByZXZCdXR0b247XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFeGl0QnV0dG9uKCl7XHJcbiAgICBjb25zdCBleGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGV4aXRCdXR0b24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJYXCIpKTtcclxuICAgIGV4aXRCdXR0b24uaWQ9XCJleGl0QnV0dG9uXCIrKGlkQ291bnRlci0xKTtcclxuICAgIGV4aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBmaW5pc2hHdWlkZSgpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZXhpdEJ1dHRvbjtcclxufVxyXG5cclxuIiwiaW1wb3J0IHtzZXRTdHlsZX0gZnJvbSBcIi4vc2V0U3R5bGVcIjtcclxuaW1wb3J0IHtjcmVhdGVQYXJhZ3JhcGgsIGNyZWF0ZVByb2dyZXNzQmFyfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xyXG5pbXBvcnQge2NyZWF0ZUV4aXRCdXR0b24sIGNyZWF0ZU5leHRCdXR0b24sIGNyZWF0ZVByZXZCdXR0b259IGZyb20gXCIuL2J1dHRvbnNcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUG9wdXBEaXYoY3VycmVudE5vZGU6IEhUTUxFbGVtZW50LCBpbnB1dE1lc3NhZ2U6IHN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgbmV3RGl2LmlkID0gXCJwb3B1cERpdlwiICsgaWRDb3VudGVyO1xyXG4gICAgcG9wdXBEaXZzLnB1c2gobmV3RGl2KTtcclxuICAgIGlkQ291bnRlcisrO1xyXG5cclxuICAgIGNvbnN0IGV4aXRCdXR0b24gPSBjcmVhdGVFeGl0QnV0dG9uKCk7XHJcbiAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoZXhpdEJ1dHRvbik7XHJcblxyXG4gICAgY29uc3QgbmV3UCA9IGNyZWF0ZVBhcmFncmFwaChpbnB1dE1lc3NhZ2UpO1xyXG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld1ApO1xyXG5cclxuICAgIGNvbnN0IG5leHRCdXR0b249Y3JlYXRlTmV4dEJ1dHRvbihuZXdEaXYpO1xyXG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKG5leHRCdXR0b24pO1xyXG5cclxuXHJcbiAgICBpZiAobmV3RGl2LmlkICE9PSBcInBvcHVwRGl2MVwiKSB7XHJcbiAgICAgICAgY29uc3QgcHJldkJ1dHRvbiA9IGNyZWF0ZVByZXZCdXR0b24obmV3RGl2KTtcclxuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQocHJldkJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBjcmVhdGVQcm9ncmVzc0JhcigpO1xyXG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKHByb2dyZXNzKTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld0Rpdik7XHJcblxyXG4gICAgc2V0U3R5bGUobmV3RGl2LCBjdXJyZW50Tm9kZSwgZXhpdEJ1dHRvbik7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyZXNzQmFyKCl7XHJcbiAgICBjb25zdCBwcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcm9ncmVzc1wiKSBhcyBIVE1MUHJvZ3Jlc3NFbGVtZW50O1xyXG4gICAgcHJvZ3Jlc3Muc3R5bGUubWFyZ2luTGVmdCA9IFwiNXB4XCI7XHJcbiAgICBwcm9ncmVzcy52YWx1ZSA9IGlkQ291bnRlciAtIDI7XHJcbiAgICBwcm9ncmVzcy5tYXggPSBlbGVtZW50cy5sZW5ndGg7XHJcbiAgICByZXR1cm4gcHJvZ3Jlc3M7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFyYWdyYXBoKGlucHV0TWVzc2FnZSkge1xyXG4gICAgY29uc3QgbmV3UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgaWYgKGlucHV0TWVzc2FnZVtpZENvdW50ZXIgLSAyXSAhPT0gbnVsbCAmJiBpbnB1dE1lc3NhZ2VbaWRDb3VudGVyIC0gMl0gIT09IHVuZGVmaW5lZClcclxuICAgICAgICBuZXdQLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGlucHV0TWVzc2FnZVtpZENvdW50ZXIgLSAyXSkpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIG5ld1AuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJOTyBNRVNTQUdFIFdSSVRURU5cIikpO1xyXG5cclxuICAgIG5ld1Auc3R5bGUubWFyZ2luTGVmdCA9IFwiMTJweFwiO1xyXG4gICAgbmV3UC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMTJweFwiO1xyXG4gICAgbmV3UC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjBcIjtcclxuICAgIG5ld1Auc3R5bGUuY29sb3I9XCJibGFja1wiO1xyXG4gICAgbmV3UC5pZD1cInBcIisoaWRDb3VudGVyLTEpO1xyXG5cclxuICAgIHJldHVybiBuZXdQO1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vY3JlYXRlUG9wdXBEaXYnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NldFN0eWxlJztcclxuZXhwb3J0ICogZnJvbSAnLi9uZXh0V2luZG93JztcclxuZXhwb3J0ICogZnJvbSAnLi9wcmV2V2luZG93JzsiLCJpbXBvcnQge2FuaW1hdGlvbkhpZGUsIGFuaW1hdGlvblNob3csIGZpbmlzaEd1aWRlfSBmcm9tIFwiLi4vYW5pbWF0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5leHRXaW5kb3coKXtcclxuICAgIGlmIChjdXJyZW50UG9wdXBEaXZzSW5kZXggPj0gcG9wdXBEaXZzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICBmaW5pc2hHdWlkZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAkKHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC4wXHJcbiAgICAgICAgfSwgNTAwKTtcclxuXHJcblxyXG4gICAgICAgIGFuaW1hdGlvbkhpZGUoZWxlbWVudHNbY3VycmVudFBvcHVwRGl2c0luZGV4XSk7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRCdXR0b25cIisoY3VycmVudFBvcHVwRGl2c0luZGV4KzEpKSkuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmV2QnV0dG9uXCIrKGN1cnJlbnRQb3B1cERpdnNJbmRleCsyKSkpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgYW5pbWF0aW9uU2hvdyhlbGVtZW50c1tjdXJyZW50UG9wdXBEaXZzSW5kZXggKyAxXSk7XHJcblxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQb3B1cERpdnNJbmRleCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHBvcHVwRGl2c1swXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXggLSAxXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuXHJcblxyXG4gICAgICAgIGN1cnJlbnRQb3B1cERpdnNJbmRleCsrO1xyXG5cclxuICAgICAgICBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuXHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgJChwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICB9LCA1MDApO1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7YW5pbWF0aW9uSGlkZSwgYW5pbWF0aW9uU2hvd30gZnJvbSBcIi4uL2FuaW1hdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmV2V2luZG93KCl7XHJcbiAgICBpZiAoY3VycmVudFBvcHVwRGl2c0luZGV4IDwgMSkge1xyXG4gICAgICAgIGFsZXJ0KFwia29uaWVjXCIpO1xyXG4gICAgICAgIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXgtLV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4LS1dLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgICAvL1xyXG4gICAgICAgIC8vIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICAgLy9cclxuXHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgJChwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMFxyXG4gICAgICAgIH0sIDUwMCk7XHJcblxyXG5cclxuICAgICAgICBhbmltYXRpb25TaG93KGVsZW1lbnRzW2N1cnJlbnRQb3B1cERpdnNJbmRleCAtIDFdKTtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dEJ1dHRvblwiKyhjdXJyZW50UG9wdXBEaXZzSW5kZXgpKSkuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldkJ1dHRvblwiKyhjdXJyZW50UG9wdXBEaXZzSW5kZXgrMSkpKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgYW5pbWF0aW9uSGlkZShlbGVtZW50c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdKTtcclxuXHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4ICsgMV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcblxyXG5cclxuICAgICAgICBjdXJyZW50UG9wdXBEaXZzSW5kZXgtLTtcclxuXHJcbiAgICAgICAgcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcblxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICQocG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0pLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZShkaXY6IEhUTUxFbGVtZW50LCBjdXJyZW50Tm9kZTogSFRNTEVsZW1lbnQsIGV4aXRCdXR0b246IEhUTUxFbGVtZW50KSB7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IGN1cnJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtZ3VpZGUtcG9zaXRpb25cIik7XHJcbiAgICBkaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBkaXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIyMHB4XCI7XHJcbiAgICBkaXYuc3R5bGUubWF4V2lkdGggPSBcIjIwJVwiO1xyXG4gICAgZGl2LnN0eWxlLm1pbldpZHRoID0gXCIzMDBweFwiO1xyXG4gICAgZGl2LnN0eWxlLndpZHRoID0gXCJhdXRvXCI7XHJcbiAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XHJcbiAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgZGl2LnN0eWxlLnpJbmRleCA9IFwiMjAwXCI7XHJcbiAgICBkaXYuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG5cclxuXHJcbiAgICBleGl0QnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSBcIiNmZmZmZmZcIlxyXG4gICAgZXhpdEJ1dHRvbi5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuICAgIGV4aXRCdXR0b24uc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgZXhpdEJ1dHRvbi5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuXHJcbiAgICBpZiAocG9zaXRpb24gPT09IFwiVVwiKSB7XHJcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IGN1cnJlbnROb2RlLm9mZnNldFRvcCAtIGRpdi5vZmZzZXRIZWlnaHQgLSA0ICsgJ3B4JztcclxuICAgICAgICBkaXYuc3R5bGUubGVmdCA9IGN1cnJlbnROb2RlLm9mZnNldExlZnQgKyAncHgnO1xyXG4gICAgICAgIGV4aXRCdXR0b24uc3R5bGUucGFkZGluZ1RvcCA9IFwiMiVcIjtcclxuICAgICAgICBleGl0QnV0dG9uLnN0eWxlLmxlZnQgPSBkaXYub2Zmc2V0V2lkdGggLSBleGl0QnV0dG9uLm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09IFwiUlwiKSB7XHJcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IGN1cnJlbnROb2RlLm9mZnNldFRvcCAtIGN1cnJlbnROb2RlLm9mZnNldEhlaWdodCAvIDIgKyAncHgnO1xyXG4gICAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gY3VycmVudE5vZGUub2Zmc2V0TGVmdCArIGN1cnJlbnROb2RlLm9mZnNldFdpZHRoICsgMSArICdweCc7XHJcbiAgICAgICAgZXhpdEJ1dHRvbi5zdHlsZS5wYWRkaW5nVG9wID0gXCIyJVwiO1xyXG4gICAgICAgIGV4aXRCdXR0b24uc3R5bGUubGVmdCA9IGRpdi5vZmZzZXRXaWR0aCAtIGV4aXRCdXR0b24ub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gXCJMXCIpIHtcclxuICAgICAgICBkaXYuc3R5bGUudG9wID0gY3VycmVudE5vZGUub2Zmc2V0VG9wIC0gY3VycmVudE5vZGUub2Zmc2V0SGVpZ2h0IC8gMiArICdweCc7XHJcbiAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSBjdXJyZW50Tm9kZS5vZmZzZXRMZWZ0IC0gZGl2Lm9mZnNldFdpZHRoIC0gMSArICdweCc7XHJcbiAgICAgICAgZXhpdEJ1dHRvbi5zdHlsZS5wYWRkaW5nVG9wID0gXCIyJVwiO1xyXG4gICAgICAgIGV4aXRCdXR0b24uc3R5bGUubGVmdCA9IChkaXYgYXMgSFRNTERpdkVsZW1lbnQpLnN0eWxlLndpZHRoICsgJ3B4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IGN1cnJlbnROb2RlLm9mZnNldFRvcCArIGN1cnJlbnROb2RlLm9mZnNldEhlaWdodCArIDEgKyAncHgnO1xyXG4gICAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gY3VycmVudE5vZGUub2Zmc2V0TGVmdCArICdweCc7XHJcbiAgICAgICAgZXhpdEJ1dHRvbi5zdHlsZS5wYWRkaW5nVG9wID0gXCIyJVwiO1xyXG4gICAgICAgIGV4aXRCdXR0b24uc3R5bGUubGVmdCA9IGRpdi5vZmZzZXRXaWR0aCAtIGV4aXRCdXR0b24ub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59IiwiaW1wb3J0IHtndWlkZUluaXR9IGZyb20gXCIuL2luaXRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3ZWJHdWlkZShpbnB1dDogc3RyaW5nW10pIHtcclxuICAgIHdpbmRvdy5lbGVtZW50cyA9IFtdO1xyXG4gICAgd2luZG93LnBvcHVwRGl2cz1bXTtcclxuICAgIHdpbmRvdy5udW1iZXJPZkVsZW1lbnRzID0gMDtcclxuICAgIHdpbmRvdy5jdXJyZW50UG9wdXBEaXZzSW5kZXggPSAwO1xyXG4gICAgd2luZG93LmlkQ291bnRlciA9IDE7XHJcbiAgICB3aW5kb3cuYm9keUVsZW1lbnQgPSBudWxsO1xyXG4gICAgd2luZG93LmFsbEh0bWxFbGVtZW50cyA9IFtdO1xyXG4gICAgZ3VpZGVJbml0KGlucHV0KTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHt3ZWJHdWlkZX0gZnJvbSBcIi4vc3RhcnRHdWlkZVwiO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9zdGFydEd1aWRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9pbml0JztcclxuZXhwb3J0ICogZnJvbSAnLi9wb3B1cERpdic7XHJcbmV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9ucyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbndpbmRvdy53ZWJHdWlkZT13ZWJHdWlkZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==