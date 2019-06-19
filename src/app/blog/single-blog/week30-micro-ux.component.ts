import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 30 - Plant-to-plant workshop" duration="Project duration: 23rd April - 17th June, 2019" team="Team: Reina Yuan, Timmy Maiello, Yijia Sun, Wan Li" [previous]="{ name: 'Week 29 - Volunteering at UX London', link: ['/blog', 29], extend: 340 }" [next]="{ name: 'Week 31 - Final design', link: ['/blog', 31], extend: 250 }">

<div class="col-12">

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro7/p2p.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro7/p2p2.jpg">
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
        

            <p>This week, I was honoured to be in part of the plant-to-plant Protocol workshop organised by Supra Systems Studio and taught by media artist Sarah Grant. The purpose of this workshop was to get some experience build our own network using Arduino pairs and working with protocols. </p>

            <h4>How does it work?</h4>

            <img style="width:100%" src="/assets/blog/micro7/plan.png">

            <p>There was a master raspberry pi that was over radio sending data over radio to Arduino, taking that data sending it back through IR sensor to the partner Arduino, which then took the data and sent back to raspberry pi then pushed to the internet to display in the web application. The system was designed to be slow which only sending 8 bytes per second, the entire process has made us to slow down and think how everything actually works. It also gave us a chance to play with data in a network as an aesthetic material. The introduction for the IR sensor introduced the opportunity for data corruption shown as glitches in the result. According to Sarah, she just realised that the system had sort of became a live cloud detector in a way due to the IR sensors. Because the sensor gets affected the most when there are lots of clouds. The data glitches respond to how cloudy it is outside. </p>

            <img style="width:100%" src="/assets/blog/micro7/radio.jpg">
            <figcaption>Building and testing my part of the radio.</figcaption>

            <img style="width:100%" src="/assets/blog/micro7/p2p3.jpg">
            <figcaption>My partner and my radio started communication. </figcaption>

            <img style="width:100%" src="/assets/blog/micro7/data.jpg">
            <figcaption>How the data looked like in the web app indoor. </figcaption>

            <img style="width:100%" src="/assets/blog/micro7/garden.jpg">
            <figcaption>We attached them to the plants in IDA garden to send and receive live data through the plants. </figcaption>

            <img style="width:100%" src="/assets/blog/micro7/garden.jpg">
            <figcaption>The live data through plants after all the devices were placed in IDA garden. </figcaption>

            <p>During the workshop, Sarah taught us step by step how to build our own Arduino radio with a partner. As someone had very little experience with Arduino, Sarah was extremely patient and made sure we were all progressing together. Although we might not build the exact same thing in the future, many components we learnt could be used as building blocks for other projects. This workshop provided me with inspiration and confidence to work with physical computing in my future projects. </p>


        </div>
    </div>









</div>
</app-blog>
`
})
export class Week30Component {}