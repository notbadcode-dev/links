import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { GroupRoutingModule } from './group-routing.module';

@NgModule({
    declarations: [GroupListComponent, GroupDetailComponent],
    imports: [CommonModule, GroupRoutingModule],
})
export class GroupModule {}
