import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './components/tooltip.component';
import { TooltipDirective } from './directives/tooltip.directive';

const COMPONENT_LIST = [TooltipComponent];
const DIRECTIVE_LIST = [TooltipDirective];
const MODULE_LIST = [CommonModule];

@NgModule({
    declarations: [COMPONENT_LIST, DIRECTIVE_LIST],
    imports: [MODULE_LIST],
    exports: [DIRECTIVE_LIST],
})
export class TooltipModule {}
