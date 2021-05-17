import {guideInit} from "./init";

export function webGuide(input: string[]) {
    window.elements = [];
    window.popupDivs=[];
    window.numberOfElements = 0;
    window.currentPopupDivsIndex = 0;
    window.idCounter = 1;
    window.bodyElement = null;
    window.allHtmlElements = [];
    guideInit(input);
}

// document.getElementById("guide").addEventListener("click",()=>guide(["prva", "druha", "tretia", "stvrta"]));