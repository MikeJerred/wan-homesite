import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-banner-link',
    templateUrl: './banner-link.component.html',
    styleUrls: ['./banner-link.component.scss']
})
export class BannerLinkComponent implements OnInit {
    @Input() public name: string;
    @Input() public routerLink: any[] | string;
    @Input() public left: boolean;
    @Input() public right: boolean;
    @Input() public image3: boolean;

    public zoomed = false;

    ngOnInit() {
        if (<any>this.left === '')
            this.left = true;

        if (<any>this.right === '')
            this.right = true;

        if (<any>this.image3 === '')
            this.image3 = true;

        if (this.left && this.right)
            throw new Error('Banner Link cannot be both \'left\' and \'right\'');

        if (!this.left && !this.right)
            throw new Error('Banner Link must specify either \'left\' or \'right\'');
    }
}
