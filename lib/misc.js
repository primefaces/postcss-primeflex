const { styleClass } = require("./utils");

module.exports = (root, opts) => {
    const appearance = {
        'appearance-none': 'none'
    };

    const outline = {
        'outline-none': 'none'
    };

    const pointerEvents = {
        'pointer-events-none': 'none',
        'pointer-events-auto': 'auto'
    };

    const cursor = {
        'cursor-auto': 'auto',
        'cursor-pointer': 'pointer',
        'cursor-wait': 'wait',
        'cursor-move': 'move'
    };

    const userSelect = {
        'select-none': 'none',
        'select-text': 'text',
        'select-all': 'all',
        'select-auto': 'auto'
    };

    const opacity = {
        'opacity-0': '0',
        'opacity-10': '.1',
        'opacity-20': '.2',
        'opacity-30': '.3',
        'opacity-40': '.4',
        'opacity-50': '.5',
        'opacity-60': '.6',
        'opacity-70': '.7',
        'opacity-80': '.8',
        'opacity-90': '.9',
        'opacity-100': '1'
    };

    styleClass('appearance', appearance, root, opts);
    styleClass('outline', outline, root, opts);
    styleClass('pointer-events', pointerEvents, root, opts);
    styleClass('cursor', cursor, root, opts);
    styleClass('user-select', userSelect, root, opts);
    styleClass('opacity', opacity, root, opts);
}