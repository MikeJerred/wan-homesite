import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Technical exploration" [previous]="{ name: 'Field research method brainstorming', link: ['/blog', 34], extend: 350 }" [next]="{ name: 'Research plan', link: ['/blog', 36], extend: 200 }" >

<div class="col-12">

    <div class="row">
       
            <img style="width:100%" src="/assets/blog/fmp4/motor.jpg">
  
        
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
        
            <p>Some of my ideas for the final design might involve the use of physical computing. For example:</p>

            <h4>Idea one</h4>

            <p>Different threads hanging from the ceiling representing the data from the GSR device, as the sound environment changes the threads moves according to the emotional changes of participants in my research. I made a simple model to explain the idea to Antoine. </p>

            <img style="width:100%" src="/assets/blog/fmp4/sketch.jpg">
            <img style="width:100%" src="/assets/blog/fmp4/model.jpg">

            <h4>Idea two</h4>

            <p>A piece of fabric that listens to the sound of the surrounding environment and the shape react to the sounds. The shapes that are associated with emotions come from predefined database, when the input sound matches with a sound clip in the database. Both databases are built from user research.</p>

            <img style="width:100%" src="/assets/blog/fmp4/sketch2.jpg">

            <p>I started to explore the technical possibilities with Antoine. He made some suggestions of what components such an installation might need and made a rough plan for the installation. I started to learn some basics of Arduino such as working with potentiometer, motor and button.</p>

            <img style="width:100%" src="/assets/blog/fmp4/motor.gif">
            <img style="width:100%" src="/assets/blog/fmp4/motor2.gif">

            <h4>Reflection</h4>

            <p>The discovery with Arduino was a fun process, but it can be quite challenging and time consuming for me as a beginner. These two ideas are quite heavily dependent on multiple modules of technical equipment such as Arduino, motors, GSR and connecting them together to display data. As John rightly pointed out that it can be troublesome if something is not working during the exhibition the whole thing is redundant, I decided to move away from these ideas and focus on the research part. </p>
       
          

          

          

        </div>
    </div>








</div>
</app-blog>
`
})
export class Fmp4Component {}