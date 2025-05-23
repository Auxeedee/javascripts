// Функція-конструктор
function User(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Додаємо метод у прототип
  User.prototype.greet = function() {
    console.log(`Привіт, мене звати ${this.name} і мені ${this.age} років.`);
  };
  
  // Створюємо екземпляр
  const user1 = new User("Олег", 20);
  
  // Викликаємо метод із прототипу
  user1.greet();