// function findFast(word) {
//   let start = new Date();

//   let countE = 0;
//   let countO = 0;

//   for (let i = 0; i < word.length + 1; i++) {
//     console.log('for loop');
//     if (word.charAt(i).toLowerCase() === 'a') {
//       countE += 1;
//       console.log('found a');
//     } else if (word.charAt(i).toLowerCase() === 'n') {
//       countO += 1;
//       console.log('found n');
//     }
//   }
//   let elapsed = new Date() - start;
//   console.log(elapsed);

//   // return countE, countO;
// }

// function findSlow(word) {
//   let start = new Date();

//   let countE = 0;
//   let countO = 0;

//   for (let i = 0; i < word.length + 1; i++) {
//     if (word.charAt(i).toLowerCase() === 'a') {
//       countE += 1;
//     }
//   }

//   for (let i = 0; i < word.length + 1; i++) {
//     if (word.charAt(i).toLowerCase() === 'n') {
//       countO += 1;
//     }
//   }
//   let elapsed = new Date() - start;
//   console.log(elapsed);

//   // return countE, countO;
// }

// findSlow('canada');
// findFast('canada');

// let myString = 'karim';

// console.log(myString.toUpperCase());

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
