import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 29 - Volunteering at UX London" duration="Project duration: 23rd April - 17th June, 2019" team="Team: Reina Yuan, Timmy Maiello, Yijia Sun, Wan Li" [previous]="{ name: 'Week 28 - Prototyping', link: ['/blog', 28], extend: 240 }" [next]="{ name: 'Week 30 - Plant-to-plant workshop', link: ['/blog', 30], extend: 320 }">

<div class="col-12">

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro6/ux.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro6/ux2.jpg">
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
        

            <p>This week, I was mostly volunteering at the UX London event, so only had a limited time working on the group project. Before the event, we worked together to decide which one of the two ideas we should develop further. We took some elements out from each idea and combined them together. We worked on the user journey and a basic prototype of the concept.</p>

            <img style="width:100%" src="/assets/blog/micro6/ux3.jpg">


        </div>
    </div>


    <div class="row justify-content-center">
    <div class="col-9">

          
            <p>It was a pleasure to work with the Clearleft team and the rest of the volunteers at UX London. The conference was a great opportunity to learn and get to meet more people in the industry. A carefully considered rota ensured that, alongside conference duties everyone had a chance to see some talks they’re interested in and take part in some workshops. Setting up workshops means you’re helping the presenters, so there are chances to meet the experts. Taking part in the workshops was a huge highlight, it involved hands on activities alongside group discussions with others working in the field. </p>    
            
            <p>Experiencing UX London as a volunteer was an excellent opportunity to meet like-minded people from all kinds of backgrounds, with all their own different reasons for being there. We all had an interest in a common subject, and hearing everyone’s different take on it and individual experiences never got dull. </p>

            <img style="width:100%" src="/assets/blog/micro6/ux4.jpg">
            <figcaption>A group discussion on what are the factors make or break a team collaboration in an organisation.</figcaption>

            <img style="width:100%" src="/assets/blog/micro6/ux5.jpg">
            <figcaption>"Nuggets" cards used for behaviour design.</figcaption>

        </div>
    </div>







</div>
</app-blog>
`
})
export class Week29Component {}