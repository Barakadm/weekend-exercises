// Ex2.3 - Find the Next Perfect Square
// You might know some pretty large perfect squares.
//  But what about the NEXT one?
// Complete the findNextSquare method that finds the 
// next integral perfect square after the one
// passed as a parameter. Recall that an integral perfect
//  square is an integer n such that sqrt(n) is
// also an integer.
// If the parameter is itself not a perfect square then -1 
// should be returned. You may assume the
// parameter is positive.
// Examples:
// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect
// findNextSquare(114) --> returns -1 since 114 is not a perfect



function findNextSquare(mysq){
   let nextsq;
// נשתמש בספריה math.sqrt 
// שמבצעת שורש על מספר 
   //  נבדוק אם יש שארית מהשורש של המספר כאשר הוא מחולק ב1
   if(Math.sqrt(mysq) % 1 === 0){
      // נוסיף למספר 1 
        nextsq=Math.sqrt(mysq)+1;
        console.log(nextsq);
        
   }else{
       return -1;
   }
   // נכפיל את המספר בעצמו 
   return nextsq*nextsq;
}

console.log(findNextSquare(324));
