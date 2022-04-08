$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})




const icon = document.querySelector('icon');
const search = document.querySelector('search');
icon.onclick = function(){
    search.classList.toggle('active')
}
