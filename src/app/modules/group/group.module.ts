import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupListComponent } from './components/group-list/group-list.component';
import { GroupDetailComponent } from './components/group-detail/group-detail.component';


@NgModule({
  declarations: [
    GroupListComponent,
    GroupDetailComponent
  ],
  imports: [
    CommonModule,
    GroupRoutingModule
  ]
})
export class GroupModule { }
