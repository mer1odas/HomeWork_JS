function extractCurrencyValue(str) {
    return Number(str.slice(1))
};

alert( extractCurrencyValue('$120')); // true