var typed = new Typed("#rachana1", {
    strings: ["YouTuber", "Developer", " Graphics Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});

let type = new Typed('#rachana', {
    strings: [ 'Web Developer', 'Youtuber', 'Graphics Designer', 'Programmer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });
  document.onkeydown = function(event) {
if (event.keyCode == 123) {
return false;
}
if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
return false;
}
if (event.ctrlKey && event.shiftKey && event.keyCode == 75) {
return false;
}
};
document.onkeydown = function(event) {
if (event.keyCode == 123 || (event.ctrlKey && event.shiftKey && (event.keyCode == 73 || event.keyCode == 67))) {
return false;
}
};
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});