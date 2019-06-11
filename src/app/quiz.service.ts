import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  question:any;
  score: 0;
  answer: 0;

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get("/api/questions", { responseType: "json"});
  }

  getScores() {
    return this.http.get("/api/scores", { responseType: "json"});
  }

  addScores() {
    console.log();
    return this.http.post("/api/scores", { responseType: "json"});
}
getScore(questions, form) {
  let answerArray = Object.values(form.value);
  for (let i=0; i<answerArray.length; i++) {
    if(answerArray[i] === questions[i].answer) {
      console.log("Got it right");
      this.score++
    }
  }
}
}