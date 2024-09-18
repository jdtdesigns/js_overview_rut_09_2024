const names = ['Izzy', 'Matt', 'City', 'Kandyce'];
const fruit = 'apple';

function printNames() {
  const someVal = 'this is a val';
  // Loop over the names array and print out each name to the console
  for (let index = 0; index < names.length; index++) {
    console.log(names[index]);
  }
}

printNames();

if (true) {
  const nestedVar = 'some nested var';
  console.log(nestedVar);
}
