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
  style = {};

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<any>(this.urlJson).subscribe((resposta) => {
      this.result = resposta;
      this.style = {
        height: resposta.amount,
        'background-color': 'black',
      };
      console.log(this.style);
      console.log(resposta);
    });
  }
}
