//This does both kinds of counts 
function countBothChar(value, checker) {
    var num;
    if (checker) {
        return value.length;
    }
    else {
        num = value.trim().length;
    }
    return num;
}
console.log(countBothChar("  TEST1  "));
console.log(countBothChar("  TEST2  ", false));
console.log(countBothChar("  TEST3  ", true));
