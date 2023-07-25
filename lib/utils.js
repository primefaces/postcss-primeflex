const { Rule, AtRule, Declaration } = require("postcss");

const styleClass = (propName, obj, parent, opts, responsive) => {
    const p = opts.prefix;
    const {separator, breakpoints} = opts;
    for (const className in obj) {
        let rule = new Rule({ selector: `.${p}${className}`});
        rule.append(new Declaration({ prop: propName, value: obj[className] }));
        parent.before(rule);
    }

    if (responsive) {
        for (const breakpoint in breakpoints) {
            let media = new AtRule({ name: 'media', params: `screen and (min-width: ${breakpoints[breakpoint]})`});
            for (const className in obj) {
                let rule = new Rule({ selector: `.${breakpoint}${separator}${p}${className}`});
                rule.append(new Declaration({ prop: propName, value: obj[className] }));
                media.append(rule);
            }

            parent.before(media);
        }
    } 
}

module.exports = {
    styleClass
}