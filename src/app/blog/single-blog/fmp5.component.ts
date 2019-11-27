import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Experiment plan" [previous]="{ name: 'Technical exploration', link: ['/blog', 35], extend: 230 }" [next]="{ name: 'London Textile Fair & E-textile workshop', link: ['/blog', 37], extend: 380 }">

<div class="col-12">

    <div class="row">
       
            <img style="width:100%" src="/assets/blog/fmp5/hero.jpg">
  
        
    </div>

    <div class="row justify-content-center">
        <div class="col-xs-10 col-md-9">

            <h4>Research question</h4>

            <p>How do acoustic environment and wearable textiles combine to influence human emotions?</p>

            <h4>Material selection</h4>

            <p>I started to source the sound and the materials will be used in the experiment but not confirmed on the final selection. The plan is to have two fabrics under each of the major sources of textiles: animal, plant, mineral and synthetic.</p>

            <h4>Experiment schedule</h4>

            <ol>
            <li>Brief introduction to the project and what will happen in this workshop. Explain what the GSR device does and what data it collects.</li>
            <li>Ask for consent to record the session and biodata collection. </li>
            <li>Round 1 - Play each sound clip and ask question 1 - 4.</li>
            <li>Round 2 – Participants will be blindfolded to avoid the influence from vision, give them each fabric to touch and ask question 5 - 8.</li>
            <li>Round 3 - Play each sound clip against each fabric and ask question 9 - 13.</li>
            <li>At the end of the session, ask question 14 - 15.</li>
            </ol>

            <h4>Questions</h4>

            <ol>
            <li>How does the sound make you feel? Please think out loud as the sound plays. </li>
            <li>What words would you use to describe some emotions that you could attribute to this sound?  </li>
            <li>What are some adjectives you could use to describe the mood of this sound? </li>
            <li>Why does it make you feel like that?</li>
            <li>How does the fabric make you feel? Please think out loud. </li>
            <li>What words would you use to describe some emotions that you could attribute to this fabric? </li>
            <li>What are some adjectives you could use to describe the mood of this fabric?  </li>
            <li>Why does it make you feel like that?</li>
            <li>How does the combination of this sound and fabric make you feel? Please think out loud as the sound plays.</li>
            <li>What words would you use to describe some emotions that you could attribute to this combination? </li>
            <li>What are some adjectives you could use to describe the mood of this combination? </li>
            <li>Why does it make you feel like that?</li>
            <li>Does this sound and fabric match?</li>
            <li>How would you compare round 1 and round 3? Why?</li>
            <li>How would you compare round 2 and round 3? Why?</li>
            </ol>
       
            <h4>Duration</h4>
            <p>A rough estimation will be 2-3 hours. I will run a pilot session and reduce the duration from the feedback if needed.</p>

            <h4>Environment</h4>
            <p>The test will be carried out in a relatively quiet room where the temperature is pleasant, and the environment is peaceful. They should be ideally conducted in the same environment.</p>

            <h4>Notes</h4>
            <p>The environment/weather might influence on participants’ feeling towards fabrics. Eg. in hot weather, it might be more likely to have a negative feeling towards fur thank silk. </p>

            <h4>Hypothesis</h4>
            <ul>
            <li>Round 1, subtle emotions are described by users. GSR more obvious than user description. It was expected using hearing alone, people would associate noise to negative emotion and nature sound to positive. </li>
            <li>Round 2, less emotions are show in GSR and described by users.</li>
            <li>Round 3, it was expected that the emotion towards the same textile or sound is changed after combing both senses. </li>
            </ul>
            
          

          

          

        </div>
    </div>








</div>
</app-blog>
`
})
export class Fmp5Component {}