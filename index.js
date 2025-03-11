function receivesAFunction(callback) {
    callback(); // Call the passed function
}
function returnsANamedFunction() {
    function namedFunction() {
        return "I am a named function!";
    }
    return namedFunction;
}
function returnsAnAnonymousFunction() {
    return function() {
        return "I am an anonymous function!";
    };
}
