import { AnimationEntryMetadata, Component, OnInit } from '@angular/core';
import { Location, PopStateEvent } from '@angular/common';
import { NavigationStart, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AnimationEvent, animate, group, query, state, style, transition, trigger } from '@angular/animations';
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
        style({ position: 'fixed', left: 0, width: '100vw', transform: 'translateX(0)' }),
        { optional: true }),
    query(':enter', style({ position: 'absolute', left: 0, width: '100vw', transform: 'translateX(100vw)', 'z-index': 100 })),
    group([
        query(':leave', animate('1s ease-in-out', style({ transform: 'translateX(-70vw)' })), { optional: true }),
        query(':enter', animate('1s ease-in-out', style({ transform: 'translateX(0)' }))),
    ])
];

const slideRight: AnimationEntryMetadata = [
    query(
        ':leave',
        style({ position: 'fixed', left: 0, width: '100vw', transform: 'translateX(0)' }),
        { optional: true }),
    query(
        ':enter',
        style({ position: 'absolute', left: 0, width: '100vw', transform: 'translateX(-100vw)', 'z-index': 100 })),
    group([
        query(':leave', animate('1s ease-in-out', style({ transform: 'translateX(70vw)' })), { optional: true }),
        query(':enter', animate('1s ease-in-out', style({ transform: 'translateX(0)' }))),
    ])
];

const slideLeftBothParallax: AnimationEntryMetadata = [
    query(':leave > .parallax', style({ 'margin-left': 0 })),
    query(':leave > .not-parallax', style({ position: 'fixed', left: 0, width: '100vw', transform: 'translateX(0)' })),
    query(':enter > .parallax', style({ 'margin-left': '100vw', 'z-index': 99 })),
    query(
        ':enter > .not-parallax',
        style({ position: 'absolute', left: 0, width: '100%', transform: 'translateX(100vw)', 'z-index': 100 })),
    group([
        query(':leave > .parallax', animate('1s ease-in-out', style({ 'margin-left': '-70vw' }))),
        query(':leave > .not-parallax', animate('1s ease-in-out', style({ transform: 'translateX(-70vw)' }))),
        query(':enter > .parallax', animate('1s ease-in-out', style({ 'margin-left': 0 }))),
        query(':enter > .not-parallax', animate('1s ease-in-out', style({ transform: 'translateX(0)' }))),
    ])
];

const slideRightBothParallax: AnimationEntryMetadata = [
    query(':leave > .parallax', style({ transform: 'translateX(0)' })),
    query(':leave > .not-parallax', style({ position: 'fixed', left: 0, width: '100vw', transform: 'translateX(0)' })),
    query(':enter > .parallax', style({ transform: 'translateX(-100vw)', 'z-index': 99 })),
    query(
        ':enter > .not-parallax',
        style({ position: 'absolute', left: 0, width: '100%', transform: 'translateX(-100vw)', 'z-index': 100 })),
    group([
        query(':leave > .parallax', animate('1s ease-in-out', style({ transform: 'translateX(70vw)' }))),
        query(':leave > .not-parallax', animate('1s ease-in-out', style({ transform: 'translateX(70vw)' }))),
        query(':enter > .parallax', animate('1s ease-in-out', style({ transform: 'translateX(0)' }))),
        query(':enter > .not-parallax', animate('1s ease-in-out', style({ transform: 'translateX(0)' }))),
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
            transition('design-2 => design-1', slideRight),
            transition('design-3 => design-1', slideRight),
            transition('design-3 => design-2', slideRight),
            transition('design-4 => design-1', slideRight),
            transition('design-4 => design-2', slideRight),
            transition('design-4 => design-3', slideRight),
            transition('photography-street => photography-architecture', slideRight),
            transition('design-portfolio <=> photography-architecture', slideRight),
            transition('* => *', slideLeft)
        ])
    ]
})
export class AppComponent implements OnInit {
    private lastPoppedUrl: string;
    private previousUrl: string;
    private scrollYValues: { [key: string]: number } = {};
    private animationDoneQueue: ((event: AnimationEvent) => void)[] = [];

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
                const roots = $('app-root > main > ng-component');
                const enter = roots.first();
                const leave = roots.last();

                leave.css({
                    top: -this.scrollYValues[this.previousUrl] + 'px'
                });

                if (evt.url === this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;

                    window.scrollTo(0, this.scrollYValues[evt.url]);
                    // enter.css({
                    //     top: -this.scrollYValues[evt.url] + 'px'
                    // });
                    this.animationDoneQueue.push(() => {
                        enter.css({ top: '' });
                        //window.scrollTo(0, this.scrollYValues[evt.url]);
                    });
                } else if (evt.url !== '/home') {
                    window.scrollTo(0, 0);
                    // enter.css({
                    //     top: '0'
                    // });

                    this.animationDoneQueue.push(event => {
                        enter.css({ top: '' });

                        //if (event.fromState !== 'null')
                            //window.scrollTo(0, 0);
                    });
                }

                this.previousUrl = evt.url;
            });
    }

    public animationDone(event: AnimationEvent): void {
        this.animationDoneQueue.forEach(func => {
            func(event);
        });

        this.animationDoneQueue = [];
    }

    public getRouteTransition(outlet: RouterOutlet) {
        return outlet.activatedRouteData['animation'] || 'null';
    }
}
