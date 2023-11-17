import { Injectable } from '@angular/core';
import { APP_HOTKEY } from '@constants/app-hotkey.constant';
import { APP_ICON_CONSTANT } from '@constants/app-icon.constant';
import { APP_CONSTANT } from '@constants/app.constant';
import { EButtonWeight } from '@shared/modules/button/components/button.enum';
import { ButtonConfig, ButtonConfigHelper } from '@shared/modules/button/components/button.model';

@Injectable({
    providedIn: 'root',
})
export class ConfigButtonService {
    /**
     * @description Get login button config
     * @returns ButtonConfig
     */
    getLoginButtonConfig(): ButtonConfig {
        return ButtonConfigHelper.getPrimaryButtonConfig({
            text: 'COMPONENTS.USER_LOGIN.BUTTON.LOGIN.TEXT',
            tooltip: 'COMPONENTS.USER_LOGIN.BUTTON.LOGIN.TOOLTIP',
            disabled: true,
            weight: EButtonWeight.LARGE,
            icon: APP_ICON_CONSTANT.USER,
            hotkeys: [APP_CONSTANT.MASTER_HOTKEY, APP_HOTKEY.LOGIN_BUTTON],
        });
    }

    /**
     * @description Get logout button config
     * @returns ButtonConfig
     */
    getLogoutButtonConfig(): ButtonConfig {
        return ButtonConfigHelper.getDestructiveButtonConfig({
            text: 'COMPONENTS.SIDEBAR.BUTTON.LOGOUT.TEXT',
            tooltip: 'COMPONENTS.SIDEBAR.BUTTON.LOGOUT.TEXT',
            disabled: false,
            icon: APP_ICON_CONSTANT.USER_LOGOUT,
            hotkeys: [APP_CONSTANT.MASTER_HOTKEY, APP_HOTKEY.LOGOUT_BUTTON],
        });
    }

    /**
     * @description Get open url button config
     * @returns ButtonConfig
     */
    getOpenUrlButtonConfig(): ButtonConfig {
        return ButtonConfigHelper.getPrimaryButtonConfig({
            text: '',
            tooltip: 'COMPONENTS.LINK-LIST-ITEM.BUTTON.OPEN_URL.TOOLTIP',
            disabled: false,
            weight: EButtonWeight.SMALL,
            icon: APP_ICON_CONSTANT.EXTERNAL_LINK,
            hotkeys: [APP_CONSTANT.MASTER_HOTKEY, APP_HOTKEY.OPEN_URL_BUTTON],
        });
    }

    /**
     * @description Get add new link into group link button config
     * @returns ButtonConfig
     */
    getCreateLinkButtonConfig(): ButtonConfig {
        return ButtonConfigHelper.getPrimaryButtonConfig({
            text: 'COMPONENTS.CREATE_LINK.BUTTON.CREATE_LINK.TEXT',
            tooltip: 'COMPONENTS.CREATE_LINK.BUTTON.CREATE_LINK.TOOLTIP',
            disabled: false,
            weight: EButtonWeight.LARGE,
            icon: APP_ICON_CONSTANT.ADD,
            hotkeys: [APP_HOTKEY.MASTER, APP_HOTKEY.OPEN_URL_BUTTON],
        });
    }

    /**
     * @description Get global Cancel button
     * @returns ButtonConfig
     */
    getCancelButtonButtonConfig(): ButtonConfig {
        return ButtonConfigHelper.getDestructiveButtonConfig({
            text: 'APP.BUTTON.CANCEL.TEXT',
            tooltip: 'APP.BUTTON.CANCEL.TOOLTIP',
            disabled: false,
            weight: EButtonWeight.LARGE,
            icon: APP_ICON_CONSTANT.CANCEL_ARROW,
            hotkeys: [APP_HOTKEY.MASTER, APP_HOTKEY.CANCEL_CREATE_LINK],
        });
    }
}
