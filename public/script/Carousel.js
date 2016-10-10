var Carousel = (function ($itens) {
    'use strict';

    var module = {};

    module._$itens = $itens;

    module._$left = module._$itens[0];
    module._$active = module._$itens[1];
    module._$right = module._$itens[2];
    module._indexLeft = 0;
    module._indexRight = 2;

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
        module._$left.classList.remove('teacher_isLeft');

        module._$left = module._removeAddClass(module._$active, 'teacher_isActive', 'teacher_isLeft');
        module._$active = module._removeAddClass(module._$right, 'teacher_isRight', 'teacher_isActive');

        if (module._indexLeft == module._$itens.length - 1) {
            module._indexLeft = -1;
        };

        if (module._indexRight == module._$itens.length - 1) {
            module._indexRight = -1;
        };

        module._$right = module._addClass(module._$itens[++module._indexRight], 'teacher_isRight');
        module._indexLeft++;
    };

    module.moveRight = function () {
        module._$right.classList.remove('teacher_isRight');

        module._$right = module._removeAddClass(module._$active, 'teacher_isActive', 'teacher_isRight');
        module._$active = module._removeAddClass(module._$left, 'teacher_isLeft', 'teacher_isActive');

        if (module._indexLeft == 0) {
            module._indexLeft = module._$itens.length;
        };

        if (module._indexRight == 0) {
            module._indexRight = module._$itens.length;
        };

        module._$left = module._addClass(module._$itens[--module._indexLeft], 'teacher_isLeft');
        module._indexRight--;
    };

    return {
        moveLeft : module.moveLeft,
        moveRight : module.moveRight
    }
});
