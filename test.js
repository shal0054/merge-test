findSlow('canada');
findFast('canada');

let myString = 'karim';

console.log(myString.toUpperCase());

let String = {
  toUpperCase: (string) => {
    for (let i = 0; i < string.length + 1; i++) {}
  },

  toLowerCase: (string) => {},
};

class ClassMates {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    return this.name + ' is ' + this.age + ' years old!';
  }

  displayAge() {
    return this.age;
  }
}

let classmate = new ClassMates('Mike Will', 15);
console.log(classmate.displayAge()); // result: Mike Will is 15 years old!
