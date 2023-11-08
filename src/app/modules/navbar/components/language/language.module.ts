import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipModule } from '@shared/modules/tooltip/tooltip.module';
import { LanguageComponent } from './language.component';

@NgModule({
    declarations: [LanguageComponent],
    imports: [CommonModule, FormsModule, TranslateModule, TooltipModule],
    exports: [LanguageComponent],
})
export class LanguageModule {}
