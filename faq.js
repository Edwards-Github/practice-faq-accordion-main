
const firstButton = document.querySelector('.first-button');
const firstAnswer = document.querySelector('.first-answer');

const secondButton = document.querySelector('.second-button');
const secondAnswer = document.querySelector('.second-answer');

const thirdButton = document.querySelector('.third-button');
const thirdAnswer = document.querySelector('.third-answer');

const fourthButton = document.querySelector('.fourth-button');
const fourthAnswer = document.querySelector('.fourth-answer');

firstButton.addEventListener('click', function (event) {
    let source = firstButton.getAttribute('src');
    if (source === "assets/icon-plus.svg" ) {
      firstButton.src = "assets/icon-minus.svg";
      firstAnswer.innerText = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";
    }
    else if (source === "assets/icon-minus.svg") {
      firstButton.src = "assets/icon-plus.svg";
      firstAnswer.innerText = "";
    }
})

secondButton.addEventListener('click', function (event) {
    let source = secondButton.getAttribute('src');
    if (source === "assets/icon-plus.svg" ) {
      secondButton.src = "assets/icon-minus.svg";
      secondAnswer.innerText = "The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference.";
    }
    else if (source === "assets/icon-minus.svg") {
      secondButton.src = "assets/icon-plus.svg";
      secondAnswer.innerText = "";
    }
})

thirdButton.addEventListener('click', function (event) {
    let source = thirdButton.getAttribute('src');
    if (source === "assets/icon-plus.svg" ) {
      thirdButton.src = "assets/icon-minus.svg";
      thirdAnswer.innerText = "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!";
    }
    else if (source === "assets/icon-minus.svg") {
      thirdButton.src = "assets/icon-plus.svg";
      thirdAnswer.innerText = "";
    }
})

fourthButton.addEventListener('click', function (event) {
    let source = fourthButton.getAttribute('src');
    if (source === "assets/icon-plus.svg" ) {
      fourthButton.src = "assets/icon-minus.svg";
      fourthAnswer.innerText = "The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated 'help' channel! If you haven't joined yet, you can get an invite to our Discord server here.";
    }
    else if (source === "assets/icon-minus.svg") {
      fourthButton.src = "assets/icon-plus.svg";
      fourthAnswer.innerText = "";
    }
})