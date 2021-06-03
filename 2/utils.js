const complexAdd = (a, b) => [a[0] + b[0], a[1] + b[1]];

const complexSubtract = (a, b) => [a[0] - b[0], a[1] - b[1]];

const complexMultiply = (a, b) => [a[0] * b[0] - a[1] * b[1],
    a[0] * b[1] + a[1] * b[0]];

const complexMagnitude = c => Math.sqrt(c[0] * c[0] + c[1] * c[1]);


const mapExponent = {},
            exponent = (k, N) => {
                const x = -2 * Math.PI * (k / N);

                mapExponent[N] = mapExponent[N] || {};
                mapExponent[N][k] = mapExponent[N][k] || [Math.cos(x), Math.sin(x)];

                return mapExponent[N][k];
            };


const convert = arr => arr.map(([x, y]) => Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));

module.exports = {
    complex: {
        add: complexAdd,
        subtract: complexSubtract,
        multiply: complexMultiply,
        magnitude: complexMagnitude,
    },
    exponent,
    convert,
};
