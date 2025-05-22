// 1. Цикл for: парні числа від 1 до 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  
  // 2. Цикл while: числа від n до 1
  let n = 10;
  while (n >= 1) {
    console.log(n);
    n--;
  }
  
  // 3. Цикл do...while: запитувати число поки не введуть позитивне
  let num;
  do {
    num = Number(prompt("Введіть позитивне число: "));
  } while (num <= 0 || isNaN(num));
  
  // 4. Цикл for...in: вивести ключі та значення об’єкта
  let obj = {name: "Оля", age: 22, student: true};
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
  
  // 5. Цикл for...of: вивести елементи масиву у зворотному порядку
  let arr = [1, 2, 3, 4, 5];
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
  
  // 6. Методи масивів
  let numbers = [5, 12, 8, 130, 44];
  
  // forEach() - вивести всі елементи
  numbers.forEach(num => console.log(num));
  
  // map() - новий масив квадратів
  let squares = numbers.map(num => num * num);
  console.log(squares);
  
  // filter() - масив чисел більше 10
  let filtered = numbers.filter(num => num > 10);
  console.log(filtered);
  