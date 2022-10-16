import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SidebarService } from '../sidebar/services/sidebar.service';

@Component({
    selector: 'lnk-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    $hiddenSidebar!: Observable<boolean>;

    constructor(_sidebarService: SidebarService) {
        this.$hiddenSidebar = _sidebarService.getHiddenSidebar;
    }

    ngOnInit(): void {}
}
