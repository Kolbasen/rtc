const mathExpectation = (arr = []) =>
    arr.reduce((acc, val) => (
        acc += val
    ), 0) / arr.length;

const mathDispersion = (mathExpectation, arr = []) =>
    arr.reduce((acc, val) => (
        acc += Math.pow(mathExpectation - val, 2)
    ), 0) / arr.length;


const correlation = (sig1, sig2) => {
    const len = sig1.length;
    if (len !== sig2.length) throw new Error();
    const mx1 = mathExpectation(sig1);
    const mx2 = mathExpectation(sig2);

    const result = [];
    for (let i = 0; i < len; i++) {
        const cr = (sig1[i] - mx1) * (sig2[i] - mx2);
        result.push(cr);
    }
    return result.reduce((acc, v) => acc + v, 0) / (len - 1);
};

const autoCorrelation = sig => {
    const mid = Math.floor(sig.length / 2);
    const sig_a = sig.slice(0, mid);

    const tauArr = [];
    const corrArr = [];

    for (let tau = 0; tau < mid; tau++) {
        const sig_b = sig.slice(tau, tau + mid);
        const corr = correlation(sig_a, sig_b);
        tauArr.push(tau);
        corrArr.push(corr);
    }

    return [tauArr, corrArr];
};

const crossCorrelation = (sig1, sig2) => {
    const mid = Math.floor(sig1.length / 2);
    const a = sig1.slice(0, mid);

    const tauArr = [];
    const corrArr = [];

    for (let tau = 0; tau < mid; tau++) {
        const b = sig2.slice(tau, tau + mid);
        const corr = correlation(a, b);
        tauArr.push(tau);
        corrArr.push(corr);
    }

    return [tauArr, corrArr];
};

module.exports = {
    mathExpectation,
    mathDispersion,
    autoCorrelation,
    crossCorrelation,
};
