const { autoCorrelation, crossCorrelation } = require('../statUtils');
const { generateSignal } = require('../generateSignal');
const path = require('path');
const plt = require('matplotnode');

const harmonics = 6;
const frequency = 1200;
const discreteCalls = 64;


const sig = generateSignal(harmonics, frequency, discreteCalls);
const [autoCorrTau, autoCorr] = autoCorrelation(sig);


const sig1 = generateSignal(harmonics, frequency, discreteCalls);
const sig2 = generateSignal(harmonics, frequency, discreteCalls);
const [crossCorrTau, crossCorr] = crossCorrelation(sig1, sig2);

plt.subplot('211');
plt.title('Auto correlation');
plt.plot(autoCorrTau, autoCorr);
plt.xlabel('tau');
plt.ylabel('correlation');
plt.legend();

const currentDir = path.join(__dirname, '/autoCorr.png');
plt.save(currentDir);

plt.subplot('212');
plt.title('Cross correlation');
plt.plot(crossCorrTau, crossCorr);
plt.xlabel('tau');
plt.ylabel('correlation');
plt.legend();


const currentDir1 = path.join(__dirname, '/crossCorr.png');
plt.save(currentDir1);



