import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

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

        fromEvent(window, 'resize')
            .pipe(map(() => this.getWindowSize()))
            .subscribe(this.layout$);
    }

    private getWindowSize(): ILayout {
        const size = window.innerWidth < 576 ? 'xs'
            : window.innerWidth < 820 ? 'sm'
            : window.innerWidth < 992 ? 'md'
            : window.innerWidth < 1230 ? 'lg'
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
        return this.layout$.pipe(map(layout => layout.layout === 'xs' || layout.layout === 'sm'));
    }
}
