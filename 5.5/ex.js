// Ex5.5 - Abbreviate two words
// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F6.6

function shortname(str) {
    let newstr = str.toUpperCase().split(" ");
 

    let sname= [];
    for (let i in newstr) {
        sname += newstr[i][0]
       


    }

}
shortname('david cohen'); 