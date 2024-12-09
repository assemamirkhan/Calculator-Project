let input = document.getElementById('call');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') { // Если нажата кнопка "="
            try {
                string = eval(string); // Выполняет вычисление строки
                input.value = string; // Отображает результат
            } catch {
                input.value = "Ошибка"; // Если ошибка - выводит сообщение
                string = ""; // Очищает строку
            }
        } else if (e.target.innerHTML === 'AC') { // Если нажата кнопка "AC"
            string = ""; // Очищает всю строку
            input.value = string;
        } else if (e.target.innerHTML === 'DEL') { // Если нажата кнопка "DEL"
            string = string.substring(0, string.length - 1); // Удаляет последний символ
            input.value = string;
        } else { // Для остальных кнопок
            string += e.target.innerHTML; // Добавляет текст кнопки к строке
            input.value = string; // Отображает текущее выражение
        }
    });
});
