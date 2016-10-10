(function (doc) {
    'use strict';

    var $wrapTeacherArrowLeft = doc.querySelector('.wrap-teacher-arrowLeft');
    var $wrapTeacherArrowRight = doc.querySelector('.wrap-teacher-arrowRight');
    var $teachers = doc.querySelectorAll('.teacher');
    var carousel = new Carousel($teachers);

    $wrapTeacherArrowLeft.addEventListener('click', function (event) {
        carousel.moveLeft();
    });

    $wrapTeacherArrowRight.addEventListener('click', function (event) {
        carousel.moveRight();
    });
})(document);
