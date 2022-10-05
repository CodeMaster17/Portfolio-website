// for changing light and dark mode

let lightMode = document.getElementById("lightMode");
let darkMode = document.getElementById("darkMode");

let outerContainer = document.getElementById("outerContainer");

let myNameHeading = document.getElementById("myNameHeading");

let staticText = document.getElementById("staticText");

let resumeBtn = document.getElementById("resumeBtn");
let resumeBtnTxt = document.getElementById("resumeBtnTxt");

lightMode.addEventListener("click", () => {

    lightMode.style.display = "none"
    darkMode.style.display = "block"
    darkMode.style.backgroundColor = "black"
    darkMode.style.color = "white"

    outerContainer.style.backgroundColor = "white"; //background color of whole container
    myNameHeading.style.color = "black"; //HARSHIT YADAV text
    staticText.style.color = "#B3AA99"; //I'm text
    resumeBtn.style.backgroundColor = "#FACF0F"; //resume button
    resumeBtnTxt.style.color = "black"; //text inside resume button
    resumeBtnTxt.style.fontWeight = "1000"; //text inside resume button
})