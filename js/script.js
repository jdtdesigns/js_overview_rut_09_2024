const userData = {
  name: 'JD',
  age: 44,
  phone: '777-777-7777',
  address: '555 coding st',
  info: {
    location: 'Atlanta area',
    hobbies: ['pickleball', 'fishing']
  },
  printAge: function () {
    console.log(this.age);
  },
  haveBirthday: function () {
    // Increase the age of the user by one
    this.age++;
    // Print 'Happy Birthday' to the console
    console.log('Happy Birthday!');
  },
  addHobby: function (hobby) {
    // Need to reference an argument that is passed to addHobby (string of a hobby)

    // Push the argument(hobby) to the info.hobbies array
    this.info.hobbies.push(hobby)
  },
  printHobbies: function () {
    // console.log the hobbies array
    console.log(this.info.hobbies);

    // BONUS - Loop over the hobbies array and console.log each hobby
    // for (let i = 0; i < this.info.hobbies.length; i++) {
    //   console.log(this.info.hobbies[i]);
    // }

    for (let hobby of this.info.hobbies) {
      console.log(hobby);
    }
  }
};

userData.addHobby('tennis');
userData.addHobby('coding');
userData.addHobby('golf');
userData.addHobby('bingo');

userData.printHobbies();



// test('tennis', 10);
// test('tennis', 10);



// function test(hobby, age) {
//   console.log(hobby);
// }

// test('tennis', 10);
// test('tennis', 10);
// test('tennis', 10);

