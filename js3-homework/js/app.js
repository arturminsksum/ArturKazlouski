var activeButtonId = "one-videos";
function rangeChange() {
    document.getElementById(activeButtonId).className = "purple-button";
    var range = document.getElementById('range'),
        backgroundColor = "#c9cfcf",
        gradientColor1 = "#f54786",
        gradientColor2 = "#f54786",
        rangeHeight = range.offsetHeight;
    document.getElementById("range-span").innerHTML = range.value + " videos";
    var currentRangeHeight = Number(range.value / range.max) * range.offsetWidth + 'px';
    range.style.background = '-webkit-linear-gradient(left, ' + gradientColor1 + ' 0, ' + gradientColor2 + ' ' + currentRangeHeight + ', ' + backgroundColor + ' ' + currentRangeHeight + ', ' + backgroundColor + ' ' + rangeHeight + 'px)';
    if (range.value <= 1) {
        document.getElementById(activeButtonId).classList.remove('purple-button');
        document.getElementById(activeButtonId).classList.add('cost-button')
        activeButtonId = "one-videos";
        document.getElementById(activeButtonId).classList.add('purple-button');
    } else if (range.value > 1 && range.value <= 20) {
        document.getElementById(activeButtonId).classList.remove('purple-button');
        document.getElementById(activeButtonId).classList.add('cost-button')
        activeButtonId = "twenty-videos";
        document.getElementById(activeButtonId).classList.add('purple-button');
    } else {
        document.getElementById(activeButtonId).classList.remove('purple-button');
        document.getElementById(activeButtonId).classList.add('cost-button')
        activeButtonId = "more-videos";
        document.getElementById(activeButtonId).classList.add('purple-button');
    };
};
document.getElementById("range").onchange = function() {
    console.info("range.value:" + this.value);
    rangeChange();
};
rangeChange();
(function() {
    rangeChange();
})();

function showThis(info) {
    console.info(info);
};

function showSettings(settings) {
    Object.keys(settings).forEach(function(prop) {
        console.log(prop + ': ' + settings[prop]);
    });
};
var settings = {
    number: 2,
    string: "this",
    boolean: false,
    array: [
        'one',
        'two',
        'three'
    ],
    object: {
        '1': '21',
        '2': '22',
        '3': '23'
    }
};
var App = (function(params) {
    var settings = {
            number: 1,
            string: "this",
            boolean: false,
            array: [
                'one',
                'two',
                'three'
            ],
            object: {
                '1': '11',
                '2': '12',
                '3': '13'
            }
        },
        _self = this;
    showThis(this);
    showSettings(settings)
    return true;
});
App.call(settings);
App.apply(settings);
var settings = {
    number: 3,
    string: "this",
    boolean: false,
    array: [
        'one',
        'two',
        'three'
    ],
    object: {
        '1': '31',
        '2': '32',
        '3': '33'
    }
};
var newApp = App.bind(settings);
console.info(newApp);
