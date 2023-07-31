const { styleClass } = require("./utils");

module.exports = (root, opts) => {
    const surfaceShades = [0,50,100,200,300,400,500,600,700,800,900];
    const colorShades = [50,100,200,300,400,500,600,700,800,900];
    const rgbaShades = [10,20,30,40,50,60,70,80,90];
    const colorNames = ['blue', 'green', 'yellow', 'cyan', 'pink', 'indigo', 'teal', 'orange', 'bluegray', 'purple', 'gray', 'red', 'primary'];
    const texts = {};
    const surfaces = {}
    const borders = {};
    const colored = {
        text: {},
        background: {},
        border: {}
    }
    const rgbaWhite = {
        text: {},
        background: {},
        border: {}
    };
    const rgbaBlack = {
        text: {},
        background: {},
        border: {}
    }
    const misc = {
        text: {
            'text-primary': 'var(--primary-color)',
            'text-white': '#ffffff',
            'text-color': 'var(--text-color)',
            'text-color-secondary': 'var(--text-color-secondary)',
            'bg-primary': 'var(--primary-color-text)',
            'bg-primary-reverse': 'var(--primary-color)'
        },
        background: {
            'bg-white': '#ffffff',
            'bg-primary': 'var(--primary-color)',
            'bg-primary-reverse': 'var(--primary-color-text)',
            'surface-ground': 'var(--surface-ground)',
            'surface-section': 'var(--surface-section)',
            'surface-card': 'var(--surface-card)',
            'surface-overlay': 'var(--surface-overlay)',
            'surface-hover': 'var(--surface-hover)'
        },
        border: {
            'border-primary': 'var(--primary-color)',
            'border-white': '#ffffff',
            'surface-hover': 'var(--surface-hover)'
        }
    }

    for (let s of surfaceShades) {
        texts['text-' + s] = 'var(--surface-' + s + ')';
        surfaces['surface-' + s] = 'var(--surface-' + s + ')';
        borders['border-' + s] = 'var(--surface-' + s + ')';
    }

    for (let color of colorNames) {
        for (let cs of colorShades) {
            colored.text['text-' + color + '-' + cs] = 'var(--' + color + '-' + cs + ')';
            colored.background['bg-' + color + '-' + cs] = 'var(--' + color + '-' + cs + ')';
            colored.border['border-' + color + '-' + cs] = 'var(--' + color + '-' + cs + ')';
        }
    }

    for (let rgbaShade of rgbaShades) {
        rgbaWhite.text['text-white-alpha-' + rgbaShade] = 'rgba(255,255,255,' + (rgbaShade / 100) + ')';
        rgbaWhite.background['bg-white-alpha-' + rgbaShade] = 'rgba(255,255,255,' + (rgbaShade / 100) + ')';
        rgbaWhite.border['border-white-alpha-' + rgbaShade] = 'rgba(255,255,255,' + (rgbaShade / 100) + ')';
    }

    for (let rgbaShade of rgbaShades) {
        rgbaBlack.text['text-black-alpha-' + rgbaShade] = 'rgba(0,0,0' + (rgbaShade / 100) + ')';
        rgbaBlack.background['bg-black-alpha-' + rgbaShade] = 'rgba(0,0,0' + (rgbaShade / 100) + ')';
        rgbaBlack.border['border-black-alpha-' + rgbaShade] = 'rgba(0,0,0,' + (rgbaShade / 100) + ')';
    }

    //surfaces
    styleClass('color', texts, root, opts, true, true);
    styleClass('background-color', surfaces, root, opts, true, true);
    styleClass('border-color', borders, root, opts, true, true);
    
    //transparent
    styleClass('background-color', {'bg-transparent': 'transparent'}, root, opts, true, true);
    styleClass('border-color', {'border-transparent': 'transparent'}, root, opts, true, true);
    
    //palette
    styleClass('color', colored.texts, root, opts, true, true);
    styleClass('background-color', colored.background, root, opts, true, true);
    styleClass('border-color', colored.border, root, opts, true, true);
    
    //rgba
    styleClass('color', rgbaWhite.text, root, opts, true, true);
    styleClass('background-color', rgbaWhite.background, root, opts, true, true);
    styleClass('border-color', rgbaWhite.border, root, opts, true, true);
    styleClass('color', rgbaBlack.text, root, opts, true, true);
    styleClass('background-color', rgbaBlack.background, root, opts, true, true);
    styleClass('border-color', rgbaBlack.border, root, opts, true, true);

    //misc
    styleClass('color', misc.text, root, opts, true, true);
    styleClass('background-color', misc.background, root, opts, true, true);
    styleClass('border-color', misc.border, root, opts, true, true);
}