import {animationHide, animationShow, finishGuide} from "../animations";

export function nextWindow(){
    if (currentPopupDivsIndex >= popupDivs.length - 1) {
        finishGuide();
    } else {
        //@ts-ignore
        $(popupDivs[currentPopupDivsIndex]).animate({
            opacity: 0.0
        }, 500);


        animationHide(elements[currentPopupDivsIndex]);
        (<HTMLInputElement> document.getElementById("nextButton"+(currentPopupDivsIndex+1))).disabled = true;
        (<HTMLInputElement> document.getElementById("prevButton"+(currentPopupDivsIndex+2))).disabled = false;
        animationShow(elements[currentPopupDivsIndex + 1]);


        setTimeout(() => {
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