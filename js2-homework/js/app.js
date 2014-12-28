// функция для получение произвольного цвета
function getRandomColor() {
    // делам массив из букв и цифр для цвета
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    // составляем цвет из рандомных букв и цифр массива letters
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };
    // возвращаем рандомный цвет
    return color;
};
// функция для получения произвольного числа в интервале от min до max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
};
// функция для добавления квадрата
document.getElementById("square").onclick = function() {
    p = document.createElement("p");
    if (getRandomNumber(0, 1) == 1) {
        // добавление фигуры через стили
        p.className = "square";
        document.querySelector(".pictures").appendChild(p);
    } else {
        // добавление фигуры через inline стиль
        var edgeLength = getRandomNumber(50, 100);
        p.style.width = edgeLength + "px";
        p.style.height = edgeLength + "px";
        p.style.background = getRandomColor();
        document.querySelector(".pictures").appendChild(p);
    };
    // скролл вниз страницы для отображения фигуры
    window.scrollBy(0, 9999);
};
// функция для добавления круга
document.getElementById("circle").onclick = function() {
    p = document.createElement("p");
    if (getRandomNumber(0, 1) == 1) {
        p.className = "circle";
        document.querySelector(".pictures").appendChild(p);
    } else {
        var edgeLength = getRandomNumber(50, 100);
        p.style.width = edgeLength + "px";
        p.style.height = edgeLength + "px";
        p.style.borderRadius = "50%";
        p.style.background = getRandomColor();
        document.querySelector(".pictures").appendChild(p);
    };
    window.scrollBy(0, 9999);
};
// функция для добавления эллипса
document.getElementById("ellipse").onclick = function() {
    p = document.createElement("p");
    if (getRandomNumber(0, 1) == 1) {
        p.className = "ellipse";
        document.querySelector(".pictures").appendChild(p);
    } else {
        p.style.width = getRandomNumber(50, 100) + "px";
        p.style.height = getRandomNumber(50, 100) + "px";
        p.style.borderRadius = "50%";
        p.style.background = getRandomColor();
        document.querySelector(".pictures").appendChild(p);
    };
    window.scrollBy(0, 9999);
};
// функция для добавления прямоугольника
document.getElementById("rectangle").onclick = function() {
    p = document.createElement("p");
    if (getRandomNumber(0, 1) == 1) {
        p.className = "rectangle";
        document.querySelector(".pictures").appendChild(p);
    } else {
        p.style.width = getRandomNumber(50, 100) + "px";
        p.style.height = getRandomNumber(50, 100) + "px";
        p.style.background = getRandomColor();
        document.querySelector(".pictures").appendChild(p);
    };
    window.scrollBy(0, 9999);
};
// функция для добавления треугольника
document.getElementById("triangle").onclick = function() {
    p = document.createElement("p");
    if (getRandomNumber(0, 1) == 1) {
        p.className = "triangle";
        document.querySelector(".pictures").appendChild(p);
    } else {
        var edgeLength = getRandomNumber(50, 100);
        p.style.width = "0";
        p.style.height = "0";
        p.style.borderLeft = edgeLength / getRandomNumber(1, 10) + "px solid transparent";
        p.style.borderRight = edgeLength / getRandomNumber(1, 10) + "px solid transparent";
        p.style.borderBottom = edgeLength + "px solid " + getRandomColor();
        document.querySelector(".pictures").appendChild(p);
    };
    window.scrollBy(0, 9999);
};
// функция для добавления трапеции
document.getElementById("trapeze").onclick = function() {
    p = document.createElement("p");
    if (getRandomNumber(0, 1) == 1) {
        p.className = "trapeze";
        document.querySelector(".pictures").appendChild(p);
    } else {
        var edgeLength = getRandomNumber(50, 100);
        p.style.width = 2 * edgeLength + "px";
        p.style.height = "0";
        p.style.borderLeft = edgeLength / getRandomNumber(1, 5) + "px solid transparent";
        p.style.borderRight = edgeLength / getRandomNumber(1, 5) + "px solid transparent";
        p.style.borderBottom = edgeLength + "px solid " + getRandomColor();
        document.querySelector(".pictures").appendChild(p);
    };
    window.scrollBy(0, 9999);
};
// функция для удаления всех элементов
document.getElementById("clean").onclick = function() {
    document.querySelector(".pictures").innerHTML = "";
};
