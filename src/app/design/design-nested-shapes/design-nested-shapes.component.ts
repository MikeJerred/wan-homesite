import { Component } from '@angular/core';

import { LayoutService } from '~/shared/layout.service';

@Component({
    providers: [],
    templateUrl: './design-nested-shapes.component.html',
    styleUrls: ['./design-nested-shapes.component.scss']
})
export class DesignNestedShapesComponent {
    public selectedTab = 0;
    public isMobile = false;

    constructor(layoutService: LayoutService) {
        layoutService.isMobile$().subscribe(value => {
            this.isMobile = value;
        });
    }
}
