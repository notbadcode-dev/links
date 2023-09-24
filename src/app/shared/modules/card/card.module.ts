import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from './components/card.component';

const COMPONENT_LIST = [CardComponent];
const MODULE_LIST = [CommonModule, TranslateModule];

@NgModule({
    declarations: [COMPONENT_LIST],
    imports: [MODULE_LIST],
    exports: [COMPONENT_LIST],
})
export class CardModule {}
