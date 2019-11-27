import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Ideation, prototyping & testing" [previous]="{ name: 'Summarise findings', link: ['/blog', 41], extend: 210 }" [next]="{ name: 'Co-design workshop - part 1', link: ['/blog', 43], extend: 290 }">

<div class="col-12">

    <div class="row">
       
            <img style="width:100%" src="/assets/blog/fmp11/mor.jpg">
  
        
    </div>

    <div class="row justify-content-center">
        <div class="col-xs-10 col-md-9">

           

            <p>After the research stage, I started to develop ideas for the final design. The ideas could be summarized in a few categories. The first category of concepts was trying to visualize the research findings in some ways. For example, many stimuli combinations evoked memories based mental images. </p>

            <h4>Ideation</h4>

            <p><b>Idea 1</b> - The concept below tried to use the objects or sensory cues the participants described in their mental image to tell a story of their emotion. At the end, visitors could experience the sound and textile combination that evoked this specific emotion for this participant. </p>
            <p><b>Limitations</b> -The main problem with this concept is that the same emotion is not guaranteed to be reproduced through the same triggers, as the perception of such triggers are highly subjective to personal experience. If the viewers don't have the same experience with the objects in the same way as the participant did, they cannot feel the same emotion.</p>            

            <img style="width:100%" src="/assets/blog/fmp11/sketch1.jpg">


            <p>The second category was trying to apply the emotional response to sound and textile on some practical application. </p>
            <p><b>Idea 2</b> - the top sketch below was trying to integrate sound to clothing to provide an alternative way to select what to wear. Different clothes will have different sound attached to it which represents the emotion of that piece of cloth. </p>
            <p><b>Limitations</b> - it’s not practical to have such a tag on every piece of cloth. </p>
            

            <img style="width:100%" src="/assets/blog/fmp11/sketch2.jpg">
            

            <p>The last category was to use the combination of sound and textile to create a congruent cross-modal experience. As I learnt from previous ideas that emotions cannot be reproduced due to personal experience, I tried to find a scenario which most people would’ve had a similar experience with. </p>
            <p><b>Idea 3</b> - the bottom sketch below was trying to use the sound and textile to mimic the experience of going to a dentist. </p>
            <p><b>Limitations</b> - it was fairly easy to source dental sound, but there isn’t a lot of textile involved in such context. Therefore, I tried to find another similar scenario which involves both sound and textile. </p>
            

            <img style="width:100%" src="/assets/blog/fmp11/sketch3.jpg">
            

            <p><b>Idea 4</b> - after my tutorial with Emily, she suggested a changing room set up which both sound and textile exists naturally in this scenario. I planned to create an installation that looks like a changing room from the outside. Once they step inside, it would be pitch black. They will be given different textile to touch which triggers different sound. </p>
            <p><b>Limitations</b> - I planned to keep the experience in dark because most participants from the experiment said that being blindfolded allowed them focus on sound and touch. However, it’s hard to get people to change or know where to touch if it’s dark. </p>
            <p><b>Solutions</b> - I thought of making a jacket that has 4 pockets with different fabric inside each pocket. Sound will be triggered when the pocket is touched. The jacket solved the problem of changing in the dark, however, it created a new problem. If the user touches one pocket and quickly jump to the next one, the sound will be disrupted.  </p>

            <img style="width:100%" src="/assets/blog/fmp11/sketch4.jpg">

            <h4>Prototyping & testing</h4>

            <p>I decided to make a rough prototype of this idea in small scale using a shoe box and a soundtrack. I created a soundtrack using urban acoustic elements, I used 3 different fabrics for the box interior. The soundtrack below was tested together with the fabric box as shown in the images below. </p>

            <audio controls>
                <source  src="/assets/blog/fmp11/changingroom.mp3" type="audio/mpeg">
            </audio>

            <carousel [noPause]="false" [interval]="0">
            <slide>
                <img src="/assets/blog/fmp11/box.jpg" alt="first slide" style="display: block; width: 100%;">
            </slide>

            <slide>
            <img src="/assets/blog/fmp11/box2.jpg" alt="first slide" style="display: block; width: 100%;">
            </slide>

            <slide>
            <img src="/assets/blog/fmp11/box3.jpg" alt="first slide" style="display: block; width: 100%;">
            </slide>

            <slide>
            <img src="/assets/blog/fmp11/box4.jpg" alt="first slide" style="display: block; width: 100%;">
            </slide>
            
            <slide>
            <img src="/assets/blog/fmp11/box5.jpg" alt="first slide" style="display: block; width: 100%;">
            </slide>

            </carousel>

            <p>The main feedbacks are:</p>
            <ol>
            <li>The soundtrack is a little too long, it’s still going on after they touched the whole box.</li>
            <li>It would be nice if the box is much bigger like a room for people to explore different texture inside.</li>
            <li>A similar finding to previous research, people automatically expected the sound and the textures in the box to create a synchronised experience.</li>
            </ol>

            <h4>Collaboration</h4>

            <p>After the prototype testing, I’m still uncertain on the design direction. The problem with all the concepts so far is that there’s a lack of framing. The research findings are defused and abstract which needs to be grounded in an appropriate context. During literature review, I came across areas such as early age learning, dementia or autism which could benefit from multisensory simulation or activities. However, it would require more time to research in those specific areas which would diverge from my current subject.</p>

            <p>After a conversation with Tiffany and Yae Jin, I realised that they want to use multisensory elements to enhance the display of photography. I was inspired by the book The multisensory museum during literature review which was about how museums and galleries should utilise all sensory modals to create an emotional connection with visitors. Therefore, I felt like this would be a great opportunity for me to apply my research in a practical context. I explained to them about my research and findings and they thought it had some interesting insights. Therefore, the three of us started to work as a team for the final design.</p>

            <img style="width:100%" src="/assets/blog/fmp11/collaboration.jpeg">

          

        </div>
    </div>








</div>
</app-blog>
`
})
export class Fmp11Component {}