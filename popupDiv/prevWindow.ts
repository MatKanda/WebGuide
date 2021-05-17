import {animationHide, animationShow} from "../animations";

export function prevWindow(){
    if (currentPopupDivsIndex < 1) {
        alert("koniec");
        popupDivs[currentPopupDivsIndex--].style.display = "none";
    } else {
        // popupDivs[currentPopupDivsIndex--].style.display = "none";   //
        // popupDivs[currentPopupDivsIndex].style.display = "block";   //

        //@ts-ignore
        $(popupDivs[currentPopupDivsIndex]).animate({
            opacity: 0.0
        }, 500);


        animationShow(elements[currentPopupDivsIndex - 1]);
        (<HTMLInputElement> document.getElementById("nextButton"+(currentPopupDivsIndex))).disabled = false;
        (<HTMLInputElement> document.getElementById("prevButton"+(currentPopupDivsIndex+1))).disabled = true;
        animationHide(elements[currentPopupDivsIndex]);


        setTimeout(() => {
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