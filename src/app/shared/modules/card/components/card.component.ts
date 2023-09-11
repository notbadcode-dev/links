import { Component, Input } from '@angular/core';
import { CardConfig } from '../card.model';

@Component({
    selector: 'lnk-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
    @Input() set _config(_config: CardConfig) {
        if (_config) {
            this.config = _config;
        }
    }

    public config!: CardConfig;
}
