import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-banner-link',
    templateUrl: './banner-link.component.html',
    styleUrls: ['./banner-link.component.scss']
})
export class BannerLinkComponent implements OnInit {
    @Input('name') name: string;
    @Input('routerLink') routerLink: any[] | string;
    @Input('left') left: boolean;
    @Input('right') right: boolean;

    public zoomed = false;

    ngOnInit() {
        if (<any>this.left === '')
            this.left = true;

        if (<any>this.right === '')
            this.right = true;

        if (this.left && this.right)
            throw new Error('Banner Link cannot be both \'left\' and \'right\'');

        if (!this.left && !this.right)
            throw new Error('Banner Link must specify either \'left\' or \'right\'');
    }
}
