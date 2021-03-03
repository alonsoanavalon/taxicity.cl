import clickOnWhatsapp from "./clickOnWhatsapp.js";
import hamburgerMenu from "./hamburgerbtn.js";
import responsiveQueries from "./responsive.js";

function circleProgress() {
    const circleArray = Array.from(document.querySelectorAll(".progress"))

    let firstProgressCircle = circleArray[0]
    let secondProgressCircle = circleArray[1]
    let thirdProgressCircle = circleArray[2]
    
    let firstRadius = firstProgressCircle.r.baseVal.value;
    let secondRadius = secondProgressCircle.r.baseVal.value;
    let thirdRadius = thirdProgressCircle.r.baseVal.value;
    
    let firstCircumference = firstRadius * 2 * Math.PI;
    let secondCircumference = secondRadius * 2 * Math.PI;
    let thirdCircumference = thirdRadius * 2 * Math.PI;
    
    firstProgressCircle.style.strokeDasharray = firstCircumference;
    secondProgressCircle.style.strokeDasharray = secondCircumference;
    thirdProgressCircle.style.strokeDasharray = thirdCircumference;
    
    // 0 - 100
    
    function setProgress (circle, percent, circumference) {
        circle.style.strokeDashoffset = circumference - (percent/100) * circumference;
    }
    
    setProgress(firstProgressCircle, 82, firstCircumference)
    setProgress(secondProgressCircle, 68, secondCircumference)
    setProgress(thirdProgressCircle, 100, thirdCircumference)
}

const d = document;

d.addEventListener("DOMContentLoaded", () => {
    circleProgress()
    responsiveQueries("btn-menu", "(max-width: 767px)", "hidden");
    hamburgerMenu(".nav-btn", ".nav-menu", ".nav-menu a", "active");
    clickOnWhatsapp('.whatsapp', '.whatsapp-icon', 'https://wa.link/81oslh')
})


