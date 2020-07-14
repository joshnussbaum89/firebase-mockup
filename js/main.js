//confirm download alert
$("button").click(function () {
    alert('Are you sure you want to download?');
});

//ADD STICKY NAV

const mq = window.matchMedia("(min-width: 768px)");

function screenSize(e) {
    if (e.matches) {
        $('.main-nav').sticky();
    }
    else {
        $(".main-nav").unstick();
    }
}

mq.addListener(screenSize);

//ADD DYNAMIC SCROLLING, EITHER TRANSITIONS OR DIFFERENT SCROLLBAR