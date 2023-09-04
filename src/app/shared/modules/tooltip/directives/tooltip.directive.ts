import {
    ApplicationRef,
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    ElementRef,
    EmbeddedViewRef,
    HostListener,
    Injector,
    Input,
} from '@angular/core';
import { TooltipComponent } from '../../tooltip/components/tooltip.component';

@Directive({
    selector: '[tooltip]',
})
export class TooltipDirective {
    @Input() tooltip = '';

    private componentRef: ComponentRef<TooltipComponent> | null = null;

    constructor(
        private elementRef: ElementRef,
        private appRef: ApplicationRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector
    ) {}

    ngOnDestroy(): void {
        this.destroy();
    }

    /**
     * @description Create tooltip component from `mouseenter` event.
     * @returns {void}
     */
    @HostListener('mouseenter')
    onMouseEnter(): void {
        if (this.componentRef !== null) {
            return;
        }

        this.elementRef.nativeElement.title = '';

        const COMPONENT_FACTORY = this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
        this.componentRef = COMPONENT_FACTORY.create(this.injector);
        this.appRef.attachView(this.componentRef.hostView);
        const DOM_ELEMENT = (this.componentRef.hostView as EmbeddedViewRef<TooltipComponent>).rootNodes[0] as HTMLElement;
        document.body.appendChild(DOM_ELEMENT);
        this.setTooltipComponentProperties();
    }

    /**
     * @description Destroy tooltip component from `mouseleave` event.
     * @returns {void}
     */
    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.destroy();
    }

    /**
     * @description Destroy tooltip component
     * @returns {void}
     */
    destroy(): void {
        if (this.componentRef === null) {
            return;
        }

        this.appRef.detachView(this.componentRef.hostView);
        this.componentRef.destroy();
        this.componentRef = null;
    }

    /**
     * @description Set tooltip component properties
     * @returns {void}
     */
    private setTooltipComponentProperties(): void {
        if (this.componentRef === null) {
            return;
        }

        this.componentRef.instance.tooltip = this.tooltip;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { left, right, bottom } = this.elementRef.nativeElement.getBoundingClientRect();
        this.componentRef.instance.left = (right - left) / 2 + left;
        this.componentRef.instance.top = bottom;
    }
}
