// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 1;        // начальное значение — 1
let current = 2;    // начинаем со второго числа

while (current <= 20) {
  sum += current;
  current++;
}

console.log(sum); 