import { Component } from '@angular/core';

import { LayoutService } from '~/shared/layout.service';

@Component({
    providers: [],
    templateUrl: './design-5.component.html',
    styleUrls: ['./design-5.component.scss']
})
export class Design5Component {
    public selectedTab = 0;
    public isMobile = false;

    constructor(layoutService: LayoutService) {
        layoutService.isMobile$().subscribe(value => {
            this.isMobile = value;
        });
    }
}
