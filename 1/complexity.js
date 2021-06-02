const { performance } = require('perf_hooks');
const { generateSignal } = require('./generateSignal');

const calculateTimeSignal = (harmonics, frequency, discreteCalls) => {

    const time = Array(discreteCalls).fill(0);

    return time.map((_, index) => {
        const startTime = performance.now();
        generateSignal(harmonics, frequency, index);
        const endTime = performance.now();

        return endTime - startTime;
    });
};

module.exports = { calculateTimeSignal };
