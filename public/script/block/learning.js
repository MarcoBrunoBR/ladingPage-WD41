(function (doc) {
    'use strict';

    var $uxToolBoxes = doc.querySelector('.learning-menu');

    $uxToolBoxes.addEventListener('click', function (event) {
        event.preventDefault();
        var $origin = event.target;
        var $menuIsActive = doc.querySelector('.learning-menu-item-action_isActive');
        var $uxToolBoxesIsActive = doc.querySelector('.uxToolBoxes_isActive');

        if ($origin.classList.contains('learning-menu-item-action')) {
            $menuIsActive.classList.remove('learning-menu-item-action_isActive');
            $origin.classList.add('learning-menu-item-action_isActive');

            $uxToolBoxesIsActive.classList.remove('uxToolBoxes_isActive');
            doc.querySelector($origin.getAttribute('href')).classList.add('uxToolBoxes_isActive');
        };
    });
})(document);
