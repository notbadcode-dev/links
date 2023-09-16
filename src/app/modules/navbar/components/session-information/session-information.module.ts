import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageModule } from '../language/language.module';
import { SessionInformationComponent } from './session-information.component';

@NgModule({
    declarations: [SessionInformationComponent],
    imports: [CommonModule, TranslateModule, LanguageModule],
    exports: [SessionInformationComponent],
})
export class SessionInformationModule {}
