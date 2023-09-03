import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { APP_CONSTANT } from '@constants/app.constant';
import { ButtonModule } from '@shared/modules/button/button.module';
import { ButtonConfig, ButtonConfigHelper } from '@shared/modules/button/components/button.model';

@Component({
    selector: 'lnk-button-list',
    standalone: true,
    imports: [CommonModule, ButtonModule],
    templateUrl: './button-list.component.html',
    styleUrls: ['./button-list.component.scss'],
})
export class ButtonListComponent implements OnInit {
    showButtonList = true;

    private primaryButtonText = 'Primary';

    private primaryButtonTooltip = 'Primary action';

    public primaryButtonConfig!: ButtonConfig;

    public primaryButtonDisabledConfig!: ButtonConfig;

    public primaryButtonWithIconConfig!: ButtonConfig;

    public primaryButtonWithOnlyIconConfig!: ButtonConfig;

    private secondaryButtonText = 'Secondary';

    private secondaryButtonTooltip = 'Secondary action';

    public secondaryButtonConfig!: ButtonConfig;

    public secondaryButtonDisabledConfig!: ButtonConfig;

    public secondaryButtonWithIconConfig!: ButtonConfig;

    public secondaryButtonWithOnlyIconConfig!: ButtonConfig;

    private accentButtonText = 'Accent';

    private accentButtonTooltip = 'Special action';

    public accentButtonConfig!: ButtonConfig;

    public accentButtonDisabledConfig!: ButtonConfig;

    public accentButtonWithIconConfig!: ButtonConfig;

    public accentButtonWithOnlyIconConfig!: ButtonConfig;

    private destructiveButtonText = 'Destructive';

    private destructiveButtonTooltip = 'Destructive action';

    public destructiveButtonConfig!: ButtonConfig;

    public destructiveButtonDisabledConfig!: ButtonConfig;

    public destructiveButtonWithIconConfig!: ButtonConfig;

    public destructiveButtonWithOnlyIconConfig!: ButtonConfig;

    private linkIcon = 'ri-link';

    private heartIcon = 'ri-heart-fill';

    private timesIcon = 'ri-close-line';

    ngOnInit(): void {
        this.generateTemplateButtonList();
    }

    /**
     * @description Generate button list from button config for draw on template
     * @returns {void}
     */
    private generateTemplateButtonList(): void {
        this.generateTemplatePrimaryButtonList(this.primaryButtonText, this.primaryButtonTooltip);
        this.generateTemplateSecondaryButtonList(this.secondaryButtonText, this.secondaryButtonTooltip);
        this.generateTemplateAccentButtonList(this.accentButtonText, this.accentButtonTooltip);
        this.generateTemplateDestructiveButtonList(this.destructiveButtonText, this.destructiveButtonTooltip);
    }

    /**
     * @description Generate primary button list; normal and disabled
     * @returns {void}
     */
    private generateTemplatePrimaryButtonList(buttonText: string, buttonTooltip: string): void {
        const VALID_ARGUMENTS: boolean = this.validateArgumentForGenerateTemplatePrimaryButtonList(buttonText, buttonTooltip);
        if (!VALID_ARGUMENTS) {
            return;
        }

        const BUTTON_CONFIG: ButtonConfig = ButtonConfigHelper.getPrimaryButtonConfig({
            text: buttonText,
            tooltip: buttonTooltip,
            disabled: false,
            hotkeys: [APP_CONSTANT.MASTER_HOTKEY, 'P'],
        });

        this.primaryButtonConfig = BUTTON_CONFIG;
        this.primaryButtonDisabledConfig = this.generateTemplateButtonDisabled(BUTTON_CONFIG);
        this.primaryButtonWithIconConfig = this.generateTemplateButtonWithIcon(BUTTON_CONFIG, this.linkIcon);
        this.primaryButtonWithOnlyIconConfig = this.generateTemplateButtonWithOnlyIcon(BUTTON_CONFIG, this.linkIcon);
    }

    /**
     * @description Generate secondary button list; normal and disabled
     * @returns {void}
     */
    private generateTemplateSecondaryButtonList(buttonText: string, buttonTooltip: string): void {
        const VALID_ARGUMENTS: boolean = this.validateArgumentForGenerateTemplatePrimaryButtonList(buttonText, buttonTooltip);
        if (!VALID_ARGUMENTS) {
            return;
        }

        const BUTTON_CONFIG: ButtonConfig = ButtonConfigHelper.getSecondaryButtonConfig({
            text: buttonText,
            tooltip: buttonTooltip,
            disabled: false,
            hotkeys: [APP_CONSTANT.MASTER_HOTKEY, 'S'],
        });

        this.secondaryButtonConfig = BUTTON_CONFIG;
        this.secondaryButtonDisabledConfig = this.generateTemplateButtonDisabled(BUTTON_CONFIG);
        this.secondaryButtonWithIconConfig = this.generateTemplateButtonWithIcon(BUTTON_CONFIG, this.linkIcon);
        this.secondaryButtonWithOnlyIconConfig = this.generateTemplateButtonWithOnlyIcon(BUTTON_CONFIG, this.linkIcon);
    }

    /**
     * @description Generate accent button list; normal and disabled
     * @returns {void}
     */
    private generateTemplateAccentButtonList(buttonText: string, buttonTooltip: string): void {
        const VALID_ARGUMENTS: boolean = this.validateArgumentForGenerateTemplatePrimaryButtonList(buttonText, buttonTooltip);
        if (!VALID_ARGUMENTS) {
            return;
        }

        const BUTTON_CONFIG: ButtonConfig = ButtonConfigHelper.getAccentButtonConfig({
            text: buttonText,
            tooltip: buttonTooltip,
            disabled: false,
            hotkeys: [APP_CONSTANT.MASTER_HOTKEY, 'A'],
        });

        this.accentButtonConfig = BUTTON_CONFIG;
        this.accentButtonDisabledConfig = this.generateTemplateButtonDisabled(BUTTON_CONFIG);
        this.accentButtonWithIconConfig = this.generateTemplateButtonWithIcon(BUTTON_CONFIG, this.heartIcon);
        this.accentButtonWithOnlyIconConfig = this.generateTemplateButtonWithOnlyIcon(BUTTON_CONFIG, this.heartIcon);
    }

    /**
     * @description Generate destructive button list; normal and disabled
     * @returns {void}
     */
    private generateTemplateDestructiveButtonList(buttonText: string, buttonTooltip: string): void {
        const VALID_ARGUMENTS: boolean = this.validateArgumentForGenerateTemplatePrimaryButtonList(buttonText, buttonTooltip);
        if (!VALID_ARGUMENTS) {
            return;
        }

        const BUTTON_CONFIG: ButtonConfig = ButtonConfigHelper.getDestructiveButtonConfig({
            text: buttonText,
            tooltip: buttonTooltip,
            disabled: false,
            hotkeys: [APP_CONSTANT.MASTER_HOTKEY, 'D'],
        });

        this.destructiveButtonConfig = BUTTON_CONFIG;
        this.destructiveButtonDisabledConfig = this.generateTemplateButtonDisabled(BUTTON_CONFIG);
        this.destructiveButtonWithIconConfig = this.generateTemplateButtonWithIcon(BUTTON_CONFIG, this.timesIcon);
        this.destructiveButtonWithOnlyIconConfig = this.generateTemplateButtonWithOnlyIcon(BUTTON_CONFIG, this.timesIcon);
    }

    /**
     * @description Generate button
     * @returns {boolean} valid: true, invalid: false
     */
    private validateArgumentForGenerateTemplatePrimaryButtonList(buttonText: string, buttonTooltip: string): boolean {
        if (!buttonText || typeof buttonText !== 'string' || buttonText.length === 0) {
            return false;
        }

        if (!buttonTooltip || typeof buttonTooltip !== 'string' || buttonTooltip.length === 0) {
            return false;
        }

        return true;
    }

    /**
     * @description Generate button disabled from button config
     * @param  {ButtonConfig} buttonConfig
     * @returns {ButtonConfig}
     */
    private generateTemplateButtonDisabled(buttonConfig: ButtonConfig): ButtonConfig {
        return {
            ...buttonConfig,
            text: 'Disabled',
            tooltip: `${buttonConfig.tooltip} disabled`,
            disabled: true,
            hotkeys: [],
        };
    }

    /**
     * @description Generate button disabled from button config
     * @param  {ButtonConfig} buttonConfig
     * @returns {ButtonConfig}
     */
    private generateTemplateButtonWithOnlyIcon(buttonConfig: ButtonConfig, icon: string): ButtonConfig {
        return {
            ...buttonConfig,
            text: '',
            tooltip: `${buttonConfig.tooltip} only icon`,
            icon: icon,
            hotkeys: [],
        };
    }

    /**
     * @description Generate button disabled from button config
     * @param  {ButtonConfig} buttonConfig
     * @returns {ButtonConfig}
     */
    private generateTemplateButtonWithIcon(buttonConfig: ButtonConfig, icon: string): ButtonConfig {
        return {
            ...this.generateTemplateButtonWithOnlyIcon(buttonConfig, icon),
            tooltip: `${buttonConfig.tooltip} with icon`,
            text: 'With Icon',
            hotkeys: [],
        };
    }

    /**
     * @description Print console log when click button
     * @param  {ButtonConfig} clickedButtonCondig
     * @returns {void}
     */
    public clickButton(clickedButtonCondig: ButtonConfig): void {
        if (!clickedButtonCondig) {
            return;
        }

        const BUTTON_TEXT: string = clickedButtonCondig.text || clickedButtonCondig.tooltip;

        console.log(`${BUTTON_TEXT} button clicked`);
    }
}
