// 1. Оголошення масивів різними способами
let arr1 = [12, 5, 8, 130, 44]; // через літерал
let arr2 = new Array(3, 7, 2, 10); // через конструктор

// 2. Методи обробки
console.log("sort:", arr1.sort((a, b) => a - b));
console.log("reverse:", arr2.reverse());
console.log("concat:", arr1.concat(arr2));
console.log("slice (1-3):", arr1.slice(1, 3));
arr1.splice(2, 1, 99); // заміна 1 елемента з індексу 2
console.log("splice (replace):", arr1);

// 3. Інші методи
console.log("indexOf(130):", arr1.indexOf(130));
console.log("find > 100:", arr1.find(num => num > 100));
console.log("findIndex > 50:", arr1.findIndex(num => num > 50));
console.log("includes(5):", arr1.includes(5));

// 4. filter() для парних чисел
let evenNumbers = arr1.filter(num => num % 2 === 0);
console.log("Парні числа:", evenNumbers);
