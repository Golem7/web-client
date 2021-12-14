import { Component } from '@angular/core';
import { MoralisService } from './moralis.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private moralisService: MoralisService) {
    this.moralisService.startMoralis().subscribe(() => console.log('Started Moralis'));
  }
}
