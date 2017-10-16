import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FidelityService } from '../../services/fidelity.service';

@Component({
    providers: [FidelityService],
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
    isLofi$: BehaviorSubject<boolean>;

    constructor(private fidelityService: FidelityService) {
        this.isLofi$ = this.fidelityService.isLofi$;
    }
}
