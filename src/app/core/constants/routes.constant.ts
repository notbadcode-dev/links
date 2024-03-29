export const RELATIVE_ROUTES = {
    UNKNOWM: '*',

    USER: 'user',
    LOGIN: 'login',
    LOGOUT: 'logout',
    SIGN_IN: 'sign-in',
    RECOVERY: 'recovery',

    GROUP_LINK: 'group-link',
    LINK: 'link',

    TEMPLATE: 'template',
    COLOR: 'color',
    BUTTON: 'button',
    INPUT: 'input',

    LIST: 'list',
    DETAIL: 'detail',
};

export const ABSOLUTE_ROUTES_FROM_PARENT = {
    USER: (child: string): string => `${RELATIVE_ROUTES.USER}/${child}`,
    GROUP_LINK: (child: string): string => `${RELATIVE_ROUTES.GROUP_LINK}/${child}`,
    LINK: (child: string): string => `${RELATIVE_ROUTES.LINK}/${child}`,

    TEMPLATE: (child: string): string => `${RELATIVE_ROUTES.TEMPLATE}/${child}`,
};

export const ABSOLUTE_ROUTES = {
    LOGIN: ABSOLUTE_ROUTES_FROM_PARENT.USER(RELATIVE_ROUTES.LOGIN),
    LOGOUT: ABSOLUTE_ROUTES_FROM_PARENT.USER(RELATIVE_ROUTES.LOGOUT),
    SIGN_IN: ABSOLUTE_ROUTES_FROM_PARENT.USER(RELATIVE_ROUTES.SIGN_IN),
    RECOVERY: ABSOLUTE_ROUTES_FROM_PARENT.USER(RELATIVE_ROUTES.RECOVERY),

    GROUP_LINK_LIST: ABSOLUTE_ROUTES_FROM_PARENT.GROUP_LINK(RELATIVE_ROUTES.LIST),
    GROUP_LINK_DETAIL: ABSOLUTE_ROUTES_FROM_PARENT.GROUP_LINK(RELATIVE_ROUTES.DETAIL),
    LINK_LIST: ABSOLUTE_ROUTES_FROM_PARENT.LINK(RELATIVE_ROUTES.LIST),
    LINK_DETAIL: ABSOLUTE_ROUTES_FROM_PARENT.LINK(RELATIVE_ROUTES.DETAIL),

    COLOR: ABSOLUTE_ROUTES_FROM_PARENT.TEMPLATE(RELATIVE_ROUTES.COLOR),
    BUTTON: ABSOLUTE_ROUTES_FROM_PARENT.TEMPLATE(RELATIVE_ROUTES.BUTTON),
    INPUT: ABSOLUTE_ROUTES_FROM_PARENT.TEMPLATE(RELATIVE_ROUTES.INPUT),
};
