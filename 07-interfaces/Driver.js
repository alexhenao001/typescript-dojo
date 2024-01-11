"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GoflCoach_1 = require("./GoflCoach");
let myCricketCoach = new CricketCoach_1.CricketCoach();
let myGolfCoach = new GoflCoach_1.GolfCoach();
// declare an arry for coaches that is initially empty
let theCoaches = [];
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);
for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
