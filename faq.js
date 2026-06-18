
const firstButton = document.querySelector('.first-button');
const firstAnswer = document.querySelector('.first-answer');

const secondButton = document.querySelector('.second-button');
const secondAnswer = document.querySelector('.second-answer');

const thirdButton = document.querySelector('.third-button');
const thirdAnswer = document.querySelector('.third-answer');

const fourthButton = document.querySelector('.fourth-button');
const fourthAnswer = document.querySelector('.fourth-answer');

const containerElement = document.querySelector('.faq-container');
const computedHeightString = window.getComputedStyle(containerElement).height;
const currentHeightNumber = parseInt(computedHeightString);

// height of 4 line answers is 80 pixels
// height of 5 lines is 100 pixels
firstButton.addEventListener('click', function (event) {
    let source = firstButton.getAttribute('src');
    let containerElement = document.querySelector('.faq-container');
    let computedHeightString = window.getComputedStyle(containerElement).height;
    let currentHeightNumber = parseInt(computedHeightString);

    if (source === "assets/icon-plus.svg" ) {
      containerElement.style.height = `${currentHeightNumber + 100}px`;
      firstButton.src = "assets/icon-minus.svg";
      firstAnswer.innerText = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";
    }
    else if (source === "assets/icon-minus.svg") {
      firstButton.src = "assets/icon-plus.svg";
      firstAnswer.innerText = "";
      containerElement.style.height = `${currentHeightNumber - 100}px`;
    }
})

secondButton.addEventListener('click', function (event) {
    let source = secondButton.getAttribute('src');
    let containerElement = document.querySelector('.faq-container');
    let computedHeightString = window.getComputedStyle(containerElement).height;
    let currentHeightNumber = parseInt(computedHeightString);

    if (source === "assets/icon-plus.svg" ) {
      containerElement.style.height = `${currentHeightNumber + 100}px`;
      secondButton.src = "assets/icon-minus.svg";
      secondAnswer.innerText = "The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference.";
    }
    else if (source === "assets/icon-minus.svg") {
      secondButton.src = "assets/icon-plus.svg";
      secondAnswer.innerText = "";
      containerElement.style.height = `${currentHeightNumber - 100}px`;
    }
})

thirdButton.addEventListener('click', function (event) {
    let source = thirdButton.getAttribute('src');
    let containerElement = document.querySelector('.faq-container');
    let computedHeightString = window.getComputedStyle(containerElement).height;
    let currentHeightNumber = parseInt(computedHeightString);

    if (source === "assets/icon-plus.svg" ) {
      containerElement.style.height = `${currentHeightNumber + 100}px`;
      thirdButton.src = "assets/icon-minus.svg";
      thirdAnswer.innerText = "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!";
    }
    else if (source === "assets/icon-minus.svg") {
      thirdButton.src = "assets/icon-plus.svg";
      thirdAnswer.innerText = "";
      containerElement.style.height = `${currentHeightNumber - 100}px`;
    }
})

fourthButton.addEventListener('click', function (event) {
    let source = fourthButton.getAttribute('src');
    let containerElement = document.querySelector('.faq-container');
    let computedHeightString = window.getComputedStyle(containerElement).height;
    let currentHeightNumber = parseInt(computedHeightString);

    if (source === "assets/icon-plus.svg" ) {
      containerElement.style.height = `${currentHeightNumber + 100}px`;
      fourthButton.src = "assets/icon-minus.svg";
      fourthAnswer.innerText = "The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated 'help' channel! If you haven't joined yet, you can get an invite to our Discord server here.";
    }
    else if (source === "assets/icon-minus.svg") {
      fourthButton.src = "assets/icon-plus.svg";
      fourthAnswer.innerText = "";
      containerElement.style.height = `${currentHeightNumber - 100}px`;
    }
})