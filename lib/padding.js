const { styleClass } = require("./utils");

module.exports = (root, opts) => {
    const scales = [0, 0.25, 0.5, 1, 1.5, 2, 3, 4, 5];
    const directions = ['t','r','b','l'];
    let paddings = {};
    let xPaddings = {};
    let yPaddings = {};

    for (let i = 0; i < scales.length; i++) {
        paddings['p-' + i] = scales[i] + 'rem';
    }

    for (let d of directions) {
        for (let i = 0; i < scales.length; i++) {
            paddings['p' + d + '-' + i] = scales[i] + 'rem';
        }
    }

    for (let i = 0; i < scales.length; i++) {
        xPaddings['px-' + i] = scales[i] + 'rem';
    }

    for (let i = 0; i < scales.length; i++) {
        yPaddings['py-' + i] = scales[i] + 'rem';
    }

    styleClass('padding', paddings, root, opts, true);
    styleClass(['padding-left', 'padding-right'], xPaddings, root, opts, true);
    styleClass(['padding-top', 'padding-bottom'], yPaddings, root, opts, true);
}