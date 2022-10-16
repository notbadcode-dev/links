import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@app/shared/modules/button/button.module';

@NgModule({
    declarations: [SidebarComponent],
    imports: [CommonModule, RouterModule, ButtonModule],
    exports: [SidebarComponent],
})
export class SidebarModule {}
