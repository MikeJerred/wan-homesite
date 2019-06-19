import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 24 - Desk research" duration="Project duration: 23rd April - 17th June, 2019" team="Team: Reina Yuan, Timmy Maiello, Yijia Sun, Wan Li" [next]="{ name: 'Week 25 - Field research', link: ['/blog', 25], extend: 250 }" >

<div class="col-12">

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro1/mm.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro1/mm2.jpg">
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
        
            <p>On Tuesday, we had the briefing from Made by Many. They would like us to not only form exciting ideas grounded by research but also keep technical feasibility in mind. All the three agencies mentioned that they adapt a more agile process which is make, test, learn, it is very important for us to incorporate the same process in our weekly sprint.</p>


            <p>Our brief is to design a product or service that establishes a system of value that doesn’t rely on financial transactions. In order to fulfil this, we need to understand the meaning of system of value and financial transactions. Our literature review primarily focused on investigating these two areas. After some generic research, we split the work allow each person dive deeper in one area. Yijia worked on financial transactions and money, I worked on the system of value and Reina worked on finding practical reviews in similar fields.</p>

            <p>Initially, I was overwhelmed by the amount of content around the subject of value and different voices. The major theories of value lie between sociology, axiology and economics. It can be difficult to know when to stop reading, I wanted to read as much as possible so we can cover different perspectives. However, we need to control the balance between research and deadline, as well as the time we have for presentation.</p>

            <p>After individual research, we discussed our findings together and started to synthesise. Initially, we wanted to do a role play, but some findings were too theoretical to act out. We ended up producing a diagram to demonstrate our understanding from all the readings.</p>

        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro1/graph1.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro1/graph2.jpg">
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
        
            <p>We did a wireframe workshop this week, the first exercise was to a website back to wireframe. It helped us to see how wireframes demonstrates the structure of a website. The second exercise was to redesign one of the major websites in wireframes. Reina, Jiayi and I chose to improve Instagram using Axure. I used Axure quite often previously, so I was helping the rest of the team to get familiar with the tool. Axure is particularly good for building more complex prototypes as it supports more sophisticated interactions and logic conditions. Comparing to Sketch like tools, it not only allows interactions between pages/artboards, but also support interactions within one page such as dropdowns, parallax effect, slider, scroll to anchor etc. However, from teaching my team I realised that the learning curve is steeper for beginners which prevents them from discovering the more powerful side of the tool. The principles of all wireframing tools are very similar, having a basic knowledge of all is very beneficial for future works. From this excercise, we understood that all the design tools on the market are very similar. They are there to help us explain our ideas to peers and clients, we should be familiar with them but not relying on or limited by them in our design.</p>


        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro1/wf1.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro1/wf2.jpg">
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">



            <h4>Collaborative and / or Independent Professional Working</h4>
            <p>Research: Reina, Yijia, Wan<br>
            Presentation content: Reina, Yijia, Wan<br>
            Presentation visualisation: Timmy<br>



            
    </div>
</div>



</div>
</app-blog>
`
})
export class Week24Component {}