import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Processing community day" duration="Date: 26th January, 2019"[previous]="{ name: 'Week 15 - Field research - Part 2', link: ['/blog', 16], extend: 320 }" [next]="{ name: 'Week 16 - Experience prototype', link: ['/blog', 18.2], extend: 300 }">

<div class="col-12">

    <div class="row justify-content-center">
        <div class="col-9">

            <img style="width:100%" src="/assets/blog/macro2/processing.jpg">

            <p>This Saturday, I went to the processing community day hosted at LCC. Prior to the day, I thought the event would be talking about how to use the Processing software and some work examples. However, all the talks were extremely relevant to user experience design and I learnt a lot from it.</p>


            <p>The speaker inspired me the most was Dr. Rebecca Friebnik. She is a senior Lecturer in the Department of Computing at Goldsmiths, University of London. She introduced us her open source software the Wekinator, a real time machine learning programme that allows users to build new interactive systems by demonstrating human actions and computer responses, instead of writing programming code. Wekinator receives inputs, processes them using computational functions called models, and those models produce outputs. During the talk, she created an example where she trained her web camera to play different sound as she moves to different positions.</p>

            <p>I was excited to try the software after I got home. I followed the walkthrough on the website and did some basic exercise. This software reminded me of the reading we had in the last term, Intelligence on tap: artificial intelligence as a new design material. By using supervised machine learning algorithms, Wekinator really encouraged designers and other creative professionals to use AI as a material for our design. It has made machine learning more accessible to designers and none coders. I now understand what Wekinator could do as a design material and will try to use it in my future design wherever appropriate.</p>

            <p>However, from a user’s perspective the interface is a little outdated and confusing. The Wekinator, the input and the outputs are in separate programmes which I didn’t understand in the beginning. The software is not self-explanatory without digging around for more instructions online. With some improvements it could be a brilliant tool that is as popular as other design tools on the market now.</p>

            <h3>Reference list</h3>

            <p>Friebnik, R. (2009) Overview: What is Wekinator?. Available at: http://www.wekinator.org/instructions/ (Accessed: 27 Jan 2019).</p>

        </div>
    </div>



   



</div>
</app-blog>
`
})
export class Week17Component2 {}