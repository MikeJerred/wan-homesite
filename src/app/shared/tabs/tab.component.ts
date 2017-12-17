import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-tab',
    template: `<ng-template #template><ng-content></ng-content></ng-template>`
})
export class TabComponent {
    @Input() public heading: string;
    @Input() public active: boolean;
    @Input() public height = '0';

    @ViewChild(TemplateRef) public template: TemplateRef<any>;
}
