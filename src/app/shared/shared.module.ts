import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './modules/tooltip/tooltip.component';
import { TooltipDirective } from './directives/tooltip.directive';



@NgModule({
  declarations: [
    TooltipComponent,
    TooltipDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
