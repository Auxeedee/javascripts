// Створюємо об'єкт з методом
const user = {
    name: "Іван",
    greet() {
      console.log("Привіт, мене звати " + this.name);
      console.log("this у методі:", this);
    }
  };
  
  // Викликаємо метод об'єкта
  user.greet();
  