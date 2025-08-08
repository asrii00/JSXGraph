export function sampleUniform(a, b) {
    return a + (b - a) * Math.random();
}

export function sampleNormal(mean, stddev) {
    const u1 = Math.random();
    const u2 = Math.random();
    const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    return mean + stddev * z0;
}

export function sampleBinomial(n, p, multiplier) {
    let successCount = 0;
    for (let i = 0; i < n; i++) {
        if (Math.random() < p) successCount++;
    }
    return successCount * multiplier;
}