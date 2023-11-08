import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipComponent } from '@shared/modules/tooltip/components/tooltip.component';
import { TooltipDirective } from '@shared/modules/tooltip/directives/tooltip.directive';

@NgModule({
    declarations: [TooltipComponent, TooltipDirective],
    imports: [CommonModule],
    exports: [TooltipDirective],
})
export class TooltipModule {}
