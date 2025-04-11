function dogToHumanYears(dogAge) {
  return (dogyears) * (HumanYears);
}
let dogyears=1
let HumanYears=7
let dogAge=7
console.log(dogAge)

function calculateTip(total, percentage) {
    if (total <= 0 || percentage < 0) {
        return "Invalid input. Please enter positive values for total and percentage.";
    }
    let totalAmount=(100)
    let tip = (total * percentage) / 100;
    return tip;
}
console.log(total, percentage)

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

// Example usage:
console.log(checkEvenOdd(4)); // Output: Even
console.log(checkEvenOdd(7)); // Output: Odd