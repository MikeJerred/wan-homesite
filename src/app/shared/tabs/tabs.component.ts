import { AfterContentInit, AnimationEntryMetadata, Component, ContentChildren, QueryList } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { LayoutService } from 'shared/layout.service';
import { TabComponent } from './tab.component';

export const tabAnimation: AnimationEntryMetadata = [
    transition(':leave', [
        style({ position: 'absolute', top: 0, left: 0, right: 0, opacity: 1 }),
        animate('1s ease-in-out', style({ opacity: 0 }))
    ]),
    transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in-out', style({ opacity: 1 }))
    ])
];

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
    animations: [
        trigger('tabAnimation', tabAnimation)
    ]
})
export class TabsComponent implements AfterContentInit {
    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

    public selectedTab = 0;
    public isMobile = false;

    constructor(layoutService: LayoutService) {
        layoutService.isMobile$().subscribe(value => {
            this.isMobile = value;
        });
    }

    ngAfterContentInit(): void {
        const activeTabs = this.tabs.filter(tab => tab.active);

        if (activeTabs.length === 0)
            this.selectTab(this.tabs.first);
        else if (activeTabs.length > 1)
            this.selectTab(activeTabs[0]);
    }

    public selectTab(selectedTab: TabComponent) {
        this.tabs.forEach(tab => tab.active = false);
        selectedTab.active = true;
    }
}
