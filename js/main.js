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


