import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextWithDelimiterComponent } from './components/text-with-delimiter.component';

const COMPONENT_LIST = [TextWithDelimiterComponent];
const MODULE_LIST = [CommonModule];

@NgModule({
    declarations: [COMPONENT_LIST],
    imports: [MODULE_LIST],
    exports: [COMPONENT_LIST],
})
export class TextWithDelimiterModule {}
