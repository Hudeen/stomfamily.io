let previousFontSizes = {};

function toggleBlock(blockId) {
    const block = document.getElementById(blockId);

    if (block) {
        block.classList.toggle("hidden");
        if (block.classList.contains("hidden")) {
            resetFontSizes();
            defaultButton.click();
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

// Выключение, включение, режим ч/б

function turnOff() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
}

function turnOn() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = "block";
    }
}

function toggleColor() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        if (image.style.filter === "grayscale(100%)") {
            image.style.filter = "none";
        } else {
            image.style.filter = "grayscale(100%)";
        }
    }
}