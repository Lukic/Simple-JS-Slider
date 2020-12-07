const slideContainer = document.querySelector("#slider");
const slideItems = document.querySelectorAll(".slideItem");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const sliderWidth = 600;

let positionCounter = 1;

slideContainer.style.transform = "translateX("+(-sliderWidth * positionCounter) +"px)";

nextBtn.addEventListener("click", ()=>{
    if(positionCounter >= slideItems.length -1) return;
    slideContainer.style.transition = "transform 0.3s ease-in-out";
    positionCounter++;
    slideContainer.style.transform = "translateX("+(-sliderWidth * positionCounter) +"px)";
});

prevBtn.addEventListener("click", ()=>{
    if(positionCounter <= 0) return;
    slideContainer.style.transition = "transform 0.3s ease-in-out";
    positionCounter--;
    slideContainer.style.transform = "translateX("+(-sliderWidth * positionCounter) +"px)";
});


slideContainer.addEventListener("transitionend",()=>{
    if(slideItems[positionCounter].dataset.temp ==="last"){
        slideContainer.style.transition = "none";
        positionCounter = slideItems.length - 2;
        slideContainer.style.transform = "translateX("+(-sliderWidth * positionCounter) +"px)";
    }

    if(slideItems[positionCounter].dataset.temp ==="first"){
        slideContainer.style.transition = "none";
        positionCounter = slideItems.length - positionCounter;
        slideContainer.style.transform = "translateX("+(-sliderWidth * positionCounter) +"px)";
    }
});