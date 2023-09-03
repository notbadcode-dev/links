import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LinkDetailComponent } from './components/link-detail/link-detail.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { LinkRoutingModule } from './link-routing.module';

@NgModule({
    declarations: [LinkListComponent, LinkDetailComponent],
    imports: [CommonModule, LinkRoutingModule],
})
export class LinkModule {}
