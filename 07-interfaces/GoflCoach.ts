import { Coach } from "./Coach";

export class GolfCoach implements Coach {
    getDailyWorkout(): string {
        return "Hit 9000 dragon balls at the golf range.";
    }
}