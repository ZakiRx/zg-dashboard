import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent],
  imports: [CommonModule],
  exports: [SidebarComponent],
})
export class DashboardModule {}
