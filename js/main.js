// Header Js
let menus = document.querySelectorAll('header .menu a');
let headerHeight = document.querySelector('header').offsetHeight;
let sections = [];

// RemoveActiveClass
function removeActiveClass() {
    menus.forEach(function(menu_el, menu_in){
        menu_el.classList.remove('active');
    })
}

//
menus.forEach(function(element, index){
    let className = element.getAttribute('href').replace('#','.');
    let section = document.querySelector(className);
    sections.push(section);
    element.addEventListener('click',function(e) {
        e.preventDefault;
        
        window.scrollTo({
            top: section.offsetTop - headerHeight,
            behavior: "smooth",
        });
        removeActiveClass();
        element.classList.add('active')
    });    
});

window.addEventListener('scroll', function(e){

    sections.forEach(function(sec_el, sec_in){
        let start = sec_el.offsetTop - headerHeight;
        let end = start + sec_el.offsetHeight; 
        
        if (window.pageYOffset >= start && window.pageYOffset <= end){
            removeActiveClass();
            menus[sec_in].classList.add('active');
        }
        else {
            menus[sec_in].classList.remove('active');
        }
        
    });
});

// Slider js

let sliderList = document.querySelectorAll('main .slider .slider__wrap-item');
let currentSlider = 0;
sliderList.forEach(function(slider,index){
    if (slider.classList.contains('active'))
        currentSlider = index;
});

function goTo(index){
    sliderList[currentSlider].classList.remove('active');
    sliderList[index].classList.add('active');
    dots[currentSlider].classList.remove('active');
    dots[index].classList.add('active');
    currentSlider = index;
    pageUpdate(index);
}

function pageUpdate(index){
    pageNum.textContent = '0' + (index+1);
}

let pageNum = document.querySelector('main .paging__number');

document.querySelector('.--next').addEventListener('click',function(e){
    if (currentSlider == sliderList.length-1){
        goTo(0);
    }
    else{
        goTo(currentSlider + 1);
    }
        
})

document.querySelector('.--prev').addEventListener('click',function(e){
    if (currentSlider > 0){
        goTo(currentSlider - 1);
    }
    else{
        goTo(sliderList.length -1);
    }
})

let dots = document.querySelectorAll('main .paging__dots li');
dots.forEach(function(dot, index){   
    dot.addEventListener('click',function(e){    
        goTo(index);
        
    });
});
// BackToTop Js
let backToTop = document.querySelector('footer .backtotop');
backToTop.addEventListener('click',function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Pop Us Video Js
let playbutton = document.querySelectorAll('.video__item');
let popupvideo = document.querySelector('.popup-video');
let closebutton = document.querySelector('.popup-video .close');

playbutton.forEach(function(button){
    let videoId = button.getAttribute('data-video-id');
    button.addEventListener('click',function(){
        
        popupvideo.style.display = 'flex';
        document.querySelector('.popup-video iframe').setAttribute('src','https://www.youtube.com/embed/'+ videoId);

    });
});

closebutton.addEventListener('click',function(){
    popupvideo.style.display = 'none';
    document.querySelector('.popup-video iframe').setAttribute('src','');
})
popupvideo.addEventListener('click',function(){
    popupvideo.style.display = 'none';
    document.querySelector('.popup-video iframe').setAttribute('src','');
})







