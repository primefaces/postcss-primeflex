const grid = require('./lib/grid');
const defaultOptions = require('./lib/options');

module.exports = (opts = {}) => {
    return {
        postcssPlugin: 'postcss-primeflex',
        AtRule: {
            primeflex: (atRule) => {
                const _opts = {...defaultOptions, ...opts};
                grid(atRule, _opts);
                atRule.remove();
            }
        }
    }
}

module.exports.postcss = true
