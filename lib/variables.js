const { Rule } = require("postcss");

module.exports = (root, opts) => {
    const rule = new Rule({ selector: ':root'});
    const p = opts.prefix.cssVariable;

    rule.append({ prop: `--${p}text-primary`, value: opts.theme.colors.text.primary});
    rule.append({ prop: `--${p}text-secondary`, value: opts.theme.colors.text.primary});

    rule.append({ prop: `--${p}border-radius`, value: opts.theme.borderRadius});

    rule.append({ prop: `--${p}primary-color`, value: opts.theme.colors.primary.main});    
    rule.append({ prop: `--${p}primary-color-invert`, value: opts.theme.colors.primary.invert});

    //legacy
    rule.append({ prop: `--${p}text-color`, value: opts.theme.colors.text.primary});
    rule.append({ prop: `--${p}text-color-secondary`, value: opts.theme.colors.text.primary});
    rule.append({ prop: `--${p}primary-color-text`, value: opts.theme.colors.primary.invert});

    for (let color in opts.theme.colors) {
        if (color !== 'text') {
            for (let shade in opts.theme.colors[color]) {
                rule.append({ prop: `--${p}${color}-${shade}`, value: opts.theme.colors[color][shade]});
            }
        }
    }

    root.before(rule);
}