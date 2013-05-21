$('nav li ul').hide().removeClass('fallback');
$('nav li').hover(
    function () {
        $('ul', this).stop().slideDown(150);
    },
    function () {
        $('ul', this).stop().slideUp(200);
    }
);
