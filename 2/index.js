const { generateSignal } = require('../1/generateSignal');
const { dft } = require('./dft');
const plt = require('matplotnode');
const path = require('path');
const { convert } = require('./utils');
const { fft } = require('./fft');

const zip = (arr, ...arrs) => arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));

const harmonics = 6;
const frequency = 1200;
const discreteCalls = 64;

const signal = generateSignal(
    harmonics,
    frequency,
    discreteCalls,
);

const spectrumDft = dft(signal);

const spectrumFft = fft(signal);

const zipped = zip(convert(spectrumDft), convert(spectrumFft));


const res = zipped.map(([dftItem, fftItem]) => fftItem - dftItem);

plt.subplot('212');
plt.plot([...Array(discreteCalls).keys()], res);
plt.xlabel('time');
plt.ylabel('fft - dft');
plt.legend();


const currentDir = path.join(__dirname, '/task2.png');
plt.save(currentDir);
