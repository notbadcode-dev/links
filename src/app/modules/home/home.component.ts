import { Component, OnInit } from '@angular/core';
import { AppBackdropService } from '@services/app-backdrop/app-backdrop.service';
import { Observable } from 'rxjs';
import { SidebarService } from '../sidebar/services/sidebar.service';

@Component({
    selector: 'lnk-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    $hiddenSidebar!: Observable<boolean>;
    $visibleBackdrop!: Observable<boolean>;

    constructor(private _sidebarService: SidebarService, private _appBackdropService: AppBackdropService) {
        this.$hiddenSidebar = _sidebarService.getHiddenSidebar;
        this.$visibleBackdrop = _appBackdropService.getVisibleBackdrop();
    }

    ngOnInit(): void {}
}
