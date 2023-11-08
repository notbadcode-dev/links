import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextWithDelimiterComponent } from '@shared/modules/text-with-delimiter/components/text-with-delimiter.component';

@NgModule({
    declarations: [TextWithDelimiterComponent],
    imports: [CommonModule],
    exports: [TextWithDelimiterComponent],
})
export class TextWithDelimiterModule {}
