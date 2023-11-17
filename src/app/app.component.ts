
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeModule } from '@modules/home/home.module';
import { AppTranslateService } from './core/services/app-translate/app-translate.service';

@Component({
    selector: 'app-root',
    standalone: true,
    styles: [
        `
            :host {
                height: 100%;
            }
        `,
    ],
    template: '<lnk-home></lnk-home>',
    imports: [RouterModule, HomeModule],
})
export class AppComponent {
    constructor(private _appTranslateService: AppTranslateService) {
        this._appTranslateService.initializeLanguage();
    }
}
