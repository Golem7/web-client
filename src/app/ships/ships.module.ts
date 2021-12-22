import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipsComponent } from './ships.component';
import { NbCardModule } from '@nebular/theme';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ShipsComponent],
  imports: [CommonModule, NbCardModule, FlexModule],
})
export class ShipsModule {}
