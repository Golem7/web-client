import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, NbLayoutModule, NbSidebarModule],
})
export class LayoutModule {}
