export function finishGuide() {
    setTimeout(()=>{
        popupDivs.forEach(div=>{div.style.display="none"});
        bodyElement.style.background = bodyElement.getAttribute("data-background");
        bodyElement.style.color = bodyElement.getAttribute("data-color");
        bodyElement.style.opacity = "1";
        bodyElement.removeAttribute("data-background");
        bodyElement.removeAttribute("data-color");
        allHtmlElements.forEach(element => {
            element.style.background = element.getAttribute("data-background");
            element.style.color = element.getAttribute("data-color");
            element.style.opacity = "1";
            element.removeAttribute("data-background");
            element.removeAttribute("data-color");
        });
    },400);
}
