import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NbButtonModule, NbIconModule, NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, NbLayoutModule, NbSidebarModule, NbIconModule, NbButtonModule, FlexModule],
})
export class LayoutModule {}
