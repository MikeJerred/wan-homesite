import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitMenuComponent } from './unit-menu/unit-menu.component';
import { Unit1MenuComponent } from './unit-1/unit1-menu.component';
import { Unit2MenuComponent } from './unit-2/unit2-menu.component';
import { Unit3MenuComponent } from './unit-3/unit3-menu.component';
import { Unit4MenuComponent } from './unit-4/unit4-menu.component';

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
import { Week14Component } from './single-blog/week14-macro-ux.component';
import { Week15Component } from './single-blog/week15-macro-ux.component';
import { Week16Component } from './single-blog/week16-macro-ux.component';
import { Week17Component } from './single-blog/week17-collaborative-project.component';
import { Week17Component2 } from './single-blog/week17-macro-ux.component';
import { Week18Component } from './single-blog/week18-collaborative-project.component';
import { Week18Component2 } from './single-blog/week18-macro-ux.component';
import { Week19Component } from './single-blog/week19-collaborative-project.component';
import { Week19Component2 } from './single-blog/week19-macro-ux.component';
import { Week20Component } from './single-blog/week20-collaborative-project.component';
import { Week20Component2 } from './single-blog/week20-macro-ux.component';
import { Week21Component } from './single-blog/week21-collaborative-project.component';
import { Week21Component2 } from './single-blog/week21-macro-ux.component';
import { Week22Component } from './single-blog/week22-macro-ux.component';
import { Week23Component } from './single-blog/week23-macro-ux.component';
import { Week24Component } from './single-blog/week24-micro-ux.component';
import { Week25Component } from './single-blog/week25-micro-ux.component';
import { Week26Component } from './single-blog/week26-micro-ux.component';
import { Week27Component } from './single-blog/week27-micro-ux.component';
import { Week28Component } from './single-blog/week28-micro-ux.component';
import { Week29Component } from './single-blog/week29-micro-ux.component';
import { Week30Component } from './single-blog/week30-micro-ux.component';
import { Week31Component } from './single-blog/week31-micro-ux.component';




const routes: Routes = [
    { path: '', component: UnitMenuComponent, data: { animation: 'blog-portfolio' } },
    { path: 'unit-1', component: Unit1MenuComponent },
    { path: 'unit-2', component: Unit2MenuComponent },
    { path: 'unit-3', component: Unit3MenuComponent },
    { path: 'unit-4', component: Unit4MenuComponent },

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
    { path: '14', component: Week14Component },
    { path: '15', component: Week15Component },
    { path: '16', component: Week16Component },
    { path: '17', component: Week17Component },
    { path: '17.2', component: Week17Component2 },
    { path: '18', component: Week18Component },
    { path: '18.2', component: Week18Component2 },
    { path: '19', component: Week19Component },
    { path: '19.2', component: Week19Component2 },
    { path: '20', component: Week20Component },
    { path: '20.2', component: Week20Component2 },
    { path: '21', component: Week21Component },
    { path: '21.2', component: Week21Component2 },
    { path: '22', component: Week22Component },
    { path: '23', component: Week23Component },
    { path: '24', component: Week24Component },
    { path: '25', component: Week25Component },
    { path: '26', component: Week26Component },
    { path: '27', component: Week27Component },
    { path: '28', component: Week28Component },
    { path: '29', component: Week29Component },
    { path: '30', component: Week30Component },
    { path: '31', component: Week31Component },

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class BlogRoutingModule {}
