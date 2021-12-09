"use strict"
let lightbox_container = document.querySelector(".lightBox_container");
let lightbox_item = document.querySelector(".lightbox-item");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let closebtn = document.getElementById("closebtn");
let imgList = Array.from(document.querySelectorAll(".item img"));
let currentIndex;

for (let i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener("click", function (e) {
        lightbox_container.style.display = "flex";
        let imgSrc = e.target.getAttribute('src');
        lightbox_item.style.backgroundImage = `url(${imgSrc})`;
        currentIndex = imgList.indexOf(e.target);
        console.log(currentIndex);

    })
}


function closeBtn() {
    lightbox_container.style.display = "none";
}
closebtn.addEventListener("click", closeBtn);

function Slide(i) {
    currentIndex = currentIndex + i;

    if (currentIndex == imgList.length) {
        currentIndex = 0;
    }
    if (currentIndex < 0) {
        currentIndex = imgList.length - 1;
    }
    let imgsrc = imgList[currentIndex].getAttribute('src');
    lightbox_item.style.backgroundImage = `url(${imgsrc})`;

}
prevBtn.addEventListener("click", function () {
    Slide(-1);
});
nextBtn.addEventListener("click", function () {
    Slide(1)
});
document.addEventListener('keydown', function (e) {

    if (e.key == 'ArrowRight') {
        Slide(1);
    }
    else if (e.key == 'ArrowLeft') {
        Slide(-1);
    }
    else if (e.key == 'Escape') {
        closeBtn();
    }
});

    //**** */ another solution for next & previous slide *******



// nextBtn.addEventListener("click", nextSlide);

// function nextSlide() {

//     currentIndex++;

//     if (currentIndex == imgList.length) {
//         currentIndex = 0;
//     }
//     let imgsrc = imgList[currentIndex].getAttribute('src');
//     lightbox_item.style.backgroundImage = `url(${imgsrc})`;

// }

// prevBtn.addEventListener("click", prevSlide);

// function prevSlide() {
//     currentIndex--;
//     if (currentIndex < 0) {
//         currentIndex = imgList.length - 1;
//     }
//     let imgsrc = imgList[currentIndex].getAttribute('src');
//     lightbox_item.style.backgroundImage = `url(${imgsrc})`;

// }

// document.addEventListener('keydown', function(e){

//     if(e.key=='ArrowRight'){
//         nextSlide();
//     }
//     else if(e.key=='ArrowLeft'){
//         prevSlide();  
//     }
//     else if(e.key=='Escape'){
//         closeBtn();
//     }
// });




