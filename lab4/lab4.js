let temperature = 20;

if (temperature < 10) {
  console.log("Погода холодна");
} else if (temperature >= 10 && temperature <= 25) {
  console.log("Погода тепла");
} else {
  console.log("Погода спекотна");
}


let number = 7;
let result = (number % 2 === 0) ? "Парне число" : "Непарне число";
console.log(result);


let day = "середа";

switch(day.toLowerCase()) {
  case "понеділок":
    console.log("Сьогодні понеділок");
    break;
  case "вівторок":
    console.log("Сьогодні вівторок");
    break;
  case "середа":
    console.log("Сьогодні середа");
    break;
  case "четвер":
    console.log("Сьогодні четвер");
    break;
  case "п’ятниця":
    console.log("Сьогодні п’ятниця");
    break;
  case "субота":
    console.log("Сьогодні субота");
    break;
  case "неділя":
    console.log("Сьогодні неділя");
    break;
  default:
    console.log("Невідомий день тижня");
}



let password = "admin123";

if (password === "admin123") {
  console.log("Доступ дозволено");
} else {
  console.log("Доступ заборонено");
}

