const { styleClass } = require("./utils");

module.exports = (root, opts) => {
    const translate = {
        'translate-x-0': 'translateX(0%)',
        'translate-x-100': 'translateX(100%)',
        '-translate-x-100': 'translateX(-100%)',
        'translate-y-0': 'translateY(0%)',
        'translate-y-100': 'translateY(100%)',
        '-translate-y-100': 'translateY(-100%)'
    };

    const rotate = {
        'rotate-45': 'rotate(45deg)',
        '-rotate-45': 'rotate(-45deg)',
        'rotate-90': 'rotate(90deg)',
        '-rotate-90': 'rotate(-90deg)',
        'rotate-180': 'rotate(180deg)',
        '-rotate-180': 'rotate(-180deg)'
    };

    const transformOrigin = {
        'origin-center': 'center',
        'origin-top': 'top',
        'origin-top-right': 'top right',
        'origin-right': 'right',
        'origin-bottom-right': 'bottom right',
        'origin-bottom': 'bottom',
        'origin-bottom-left': 'bottom left',
        'origin-left': 'left',
        'origin-top-left': 'top-left'
    };

    styleClass('transform', translate, root, opts, true);
    styleClass('transform', rotate, root, opts, true);
    styleClass('transform-origin', transformOrigin, root, opts, true);
}