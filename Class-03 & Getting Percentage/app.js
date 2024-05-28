

// Logical Operator

// && == And
// || == OR


// var comparison = 10 < 21 && 18 > 12 && 81 > 12
// var comparison = 10 < 21 && 18 > 12 && 81 > 12
// console.log (comparison)































var marks1 =+prompt("Obtained Marks of Mathematics");
var marks2 =+prompt("Obtained Marks of Physics");
var marks3 =+prompt("Obtained Marks of Chemistry");
var marks4 =+prompt("Obtained Marks of Urdu");
var marks5 =+prompt("Obtained Marks of English");
var obtain =(marks1 + marks2 + marks3 + marks4 + marks5);

console.log(`${obtain} out of 450`);

var percent =(obtain / 450 *100);
console.log(`${percent}%`);