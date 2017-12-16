import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/fromEvent';

export interface ILayout {
    width: number;
    height: number;
    layout: string;
}

@Injectable()
export class LayoutService {
    private layout$: BehaviorSubject<ILayout>;

    constructor() {
        this.layout$ = new BehaviorSubject<ILayout>(this.getWindowSize());

        Observable
            .fromEvent(window, 'resize')
            .map(() => this.getWindowSize())
            .subscribe(this.layout$);
    }

    private getWindowSize(): ILayout {
        const size = window.innerWidth < 576 ? 'xs'
            : window.innerWidth < 768 ? 'sm'
            : window.innerWidth < 992 ? 'md'
            : window.innerWidth < 1200 ? 'lg'
            : 'xl';

        return {
            width: window.innerWidth,
            height: window.innerHeight,
            layout: size
        };
    }

    public getLayout(): ILayout {
        return this.layout$.value;
    }

    public getLayout$(): Observable<ILayout> {
        return this.layout$;
    }

    public isMobile$(): Observable<boolean> {
        return this.layout$.map(layout => layout.layout === 'xs' || layout.layout === 'sm');
    }
}
