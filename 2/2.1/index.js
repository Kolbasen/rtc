const { generateSignal } = require('../../1/generateSignal');
const { dft } = require('../dft');
const plt = require('matplotnode');
const path = require('path');
const { convert } = require('../utils');

const harmonics = 6;
const frequency = 1200;
const discreteCalls = 64;

const signal = generateSignal(
    harmonics,
    frequency,
    discreteCalls,
);

const spectrumDft = dft(signal);

plt.subplot('211');
plt.title('Signal and Discrete Fourier transform');
plt.plot([...Array(discreteCalls).keys()], signal);
plt.xlabel('time');
plt.ylabel('signal');
plt.legend();

plt.subplot('212');
plt.plot([...Array(discreteCalls).keys()], convert(spectrumDft));
plt.xlabel('time');
plt.ylabel('dft');
plt.legend();


const currentDir = path.join(__dirname, '/2.1.png');
plt.save(currentDir);
