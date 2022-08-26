export const RELATIVE_ROUTES = {
    TEMPLATE: 'template',
    COLOR: 'color',
    BUTTON: 'button',  
}

export const ABSOLUTE_ROUTES = {
    COLOR: `${RELATIVE_ROUTES.TEMPLATE}/${RELATIVE_ROUTES.COLOR}`, 
    BUTTON: `${RELATIVE_ROUTES.TEMPLATE}/${RELATIVE_ROUTES.BUTTON}`, 
}