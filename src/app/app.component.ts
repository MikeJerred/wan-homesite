import { AnimationEntryMetadata, Component, OnInit } from '@angular/core';
import { Location, PopStateEvent } from '@angular/common';
import { NavigationStart, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';
import { PageScrollConfig } from 'ngx-page-scroll';
import * as $ from 'jquery';

const homeSplit: AnimationEntryMetadata = [
    query(':leave', style({ position: 'fixed', top: 0, left: 0, width: '100vw', 'z-index': 100 }), { optional: true }),
    query(':enter', style({ position: 'absolute', top: 0, left: 0, width: '100vw' })),
    query('.bg-left', style({ transform: 'translateX(0)' }), { optional: true }),
    query('.bg-right', style({ transform: 'translateX(0)' }), { optional: true }),
    query('.bg-top', style({ transform: 'translateY(0)' }), { optional: true }),
    query('.bg-bottom', style({ transform: 'translateY(0)' }), { optional: true }),
    group([
        query('.bg-left', animate('1s ease-in-out', style({ transform: 'translateX(-65vw)' })), { optional: true }),
        query('.bg-right', animate('1s ease-in-out', style({ transform: 'translateX(65vw)' })), { optional: true }),
        query('.bg-top', animate('1s ease-in-out', style({ transform: 'translateY(-65vh)' })), { optional: true }),
        query('.bg-bottom', animate('1s ease-in-out', style({ transform: 'translateY(65vh)' })), { optional: true })
    ])
];
const homeJoin: AnimationEntryMetadata = [
    query(':leave', style({ position: 'absolute', top: 0, left: 0, width: '100vw' }), { optional: true }),
    query(':enter', style({ position: 'fixed', top: 0, left: 0, width: '100vw', 'z-index': 100 })),
    query('.bg-left', style({ transform: 'translateX(-65vw)' }), { optional: true }),
    query('.bg-right', style({ transform: 'translateX(65vw)' }), { optional: true }),
    query('.bg-top', style({ transform: 'translateY(-65vh)' }), { optional: true }),
    query('.bg-bottom', style({ transform: 'translateY(65vh)' }), { optional: true }),
    group([
        query('.bg-left', animate('1s ease-in-out', style({ transform: 'translateX(0)' })), { optional: true }),
        query('.bg-right', animate('1s ease-in-out', style({ transform: 'translateX(0)' })), { optional: true }),
        query('.bg-top', animate('1s ease-in-out', style({ transform: 'translateY(0)' })), { optional: true }),
        query('.bg-bottom', animate('1s ease-in-out', style({ transform: 'translateY(0)' })), { optional: true })
    ])
];

const slideLeft: AnimationEntryMetadata = [
    query(
        ':leave',
        style({ position: 'absolute', top: 0, left: 0, width: '100vw', transform: 'translateX(0)' }),
        { optional: true }),
    query(':enter', style({ position: 'fixed', left: 0, width: '100vw', transform: 'translateX(100vw)', 'z-index': 100 })),
    group([
        query(':leave', animate('1s ease-in-out', style({ transform: 'translateX(-70vw)' })), { optional: true }),
        query(':enter', animate('1s ease-in-out', style({ transform: 'translateX(0)' }))),
    ])
];

const slideRight: AnimationEntryMetadata = [
    query(
        ':leave',
        style({ position: 'absolute', top: 0, left: 0, width: '100vw', transform: 'translateX(0)' }),
        { optional: true }),
    query(':enter', style({ position: 'fixed', left: 0, width: '100vw', transform: 'translateX(-100vw)', 'z-index': 100 })),
    group([
        query(':leave', animate('1s ease-in-out', style({ transform: 'translateX(70vw)' })), { optional: true }),
        query(':enter', animate('1s ease-in-out', style({ transform: 'translateX(0)' }))),
    ])
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('routerAnimation', [
            transition('void => *', []),
            transition('null => *', []),
            transition('home => *', homeSplit),
            transition('* => home', homeJoin),
            transition('design-2 => design-1', slideLeft),
            transition('design-3 => design-1', slideLeft),
            transition('design-3 => design-2', slideLeft),
            transition('design-4 => design-1', slideLeft),
            transition('design-4 => design-2', slideLeft),
            transition('design-4 => design-3', slideLeft),
            transition('photography-street => photography-architecture', slideLeft),
            transition('* => *', slideRight)
        ])
    ]
})
export class AppComponent implements OnInit {
    private lastPoppedUrl: string;
    private previousUrl: string;
    private scrollYValues: { [key: string]: number } = {};

    constructor(private router: Router, private location: Location) {
        PageScrollConfig.defaultDuration = 500;

        if ('scrollRestoration' in history)
            history.scrollRestoration = 'manual';
    }

    ngOnInit(): void {
        this.location.subscribe(evt => {
            this.lastPoppedUrl = evt.url;
        });

        this.router.events
            .filter(evt => evt instanceof NavigationStart)
            .subscribe((evt: NavigationStart) => {
                if (this.previousUrl) {
                    this.scrollYValues[this.previousUrl] = window.scrollY;
                }
            });

        this.router.events
            .filter(evt => evt instanceof NavigationEnd)
            .subscribe((evt: NavigationEnd) => {
                if (evt.url === this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;

                    // matches :enter
                    const enterElement = $('app-root > main > ng-component').first();
                    enterElement.css({
                        top: -this.scrollYValues[evt.url] + 'px'
                    });

                    setTimeout(
                        () => {
                            enterElement.css({ top: '' });
                            window.scrollTo(0, this.scrollYValues[evt.url]);
                        },
                        1000);
                } else if (evt.url !== '/home') {
                    setTimeout(() => window.scrollTo(0, 0), 1000);
                    console.log('Scrolling to top');
                }

                this.previousUrl = evt.url;
            });
    }

    public getRouteTransition(outlet: RouterOutlet) {
        return outlet.activatedRouteData['animation'] || 'null';
    }
}
