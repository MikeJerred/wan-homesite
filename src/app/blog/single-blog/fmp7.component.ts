import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Conducting research - pilot session" [previous]="{ name: 'London Textile Fair & E-textile workshop', link: ['/blog', 37], extend: 400 }" [next]="{ name: 'Olafur Eliasson exhibition', link: ['/blog', 39], extend: 260 }">

<div class="col-12">

    <div class="row">
       
            <img style="width:100%" src="/assets/blog/fmp7/pilot.jpg">
  
        
    </div>

    <div class="row justify-content-center">
        <div class="col-xs-10 col-md-9">

           

            <p>For the experiment I shortlisted 12 garment fabrics relatively familiar in everyday use with different haptic feeling, and 12 soundscapes from soundsurvey.org.uk of sounds people would encounter in an urban environment. To constrain the experiment duration within 2 hours, I reduced the samples to 8 fabrics and 8 sound for the pilot session.</p>

            <img style="width:100%" src="/assets/blog/fmp7/mapping.png">

            <p>The fabrics selection includes:</p>
            <ol>
            <li>Denim – 100% cotton (plant based)</li>
            <li>Cotton pile velvet – 100% cotton (plant based)</li>
            <li>Hessian – 100% hessian (plant based)</li>
            <li>98% viscose, 2% elastic (Synthetic)</li>
            <li>Nylon – 100% nylon (Synthetic)</li>
            <li>Fleece – 100% polyester (Synthetic)</li>
            <li>Wool – 100% lambwool (Synthetic)</li>
            <li>Crystal pleat lame – 70% metallic, 30% nylon (mineral based)</li>
            </ol>

            <p>The sound selection includes:</p>
            <ol>
            <li>Inside of a tube carriage fast speed. (self-recording)</li>
            <li>Escalator moving sound at Liverpool Street. (<a href="https://www.soundsurvey.org.uk/index.php/survey/soundmaps/more/97/35" target="blank">source</a>)</li>
            <li>Traffic on a busy main road (self-recording)</li>
            <li>Red Lion Square with street performance music in the background. (<a href="https://www.soundsurvey.org.uk/index.php/survey/soundmaps/more/97/35" target="blank">source</a>)</li>
            <li>Water trickles down the sides of the rectangular water feature at London Bridge, voices, traffic. (<a href="https://www.soundsurvey.org.uk/index.php/survey/soundmaps/more/97/35" target="blank">source</a>)</li>
            <li>Hubbub of voices as people congregate in the foyer. (<a href="https://www.soundsurvey.org.uk/index.php/survey/soundmaps/more/97/35" target="blank">source</a>)</li>
            <li>South bascule chamber Tower Bridge. (<a href="https://www.soundsurvey.org.uk/index.php/survey/soundmaps/more/97/35" target="blank">source</a>)</li>
            <li>Guys Hospital courtyard. (<a href="https://www.soundsurvey.org.uk/index.php/survey/soundmaps/more/97/35" target="blank">source</a>)</li>
            </ol>
            
            <img style="width:100%" src="/assets/blog/fmp7/gsr.jpg">

            <p>The pilot session was conducted in the university library based on the research plan I created previously. For the first time, it was a little tricky to keep a track of recording the GSR data, give different materials to the participant as well as asking questions. This should improve as I get more familiar with the process.</p>



            <h4>Adjustments</h4>

           <ul>
           <li>I will reduce the textile and fabric sample from 8 to 6 which should reduce the duration to 2 hours. The pilot session took around 3 hours which is too long for participants to keep focused. Also, it is very tiring and uncomfortable for participants to be blindfolded for a long period of time. </li>
           <li>Snowball sampling method will be adapted due to the duration of the experiment. It’s more likely to have a 2 hours session with someone I know than strangers.</li>
           <li>For some samples, the GSR device didn’t record the skin conductance level. It needs to be recollected. The device performance is not as stable as I expected.</li>
           <li>The sound clips last 1-2 minutes, the participant suggested that there’s no need to listen to the full track after the first time. To reduce the time, the sound will only be played for 30 seconds when experienced with each fabric. </li>
           </ul>
          

          

          

        </div>
    </div>








</div>
</app-blog>
`
})
export class Fmp7Component {}