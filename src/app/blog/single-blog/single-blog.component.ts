import { Component, Input } from '@angular/core';

import { LayoutService } from 'shared/layout.service';

@Component({
    selector: 'app-blog',
    templateUrl: './single-blog.component.html',
    styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent {
    @Input()
    public title: string;

    @Input()
    public duration: string;

    @Input()
    public next: { name: string, link: any[] };

    @Input()
    public previous: { name: string, link: any[] };

    public isMobile = false;

    constructor(layoutService: LayoutService) {
        layoutService.isMobile$().subscribe(value => {
            this.isMobile = value;
        });
    }
}
