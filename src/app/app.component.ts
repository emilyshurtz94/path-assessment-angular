import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'path-assessment-angular';

  sheetUrl= 'https://script.google.com/macros/s/AKfycbwG6wmBMTXx6_w3t4UMIP5G0ZuZv20cJSYY-d14XPboXUFYLVNFkOqYG623iKXGvVepVA/exec';
}
