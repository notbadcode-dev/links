import { Component, Input } from '@angular/core';

@Component({
    selector: 'lnk-text-with-delimiter',
    templateUrl: './text-with-delimiter.component.html',
    styleUrls: ['./text-with-delimiter.component.scss'],
})
export class TextWithDelimiterComponent {
    @Input() _text!: string;
}
