import {setStyle} from "./setStyle";
import {createParagraph, createProgressBar} from "./elements";
import {createExitButton, createNextButton, createPrevButton} from "./buttons";


export function createPopupDiv(currentNode: HTMLElement, inputMessage: string[]) {
    const newDiv = document.createElement("div") as HTMLDivElement;
    newDiv.id = "popupDiv" + idCounter;
    popupDivs.push(newDiv);
    idCounter++;

    const exitButton = createExitButton();
    newDiv.appendChild(exitButton);

    const newP = createParagraph(inputMessage);
    newDiv.appendChild(newP);

    const nextButton=createNextButton(newDiv);
    newDiv.appendChild(nextButton);


    if (newDiv.id !== "popupDiv1") {
        const prevButton = createPrevButton(newDiv);
        newDiv.appendChild(prevButton);
    }

    const progress = createProgressBar();
    newDiv.appendChild(progress);

    document.body.appendChild(newDiv);

    setStyle(newDiv, currentNode, exitButton);
}
