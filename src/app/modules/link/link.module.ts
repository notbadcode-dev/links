import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkRoutingModule } from './link-routing.module';
import { LinkListComponent } from './components/link-list/link-list.component';
import { LinkDetailComponent } from './components/link-detail/link-detail.component';


@NgModule({
  declarations: [
    LinkListComponent,
    LinkDetailComponent
  ],
  imports: [
    CommonModule,
    LinkRoutingModule
  ]
})
export class LinkModule { }
