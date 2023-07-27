const { styleClass } = require("./utils");

module.exports = (root, opts) => {
    const scales = [0, 0.25, 0.5, 1, 1.5, 2, 3, 4, 5];
    const directions = ['t','r','b','l'];
    let margins = {};
    let xMargins = {};
    let yMargins = {};

    for (let i = 0; i < scales.length; i++) {
        margins['m-' + i] = scales[i] + 'rem';
    }
    for (let i = 1; i < scales.length; i++) {
        margins['-m-' + i] = '-' + scales[i] + 'rem';
    }
    margins['m-auto'] = 'auto';

    for (let d of directions) {
        for (let i = 0; i < scales.length; i++) {
            margins['m' + d + '-' + i] = scales[i] + 'rem';
        }
        for (let i = 1; i < scales.length; i++) {
            margins['-m' + d + '-' + i] = '-' + scales[i] + 'rem';
        }
        margins['m' + d + '-auto'] = 'auto';
    }

    for (let i = 0; i < scales.length; i++) {
        xMargins['mx-' + i] = scales[i] + 'rem';
    }
    for (let i = 1; i < scales.length; i++) {
        xMargins['-mx-' + i] = '-' + scales[i] + 'rem';
    }
    xMargins['mx-auto'] = 'auto';

    for (let i = 0; i < scales.length; i++) {
        yMargins['my-' + i] = scales[i] + 'rem';
    }
    for (let i = 0; i < scales.length; i++) {
        yMargins['-my-' + i] = '-' + scales[i] + 'rem';
    }
    yMargins['my-auto'] = 'auto';

    styleClass('margin', margins, root, opts, true);
    styleClass(['margin-left', 'margin-right'], xMargins, root, opts, true);
    styleClass(['margin-top', 'margin-bottom'], yMargins, root, opts, true);
}