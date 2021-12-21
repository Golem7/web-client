import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NbButtonModule, NbCardModule, NbLayoutModule } from '@nebular/theme';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [CommonModule, NbLayoutModule, NbCardModule, NbButtonModule, FlexLayoutModule],
})
export class LoginModule {}
