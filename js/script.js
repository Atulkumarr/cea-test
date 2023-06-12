let accordion = document.querySelectorAll('.course-box')
// console.log(accordion)
accordion.forEach(function (item) {
    item.addEventListener('click', function () {
        item.classList.toggle('active')
    })
})


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplaySpeed: 1500,
    autoplayHoverPause: false,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        }
    }
});


let btn = document.querySelector('.hamburger')
let nav_ul = document.querySelector('.navigation ul')
let input_box = document.querySelector('#check')
btn.addEventListener('click', function(){
    input_box.classList.toggle('open')
    nav_ul.classList.toggle('show-ul')

})

let a = document.querySelectorAll('.navigation ul li a')

a.forEach(function(item){
    item.addEventListener('click', function(){
        input_box.classList.toggle('open')
        nav_ul.classList.toggle('show-ul')
    })
})

