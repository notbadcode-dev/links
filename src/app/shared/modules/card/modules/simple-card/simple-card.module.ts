import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SimpleCardComponent } from './components/simple-card.component';

@NgModule({
    declarations: [SimpleCardComponent],
    imports: [CommonModule, TranslateModule],
    exports: [SimpleCardComponent],
})
export class SimpleCardModule {}
