import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Summarise findings" [previous]="{ name: 'Experiments & analysis', link: ['/blog', 40], extend: 260 }" [next]="{ name: 'Ideation, prototyping & testing', link: ['/blog', 42], extend: 300 }">

<div class="col-12">

    <div class="row">
       
            <img style="width:100%" src="/assets/blog/fmp10/hero.jpg">
  
        
    </div>

    <div class="row justify-content-center">
        <div class="col-xs-10 col-md-9">

           

            <p>After analysis stage, I divided the main findings in three sections according to the rounds in the experiment: <b>round 1</b> – fabric alone no sound; <b>round 2</b> – sound alone no fabric; <b>round 3</b> - the combination of sound and fabric.</p>

            <h4>Round 1 – Fabric alone no sound</h4>
            <br>
            <div class="container table">
                <div class="row">
                    <div class="col-4"><b>Findings</b></div>
                    <div class="col-4"><b>Examples</b></div>
                    <div class="col-4"><b>Quotes</b></div>
                </div>
                <div class="row">
                    <div class="col-4">Fabrics triggered more object-related memories, but they are less related emotion than sound alone.</div>
                    <div class="col-4">Fabric No. 3 Hessian reminded 6 participants of carrier bag.</div>
                    <div class="col-4"><i>“It reminds me of the big bags you carry potato and vegies, recycling bags strong and solid, you are not gonna tear them easily, brown bags.”</i></div>
                </div>

                <div class="row">
                    <div class="col-4">Most participants expressed a tendency to associate soft fabrics that has some weight with pleasant and quality. </div>
                    <div class="col-4">5 participants associated fabric No.2 Velvet with comfy and pleasant feelings.</div>
                    <div class="col-4"><i>“It feels soft and comfortable, the touch is relaxing. It has a contrast if you stroke it in the other direction. The finer the material the more expensive it feels.”</i></div>
                </div>

                <div class="row">
                    <div class="col-4">Rough and spiky or flimsy and light-weight fabrics are associated with artificial and low quality.</div>
                    <div class="col-4">3 participants associated fabric No. 5 with cheap and unpleasant feelings.</div>
                    <div class="col-4"><i>“It's light and very thin, it's not very smooth. If you have it as a piece of clothing it will be very itchy and not comfortable. Like a low-quality table cover, something you can clean easily but very thin to be a table cover, feel a bit plasticky.”</i></div>
                </div>

                <div class="row">
                    <div class="col-4">Participants generally find it harder to describe emotional response from fabrics alone. </div>
                    <div class="col-4">Participant 5 struggled to report emotional response to Fabric No. 1 Denim. </div>
                    <div class="col-4"><i>“It's weird trying to explain something I touch it's just not something I do.”</i></div>
                </div>
            </div>

            <h4>Round 2 – Sound alone no fabric</h4>
            <br>
            <div class="container table">
                <div class="row">
                    <div class="col-4"><b>Findings</b></div>
                    <div class="col-4"><b>Examples</b></div>
                    <div class="col-4"><b>Quotes</b></div>
                </div>
                <div class="row">
                    <div class="col-4">Participants perceived spatial and object-related information from sound alone.</div>
                    <div class="col-4">5 participants described Sound No. 1 On the tube as a tube or train station experience.</div>
                    <div class="col-4"><i>“It sounds like trains, traffics and stuff. It's going faster. The engines are very loud, people talking but can't hear what they are saying.”</i></div>
                </div>

                <div class="row">
                    <div class="col-4">Unpredictable frequency, fast pace and high pitch sounds generally evokes a negative emotion, due to the perception of an unsafe environment. </div>
                    <div class="col-4">3 participants reported strong negative emotion towards Sound No. 2 Tube escalator, 2 participants had mixed feeling towards it.</div>
                    <div class="col-4"><i>“Lots of space around and some kind of barrier or gates opening and closing, annoying gates, put some oil! This is also oppressing when you listening to the noise you are waiting for the next one. Like, shut up! I can imagine one of those turning gates, metallic.”</i></div>
                </div>

                <div class="row">
                    <div class="col-4">Most participants reported more vivid mental imagery from sound than fabric alone.</div>
                    <div class="col-4">Participant 2 described a very detailed mental image from Sound No.4 Street performance.</div>
                    <div class="col-4"><i>“So, before the helicopters I would say it's in Amalfi, it's a place in Italy for posh holidays. I've never been there but I've seen photos of it and wanted to go. So little cobbled streets, nice summer heat in the evening, fresco dinning, somewhere in the south of Italy. Then the helicopters came, so I'm thinking still south of Italy but maybe somewhere populated like Naples, so that's a bit more intense.”</i></div>
                </div>

                <div class="row">
                    <div class="col-4">Sound evoked more vivid mental image which led to more natural emotional response.</div>
                    <div class="col-4">Participant 7 reported negative emotion as describing the mental image generated from Sound No.5 Street water feature.</div>
                    <div class="col-4"><i>“This one makes me feel quite scary and anxious, because it feels like I'm amongst the water and all the sounds feel really fast even the water.”</i></div>
                </div>
            </div>
          

            <h4>Round 3 – Sound and fabric</h4>
            <br>
            <div class="container table">
                <div class="row">
                    <div class="col-4"><b>Findings</b></div>
                    <div class="col-4"><b>Examples</b></div>
                    <div class="col-4"><b>Quotes</b></div>
                </div>
                <div class="row">
                    <div class="col-4">All participants automatically undertook a prediction and experience matching exercise when encountered with both stimuli simultaneously. They expected the sound and fabric to match in the sense that the sound providing an overall spatial environment and the fabric should be placed within that context. If their experience of both stimuli meets this expectation, participants’ emotion can be influenced by the mental image they constructed. If the prediction fails to meet the expectation, participants felt annoyance or confusion because no logical image of the combination can be generated in their mind.</div>
                    <div class="col-4">For participant 2, Sound No. 6 Crowded foyer set the spatial context to be in a factory canteen, and Fabric No. 5 was placed within that context which evoked a negative emotion. 
                    <br>
                    <br>
                    For participant 5, Sound No.2 busy road traffic and Fabric No. 6 pleated lame failed to create a coherent mental image. 
                    
                    </div>
                    <div class="col-4"><i>“Feels like hair nets in a fish factory, err, I don't like it, (jumped away and stopped touching the fabric) it smells like fish all day and your hands smell like fish when you go home. It is the same canteen, but the fabric makes me feel like something slightly different to the other ones. And the smell of fish made me feel a bit sick, I can smell it.”</i>
                    <br>
                    <br>
                    <i>“I can't really make any association with what I touch and what I hear, I don't have much to say, there's no link in my mind. When I can’t create a link, I feel lost, I just keep thinking...”</i></div>
                </div>

                <div class="row">
                    <div class="col-4">In the absence of vision, some combinations of sound and fabric evoked a blend of memories and imagination.</div>
                    <div class="col-4">For participant 7, the combination of sound No. 1 and fabric No. 1 generated a mental image that blends memories with imagination.</div>
                    <div class="col-4"><i>“It makes me think of a really luxurious train. It's like merging my gran's sofa with a train. I imagined all the train seats are like my gran's furniture but stretched right out. It's funny because it's quite weird, I imaged a London tube with my gran's fancy sofa stretched right along. It's like the memory of the sofa merged with the sound.”</i></div>
                </div>

                <div class="row">
                    <div class="col-4">In most cases, sound has a stronger influence on the perception of fabric than the other way around.</div>
                    <div class="col-4">Participant 1 described how sound influenced more of the mental image, the combination was sound No. 5 Street water feature and fabric No. 3 Hessian.</div>
                    <div class="col-4"><i>“At the start, I feel like this is more like a medieval time and I got like some kind of sack or something, and it's kind of changed because you hear bikes and cars and stuff, I can't really think of how to make that sound in this picture, it's definitely traffic. Then my image went back to the city like the previous one, and it didn't have much to do with the fabric. So, the fabric was with the sound at the start, and it kind of doesn't make sense anymore, and then the sound influences the picture more.”</i></div>
                </div>

                <div class="row">
                    <div class="col-4">When participants experienced negative emotion from the sound, they often tried to use the fabric reduce or change the negative emotion. Rough or frictional fabrics helps to alter the negative emotion by acting as a distraction, whereas soft fabrics dampens the negative emotion.</div>
                    <div class="col-4">Participant 4, sound No. 2 Tube escalator and fabric No. 1 Denim.</div>
                    <div class="col-4"><i>“By playing with the material it kind of takes your mind away from the sound that was annoying you. You are occupied by something, so you don't notice the squeaking sound. Probably relaxed me twice as much as before. By playing with the material I was thinking of the material instead of thinking about when the sound is going to appear again.”</i></div>
                </div>

                <div class="row">
                <div class="col-4">2 participants compared or referenced emotions from previous rounds. They argued that if different sounds were played against each fabric, the result of how they feel might be different as they might rely less on the short-term memory.</div>
                <div class="col-4">Participant 1, sound No. 5 Street water feature and fabric No. 6 Pleated lame.</div>
                <div class="col-4"><i>“I think it's just I got this image and you played the sound again just bring me back to the same image. Nothing really changed from it. I think it will be different if you played this sound with the fabric first, it's because I already had that image in my head, and then I just remembered that image.”</i></div>
                </div>

                <div class="row">
                    <div class="col-4">Sometimes participants stimulated by the immediate auditory and haptic input, but their emotional state is influenced more by what those signals represent in real life and how they feel within that context. In other words, both sound and fabric can be symbolic representations which acts as triggers of certain emotional memory, events or people.</div>
                    <div class="col-4">For participant 7, sound No. 2 Tube escalator and fabric No.2 evoked a negative emotional response. The immediate tactile feeling of velvet is soft, but together with the sound it triggered an unpleasant memory, thus the emotion reported was negative despite the immediate feeling.</div>
                    <div class="col-4"><i>“This gives me a very definite picture of a train station where my mum lives in Preston, and it's like a glass room they haven't changed the seats in there since the 40s or something, and people been smoking in there all the time and it's really gross. The fabric reminded me of the smell there, it's like smooth and old, you know the smell of some furniture that's been around someone who's been smoking years and years and years, I think I just don't like this fabric. Every time when I feel it just makes me feel horrible, it's really sleazy and dirty.”</i></div>
                </div>
            </div>
        </div>
    </div>








</div>
</app-blog>
`
})
export class Fmp10Component {}