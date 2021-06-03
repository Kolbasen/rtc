const { generateSignal } = require('../../1/generateSignal');
const plt = require('matplotnode');
const path = require('path');
const { convert } = require('../utils');
const { fft } = require('../fft');

const harmonics = 6;
const frequency = 1200;
const discreteCalls = 64;

const signal = generateSignal(
    harmonics,
    frequency,
    discreteCalls,
);

const spectrumDft = fft(signal);

plt.subplot('211');
plt.title('Signal and Fast Fourier transform');
plt.plot([...Array(discreteCalls).keys()], signal);
plt.xlabel('time');
plt.ylabel('signal');
plt.legend();

plt.subplot('212');
plt.plot([...Array(discreteCalls).keys()], convert(spectrumDft));
plt.xlabel('time');
plt.ylabel('fft');
plt.legend();


const currentDir = path.join(__dirname, '/2.2.png');
plt.save(currentDir);
