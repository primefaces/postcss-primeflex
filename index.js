const grid = require('./lib/grid');
const display = require('./lib/display');
const defaultOptions = require('./lib/options');
const typography = require('./lib/typography');
const elevation = require('./lib/elevation');

module.exports = (opts = {}) => {
    return {
        postcssPlugin: 'postcss-primeflex',
        AtRule: {
            primeflex: (atRule) => {
                const _opts = {...defaultOptions, ...opts};
                grid(atRule, _opts);
                display(atRule, _opts);
                typography(atRule, _opts);
                elevation(atRule, _opts);
                atRule.remove();
            }
        }
    }
}

module.exports.postcss = true
