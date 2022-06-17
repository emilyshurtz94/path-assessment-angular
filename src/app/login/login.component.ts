import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });
  sheetUrl= 'https://script.google.com/macros/s/AKfycbyDFuWXwWMGo5JThocnFpauJSskbconf2DhqrkHNtISSMcjygzY2fC1uJ8zC_IU2M-wmg/exec';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.http.post(this.sheetUrl, this.profileForm.value).subscribe((res)=>{
      console.log(res);
    })
  };
  startQuiz(){
    this.router.navigateByUrl('/quiz')
    this.onSubmit();
  }

}
