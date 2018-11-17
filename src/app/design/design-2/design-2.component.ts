import { Component } from '@angular/core';

import { LayoutService } from '~/shared/layout.service';

@Component({
    providers: [],
    templateUrl: './design-2.component.html',
    styleUrls: ['./design-2.component.scss']
})
export class Design2Component {
    public selectedTab = 0;
    public isMobile = false;

    constructor(layoutService: LayoutService) {
        layoutService.isMobile$().subscribe(value => {
            this.isMobile = value;
        });
    }
}
