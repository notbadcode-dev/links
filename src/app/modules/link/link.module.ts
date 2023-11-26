import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LinkDetailComponent } from '@modules/link/modules/link-detail/link-detail.component';
import { LinkListComponent } from '@modules/link/modules/link-list/link-list.component';
import { LinkRoutingModule } from '@modules/link/link-routing.module';

@NgModule({
    declarations: [LinkListComponent, LinkDetailComponent],
    imports: [CommonModule, LinkRoutingModule],
})
export class LinkModule {}
