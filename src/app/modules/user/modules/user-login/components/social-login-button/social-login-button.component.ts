import { Component, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { SocialLoginButtonConfig } from '@modules/user/modules/user-login/components/social-login-button/social-login-button.model';
import { UtilDocumentService } from '@services/util/util-document/util-document.service';

@Component({
    selector: 'lnk-social-login-button',
    templateUrl: './social-login-button.component.html',
    styleUrls: ['./social-login-button.component.scss'],
})
export class SocialLoginButtonComponent {
    @Input() set _config(_config: SocialLoginButtonConfig) {
        if (_config) {
            this.config = _config;
            this.svgImageUrl = this._utilDocumentService.getCorporateLogoFile(this.config.svgImage);
        }
    }

    public config!: SocialLoginButtonConfig;
    public svgImageUrl: SafeResourceUrl = '';

    constructor(private _utilDocumentService: UtilDocumentService) {}
}
