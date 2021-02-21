// Ex1.1 - Yes or No
// Complete the method that takes a boolean
// value and return a "Yes" string for true, or a "No"
// string for false.
// const isbool = (Element) => {
//   if (element === True) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// };

// function add(a , b) {
//     const total = a + b
//     return total
// }
// הפונקציה למעלה היא הדרך הארוכה , ניתן לקצר אותה כפי שרואים
// למטה , כך שאנו משייכים את הפונקציה לערך וכותבים אותה בשורה אחת

// const add = (a , b) => a + b ;
function isbool(params) {
 if (params === true) {
     console.log('Yes');
 } else {
     console.log('No');
 }   
}

isbool(true);
