function coins2(amount) {
    var res = {};
    [500, 200, 100, 50, 20, 10, 5, 2, 1].map(function (coin) {
        res[coin] = Math.floor(amount / coin);
        amount %= coin;
    });
    return res;
}

console.log(coins2(582));