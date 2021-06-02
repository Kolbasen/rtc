'use strict';

const generateSignal = (harmonics, frequency, discreteCalls) => {
    const signals = Array(discreteCalls).fill(0);

    for (let i = 1; i <= harmonics; i++) {
        const wi = frequency / harmonics * i;
        const amplitude = Math.random();
        const phase = Math.random();
        for (let t = 0; t < discreteCalls; t++) {
            signals[t] += amplitude * Math.sin(wi * t + phase);
        }
    }
    return signals;
};

module.exports = { generateSignal };
