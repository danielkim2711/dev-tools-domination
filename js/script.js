const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];
const p = document.querySelector('p');

function makeGreen() {
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', 'testing');

// Styled
console.log('%c I am some great text', 'font-size:50px; background:red');

// warning!
console.warn('OH NOOO');

// Error :|
console.error('Darn!');

// Info
console.info('Hello this is info');

// Testing
console.assert(1 === 1, 'That is wrong');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Hi');
console.count('Hi');
console.count('Hi');
console.count('Hola');
console.count('Hi');
console.count('Hi');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/danielkim2711')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);
