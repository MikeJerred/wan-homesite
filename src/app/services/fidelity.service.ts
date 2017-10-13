import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FidelityService {
    private readonly defaultValue = false;
    private readonly key = 'isLofi';
    public isLofi$: BehaviorSubject<boolean>;

    constructor (private localStorageService: LocalStorageService) {
        const currentValue = localStorageService.get<boolean>(this.key);
        this.isLofi$ = new BehaviorSubject<boolean>(currentValue === null ? this.defaultValue : currentValue);

        this.localStorageService.setItems$
            .filter(localStorageEvent => localStorageEvent.key === this.key)
            .map(localStorageEvent => !!JSON.parse(localStorageEvent.newvalue))
            .filter(value => value !== this.isLofi$.value)
            .subscribe(this.isLofi$);

        this.isLofi$.subscribe(value => {
            const currentVal = localStorageService.get<boolean>(this.key);
            if (value !== currentVal) {
                this.localStorageService.set(this.key, value);
            }
        });
    }

    isLofi(): boolean {
        return this.isLofi$.value;
    }

    setIsLofi(isLofi: boolean): void {
        this.isLofi$.next(isLofi);
    }
}
