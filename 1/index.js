const { generateSignal } = require('./generateSignal');
const { performance } = require('perf_hooks');
const { autoCorrelation, crossCorrelation } = require('./statUtils');
const path = require('path');
const plt = require('matplotnode');

const step = 50;
const nArray = [...Array(10).keys()].map(index => (index + 1) * step);

const harmonics = 6;
const frequency = 1200;

const res = nArray.map(N => {
    const sig = generateSignal(harmonics, frequency, N);
    const beforeAutoCorr = performance.now();
    autoCorrelation(sig);
    const afterAutoCorr = performance.now();


    const sig1 = generateSignal(harmonics, frequency, N);
    const sig2 = generateSignal(harmonics, frequency, N);
    const beforeCrossCorr = performance.now();
    crossCorrelation(sig1, sig2);
    const afterCrossCorr = performance.now();

    return [afterAutoCorr - beforeAutoCorr, afterCrossCorr - beforeCrossCorr];
});

const auto = res.map(t => t[0]);

const cross = res.map(t => t[1]);

plt.subplot('121');
plt.title('Auto correlation');
plt.plot(nArray, auto, 'color=r', 'label=auto_time');
plt.plot(nArray, cross, 'color=g', 'label=cross_time');
plt.xlabel('N');
plt.ylabel('time');
plt.legend();

const currentDir = path.join(__dirname, '/compare.png');
plt.save(currentDir);


