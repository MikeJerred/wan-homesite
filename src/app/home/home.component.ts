import { Component } from '@angular/core';

import { LayoutService } from 'shared/layout.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public isLeftExpanded = false;
    public isRightExpanded = false;
    public isMobile = false;

    constructor(layoutService: LayoutService) {
        layoutService.getLayout$().subscribe(layout => {
            this.isMobile = layout.layout === 'xs';
        });
    }

    public toggleLeft(): void {
        this.isLeftExpanded = !this.isLeftExpanded;

        if (this.isLeftExpanded)
            this.isRightExpanded = false;
    }

    public toggleRight(): void {
        this.isRightExpanded = !this.isRightExpanded;

        if (this.isRightExpanded)
            this.isLeftExpanded = false;
    }
}
