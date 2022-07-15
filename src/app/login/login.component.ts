import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  studentForm= new FormGroup({
    name: new FormControl(),
    email: new FormControl()
  })

  constructor(private router: Router) {
  
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.studentForm.value)
    this.router.navigateByUrl('/quiz')
  }
}
