function combine(n1, n2, resultConversion) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    if (resultConversion === "as-number") {
        return +result;
    }
    else {
        return result.toString();
    }
    return result;
}
var numberCombined = combine(1, 2, "as-number");
console.log(numberCombined);
var stringAgesCombined = combine("1", "2", "as-number");
var stringCombined = combine("1", "2", "as-text");
console.log(stringCombined);
