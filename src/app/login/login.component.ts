import { Component, OnInit } from '@angular/core';
import Moralis from 'moralis/types';
import { MoralisService } from '../moralis.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public userOb = this.moralisService.observeUser();

  constructor(private moralisService: MoralisService) {
    this.moralisService.startMoralis().subscribe(() => console.log('Started Moralis'));
    this.userOb.subscribe(console.log);
  }

  public login(provider: Moralis.Web3ProviderType = 'metamask'): void {
    this.moralisService.login({ provider });
  }

  public logout(): void {
    this.moralisService.logout();
  }
}
