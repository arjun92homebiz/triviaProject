import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  title: 'triviaProject';

  constructor(private QuizService: QuizService) { }
  question= this.QuizService.question;
  score= this.QuizService.score;
  answer= this.QuizService.answer

  ngOnInit() {
  }
}
  // getresults(){
  //   this.result === this.answer 
  //   console.log("true");

  //   else{
  //     console.log("false");
  //   }
