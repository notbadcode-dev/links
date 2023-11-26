import { Component, Input } from '@angular/core';
import { ICardConfig } from '@shared/modules/card/models/card.model';

@Component({
    selector: 'lnk-simple-card',
    templateUrl: './simple-card.component.html',
    styleUrls: ['./simple-card.component.scss'],
})
export class SimpleCardComponent {
    @Input() set _config(_config: ICardConfig) {
        if (_config) {
            this.config = _config;
        }
    }

    public config!: ICardConfig;
}
