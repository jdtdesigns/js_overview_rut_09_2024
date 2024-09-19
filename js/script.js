const notes = ['JS is cool', 'create a constant with const', 'use the src attribute on the script tag to load a js file'];

console.log(notes);

// Adds an item to the end of the array
notes.push('Copilot is a great help!');

console.log(notes);

// Adds an item to the beginning of the array
notes.unshift('CSS is crazy');

console.log(notes);

// Pop removes the last item from the array
notes.pop();

console.log(notes);

// Shift removes the first item from the array
notes.shift();

console.log(notes);

const notes2 = notes;
// To remove an item at a certain index, we use splice
// You pass in the index of where you want to start deleting items and then the amount of items you want to remove
notes2.splice(1, 2);

console.log(notes2);