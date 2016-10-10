var Carousel = (function ($itens) {
    'use strict';

    var module = {};

    module._$itens = $itens;

    module._$left = module._$itens[0];
    module._$active = module._$itens[1];
    module._$right = module._$itens[2];
    module._indexActive = 1;

    module._removeAddClass = function ($element, remove, add) {
        $element.classList.remove(remove);
        $element.classList.add(add);

        return $element;
    };
    module._addClass = function ($element, add) {
        $element.classList.add(add);

        return $element;
    }

    module.moveLeft = function () {
        if (module._indexActive == module._$itens.length - 2) {
            module._indexActive = 0;
        } else {
            module._indexActive++;
        };

        module._$left.classList.remove('teacher_isLeft');

        module._$left = module._removeAddClass(module._$active, 'teacher_isActive', 'teacher_isLeft');
        module._$active = module._removeAddClass(module._$right, 'teacher_isRight', 'teacher_isActive');

        module._$right = module._addClass(module._$itens[module._indexActive + 1], 'teacher_isRight');
    };

    module.moveRight = function () {
        if (module._indexActive == 1) {
            module._indexActive = module._$itens.length;
        } else {
            module._indexActive--;
        };

        module._$right.classList.remove('teacher_isRight');

        module._$right = module._removeAddClass(module._$active, 'teacher_isActive', 'teacher_isRight');
        module._$active = module._removeAddClass(module._$left, 'teacher_isLeft', 'teacher_isActive');

        module._$left = module._addClass(module._$itens[module._indexActive - 1], 'teacher_isLeft');
    };

    return {
        moveLeft : module.moveLeft,
        moveRight : module.moveRight
    }
});
