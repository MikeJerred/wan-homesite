import { AfterContentInit, AnimationEntryMetadata, Component, ContentChildren, QueryList } from '@angular/core';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

import { LayoutService } from 'shared/layout.service';
import { TabComponent } from './tab.component';

export const tabAnimation: AnimationEntryMetadata = [
    transition('* <=> *', [
        group([
            query(':self', [
                style({ height: '{{oldHeight}}' }),
                animate('1s ease-in-out', style({ height: '{{newHeight}}' }))
            ]),
            query(':leave', [
                style({ position: 'absolute', top: 0, left: 0, right: 0, transform: 'translateY(0)' }),
                animate('1s ease-in-out', style({ transform: 'translateY(50vh)' }))
            ], { optional: true }),
            query(':enter', [
                style({ position: 'absolute', top: 0, left: 0, right: 0, transform: 'translateY(-100vh)', 'z-index': 1 }),
                animate('1s ease-in-out', style({ transform: 'translateY(0)' }))
            ])
        ])
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
    public previousHeight = '0';
    public currentHeight = '0';

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

        this.previousHeight = this.currentHeight;
        this.currentHeight = selectedTab.height;
    }

    public getAnimationState() {
        const index = this.tabs.toArray().findIndex(tab => tab.active);

        return {
            value: 'state' + index,
            params: { oldHeight: this.previousHeight, newHeight: this.currentHeight }
        };
    }
}
