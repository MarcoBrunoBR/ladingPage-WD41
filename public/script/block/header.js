(function (doc, win) {
    var $body = doc.querySelector('body');
    var $header = doc.querySelector('.header');

    win.addEventListener('scroll', function (event) {
        if (win.pageYOffset >= $header.clientHeight) {
            $body.classList.add('isAnimationTop');
        };
    });
})(document, window);
