/* //  Option 2 jQuery
$('.navbar a').on('click', function (e) {
    // if hash value is not empty, prevent default of the event
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html body').animate({
            //  animate when you scroll down from the top
            scrollTop: $(hash).offset().top
        }, 800);
        console.log(hash)
    }

}) */


// Option 3
//  Smooth scroll
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 1000
});

console.log(scroll)