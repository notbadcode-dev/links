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
        const BASE_BUTTON_CONFIG = this.getBaseButtonConfig(partialPrimaryButtonConfig);
        const BUTTON_CONFIG = { ...BASE_BUTTON_CONFIG, type: BUTTON_TYPE.PRIMARY };

        return BUTTON_CONFIG;
    }

    /**
     * @description Generate secondary button config from button type
     * @param  {ButtonConfig} partialSecondaryButtonConfig
     * @returns ButtonConfig
     */
    static getSecondaryButtonConfig(partialSecondaryButtonConfig: ButtonConfig): ButtonConfig {
        const BASE_BUTTON_CONFIG = this.getBaseButtonConfig(partialSecondaryButtonConfig);
        const BUTTON_CONFIG = { ...BASE_BUTTON_CONFIG, type: BUTTON_TYPE.SECONDARY };

        return BUTTON_CONFIG;
    }

    /**
     * @description Generate accent button config from button type
     * @param  {ButtonConfig} partialAccentButtonConfig
     * @returns ButtonConfig
     */
    static getAccentButtonConfig(partialAccentButtonConfig: ButtonConfig): ButtonConfig {
        const BASE_BUTTON_CONFIG = this.getBaseButtonConfig(partialAccentButtonConfig);
        const BUTTON_CONFIG = { ...BASE_BUTTON_CONFIG, type: BUTTON_TYPE.ACCENT };

        return BUTTON_CONFIG;
    }

    /**
     * @description Generate destructive button config from button type
     * @param  {ButtonConfig} partialDestructiveButtonConfig
     * @returns ButtonConfig
     */
    static getDestructiveButtonConfig(partialDestructiveButtonConfig: ButtonConfig): ButtonConfig {
        const BASE_BUTTON_CONFIG = this.getBaseButtonConfig(partialDestructiveButtonConfig);
        const BUTTON_CONFIG = { ...BASE_BUTTON_CONFIG, type: BUTTON_TYPE.DESTRUCTIVE };

        return BUTTON_CONFIG;
    }
}
