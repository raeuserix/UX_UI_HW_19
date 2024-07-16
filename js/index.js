
//*Anchor// 

var topOffset;
$(window).scroll(function(){
if ($(this).scrollTop() <1) {

    topOffset = 130
;
}


})


$('.navigation a[href^="#"]').on("click", function (event) {
    $('.navActive').removeClass('navActive');
    $(this).addClass('navActive');
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: target.offset().top -topOffset
        }, 1000)
    }

})

/*Active Scrollable Display*/

let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset + height){
            navLink.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        }
    })
}



console.log("Pls send coffee ☕☕ (btw, this means your index.js file is loaded correctly!)")




                
       