import { Component } from '@angular/core';

import { LayoutService } from '~/shared/layout.service';

@Component({
    providers: [],
    templateUrl: './design-mjerred.component.html',
    styleUrls: ['./design-mjerred.component.scss']
})
export class DesignMjerredComponent {
    public selectedTab = 0;
    public isMobile = false;

    constructor(layoutService: LayoutService) {
        layoutService.isMobile$().subscribe(value => {
            this.isMobile = value;
        });
    }
}
