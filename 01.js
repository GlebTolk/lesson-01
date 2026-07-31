// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 0;

(function addNext(currentNumber) {
    if (currentNumber > 20) {
        return; // Базовое условие: если дошли до 21, останавливаем вызовы
    }
    
    sum += currentNumber;   // Прибавляем текущее число
    addNext(currentNumber + 1); // Рекурсивный вызов для следующего числа
})(1); // Немедленно вызываем функцию, начиная с единицы
console.log(sum)