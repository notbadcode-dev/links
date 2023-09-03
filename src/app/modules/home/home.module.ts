import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, RouterModule, SidebarModule, NavbarModule],
    exports: [HomeComponent],
})
export class HomeModule {}
