import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public questionList: any=[];
  public currentQuestion:number=0;
  

  constructor( private router: Router) { }

  ngOnInit(): void {

  }


  //     this.router.navigateByUrl('/result')
    
}
