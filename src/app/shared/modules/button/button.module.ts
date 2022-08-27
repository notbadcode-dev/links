import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button.component';
import { TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, TooltipModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
