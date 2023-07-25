const { Rule, AtRule } = require("postcss");

const styleClass = (propName, obj, parent, opts, responsive) => {
    const p = opts.prefix;
    const {important, separator, breakpoints} = opts;
    for (const className in obj) {
        let rule = new Rule({ selector: `.${p}${className}`});
        rule.append({ prop: propName, value: obj[className], important: important });
        parent.before(rule);
    }

    if (responsive) {
        for (const breakpoint in breakpoints) {
            let media = new AtRule({ name: 'media', params: `screen and (min-width: ${breakpoints[breakpoint]})`});
            for (const className in obj) {
                let rule = new Rule({ selector: `.${breakpoint}${separator}${p}${className}`});
                rule.append({ prop: propName, value: obj[className], important });
                media.append(rule);
            }

            parent.before(media);
        }
    } 
}

module.exports = {
    styleClass
}