import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FidelityService } from '../../services/fidelity.service';

@Component({
    providers: [FidelityService],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    isLofi$: BehaviorSubject<boolean>;

    constructor(private fidelityService: FidelityService) {
        this.isLofi$ = this.fidelityService.isLofi$;
    }
}
