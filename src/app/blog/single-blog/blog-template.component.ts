import { Component } from '@angular/core';

@Component({
    template: `
<app-blog title="Hello" [previous]="{ name: 'foo', link: ['blog', 1] }" [next]="{ name: 'bar', link: ['blog', 2] }">
    <div class="col-12">
        <p>Testing</p>
    </div>
</app-blog>
`
})
export class Blog1Component {}