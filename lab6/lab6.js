let months = ["Січень", "Лютий", "Березень", "Квітень"];

let moreMonths = new Array("Травень", "Червень");

months.push("Травень");

months.pop();

months.unshift("Грудень");

months.shift();


let months2 = [
    "Січень", "Лютий", "Березень", "Квітень",
    "Травень", "Червень", "Липень", "Серпень",
    "Вересень", "Жовтень", "Листопад", "Грудень"
  ];
  
  months2.forEach(month => {
    console.log(month);
  });