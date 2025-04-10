//print A,B,C,D or F based on score
let score=90
if (score >=90) {
    let grading = "A";
    console.log(grading)
  } 
else if (score >=80) {
    let grading="B"
    console.log(grading)
}
else if(score>=70) {
    let grading="C"
    console.log(grading)
}
else if (score>=60) {
    let grading="D"
    console.log(grading)
}
else if(score>=50){
    let grading="F"
    console.log(grading)
}
let quanity = 12
// Print warning if quantity > 10
 
if (quanity>10) {
console.warn("only 10 allowed per order");
console.log(quanity)
}
else if(quanity<10) {
 console.warn("add to cart");
console.log(quanity)
}
  let password="letmein";  
  //or use prompt//print "access granted"or "access denied"  
  if(password="letmein"){
    let password="access granted";
    console.log(password)
  }
  else if(password=x){
    let password="access denied";
    console.log(password)
  }
                

//   else if (time < 20) {
//     greeting = "Good day";
//   } else {
//     greeting = "Good evening";
//   }
