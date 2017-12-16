import { Component, Input, OnInit } from '@angular/core';

import { LayoutService } from 'shared/layout.service';

@Component({
    selector: 'app-side-link',
    templateUrl: './side-link.component.html',
    styleUrls: ['./side-link.component.scss']
})
export class SideLinkComponent implements OnInit {
    @Input('name') name: string;
    @Input('routerLink') routerLink: any[] | string;
    @Input('extend') extend: number;
    @Input('left') left: boolean;
    @Input('right') right: boolean;
    @Input('invert') invert: boolean;

    public expanded = false;
    public isMobile = false;

    constructor(layoutService: LayoutService) {
        layoutService.getLayout$().subscribe(layout => {
            this.isMobile = layout.layout === 'xs';
            this.expanded = this.isMobile;
        });
    }

    ngOnInit() {
        if (<any>this.left === '')
            this.left = true;

        if (<any>this.right === '')
            this.right = true;

        if (<any>this.invert === '')
            this.invert = true;

        if (this.left && this.right)
            throw new Error('Side Link cannot be both \'left\' and \'right\'');

        if (!this.left && !this.right)
            throw new Error('Side Link must specify either \'left\' or \'right\'');

        if (!this.extend)
            this.extend = 130;
    }
}
