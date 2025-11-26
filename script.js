// Задание 1: Показ текущей даты и времени
function displayDateTime() {
    var currentDate = new Date(); // Создаем объект текущей даты
    var daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Месяцы начинаются с 0
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var dayOfWeek = daysOfWeek[currentDate.getDay()]; // Получаем день недели
    
    // Форматируем строку
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var formattedDate = `Сегодня – ${day} сентября ${year} года, ${hours}:${minutes}:${seconds}, ${dayOfWeek}`;
    document.getElementById("dateTime").innerHTML = formattedDate;
}

// Задание 1: Удаление пробелов из строки
function removeSpaces() {
    var inputText = document.getElementById("inputText").value;
    var result = inputText.replace(/\s+/g, ''); // Удаляем все пробелы
    document.getElementById("result").value = result;
}

// Задание 2: Создание объекта "Предмет мебели"
function Furniture(name, material, color, size) {
    this.name = name; // Название предмета
    this.material = material; // Материал
    this.color = color; // Цвет
    this.size = size; // Размер

    // Метод для описания предмета
    this.describe = function() {
        return `Предмет: ${this.name}, Материал: ${this.material}, Цвет: ${this.color}, Размер: ${this.size}`;
    };

    // Метод для изменения цвета
    this.changeColor = function(newColor) {
        this.color = newColor;
        return `Цвет изменен на ${this.color}`;
    };

    // Метод для сравнения размеров
    this.compareSize = function(anotherFurniture) {
        if (this.size > anotherFurniture.size) {
            return `${this.name} больше ${anotherFurniture.name}`;
        } else if (this.size < anotherFurniture.size) {
            return `${this.name} меньше ${anotherFurniture.name}`;
        } else {
            return `${this.name} и ${anotherFurniture.name} одинакового размера`;
        }
    };
}

// Создание экземпляров объекта "Предмет мебели"
var chair = new Furniture("Стул", "Дерево", "Коричневый", "50x50x100");
var table = new Furniture("Стол", "Металл", "Черный", "120x60x75");
var sofa = new Furniture("Диван", "Ткань", "Серый", "200x90x90");
var wardrobe = new Furniture("Шкаф", "Дерево", "Белый", "180x80x50");
var desk = new Furniture("Письменный стол", "МДФ", "Коричневый", "120x60x75");
var shelf = new Furniture("Полка", "Металл", "Черный", "100x20x40");

// Функция для вывода данных на страницу
function displayFurniture() {
    var furnitureArray = [chair, table, sofa, wardrobe, desk, shelf];
    var output = "";
    for (var i = 0; i < furnitureArray.length; i++) {
        output += `<li class="furniture-item">${furnitureArray[i].describe()}</li>`;
    }
    document.getElementById("furnitureInfo").innerHTML = "<ul class='furniture-list'>" + output + "</ul>";
}

// Функция для переключения вкладок
function showTab(tabId) {
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    var buttons = document.querySelectorAll('.tab-buttons button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    document.querySelector('[data-tab="' + tabId + '"]').classList.add('active');
}

// Инициализация страницы с показом первой вкладки
window.onload = function() {
    showTab('task1');
    displayDateTime(); // Важный момент! Вызываем displayDateTime здесь.
    displayFurniture();
}
