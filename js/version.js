const fontSizeButtons = document.querySelectorAll(".fontSizeButton");
let previousFontSizes = {}; // To store previous font sizes

function toggleBlock() {
    const block = document.getElementById("block");
    block.classList.toggle("hidden");

    if (block.classList.contains("hidden")) {
        resetFontSizes();
    } else {
        removeAllStyles();
    }
}

fontSizeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const fontSize = parseInt(button.dataset.fontSize);
        const elementsToUpdate = document.querySelectorAll("h1, h2, a, p, span");

        elementsToUpdate.forEach(function (element) {
            const tagName = element.tagName.toLowerCase();

            if (!previousFontSizes[tagName]) {
                previousFontSizes[tagName] = parseInt(window.getComputedStyle(element).fontSize);
            }

            const currentFontSize = parseInt(window.getComputedStyle(element).fontSize);

            if (currentFontSize !== previousFontSizes[tagName] + fontSize) {
                element.style.fontSize = (previousFontSizes[tagName] + fontSize) + "px";
            }
        });
    });
});

function resetFontSizes() {
    const elementsToUpdate = document.querySelectorAll("h1, h2, a, p, span");

    elementsToUpdate.forEach(function (element) {
        const tagName = element.tagName.toLowerCase();

        if (previousFontSizes[tagName]) {
            element.style.fontSize = previousFontSizes[tagName] + "px";
        } else {
            element.style.removeProperty("font-size");
        }

        delete element.dataset.fontSize; // Remove the data-font-size attribute
        previousFontSizes = {}; // Reset the previousFontSizes object
    });
}


//change color on the website

const defaultButton = document.getElementById("defaultButton");
const blackButton = document.getElementById("blackButton");
const blueButton = document.getElementById("blueButton");

defaultButton.addEventListener("click", function() {
  document.body.style.backgroundColor = "#ffffff";
  document.body.style.color = "#000000";
});

blackButton.addEventListener("click", function() {
  document.body.style.backgroundColor = "#000000";
  document.body.style.color = "#ffffff";
});

blueButton.addEventListener("click", function() {
  document.body.style.backgroundColor = "#00008b";
  document.body.style.color = "#ff0";
});