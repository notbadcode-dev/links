import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@app/shared/modules/button/button.module';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar.component';

@NgModule({
    declarations: [SidebarComponent],
    imports: [CommonModule, RouterModule, ButtonModule, TranslateModule],
    exports: [SidebarComponent],
})
export class SidebarModule {}
