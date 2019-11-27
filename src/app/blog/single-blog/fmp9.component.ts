import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Experiments & analysis" [previous]="{ name: 'Olafur Eliasson exhibition', link: ['/blog', 39], extend: 260 }" [next]="{ name: 'Summarise findings', link: ['/blog', 41], extend: 210 }">

<div class="col-12">

    <div class="row">
       
            <img style="width:100%" src="/assets/blog/fmp9/participants.jpg">
  
        
    </div>

    <div class="row justify-content-center">
        <div class="col-xs-10 col-md-9">

           

            <p>It took me roughly one week to finish the experiment sessions with 8 participants. Due to the length of the session is 2 hours each, I decided to apply snowball sampling method to recruit participants. I believe if participants are sampled from people I know, it would be more likely for them to spend 2 hours for the experiment. There were 8 participants in total, 2 are LCC students and the rest are working professionals. The age range was between 23 to 61, 5 female and 3 males.</p>


            <p>I followed the <a href="/blog/36">research schedule</a> in each session in order to reduce bias in the result. Each session was video recorded and the participant’s GSR details were stored corresponding to each stimulus.</p>
            

            <p>Below is the process of how the raw data collected from the experiments were analysed and synthesized.</p>

            <p>1.	I transcribed all interviews and into one spreadsheet, each tab contains the response from one participant corresponds to each sound and fabric combination. </p>
            
            <img style="width:100%" src="/assets/blog/fmp9/mapping.png">

            <p>2.	After reading through the transcriptions, I used colour coding to simplify the data visually for the ease of analysis. The research question is how does sound and textile combined influence emotion, the focus is on “how” not “what” emotions. Therefore, emotional response was categorised into three main types which is positive, neutral and negative. In the graphs below, pink represents a positive emotion was reported, grey represents neutral and blue represents negative emotion, gradient represents change of emotion reported either from positive to negative or the other way around. For responses evoked a memory, there’s a little icon attached to the coloured block. </p>


            <carousel [noPause]="false" [interval]="0">
            <slide>
                <img src="/assets/blog/fmp9/P1.jpg" alt="first slide" style="display: block; width: 100%;">
                <div class="carousel-caption">Participant 1</div>
            </slide>

            <slide>
                <img src="/assets/blog/fmp9/P2.jpg" alt="first slide" style="display: block; width: 100%;">
                <div class="carousel-caption">Participant 2</div>
            </slide>

            <slide>
                <img src="/assets/blog/fmp9/P3.jpg" alt="first slide" style="display: block; width: 100%;">
                <div class="carousel-caption">Participant 3</div>
            </slide>

            <slide>
            <img src="/assets/blog/fmp9/P4.jpg" alt="first slide" style="display: block; width: 100%;">
            <div class="carousel-caption">Participant 4</div>
            </slide>

            <slide>
                <img src="/assets/blog/fmp9/P5.jpg" alt="first slide" style="display: block; width: 100%;">
                <div class="carousel-caption">Participant 5</div>
            </slide>

            <slide>
                <img src="/assets/blog/fmp9/P6.jpg" alt="first slide" style="display: block; width: 100%;">
                <div class="carousel-caption">Participant 6</div>
            </slide>

            <slide>
            <img src="/assets/blog/fmp9/P7.jpg" alt="first slide" style="display: block; width: 100%;">
            <div class="carousel-caption">Participant 7</div>
            </slide>

            <slide>
                <img src="/assets/blog/fmp9/P8.jpg" alt="first slide" style="display: block; width: 100%;">
                <div class="carousel-caption">Participant 8</div>
            </slide>
        </carousel>


        <p>4.	Data visualization from the previous step simplified the raw data into more manageable chunks. It was a steppingstone to understand the relationship between each key element. I used concept mapping to externalize my thought process with the aim of understanding how sound and textile stimuli influenced emotion.</p>

        <img style="width:100%" src="/assets/blog/fmp9/concept mapping.png">

        <p>5.	I exported raw GSR data from Shimmer software, a software developer helped me to visualize the raw data using D3.js. The GSR data was not used as the material for the analysis as the connection wasn’t always stable.</p>

        <carousel [noPause]="false" [interval]="0">

        <slide>
        
        <img src="/assets/blog/fmp9/shimmer.jpg" alt="first slide" style="display: block; width: 100%;">
        <figcaption>The device.</figcaption>
      
        </slide>
        <slide>
        
            <img src="/assets/blog/fmp9/shimmer.png" alt="first slide" style="display: block; width: 100%;">
            <figcaption>Raw data exported in csv file from the GSR device Shimmer. This was then visualised using D3.js.</figcaption>
          
        </slide>
        <slide>
            <img src="/assets/blog/fmp9/shimmer2.png" alt="first slide" style="display: block; width: 100%;">
            <figcaption>For this participant, the device worked properly. The blue line represents the skin conductance and pink line represents heart rate. </figcaption>
           
        </slide>
        <slide>
        <img src="/assets/blog/fmp9/shimmer3.png" alt="first slide" style="display: block; width: 100%;">
        <figcaption>For this participant, the device didn't worked properly. The blue line represents the skin conductance is always flat which mean the sensor wasn't working properly. The heart rate was collected properly because this sensor was clipped on the ear, whereas the skin conductance was measured through fingers.</figcaption>
       
    </slide>



        </carousel>
          

        </div>
    </div>








</div>
</app-blog>
`
})
export class Fmp9Component {}