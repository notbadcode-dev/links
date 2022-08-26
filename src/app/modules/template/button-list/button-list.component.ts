import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonConfig, ButtonConfigHelper } from 'src/app/shared/modules/button/components/button.model';
import { ButtonModule } from 'src/app/shared/modules/button/button.module';

@Component({
  selector: 'lnk-button-list',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.scss'],
})
export class ButtonListComponent implements OnInit {
  showButtonList: boolean = true;

  primaryButtonText: string = 'Primary';
  primaryButtonTooltip: string = 'Primary action';
  primaryButtonConfig!: ButtonConfig;
  primaryButtonDisabledConfig!: ButtonConfig;
  primaryButtonWithIconConfig!: ButtonConfig;
  primaryButtonWithOnlyIconConfig!: ButtonConfig;

  secondaryButtonText: string = 'Secondary';
  secondaryButtonTooltip: string = 'Secondary action';
  secondaryButtonConfig!: ButtonConfig;
  secondaryButtonDisabledConfig!: ButtonConfig;
  secondaryButtonWithIconConfig!: ButtonConfig;
  secondaryButtonWithOnlyIconConfig!: ButtonConfig;

  accentButtonText: string = 'Accent';
  accentButtonTooltip: string = 'Special action';
  accentButtonConfig!: ButtonConfig;
  accentButtonDisabledConfig!: ButtonConfig;
  accentButtonWithIconConfig!: ButtonConfig;
  accentButtonWithOnlyIconConfig!: ButtonConfig;

  destructiveButtonText: string = 'Destructive';
  destructiveButtonTooltip: string = 'Destructive action';
  destructiveButtonConfig!: ButtonConfig;
  destructiveButtonDisabledConfig!: ButtonConfig;
  destructiveButtonWithIconConfig!: ButtonConfig;
  destructiveButtonWithOnlyIconConfig!: ButtonConfig;

  linkIcon: string = 'ri-link';
  heartIcon: string = 'ri-heart-line';
  timesIcon: string = 'ri-close-line';

  constructor() {}

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
    const validArguments: boolean = this.validateArgumentForGenerateTemplatePrimaryButtonList(buttonText, buttonTooltip);
    if (!validArguments) {
      return;
    }

    const buttonConfig: ButtonConfig = ButtonConfigHelper.getPrimaryButtonConfig({
      text: buttonText,
      tooltip: buttonTooltip,
      disabled: false,
    });

    this.primaryButtonConfig = buttonConfig;
    this.primaryButtonDisabledConfig = this.generateTemplateButtonDisabled(buttonConfig);
    this.primaryButtonWithIconConfig = this.generateTemplateButtonWithIcon(buttonConfig, this.linkIcon);
    this.primaryButtonWithOnlyIconConfig = this.generateTemplateButtonWithOnlyIcon(buttonConfig, this.linkIcon);
  }

  /**
   * @description Generate secondary button list; normal and disabled
   * @returns {void}
   */
  private generateTemplateSecondaryButtonList(buttonText: string, buttonTooltip: string): void {
    const validArguments: boolean = this.validateArgumentForGenerateTemplatePrimaryButtonList(buttonText, buttonTooltip);
    if (!validArguments) {
      return;
    }

    const buttonConfig: ButtonConfig = ButtonConfigHelper.getSecondaryButtonConfig({
      text: buttonText,
      tooltip: buttonTooltip,
      disabled: false,
    });

    this.secondaryButtonConfig = buttonConfig;
    this.secondaryButtonDisabledConfig = this.generateTemplateButtonDisabled(buttonConfig);
    this.secondaryButtonWithIconConfig = this.generateTemplateButtonWithIcon(buttonConfig, this.linkIcon);
    this.secondaryButtonWithOnlyIconConfig = this.generateTemplateButtonWithOnlyIcon(buttonConfig, this.linkIcon);
  }

  /**
   * @description Generate accent button list; normal and disabled
   * @returns {void}
   */
  private generateTemplateAccentButtonList(buttonText: string, buttonTooltip: string): void {
    const validArguments: boolean = this.validateArgumentForGenerateTemplatePrimaryButtonList(buttonText, buttonTooltip);
    if (!validArguments) {
      return;
    }

    const buttonConfig: ButtonConfig = ButtonConfigHelper.getAccentButtonConfig({
      text: buttonText,
      tooltip: buttonTooltip,
      disabled: false,
    });

    this.accentButtonConfig = buttonConfig;
    this.accentButtonDisabledConfig = this.generateTemplateButtonDisabled(buttonConfig);
    this.accentButtonWithIconConfig = this.generateTemplateButtonWithIcon(buttonConfig, this.heartIcon);
    this.accentButtonWithOnlyIconConfig = this.generateTemplateButtonWithOnlyIcon(buttonConfig, this.heartIcon);
  }

  /**
   * @description Generate destructive button list; normal and disabled
   * @returns {void}
   */
  private generateTemplateDestructiveButtonList(buttonText: string, buttonTooltip: string): void {
    const validArguments: boolean = this.validateArgumentForGenerateTemplatePrimaryButtonList(buttonText, buttonTooltip);
    if (!validArguments) {
      return;
    }

    const buttonConfig: ButtonConfig = ButtonConfigHelper.getDestructiveButtonConfig({
      text: buttonText,
      tooltip: buttonTooltip,
      disabled: false,
    });

    this.destructiveButtonConfig = buttonConfig;
    this.destructiveButtonDisabledConfig = this.generateTemplateButtonDisabled(buttonConfig);
    this.destructiveButtonWithIconConfig = this.generateTemplateButtonWithIcon(buttonConfig, this.timesIcon);
    this.destructiveButtonWithOnlyIconConfig = this.generateTemplateButtonWithOnlyIcon(buttonConfig, this.timesIcon);
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
    };
  }

  /**
   * @description Print console log when click button
   * @param  {ButtonConfig} clickedButtonCondig
   * @returns {void}
   */
  public clickButton(clickedButtonCondig: ButtonConfig): void {
    console.log(`${clickedButtonCondig.text} button clicked`);
  }
}
