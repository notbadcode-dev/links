import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalComponent } from './components/modal.component';

@NgModule({
    declarations: [ModalComponent],
    imports: [CommonModule],
    exports: [ModalComponent],
})
export class ModalModule {}
