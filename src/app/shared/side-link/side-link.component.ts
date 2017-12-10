import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-side-link',
    templateUrl: './side-link.component.html',
    styleUrls: ['./side-link.component.scss']
})
export class SideLinkComponent implements OnInit {
    @Input('name') name: string;
    @Input('routerLink') routerLink: any[] | string;
    @Input('left') left: boolean;
    @Input('right') right: boolean;

    ngOnInit() {
        if (<any>this.left === '')
            this.left = true;

        if (<any>this.right === '')
            this.right = true;

        if (this.left && this.right)
            throw new Error('Side Link cannot be both \'left\' and \'right\'');

        if (!this.left && !this.right)
            throw new Error('Side Link must specify either \'left\' or \'right\'');
    }
}
