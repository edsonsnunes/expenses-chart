import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'expenses-chart';
  result: any;
  urlJson = 'assets/data.json';

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(this.urlJson).subscribe((resposta) => {
      this.result = resposta;
      console.log(this.result);
    });
  }
}
