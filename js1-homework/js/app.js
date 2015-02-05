(function() {
    var varNumber = 2014;
    var varBoolean = true;
    var varString = "JS Homework 1";
    var varNull = null;
    var varUndefined = undefined;
    var varObject = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
    };

    var varArray = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    var varRegExp = /g/;
    var varData = new Date();
    var varFunction = function(input) {
        var paragraph = document.createElement("p");
        paragraph.innerHTML = typeof(input) + ":" + input;
        document.getElementById("result").appendChild(paragraph);

    };
    console.log("Types:");
    console.info("varNumber:" + typeof(varNumber));
    varFunction(varNumber);
    console.info("varBoolean:" + typeof(varBoolean));
    varFunction(varBoolean);
    console.info("varString:" + typeof(varString));
    varFunction(varString);
    console.info("varNull:" + typeof(varNull));
    varFunction(varNull);
    console.info("varUndefined:" + typeof(varUndefined));
    varFunction(varUndefined);   
    console.info("varObject:" + typeof(varObject));
    varFunction(varObject);
    console.info("varArray:" + typeof(varArray));
    varFunction(varArray);
    console.info("varRegExp:" + typeof(varRegExp));
    varFunction(varRegExp);
    console.info("varData:" + typeof(varData));
    varFunction(varData);
    console.info("varFunction:" + typeof(varFunction));
    varFunction(varFunction);

    console.log('Changed number and string types:');
    var varNewString = +varString;
    varFunction(varNewString);
    var varNewNumber = varNumber + "";
    varFunction(varNewNumber);
    console.info("varNewString:" + typeof(varNewString));
    console.info("varNewNumber:" + typeof(varNewNumber));

    console.log('Сomparison string and number types:');
    console.info(varNumber === varString);

    console.log("Array(\"for\" method):");
    for (var i = 0; i <= varArray.length - 1; i++) {
        console.info("Array[" + i + "]=" + varArray[i] + ";");
        varFunction(varArray[i]);
    };

    console.log("Array(\"while\" method):");
    var j = 0;
    while (j < varArray.length) {
        console.info("Array[" + j + "]=" + varArray[j] + ";");
        j++;
    };

    console.log("Object(\"in\" method):");
    for (var prop in varObject) {
        console.info("Object " + prop + ': ' + varObject[prop]);
    };

    console.log("Object(\"forEach\" method):");
    Object.keys(varObject).forEach(function(prop) {
        console.log(prop + ': ' + varObject[prop]);
    });

    console.dir(varFunction.prototype);
})();
