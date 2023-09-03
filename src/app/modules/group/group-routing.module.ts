import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTE_LIST: Routes = [];

@NgModule({
    imports: [RouterModule.forChild(ROUTE_LIST)],
    exports: [RouterModule],
})
export class GroupRoutingModule {}
