export function createProgressBar(){
    const progress = document.createElement("progress") as HTMLProgressElement;
    progress.style.marginLeft = "5px";
    progress.value = idCounter - 2;
    progress.max = elements.length;
    return progress;
}


export function createParagraph(inputMessage) {
    const newP = document.createElement("p") as HTMLParagraphElement;
    if (inputMessage[idCounter - 2] !== null && inputMessage[idCounter - 2] !== undefined)
        newP.appendChild(document.createTextNode(inputMessage[idCounter - 2]));
    else
        newP.appendChild(document.createTextNode("NO MESSAGE WRITTEN"));

    newP.style.marginLeft = "12px";
    newP.style.marginRight = "12px";
    newP.style.marginTop = "0";
    newP.style.color="black";
    newP.id="p"+(idCounter-1);

    return newP;
}
