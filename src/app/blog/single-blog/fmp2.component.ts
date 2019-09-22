import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Technical research & RCA degree show" [previous]="{ name: 'Visiting London Textile Museum', link: ['/blog', 32], extend: 320 }" [next]="{ name: 'Field research method brainstorming', link: ['/blog', 34], extend: 350 }">

<div class="col-12">

    <div class="row">
       
            <img style="width:100%" src="/assets/blog/fmp2/rca3.jpg">
  
        
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
        
            <p>I spoke to Antoine about the technical possibilities of building the design outcome, which is using the movement of strings to represent the changes in emotion when sound changes. He said it is achievable using Arduino and some motors. I also spoke with Eva, she suggested I need to clarify what are the relationship between the three elements that can be easily discovered. </p>

            <p>After some consideration, I decided to focus on how the combination of city sounds and textile fabrics influence human emotion. However, I’m uncertain if obvious emotional can be reported or recognised by the participants through these two stimuli. Inspired by Nold’s Greenwich emotion map using a GSR device with geo tagging functionality to get an idea of people’s emotional state, I did some research on GSR devices which might assist me to detect subtle emotional changes if nothing was reported by the participants. I got in touch with a company based in Ireland called Shimmer who provides a range of GSR products. I’m grateful that they agreed to loan me the product <a href="https://www.shimmersensing.com/products/shimmer3-wireless-gsr-sensor#features-tab" target=”_blank”>Shimmer 3 GSR+ Unit</a>. This product provides real-time physiological data collection including GSR signals, EEG and heartrate and streaming to a host PC for real-time display and storage.</p>


            <img style="width:100%" src="/assets/blog/fmp2/gsr.png">

            <h4>RCA degree show</h4>

            <p> We visited the degree show at RCA and here are some projects that relates to sound or textile which might serve some inspirations for my work later.</p>

            <img style="width:100%" src="/assets/blog/fmp2/rca1.jpg">
            <img style="width:100%" src="/assets/blog/fmp2/rca2.jpg">
            <img style="width:100%" src="/assets/blog/fmp2/rca5.jpg">
            <img style="width:100%" src="/assets/blog/fmp2/rca4.jpg">

            <h4>Project timeline</h4>
            <p>I also started to work on my timeline shown below</p>
            <img style="width:100%" src="/assets/blog/fmp2/timeline.png">
          

          

             <h3>Reference list</h3>
       
            <p>Nold, C., 2009. Emotional cartography: Technologies of the self. Softhook.</p>

        </div>
    </div>








</div>
</app-blog>
`
})
export class Fmp2Component {}