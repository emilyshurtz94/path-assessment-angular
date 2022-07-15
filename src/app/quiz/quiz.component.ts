import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { MatRadioModule, MatRadioButton, MatRadioGroup} from '@angular/material/radio';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})


export class QuizComponent implements OnInit {
public agency=0;
public knowledge=0;
public referral=0;



  quizForm= new FormGroup({
    Security: new FormControl(),
  Opportunity: new FormControl(),
    true1: new FormControl(),
    false1: new FormControl(),
    consumers: new FormControl(),
    owners: new FormControl(),
    true2: new FormControl(),
    false2: new FormControl(),
    true3: new FormControl(),
    false3: new FormControl(),
    speed: new FormControl(),
    long: new FormControl(),
    potential: new FormControl(),
    sellable: new FormControl()
  })



  constructor( private router: Router) { }

  ngOnInit(): void {

  }

  calculateScore(){

  }

onSubmit(){
  this.router.navigateByUrl('/result')
  console.log(this.quizForm.value)
}


    
}
