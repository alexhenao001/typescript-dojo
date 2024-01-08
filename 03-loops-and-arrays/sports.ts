let sportsOne: string[] = ["Futbol", "Cricket", "Tennis", "Football"];
let sportsTwo: string[] = [ "Cricket", "Tennis", "Football"];

sportsTwo.push("Baseball");
sportsTwo.push("Basketball");

// for (let i=0; i < sportsOne.length; i++) {
//     console.log(sportsOne[i]);
// }

// simplify the for loop
for (let tempSport of sportsTwo) {
    if (tempSport == "Futbol") {
        console.log(tempSport + " << My Favorite!");
    } else {
        console.log(tempSport);
    }
}