import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { SharedModule } from '~/shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { UnitMenuComponent } from './unit-menu/unit-menu.component';
import { Unit1MenuComponent } from './unit-1/unit1-menu.component';
import { Unit2MenuComponent } from './unit-2/unit2-menu.component';
import { Unit3MenuComponent } from './unit-3/unit3-menu.component';
import { Unit4MenuComponent } from './unit-4/unit4-menu.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';

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



@NgModule({
    imports: [
        SharedModule,
        CarouselModule.forRoot(),
        BlogRoutingModule
    ],
    declarations: [
        UnitMenuComponent,
        SingleBlogComponent,
        Unit1MenuComponent,
        Unit2MenuComponent,
        Unit3MenuComponent,
        Unit4MenuComponent,

        Week1SensoryMapComponent,
        Week2Component,
        Week3Component,
        Week4Component,
        Week5Component,
        Week6Component,
        Week7Component,
        Week8Component,
        Week9Component,
        Week10Component,
        Week14Component,
        Week15Component,
        Week16Component,
        Week17Component,
        Week17Component2,
        Week18Component,
        Week18Component2,
        Week19Component,
        Week19Component2,
        Week20Component,
        Week20Component2,
        Week21Component,
        Week21Component2,
        Week22Component,
        Week23Component,
        Week24Component,
        Week25Component,
        Week26Component,
        Week27Component,
        Week28Component,
        Week29Component,
        Week30Component,
        Week31Component,
    ]
})
export class BlogModule {}
