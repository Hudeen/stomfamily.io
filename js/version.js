let previousFontSizes = {};
let imagesAreOn = true; // Track the state of the images

function toggleBlock(blockId) {
    const block = document.getElementById(blockId);

    if (block) {
        block.classList.toggle("hidden");
        if (block.classList.contains("hidden")) {
            resetFontSizes();
            defaultButton.click();
            turnOn();
            toggleColorOff();
        } else {
            removeAllStyles();
        }
    }
}

function changeFontSize(fontSize) {
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
}

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

function removeAllStyles() {
    const elementsToUpdate = document.querySelectorAll("h1, h2, a, p, span");

    elementsToUpdate.forEach(function (element) {
        element.style.removeProperty("font-size");
        delete element.dataset.fontSize; // Remove the data-font-size attribute
        previousFontSizes = {}; // Reset the previousFontSizes object
    });

}

// Изменение цветов на странице

const defaultButton = document.getElementById("defaultButton");
const blackButton = document.getElementById("blackButton");
const blueButton = document.getElementById("blueButton");

defaultButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "";
    applyStylesToElements("h1, h2, a, p, span, li", "");
    document.querySelector("footer").style.backgroundColor = "";
});

blackButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "#000000";
    applyStylesToElements("h1, h2, a, p, span, li", "#ffffff");
    document.querySelector("footer").style.backgroundColor = "#000000";
});

blueButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "#00008b";
    applyStylesToElements("h1, h2, a, p, span, li", "#ff0");
    document.querySelector("footer").style.backgroundColor = "#00008b";
});


function applyStylesToElements(selector, color) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        if (element.tagName === "H1" || element.tagName === "H2" || element.tagName === "A" || element.tagName === "P" || element.tagName === "SPAN" || element.tagName === "LI" || element.tagName === "FOOTER") {
            element.style.color = color;
        }
    });
}

// Выключение, включение, режим ч/б

function turnOff() {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    imagesAreOn = false;
}

function turnOn() {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "block";
    }
    imagesAreOn = true;
}

function toggleColor() {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        let image = images[i];
        if (image.style.filter === "grayscale(100%)") {
            image.style.filter = "none";
        } else {
            image.style.filter = "grayscale(100%)";
        }
    }
}

function toggleColorOff() {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        let image = images[i];
        if (image.style.filter === "grayscale(100%)") {
            image.style.filter = "none";
        }
    }
}