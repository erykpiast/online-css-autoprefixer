module.exports = (function() {

    var x = 0;
    var obj = {
      [x]: 'hello'
    };
    
    console.log(Object.keys(obj).map((key) => 'key "' + key + '" is "' + obj[key]).join('\n'));

})();