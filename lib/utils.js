const { Rule, AtRule } = require("postcss");

const styleClass = (propName, obj, parent, opts, responsive, states) => {
    const p = opts.prefix;
    const {important, separator, breakpoints} = opts;
    const pseudoStates = ['focus', 'hover', 'active'];

    for (const className in obj) {
        let rule = new Rule({ selector: `.${p}${className}`});
        rule.append({ prop: propName, value: obj[className], important: important });
        parent.before(rule);
    }

    if (states) {
        for (const className in obj) {
            for (const pseudo_state of pseudoStates) {
                let rule = new Rule({ selector: `.${pseudo_state}${separator}${p}${className}:${pseudo_state}`});
                rule.append({ prop: propName, value: obj[className], important: important });
                parent.before(rule);
            }
        }
    }

    if (responsive) {
        for (const breakpoint in breakpoints) {
            let media = new AtRule({ name: 'media', params: `screen and (min-width: ${breakpoints[breakpoint]})`});
            for (const className in obj) {
                let rule = new Rule({ selector: `.${breakpoint}${separator}${p}${className}`});
                rule.append({ prop: propName, value: obj[className], important });
                media.append(rule);
            }

            if (states) {
                for (const className in obj) {
                    for (const pseudo_state of pseudoStates) {
                        let rule = new Rule({ selector: `.${breakpoint}${separator}${pseudo_state}${separator}${p}${className}:${pseudo_state}`});
                        rule.append({ prop: propName, value: obj[className], important });
                        media.append(rule);
                    }
                }
            }

            parent.before(media);
        }
    } 
}

module.exports = {
    styleClass
}