const { Rule, Declaration, AtRule } = require("postcss");
const { styleClass } = require("./utils");

const addCols = (widths, element, opts, breakpoint) => {
    let colRule = new Rule({ selector: `.${breakpoint}${opts.prefix}col`});
    colRule.append(new Declaration({ prop: 'flex-grow', value: '1' }));
    colRule.append(new Declaration({ prop: 'flex-basis', value: '0' }));
    colRule.append(new Declaration({ prop: 'padding', value: opts.gutter }));
    if (breakpoint)
        element.append(colRule);
    else
        element.before(colRule);

    let colFixedRule = new Rule({ selector: `.${breakpoint}${opts.prefix}col-fixed`});
    colFixedRule.append(new Declaration({ prop: 'flex', value: '0 0 auto' }));
    colFixedRule.append(new Declaration({ prop: 'padding', value: opts.gutter }));
    if (breakpoint)
        element.append(colFixedRule);
    else
        element.before(colFixedRule);

    for (let i = 0; i < widths.length; i++) {
        let rule = new Rule({ selector: `.${breakpoint}${opts.prefix}col-${i + 1}`});
        rule.append(new Declaration({ prop: 'flex', value: '0 0 auto' }));
        rule.append(new Declaration({ prop: 'padding', value: opts.gutter }));
        rule.append(new Declaration({ prop: 'width', value: widths[i] }));
        if (breakpoint)
            element.append(rule);
        else
            element.before(rule);
    }
}

module.exports = (root, opts) => {
    const p = opts.prefix;
    const {separator, breakpoints} = opts;
    const widths = ['8.3333%','16.6667%','25%','33.3333%','41.6667%','50%','58.3333%','66.6667%','75%','83.3333%','91.6667%','100%'];
    let offsetWidths = {'col-offset-0': '0'};
    widths.map((w,i) => offsetWidths['col-offset-' + (i + 1)] = w);

    //grid
    let rule = new Rule({ selector: `.${p}grid`});
    rule.append(new Declaration({ prop: 'display', value: 'flex' }));
    rule.append(new Declaration({ prop: 'flex-wrap', value: 'wrap' }));
    rule.append(new Declaration({ prop: 'margin-left', value: '-' + opts.gutter }));
    rule.append(new Declaration({ prop: 'margin-right', value: '-' + opts.gutter }));
    rule.append(new Declaration({ prop: 'margin-top', value: '-' + opts.gutter }));
    root.before(rule);

    rule = new Rule({ selector: `.${p}grid > .${p}col` });
    rule.append(new Declaration({ prop: 'box-sizing', value: 'border-box' }));
    root.before(rule);

    rule = new Rule({ selector: `.${p}grid > [class*=${p}col]` });
    rule.append(new Declaration({ prop: 'box-sizing', value: 'border-box' }));
    root.before(rule);

    //nogutter
    rule = new Rule({ selector: `.${p}grid-nogutter`});
    rule.append(new Declaration({ prop: 'margin-left', value: '0' }));
    rule.append(new Declaration({ prop: 'margin-right', value: '0' }));
    rule.append(new Declaration({ prop: 'margin-top', value: '0' }));
    root.before(rule);

    rule = new Rule({ selector: `.${p}grid-nogutter > .${p}col` });
    rule.append(new Declaration({ prop: 'padding', value: '0' }));
    root.before(rule);

    rule = new Rule({ selector: `.${p}grid-nogutter > [class*=${p}col-]` });
    rule.append(new Declaration({ prop: 'padding', value: '0' }));
    root.before(rule);

    //columns
    addCols(widths, root, opts, '');

    for (const key in breakpoints) {
        let media = new AtRule({ name: 'media', params: `screen and (min-width: ${breakpoints[key]})`});
        addCols(widths, media, opts, key + separator);
        root.before(media);
    }

    //offsets
    styleClass('margin-left', offsetWidths, root, opts, true);
}