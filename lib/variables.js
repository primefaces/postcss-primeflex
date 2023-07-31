const { Rule } = require("postcss");

module.exports = (root, opts) => {
    let rule = new Rule({ selector: ':root'});

    //legacy
    rule.append({ prop: `--text-color`, value: opts.theme.colors.text.primary});
    rule.append({ prop: `--text-color-secondary`, value: opts.theme.colors.text.primary});

    rule.append({ prop: `--text-primary`, value: opts.theme.colors.text.primary});
    rule.append({ prop: `--text-secondary`, value: opts.theme.colors.text.primary});

    rule.append({ prop: `--border-radius`, value: opts.theme.borderRadius});

    //legacy
    rule.append({ prop: `--primary-color`, value: opts.theme.colors.primary.main});
    rule.append({ prop: `--primary-color-text`, value: opts.theme.colors.primary.invert});
    rule.append({ prop: `--primary-color-invert`, value: opts.theme.colors.primary.invert});

    for (let color in opts.theme.colors) {
        if (color !== 'text') {
            for (let shade in opts.theme.colors[color]) {
                rule.append({ prop: `--${color}-${shade}`, value: opts.theme.colors[color][shade]});
            }
        }
    }

    root.before(rule);
}