import { buttonTypes, BUTTON_TYPE } from './button.enum';

export class ButtonConfig {
    constructor(
        public text: string,
        public tooltip: string,
        public disabled: boolean,
        public icon?: string,
        public submit?: boolean,
        public hotkeys?: string[],
        public type?: buttonTypes
    ) {}
}

export class ButtonConfigHelper {
    /**
     * @description Generate default button config
     * @returns {ButtonConfig}
     */
    static defaultButtonConfig(): ButtonConfig {
        return new ButtonConfig('', '', false);
    }

    /**
     * @description Generate base button config
     * @param  {ButtonConfig} partialButtonConfig
     * @returns {ButtonConfig}
     */
    private static getBaseButtonConfig(partialButtonConfig: ButtonConfig): ButtonConfig {
        if (!partialButtonConfig) {
            return this.defaultButtonConfig();
        }

        return new ButtonConfig(
            partialButtonConfig.text,
            partialButtonConfig.tooltip,
            partialButtonConfig?.disabled ?? false,
            partialButtonConfig?.icon,
            partialButtonConfig?.submit ? partialButtonConfig.submit : false,
            partialButtonConfig?.hotkeys ?? ['master', partialButtonConfig.text.split('')[0].toLowerCase()]
        );
    }

    /**
     * @description Generate primary button config from button type
     * @param  {ButtonConfig} partialPrimaryButtonConfig
     * @returns ButtonConfig
     */
    static getPrimaryButtonConfig(partialPrimaryButtonConfig: ButtonConfig): ButtonConfig {
        const baseButtonConfig = this.getBaseButtonConfig(partialPrimaryButtonConfig);
        const buttonConfig = { ...baseButtonConfig, type: BUTTON_TYPE.PRIMARY };

        return buttonConfig;
    }

    /**
     * @description Generate secondary button config from button type
     * @param  {ButtonConfig} partialSecondaryButtonConfig
     * @returns ButtonConfig
     */
    static getSecondaryButtonConfig(partialSecondaryButtonConfig: ButtonConfig): ButtonConfig {
        const baseButtonConfig = this.getBaseButtonConfig(partialSecondaryButtonConfig);
        const buttonConfig = { ...baseButtonConfig, type: BUTTON_TYPE.SECONDARY };

        return buttonConfig;
    }

    /**
     * @description Generate accent button config from button type
     * @param  {ButtonConfig} partialAccentButtonConfig
     * @returns ButtonConfig
     */
    static getAccentButtonConfig(partialAccentButtonConfig: ButtonConfig): ButtonConfig {
        const baseButtonConfig = this.getBaseButtonConfig(partialAccentButtonConfig);
        const buttonConfig = { ...baseButtonConfig, type: BUTTON_TYPE.ACCENT };

        return buttonConfig;
    }

    /**
     * @description Generate destructive button config from button type
     * @param  {ButtonConfig} partialDestructiveButtonConfig
     * @returns ButtonConfig
     */
    static getDestructiveButtonConfig(partialDestructiveButtonConfig: ButtonConfig): ButtonConfig {
        const baseButtonConfig = this.getBaseButtonConfig(partialDestructiveButtonConfig);
        const buttonConfig = { ...baseButtonConfig, type: BUTTON_TYPE.DESTRUCTIVE };

        return buttonConfig;
    }
}
