console.log("somethingNew");
//Problem 1: Favorite Foods
//Create an array with 5 of your favorite foods.
//Log the first and last food in the array
//Add one more food using .push() and log the new array.
let favoriteFood = ["Jambalaya", "Gumbo", "Crawfish", "Shrimp", "Pasta"]; //why are they white?
favoriteFood.push(["cheesecake", "pizza"]);
console.log("Jambalaya");
console.log("Pasta");
console.log("cheesecake", "pizza");
//Problem 2: Guest List
//. Create an array with a list of guests.
let guestList = ["Merry", "Frodo", "Sam", "Pippin"];
// Remove the first guest using .shift()
console.log(guestList);
let removeFromguestList = guestList.shift();
// Add a new guest at the end using .push()
guestList.push(["Legolas"]);
//Log how many guests are coming (.length)
let numberOfGuest = guestList.length;
console.log(guestList.length);
//Problem 3: Weekend Tasks
let tasks = ["laundry", "groceries", "coding", "naps"];
//Write a function called printTasks() that loops through the array and logs each task
function printTaskList(tasks) {
  for (i = 0; i < 5; i++) {
    tasks.push(i);
  }
}
console.log(tasks);
//Problem 4: Reverse It (Manual Reverse)
let numbers = [1, 2, 3, 4, 5];
let reversed =[]
numbers.forEach((num)=> reversed.unshift(num));
console.log(reversed)
// Bonus: Random Picker
//Create a function called randomLunch() that:Takes an array of lunch options,Returns one at random
let lunches = ["burrito", "pizza", "sandwich", "ramen"];
let val = lunches[(Math.floor(Math.random() * (lunches.length)))];
function randomLunch() {
  
  let val = "lunches"[(Math.floor(Math.random(5) * (lunches.length)))];
  
  }
  console.log(val);

