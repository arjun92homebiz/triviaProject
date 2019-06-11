import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  title: 'triviaProject';
  name: any;
  question: any[]= [];
  
  constructor(private QuizService: QuizService) { }

  ngOnInit() {
  }

  submitAnswers(qform){
    this.QuizService.getScore(this.question, qform);
  }
  }
