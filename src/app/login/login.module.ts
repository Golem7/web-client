import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [CommonModule, NbCardModule, NbButtonModule, FlexLayoutModule],
})
export class LoginModule {}
