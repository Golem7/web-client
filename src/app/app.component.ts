import { Component, OnInit } from '@angular/core';
import { Moralis } from 'moralis';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  ngOnInit() {
    Moralis.start(environment.moralis);
  }
}
