//confirm download alert
$("button").click(function () {
    alert('Are you sure you want to download?');
});

//STICKY NAV

//media query min-width: 768px

const mq = window.matchMedia("(min-width: 768px)");
const width = window.innerWidth;

function screenSize(e) {
    if (e.matches) {
        $('.main-nav').sticky();
    }
    else {
        $(".main-nav").unstick();
    }
}

function checkSize() {
    if (width > 769) {
        $('.main-nav').sticky();
    }
    else {
        screenSize();
    }
}

mq.addListener(screenSize);
checkSize();
screenSize();

//ADD DYNAMIC SCROLLING, EITHER TRANSITIONS OR DIFFERENT SCROLLBAR