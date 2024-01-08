var sportsOne = ["Futbol", "Cricket", "Tennis", "Football"];
var sportsTwo = ["Cricket", "Tennis", "Football"];
sportsTwo.push("Baseball");
sportsTwo.push("Basketball");
// for (let i=0; i < sportsOne.length; i++) {
//     console.log(sportsOne[i]);
// }
// simplify the for loop
for (var _i = 0, sportsTwo_1 = sportsTwo; _i < sportsTwo_1.length; _i++) {
    var tempSport = sportsTwo_1[_i];
    if (tempSport == "Futbol") {
        console.log(tempSport + " << My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}
