import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateLinkComponent } from '@shared/modules/create-link/components/create-link.component';
import { ButtonModule } from '../button/button.module';
import { SimpleCardModule } from '../card/modules/simple-card/simple-card.module';
import { InputModule } from '../input/input.module';
import { ModalModule } from '../modal/modal.module';

@NgModule({
    declarations: [CreateLinkComponent],
    imports: [CommonModule, ReactiveFormsModule, InputModule, ButtonModule, SimpleCardModule, ModalModule],
    exports: [CreateLinkComponent],
})
export class CreateLinkModule {}
