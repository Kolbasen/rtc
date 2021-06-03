const { complex, exponent } = require('./utils');

const dft = vector => {
    const X = [];
    const N = vector.length;

    for (let k = 0; k < N; k++) {
        X[k] = [0, 0];

        for (let i = 0; i < N; i++) {
            const exp = exponent(k * i, N);
            let term;
            if (Array.isArray(vector[i])) {
                term = complex.multiply(vector[i], exp);
            } else {
                term = complex.multiply([vector[i], 0], exp);
            }
            X[k] = complex.add(X[k], term);
        }
    }

    return X;
};

module.exports = { dft };
