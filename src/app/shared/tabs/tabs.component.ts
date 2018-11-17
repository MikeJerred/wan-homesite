import { AfterContentInit, Component, ContentChildren, Inject, QueryList } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AnimationMetadata, animate, group, query, style, transition, trigger } from '@angular/animations';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';

import { LayoutService } from '~/shared/layout.service';
import { TabComponent } from './tab.component';

export const tabAnimation: AnimationMetadata[] = [
    transition('void => *', []),
    transition('* <=> *', [
        group([
            query(':self', [
                style({ height: '{{oldHeight}}' }),
                animate('1s ease-in-out', style({ height: '{{newHeight}}' }))
            ]),
            query(':leave', [
                style({ position: 'absolute', top: 0, left: 0, right: 0, transform: 'translateX(0)', opacity: 1 }),
                animate('1s ease-in-out', style({ transform: 'translateX({{slideOutSign}}50vw)', opacity: 0 }))
            ], { optional: true }),
            query(':enter', [
                style({ position: 'absolute', top: 0, left: 0, right: 0, transform: 'translateX({{slideInSign}}100vw)', 'z-index': 1 }),
                animate('1s ease-in-out', style({ transform: 'translateX(0)' }))
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
    public previousTabIndex = 0;
    public previousHeight = '0';
    public currentHeight = '0';

    constructor(
        private pageScrollService: PageScrollService,
        @Inject(DOCUMENT) private document: any,
        layoutService: LayoutService) {

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
        this.previousTabIndex = this.tabs.toArray().findIndex(tab => tab.active);
        this.tabs.forEach(tab => tab.active = false);
        selectedTab.active = true;

        this.previousHeight = this.currentHeight;
        this.currentHeight = selectedTab.height;
    }

    public selectMobileTab(index: number): void {
        const pageScrollInstance = PageScrollInstance.newInstance({
            document: this.document,
            scrollTarget: '#tab' + index,
            pageScrollOffset: 90 });
        setTimeout(() => this.pageScrollService.start(pageScrollInstance), 10);
    }

    public getAnimationState() {
        const index = this.tabs.toArray().findIndex(tab => tab.active);

        return {
            value: 'state' + index,
            params: {
                oldHeight: this.previousHeight,
                newHeight: this.currentHeight,
                slideOutSign: index < this.previousTabIndex ? '-' : '',
                slideInSign: index < this.previousTabIndex ? '' : '-'
            }
        };
    }
}
