import { Component } from '@angular/core';
import { SharingDataService } from '@app/core/services/sharing-data/sharing-data.service';

@Component({
    selector: 'lnk-session-information',
    templateUrl: './session-information.component.html',
    styleUrls: ['./session-information.component.scss'],
})
export class SessionInformationComponent {
    constructor(public _sharingDataService: SharingDataService) {}
}
