import { Component, Input, OnInit } from '@angular/core';

import { LayoutService } from '~/shared/layout.service';

@Component({
    selector: 'app-side-link',
    templateUrl: './side-link.component.html',
    styleUrls: ['./side-link.component.scss']
})
export class SideLinkComponent implements OnInit {
    @Input() public name: string;
    @Input() public routerLink: any[] | string;
    @Input() public extend: number;
    @Input() public left: boolean;
    @Input() public right: boolean;
    @Input() public invert: boolean;

    public expanded = false;
    public isMobile = false;

    constructor(layoutService: LayoutService) {
        layoutService.isMobile$().subscribe(value => {
            this.isMobile = value;
            this.expanded = value;
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
