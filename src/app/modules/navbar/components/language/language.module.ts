import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@app/shared/modules/tooltip/tooltip.module';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageComponent } from './language.component';

@NgModule({
    declarations: [LanguageComponent],
    imports: [CommonModule, FormsModule, TranslateModule, TooltipModule],
    exports: [LanguageComponent],
})
export class LanguageModule {}
