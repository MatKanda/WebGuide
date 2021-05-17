import {nextWindow} from "./nextWindow";
import {prevWindow} from "./prevWindow";
import {finishGuide} from "../animations";

export function createNextButton(newDiv){
    const nextButton = document.createElement("button") as HTMLButtonElement;

    if (newDiv.id === "popupDiv" + numberOfElements)
        nextButton.appendChild(document.createTextNode("Finish"));
    else
        nextButton.appendChild(document.createTextNode("Next"));

    nextButton.style.marginLeft = "17px";
    nextButton.style.display = "inline-block";
    nextButton.style.borderRadius = "50px";
    nextButton.id="nextButton"+(idCounter-1);

    nextButton.addEventListener("click", () => {nextWindow();});

    return nextButton;
}

export function createPrevButton(newDiv){
    const prevButton = document.createElement("button");
    prevButton.appendChild(document.createTextNode("Prev"));
    prevButton.style.marginLeft = "5px";
    prevButton.style.borderRadius = "50px";
    prevButton.id="prevButton"+(idCounter-1);
    prevButton.addEventListener('click', () => {prevWindow();});
    newDiv.appendChild(prevButton);
    return prevButton;
}

export function createExitButton(){
    const exitButton = document.createElement("button") as HTMLButtonElement;
    exitButton.appendChild(document.createTextNode("X"));
    exitButton.id="exitButton"+(idCounter-1);
    exitButton.addEventListener("click", () => {
        finishGuide();
    });
    return exitButton;
}

