const grid = require('./lib/grid');
const display = require('./lib/display');
const defaultOptions = require('./lib/options');
const typography = require('./lib/typography');
const flexbox = require('./lib/flexbox');
const elevation = require('./lib/elevation');
const image = require('./lib/image');
const position = require('./lib/position');
const overflow = require('./lib/overflow');
const zindex = require('./lib/zindex');
const userselect = require('./lib/userselect');
const liststyle = require('./lib/liststyle');
const misc = require('./lib/misc');
const transition = require('./lib/transition');
const transform = require('./lib/transform');

module.exports = (opts = {}) => {
    return {
        postcssPlugin: 'postcss-primeflex',
        AtRule: {
            primeflex: (atRule) => {
                const _opts = {...defaultOptions, ...opts};
                grid(atRule, _opts);
                //colors
                //formlayout
                display(atRule, _opts);
                typography(atRule, _opts);
                flexbox(atRule, _opts);
                //gap
                //spacing
                elevation(atRule, _opts);
                //border
                //borderradius
                //size
                position(atRule, _opts);
                overflow(atRule, _opts);
                zindex(atRule, _opts);
                image(atRule, _opts);
                userselect(atRule, _opts);
                liststyle(atRule, _opts);
                misc(atRule, _opts);
                transition(atRule, _opts);
                transform(atRule, _opts);
                //animation
                atRule.remove();
            }
        }
    }
}

module.exports.postcss = true
