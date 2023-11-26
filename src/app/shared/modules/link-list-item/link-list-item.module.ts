import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LinkListItemComponent } from '@shared/modules/link-list-item/components/link-list-item.component';
import { ButtonModule } from '../button/button.module';
import { TooltipModule } from '../tooltip/tooltip.module';
import { LinkListItemExpandComponent } from './components/link-list-item-expand.component';

const COMPONENT_LIST = [LinkListItemComponent, LinkListItemExpandComponent];
const MODULE_LIST = [CommonModule, ButtonModule, TooltipModule];

@NgModule({
    declarations: [COMPONENT_LIST],
    imports: [MODULE_LIST],
    exports: [COMPONENT_LIST],
})
export class LinkListItemModule {}
