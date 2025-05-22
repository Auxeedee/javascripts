// 1. Створення об'єкта з методами
const user = {
  username: "Ivan",
  login() {
    console.log(this.username + " увійшов(ла) в систему");
  },
  logout() {
    console.log(this.username + " вийшов(ла) із системи");
  }
};

user.login();
user.logout();

// 2. Функція-конструктор
function User(name) {
  this.username = name;
}

User.prototype.login = function() {
  console.log(this.username + " увійшов(ла) в систему");
};

User.prototype.logout = function() {
  console.log(this.username + " вийшов(ла) із системи");
};

const user1 = new User("Olena");
user1.login();
user1.logout();

// 3. Наслідування через прототипи
function Admin(name) {
  User.call(this, name);
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

const admin1 = new Admin("Andriy");
admin1.login();
admin1.logout();

// 4. Перевизначення методів
Admin.prototype.login = function() {
  console.log(this.username + " увійшов(ла) як адміністратор");
};

admin1.login();

// 5. Додавання методу до вбудованого об'єкта
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

console.log("Привіт!".capitalize());
