const { complex, exponent } = require('./utils');

function fft(vector) {
    const X = [];
    const N = vector.length;

    if (N === 1) {
        if (Array.isArray(vector[0])) {
            return [[vector[0][0], vector[0][1]]];
        } else {
            return [[vector[0], 0]];
        }
    }

    const even = (__, ix) =>  ix % 2 === 0;

    const odd = (__, ix) => ix % 2 === 1;

    const X_evens = fft(vector.filter(even)),
                X_odds  = fft(vector.filter(odd));

    for (let k = 0; k < N / 2; k++) {
        const t = X_evens[k],
                    e = complex.multiply(exponent(k, N), X_odds[k]);

        X[k] = complex.add(t, e);
        X[k + (N / 2)] = complex.subtract(t, e);
    }

    return X;
}

module.exports = {
    fft,
};
