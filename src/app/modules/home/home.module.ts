import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, RouterModule, SidebarModule],
    exports: [HomeComponent],
})
export class HomeModule {}
