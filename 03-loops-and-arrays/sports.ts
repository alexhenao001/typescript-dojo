let sportsOne: string[] = ["Futbol", "Cricket", "Tennis", "Football"];

for (let i=0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}

// simplify the for loop
for (let tempSport of sportsOne) {
    if (tempSport == "Futbol") {
        console.log(tempSport + " << My Favorite!");
    } else {
        console.log(tempSport);
    }
}