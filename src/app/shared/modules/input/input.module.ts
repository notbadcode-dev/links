import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input.component';
import { TooltipModule } from '../tooltip/tooltip.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, TooltipModule, ReactiveFormsModule],
  exports: [InputComponent],
})
export class InputModule {}
