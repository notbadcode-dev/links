import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FORM_CONSTANT } from '@constants/form.constant';
import { LinkService } from '@http-services/link/link.service';
import { ILinkCreate } from '@models/link/link-create.model';
import { ILink } from '@models/link/link.model';
import { AppBackdropService } from '@services/app-backdrop/app-backdrop.service';
import { ConfigButtonService } from '@services/config/config-button/config-button.service';
import { ConfigCardService } from '@services/config/config-card/config-card.service';
import { ConfigInputService } from '@services/config/config-input/config-input.service';
import { PushNotifyService } from '@services/push-notify/push-notify.service';
import { UtilStringService } from '@services/util/util-string/util-string.service';
import { ButtonConfig } from '@shared/modules/button/components/button.model';
import { CardConfig } from '@shared/modules/card/models/card.model';
import { InputConfig } from '@shared/modules/input/models/input.model';
import { ICreateLinkConfig, TCreateLinkForm } from './create-link.interface';

@Component({
    selector: 'lnk-create-link',
    templateUrl: './create-link.component.html',
    styleUrls: ['./create-link.component.scss'],
})
export class CreateLinkComponent implements OnInit {
    @Input() set _config(_config: ICreateLinkConfig) {
        if (_config) {
            this.config = _config;
            this.initializeCardConfig(this.config.groupLink?.name);
        }
    }

    @Output() _cancel = new EventEmitter<boolean>();

    isOpenCreateLinkModal = false;

    config!: ICreateLinkConfig;

    createLinkForm!: FormGroup;
    createLinkCardConfig!: CardConfig | null;

    nameLinkInputConfig!: InputConfig;
    nameFormControlName = 'name';

    urlLinkInputConfig!: InputConfig;
    urlFormControlName = 'url';

    createLinkButtonConfig!: ButtonConfig;
    cancelCreateLinkButtonConfig!: ButtonConfig;

    constructor(
        private _utilStringService: UtilStringService,
        private _configCardService: ConfigCardService,
        private _configInputService: ConfigInputService,
        private _configButtonService: ConfigButtonService,
        private _appBackdropService: AppBackdropService,
        private _linkService: LinkService,
        private _pushNotifyService: PushNotifyService
    ) {
        this.initializeForm();
        this.initializeInputConfig();
        this.initializeButtonConfig();
    }

    ngOnInit(): void {
        this._pushNotifyService.info('Create successfully');
        this._pushNotifyService.success('Create successfully');
        this._pushNotifyService.warning('Create successfully');
        this._pushNotifyService.error('Create successfully');
    }

    /**
     * @description Create link
     * @returns void
     */
    public createLink(): void {
        if (this.createLinkForm.invalid) {
            return;
        }

        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { name, url } = this.createLinkForm.getRawValue();

        const LINK_CREATE: ILinkCreate = {
            name: name,
            url: url,
            favorite: false,
            active: true,
            groupLinkId: this.config.groupLink.id,
        };

        this._linkService.create(LINK_CREATE).subscribe((createdLink: ILink) => {
            if (!createdLink || !createdLink.id) {
                console.error('ERROR');
            }

            this._pushNotifyService.success('Create successfully');
        });
    }

    /**
     * @description Create link
     * @returns void
     */
    public cancelCreateLink(): void {
        console.log('Cancel create link', this.createLinkForm.value);
        this._appBackdropService.hideBackdrop();
        this._cancel.emit(false);
    }

    /**
     * @private
     * @description Initialize createLinkForm
     * @returns void
     */
    private initializeForm(): void {
        this.createLinkForm = new FormGroup<TCreateLinkForm>({
            [this.nameFormControlName]: new FormControl('', { nonNullable: true, validators: Validators.required }),
            [this.urlFormControlName]: new FormControl('', { nonNullable: true, validators: Validators.required }),
        });

        this.createLinkFormStatusChanges();
    }

    /**
     * @private
     * @description Listen status on createLinkForm
     * @returns void
     */
    private createLinkFormStatusChanges(): void {
        this.createLinkForm.statusChanges.subscribe((status: string) => {
            this.createLinkButtonConfig.disabled = this._utilStringService.isEqualsTextWithoutSensitiveCase(status, FORM_CONSTANT.INVALID);
        });
    }

    /**
     * @private
     * @description Initialize card config
     * @returns void
     */
    private initializeCardConfig(groupLinkName: string): void {
        this.createLinkCardConfig = this._configCardService.getCreateLinkCardConfig(groupLinkName);
    }

    /**
     * @private
     * @description Initialize input config
     * @returns void
     */
    private initializeInputConfig(): void {
        this.nameLinkInputConfig = this._configInputService.getNameLinkInputConfig(this.createLinkForm, this.nameFormControlName);
        this.urlLinkInputConfig = this._configInputService.getUrlLinkInputConfig(this.createLinkForm, this.urlFormControlName);
    }

    /**
     * @private
     * @description Initialize button config
     * @returns void
     */
    private initializeButtonConfig(): void {
        this.createLinkButtonConfig = this._configButtonService.getCreateLinkButtonConfig();
        this.cancelCreateLinkButtonConfig = this._configButtonService.getCancelButtonButtonConfig();
    }
}
