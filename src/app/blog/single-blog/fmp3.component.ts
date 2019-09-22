import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Field research method brainstorming" [previous]="{ name: 'Technical research & RCA degree show', link: ['/blog', 33], extend: 370 }" [next]="{ name: 'Technical exploration', link: ['/blog', 35], extend: 230 }">

<div class="col-12">

    <div class="row">
       
            <img style="width:100%" src="/assets/blog/fmp3/ring2.jpg">
  
        
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
        
            <p>The tools you use forms the result you get. I started to explore how to conduct the research and what artefacts should be used during this process.</p>

            <h4>Initial idea</h4>

            <p>Ask participants to record sound 3 times during one day of their daily life, each recording last roughly 10min. It could be any sound. Participants need to wear a GSR device when recording the sound.</p>

            <p>They will be invited for a workshop afterwards to create a representation of one recording of their choice using textiles provided. They will be asked to describe the content and context of the sound clip and what was their emotion at the time. How and why they chose the way they did to represent that soundscape.</p>

            <p>In the class, I designed a research artefact to support this idea. I imagined a sensor earring that collects GSR and other biofeedback that is responsive to the surrounding sound, the acoustic environment will be recorded automatically when the biofeedback indicates emotional change.</p>

            <img style="width:100%" src="/assets/blog/fmp3/ring.jpg">

            <h4>Reflection</h4>

            <p>After some consideration, I decided not to proceed with this approach due to a few concerns:</p>
          <ul>
          <li>This idea only took sound into account not textile.</li> 
          <li>Ethical issues related to auto sound recording of participants daily life.</li>
          <li>Creating such a device in reality might be technically challenging and time consuming.</li>
          </ul>
          

          

          

        </div>
    </div>








</div>
</app-blog>
`
})
export class Fmp3Component {}