const grid = require('./lib/grid');
const display = require('./lib/display');
const defaultOptions = require('./lib/options');
const typography = require('./lib/typography');
const flexbox = require('./lib/flexbox');
const gap = require('./lib/gap');
const padding = require('./lib/padding');
const margin = require('./lib/margin');
const elevation = require('./lib/elevation');
const border = require('./lib/border');
const borderradius = require('./lib/borderradius');
const width = require('./lib/width');
const height = require('./lib/height');
const image = require('./lib/image');
const position = require('./lib/position');
const overflow = require('./lib/overflow');
const zindex = require('./lib/zindex');
const userselect = require('./lib/userselect');
const liststyle = require('./lib/liststyle');
const misc = require('./lib/misc');
const transition = require('./lib/transition');
const transform = require('./lib/transform');
const animation = require('./lib/animation');

module.exports = (opts = {}) => {
    return {
        postcssPlugin: 'postcss-primeflex',
        AtRule: {
            primeflex: (atRule) => {
                const _opts = {...defaultOptions, ...opts};
                //grid(atRule, _opts);
                //colors
                //formlayout
                //display(atRule, _opts);
                //typography(atRule, _opts);
                //flexbox(atRule, _opts);
                //gap(atRule, _opts);
                //padding(atRule, _opts);
                //margin(atRule, _opts);
                //elevation(atRule, _opts);
                //border(atRule, _opts);
                //borderradius(atRule, _opts);
                //width(atRule, _opts);
                //height(atRule, _opts);
                //position(atRule, _opts);
                //overflow(atRule, _opts);
                //zindex(atRule, _opts);
                //image(atRule, _opts);
                //userselect(atRule, _opts);
                //liststyle(atRule, _opts);
                //misc(atRule, _opts);
                //transition(atRule, _opts);
                //transform(atRule, _opts);
                //animation(atRule, _opts);
                atRule.remove();
            }
        }
    }
}

module.exports.postcss = true
