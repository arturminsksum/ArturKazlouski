var app = (function(link) {
    // панель новостей и галереи
    var newsPanel = document.getElementById("latestNews"),
        galeryPanel = document.getElementById("latestGalery"),
        news;

    // функция для прорисовки новости в панели новостей
    function createNews(item) {
        // создаем новый div элемент
        var panel = document.createElement("div");
        // присваеваем ему bootstrap класс
        panel.className = "col-xs-12 col-sm-12 col-md-6 col-lg-6";
        panel.id = item.id;
        // наполнение данными div элемент
        panel.innerHTML = "<div class=\"panel panel-default\"><div class=\"panel-heading\"><h3 class=\"panel-title\">" + item.title + "</h3></div><div class=\"panel-body\"><p><img src=\"" + item.image + "\" class=\"img-thumbnail\"></p>" + item.preview + "</div> <div class = \"panel-footer\">Дата:" + item.date + " | <a href=\"#\" id=\"a_" + item.id + "\" data_id=\"" + item.id + "\">Подробнее</a></div>";
        // присоединение div элемента к панели новостей
        newsPanel.appendChild(panel);
        document.getElementById("a_" + item.id).addEventListener("click", handler);
    };
    // функция для прорисовки изображения в панели галереи
    function handler() {
        var id = this.attributes.data_id.value;
        // новый запрос на сервер
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', 'http://babruysk.by/ajax_php/news-item-api.php?id=' + id);
        var timeout = setTimeout(function() {
            // обрыв запроса через 10 секунд
            httpRequest.abort();
        }, 10000);
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) {
                    var response = (httpRequest.responseText).replace(/(\r\n|\n|\r)/gm, " ");
                    response = response.replace(/\s+/g, " ");
                    var item = JSON.parse(response).item;
                    newsPanel.innerHTML = "";
                    // наполнение данными div элемент
                    newsPanel.innerHTML = "<div class=\"panel panel-default\"><div class=\"panel-heading\"><h3 class=\"panel-title\">" + item.title + "</h3></div><div class=\"panel-body\"><p><img src=\"" + item.image + "\" class=\"img-thumbnail\"></p>" + item.text + "</div> <div class = \"panel-footer\">Дата:" + item.date + " | <a href=\"#\" id=\"c_" + item.id + "\" data_id=\"" + item.id + "\">Закрыть</a></div>";
                    document.getElementById("c_" + item.id).addEventListener("click", function() {
                        // очистка панелей новостей и галереи
                        newsPanel.innerHTML = "";
                        news.items.forEach(function(element, index, array) {
                            createNews(element);
                        });
                        document.getElementById("a_" + item.id).addEventListener("click", handler);
                    });
                } else {
                    // callback при ошибке
                    alert('Error: ' + httpRequest.status);
                };
            };
        };
        // конец запроса
        httpRequest.send(null);
    };

    function createGalery(item) {
        // создаем новый div элемент
        var panel = document.createElement("div");
        // присваеваем ему bootstrap класс
        panel.className = "col-xs-12 col-sm-6 col-md-4 col-lg-4";
        // наполнение данными div элемент
        panel.innerHTML = "<div class=\"panel panel-default\"><div class=\"panel-body\"><p><img src=\"" + item.image + "\" class=\"img-thumbnail\"></p></div>";
        // присоединение div элемента к панели галереи
        galeryPanel.appendChild(panel);
        document.getElementById("a_" + item.id).addEventListener("click", handler);
    };
    // новый запрос на сервер
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', link);
    var timeout = setTimeout(function() {
        // обрыв запроса через 10 секунд
        httpRequest.abort();
    }, 10000);
    // выполнение функции при получении ответа от сервера
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                // текст ответа
                var text = httpRequest.responseText;
                // очистка данный до последнего ответа
                var index = text.lastIndexOf(',');
                if (index != -1) {
                    text = text.substring(0, index) + text.substring(index + 1);
                };
                // преобразование ответа в JSON формат
                news = JSON.parse(text);
                // очистка панелей новостей и галереи
                newsPanel.innerHTML = "";
                galeryPanel.innerHTML = "";
                // прорисовка новости и изображения для каждой новости
                news.items.forEach(function(element, index, array) {
                    createNews(element);
                    createGalery(element);
                });
            } else {
                // callback при ошибке
                alert('Error: ' + httpRequest.status);
            };
        };
    };
    // конец запроса
    httpRequest.send(null);
    document.getElementById("searchButton").addEventListener("click", function() {
        if (document.getElementById("searchForm")) {
            var obj = document.getElementById("searchForm");
            if (obj.style.display != "inline-block") {
                obj.style.display = "inline-block";
            } else {
                obj.style.display = "none";
            };
        } else {
            console.warn("Элемент с id: searchForm не найден!")
        };
    });
})('http://babruysk.by/ajax_php/news-api.php');
