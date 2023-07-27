const { styleClass } = require("./utils");

const addFixedHeights = (obj, prefix) => {
    for ( let i = 1; i <= 30; i++) {
        obj[prefix + i + 'rem'] = i + 'rem';
    }
}

module.exports = (root, opts) => {
    let heights = {
        'h-full': '100%',
        'h-screen': '100vh',
        'h-auto': 'auto',
    };

    let minHeights = {
        'min-h-0': '0px',
        'min-h-full': '100%',
        'min-h-screen': '100vh'
    }

    let maxHeights = {
        'max-h-0': '0px',
        'max-h-full': '100%',
        'max-h-screen': '100vh'
    }

    addFixedHeights(heights, 'h-');
    addFixedHeights(minHeights, 'min-h-');
    addFixedHeights(maxHeights, 'max-h-');

    styleClass('height', heights, root, opts, true);
    styleClass('min-height', minHeights, root, opts, true);
    styleClass('max-height', maxHeights, root, opts, true);
}