import { Injectable } from '@angular/core';
import { IGroupLinkListItem } from '@modules/group-link/modules/group-link-list/group-link-list.interface';

@Injectable({
    providedIn: 'root',
})
export class GroupLinkDataService {
    linkIndexOffset = 1;
    linksToShow = 5;

    /**
     * @description Add new link into a group link
     * @param  {IGroupLinkListItem} groupLinkListItem
     * @returns void
     */
    addNewLinkIntoGroup(groupLinkListItem: IGroupLinkListItem): void {
        groupLinkListItem.openModalCreateNewLink = true;
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
