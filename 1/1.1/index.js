const { generateSignal } = require('../generateSignal');
const { mathExpectation, mathDispersion } = require('../statUtils');
const path = require('path');
const plt = require('matplotnode');
const { calculateTimeSignal } = require('../complexity');

const harmonics = 6;
const frequency = 1200;
const discreteCalls = 64;

const signal = generateSignal(
    harmonics,
    frequency,
    discreteCalls,
);

const timeDiscretteCalls = 3000;

const time = calculateTimeSignal(
    harmonics,
    frequency,
    timeDiscretteCalls,
);

const expectation = mathExpectation(signal);

console.log('Math expectation = ' + expectation);
console.log('Math dispersion = ' + mathDispersion(expectation, signal));


plt.subplot('211');
plt.title('Generated signal and complexity algo');
plt.plot([...Array(discreteCalls).keys()], signal);
plt.xlabel('time');
plt.ylabel('signal');
plt.legend();

plt.subplot('212');
plt.plot([...Array(timeDiscretteCalls).keys()], time);
plt.xlabel('calls');
plt.ylabel('time');
plt.legend();

const currentDir = path.join(__dirname, '/1.1.png');
plt.save(currentDir);


