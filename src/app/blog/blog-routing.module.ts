import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitMenuComponent } from './unit-menu/unit-menu.component';
import { Unit1MenuComponent } from './unit-1/unit1-menu.component';
import { Unit2MenuComponent } from './unit-2/unit2-menu.component';
import { Unit3MenuComponent } from './unit-3/unit3-menu.component';

import { Week1SensoryMapComponent } from './single-blog/week1-sensory-map.component';
import { Week2Component } from './single-blog/week2-ux-of-conversation.component';
import { Week3Component } from './single-blog/week3-ux-of-conversation.component';
import { Week4Component } from './single-blog/week4-ux-of-conversation.component';
import { Week5Component } from './single-blog/week5-ux-of-space.component';
import { Week6Component } from './single-blog/week6-ux-of-space.component';
import { Week7Component } from './single-blog/week7-ux-of-time.component';
import { Week8Component } from './single-blog/week8-ux-of-time.component';
import { Week9Component } from './single-blog/week9-ux-of-death.component';
import { Week10Component } from './single-blog/week10-ux-of-death.component';
import { Week17Component } from './single-blog/week17-collaborative-project.component';
import { Week18Component } from './single-blog/week18-collaborative-project.component';
import { Week19Component } from './single-blog/week19-collaborative-project.component';
import { Week20Component } from './single-blog/week20-collaborative-project.component';
import { Week21Component } from './single-blog/week21-collaborative-project.component';
const routes: Routes = [
    { path: '', component: UnitMenuComponent, data: { animation: 'blog-portfolio' } },
    { path: 'unit-1', component: Unit1MenuComponent },
    { path: 'unit-2', component: Unit2MenuComponent },
    { path: 'unit-3', component: Unit3MenuComponent },

    { path: '1', component: Week1SensoryMapComponent },
    { path: '2', component: Week2Component },
    { path: '3', component: Week3Component },
    { path: '4', component: Week4Component },
    { path: '5', component: Week5Component },
    { path: '6', component: Week6Component },
    { path: '7', component: Week7Component },
    { path: '8', component: Week8Component },
    { path: '9', component: Week9Component },
    { path: '10', component: Week10Component },
    { path: '17', component: Week17Component },
    { path: '18', component: Week18Component },
    { path: '19', component: Week19Component },
    { path: '20', component: Week20Component },
    { path: '21', component: Week21Component },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class BlogRoutingModule {}
