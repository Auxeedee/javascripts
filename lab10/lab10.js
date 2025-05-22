let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2010
  };
  
  car.year = 2022;
  car.color = "red";
  delete car.model;
  
  console.log("brand" in car);
  
  for (let key in car) {
    console.log(key + ": " + car[key]);
  }
  