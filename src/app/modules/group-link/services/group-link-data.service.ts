import { Injectable } from '@angular/core';
import { AppBackdropService } from '@services/app-backdrop/app-backdrop.service';
import { GroupLinkListItemHelper, IGroupLinkListItem } from '@modules/group-link/modules/group-link-list/group-link-list.interface';

@Injectable({
    providedIn: 'root',
})
export class GroupLinkDataService {
    linkIndexOffset = 1;
    linksToShow = 5;

    constructor(private _appBackdropService: AppBackdropService) {}

    /**
     * @description Add new link into a group link
     * @param  {IGroupLinkListItem} groupLinkListItem
     * @returns void
     */
    addNewLinkIntoGroup(groupLinkListItem: IGroupLinkListItem): void {
        if (!groupLinkListItem) {
            return;
        }

        groupLinkListItem.openModalCreateNewLink = true;
        this._appBackdropService.showBackdrop();
    }

    /**
     * @description Cancel a add new link into a group link
     * @param  {IGroupLinkListItem} groupLinkListItem
     * @returns void
     */
    cancelAddNewLinkIntoGroup(groupLinkListItem: IGroupLinkListItem): void {
        groupLinkListItem.openModalCreateNewLink = false;
    }

    /**
     * @description Expand group link
     * @param  {IGroupLinkListItem} groupLinkListItem
     * @returns void
     */
    toggleExpandGroupLink(groupLinkListItem: IGroupLinkListItem): void {
        groupLinkListItem.cardConfig.expandConfig.expanded = !groupLinkListItem.cardConfig.expandConfig.expanded;
    }
}
