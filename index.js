
// for contact form
const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");

}
function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }


}
inputs.forEach((input)=>{
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

// for skill section counter
let number = document.getElementById("number");
let counter = 0;
setInterval(()=>{
    if(counter == 65){
        clearInterval();
    }
    else{
        counter++;
        number.innerHTML = counter + "%";
    }
},30)



// gallery
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



// for navbar
let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation')
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}


let list = document.querySelectorAll('.list');

for(let i = 0; i < list.length ; i++){
    list[i].onclick = function(){
        let j = 0;
        while( j  < list .length){
            list[j++].className ='list';
        }
        list[i].className = 'list active'
    }
}

