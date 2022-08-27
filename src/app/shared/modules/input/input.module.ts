import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input.component';
import { TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, TooltipModule],
  exports: [InputComponent],
})
export class InputModule {}
