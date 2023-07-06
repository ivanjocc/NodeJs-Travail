class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getInfo() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }

  // Otros métodos relacionados con el usuario
}

module.exports = User;
