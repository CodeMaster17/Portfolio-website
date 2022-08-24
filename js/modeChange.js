// for changing light and dark mode
let darkModeBtn = document.getElementById("darkModeBtn");
let lightModeBtn = document.getElementById("lightModeBtn");

let heroArea = document.getElementById("home");



darkModeBtn.onclick=()=>{
    console.log("button clicked");
    darkModeBtn.style.display = 'none';
    lightModeBtn.style.display = 'block';
    
    
    
}
lightModeBtn.onclick=()=>{
    console.log("button clicked");
    darkModeBtn.style.display = 'block';
    lightModeBtn.style.display = 'none';

    heroArea.style.background = "white";
}