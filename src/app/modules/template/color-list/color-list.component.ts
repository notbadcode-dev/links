import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TemplateColor } from '@models/template-color.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'lnk-color',
    standalone: true,
    imports: [CommonModule, ClipboardModule, TranslateModule],
    templateUrl: './color-list.component.html',
    styleUrls: ['./color-list.component.scss'],
})
export class ColorListComponent implements OnInit {
    public templateColorList: TemplateColor[] = [];

    private primaryColorName = 'Primary color';

    private primaryColorCode = '#4b2af2';

    private passivePrimaryColorCode = '#c9bffb';

    private secondaryColorName = 'Secondary color';

    private secondaryColorCode = '#cccccc';

    private passiveSecondaryColorCode = '#efefef';

    private accentColorName = 'Accent color';

    private accentColorCode = '#00ac7c';

    private passiveAccentColorCode = '#b2e6d7';

    private destructiveColorName = 'Destructive color';

    private destructiveColorCode = '#d93057';

    private passiveDestructiveColorCode = '#fbebef';

    private passiveDescription = 'Passive';

    constructor() {}

    ngOnInit(): void {
        this.generateTemplateColorList();
    }

    /**
     * @description Generate template color list for draw on template
     * @returns {void}
     */
    private generateTemplateColorList(): void {
        this.addTemplateColorToTemplateColorList({
            code: this.primaryColorCode,
            name: this.primaryColorName,
            highlightColor: {
                code: this.passivePrimaryColorCode,
            },
        });

        this.addTemplateColorToTemplateColorList({
            code: this.passivePrimaryColorCode,
            name: this.primaryColorName,
            description: this.passiveDescription,
            highlightColor: {
                code: this.primaryColorCode,
            },
        });

        this.addTemplateColorToTemplateColorList({
            code: this.secondaryColorCode,
            name: this.secondaryColorName,
            highlightColor: {
                code: this.passiveSecondaryColorCode,
            },
        });

        this.addTemplateColorToTemplateColorList({
            code: this.passiveSecondaryColorCode,
            name: this.secondaryColorName,
            description: this.passiveDescription,
            highlightColor: {
                code: this.secondaryColorCode,
            },
        });

        this.addTemplateColorToTemplateColorList({
            code: this.accentColorCode,
            name: this.accentColorName,
            highlightColor: {
                code: this.passiveAccentColorCode,
            },
        });

        this.addTemplateColorToTemplateColorList({
            code: this.passiveAccentColorCode,
            name: this.accentColorName,
            description: this.passiveDescription,
            highlightColor: {
                code: this.accentColorCode,
            },
        });

        this.addTemplateColorToTemplateColorList({
            code: this.destructiveColorCode,
            name: this.destructiveColorName,
            highlightColor: {
                code: this.passiveDestructiveColorCode,
            },
        });

        this.addTemplateColorToTemplateColorList({
            code: this.passiveDestructiveColorCode,
            name: this.destructiveColorName,
            description: this.passiveDescription,
            highlightColor: {
                code: this.destructiveColorCode,
            },
        });
    }

    /**
     * @description Add template color to template color list previous verify properties
     * @param  {TemplateColor} templateColor
     * @returns void
     */
    private addTemplateColorToTemplateColorList(templateColor: TemplateColor): void {
        const templateColorCode: string = templateColor.code;
        const templateColorName: string = templateColor?.name || '';
        const templateColorhighlightColor: TemplateColor | null = templateColor?.highlightColor ?? null;
        const templateColorhighlightColorCode: string | null = templateColorhighlightColor?.code ?? '';

        if (!templateColorCode || typeof templateColorCode !== 'string' || templateColorCode.length === 0) {
            return;
        }

        if (!templateColorName || typeof templateColorName !== 'string' || templateColorName.length === 0) {
            return;
        }

        if (
            !templateColorhighlightColorCode ||
            typeof templateColorhighlightColorCode !== 'string' ||
            templateColorhighlightColorCode.length === 0
        ) {
            return;
        }

        this.templateColorList.push(templateColor);
    }
}
