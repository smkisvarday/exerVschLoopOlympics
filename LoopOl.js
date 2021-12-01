for (var i = 0; i <10; i++) {
    console.log (i);
}

for (var i =9; i >=0; i--) {
    console.log (i);
}

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

for (var i = 0; i <fruit.length; i++) {
    console.log(fruit[i]);
}

var num = [];

for (var i = 0; i<10; i++) {
    num[i] = i;
    console.log(num);
}

for (var i = 0; i<101; i++) {
    if (i %2 === 0) {
        console.log(i);
    }    
}

var frtarray = [];

for (var i = 0; i <fruit.length; i++) {
    if (i %2 === 0) {
       frtarray.push (fruit [i] )
    }
}
console.log(frtarray);

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations

for (let i=0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name);
}

let names = [];
let occupations = [];

for (let i=0; i < peopleArray.length; i++) {
    names.push (peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
}

console.log(names);
console.log(occupations);

for (let i=0; i < peopleArray.length; i++) {
    i %2 === 0 ? names.push (peopleArray[i].name): occupations.push(peopleArray[i].occupation);

    }

var names2 = [];

for (var i = 0; i < peopleArray.length; i++) {
        if (i %2 === 0) {
           names2.push (names[i] )
        }
    }
    console.log(names2);

var occupations2 = [];

for (var i = 0; i < peopleArray.length; i++) {
            if (i %2 !== 0) {
               occupations2.push (occupations[i] )
            }
        }
        console.log(occupations2);
    
