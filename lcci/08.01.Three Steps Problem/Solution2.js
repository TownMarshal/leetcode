/**
 * @param {number} n
 * @return {number}
 */

const mod = 1e9 + 7;

var waysToStep = function (n) {
    if (n < 4) {
        return Math.pow(2, n - 1);
    }
    const a = [
        [1, 1, 0],
        [1, 0, 1],
        [1, 0, 0],
    ];
    let ans = 0;
    const res = pow(a, n - 4);
    for (const x of res[0]) {
        ans = (ans + x) % mod;
    }
    return ans;
};

function mul(a, b) {
    const [m, n] = [a.length, b[0].length];
    const c = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            for (let k = 0; k < b.length; ++k) {
                c[i][j] =
                    (c[i][j] + Number((BigInt(a[i][k]) * BigInt(b[k][j])) % BigInt(mod))) % mod;
            }
        }
    }
    return c;
}

function pow(a, n) {
    let res = [[4, 2, 1]];
    while (n) {
        if (n & 1) {
            res = mul(res, a);
        }
        a = mul(a, a);
        n >>= 1;
    }
    return res;
}
