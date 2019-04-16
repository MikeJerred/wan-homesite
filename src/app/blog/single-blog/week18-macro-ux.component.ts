import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 16 - Experience prototype" duration="Project duration: 14th January - 11th March, 2019" team="Team: Patrick Bull, Wendy Chen, Jordy Tam, Wan Li" [previous]="{ name: 'Processing community day', link: ['/blog', 17.2], extend: 270 }" [next]="{ name: 'Week 17 - Interim design presentation', link: ['/blog', 19.2], extend: 340 }">

<div class="col-12">

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro3/model.JPG">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro3/model2.png">
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">

            <p>Inspired by our research findings from last week, we decided to focus our prototype on how the macro environment and human sleep mutually affecting each other. Firstly, we need to define what is the macro environment we want to focus on and what kind of experience we want to create. One of the participants from our interview last week mentioned she felt her sleep was disturbed by the blood moon. We mention this idea to John, and he said this could be an interesting direction to pursue. We also liked the idea of thinking moon as our macro environment that affects human body and sleep, but we are lack in the knowledge of scientific proof if there’s a link between the two. Therefore, we decided to do more desk research on academic papers regarding to lunar cycle and human sleep.</p>

            <h4>Literature review</h4>

            <p>We managed to find some articles such as “Evidence that the Lunar Cycle Influences Human Sleep” and “Association between lunar phase and sleep characteristics”, the results suggest that sleep characteristics may be associated with the full moon. Experiments in both studies were conducted using a small sample of participants, whereas another article “Bad sleep? Don't blame the moon! A population-based study” analysed data from 2125 individuals and suggests that there’s no difference between lunar phases regarding subjective sleep quality. Through our research, we found a link between lunar cycle and menstrual cycle, and a link between menstrual cycle and sleep. Therefore, we decided to narrow our target down to women who are going through menstrual cycles that having difficulty to sleep. We want to use the moon as the macro environment that affects the individual sleep. </p>

            <h4>Interviews</h4>

            <p>We conducted 5 short interviews just to get a better idea of where to potentially push this research topic and found some obvious findings such as that painkillers and comfortable clothing are big factors in helping sleep during menstruation, but what we did find interesting was that the women we asked said that they didn’t find the idea of sharing their experience with other women interesting or helpful as to quote one of the participants “we are all in the same bloody boat”. However, they found the idea of sharing with their male friends or significant others far more impactful, to get them to understand how drastically it does affect not just sleeping but a lot of avenues of life.</p>

            <h4>Experience prototype</h4>


        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro3/sketch1.jpg">
            <figcaption>Our initial sketches attempted to create a feedback loop (Dubberly and Pangaro, 2015).</figcaption>
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro3/sketch2.jpeg">
            <figcaption>The sketch indicates how the glass installation could look like.</figcaption>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">

            <p>In the meantime, we had another thought in relation to menstruation. In general, a proportion of the male in our society are still ashamed or disgusted by talking about female menstrual cycles or anything related. This term is about macro UX, so we wanted to establish the link between individual sleep and the wider environment, the society view on female menstrual cycle related topics. Therefore, we wanted to create an experience to demonstrate how the macro environment (lunar cycle) modulates female sleep during menstruation, how bad sleep affects their lives during menstruation, and potentially change the still prevalent stigma about premenstrual and menstrual women and reduce the sexism and negative attitudes towards women.</p>

            <img style="width:100%" src="/assets/blog/macro3/model5.jpg">
            <figcaption>A quick expirement on how our design could be materialsed as a model.</figcaption>

            <p>After a few iterations we decided to create a glass installation that sends a signal to the public when menstruating female are having a hard time to fall asleep. In the top right sketch, it shows the installation has a sculpture of a sleeping women on top of the glass container. The container is hollow inside so viewers can walk inside to see the sculpture from underneath. The container will release water on the outside when the connected menstruating female can’t fall asleep. The viewers can interact with the connected female by touching the walls, the area changes colour when a touch is sensed, and it sends out a support signal to the menstruating female through an object. We wanted to create something that is almost like a feedback loop between the viewers and the menstruating female, so that others in the world understand their pain and frustration from bad menstrual sleep, and they can feel support from the viewers.</p>

        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro3/model3.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro3/model4.jpg">
        </div>
    </div>


    <div class="row justify-content-center">
        <div class="col-9">

            <p>It took us a while to figure out how to achieve our vision through a model or experience prototyping. Because we couldn’t not physically build a glass container that allows people to walk through within 1 week, it’s also too much work to build the real thing for a prototype. However, it might be hard for the audience to understand if the prototype is too far from our vision. We decided to use plastic sheets instead of glass, it is also transparent which allows the viewer to see the light change when they touch with the wall but much easier to work with. We used a big piece of plastic sheet that could cover people inside to create the feeling of people walking inside of the glass container. We also need an object on the menstruating female side to send the support signal. Because of the connection between lunar cycle and menstruation, we created a moon pillow that lights up when someone touches the wall. We created a role play script which was the instrument that helped us to put all the different parts together in a narrative for the audience to understand.</p>

        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro3/japan1.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro3/japan2.jpg">
        </div>
    </div>


    <div class="row justify-content-center">
        <div class="col-9">
            <h4>Prototype Japan</h4>
            
            <p>During this week, we also went to the Prototype Japan exhibition to get some inspiration. Although there wasn’t anything we could applied directly in this week, it was fascinating to learn how they experimented with different materials and techniques. Each piece is almost a piece of artwork itself.</p>


            <h4>Reflection-in-action</h4>

            <p>The feedback for our presentation was that the connection between menstruation and lunar cycle is quite controversial. Some women are strong believers whereas others don’t. Menstrual sleep is a strong concept on its own. Therefore, our designs were forced to connect these subjects together and hard for the audience to understand the main message. The comment is very constructive because our design is mostly based on literature review, it had very little interviews and observation to support our assumptions. Going forward, we are planning to conduct more field research.</p>

            <h4>Collaborative and / or Independent Professional Working</h4>
            <p>Patrick and I did most of the literature review, Jordy and Wendy mostly worked on the model making. I created on the role play script and the presentation.</p>

            <h3>Reference list</h3>

            <p>Cajochen, C., Altanay-Ekici, S., Münch, M., Frey, S., Knoblauch, V. and Wirz-Justice, A., 2013. Evidence that the lunar cycle influences human sleep. Current biology, 23(15), pp.1485-1488.</p>

            <p>Turányi, C.Z., Rónai, K.Z., Zoller, R., Véber, O., Czira, M.E., Újszászi, Á., László, G., Szentkirályi, A., Dunai, A., Lindner, A. and Szőcs, J.L., 2014. Association between lunar phase and sleep characteristics. Sleep medicine, 15(11), pp.1411-1416.</p>

            <p>Haba-Rubio, J., Marques-Vidal, P., Tobback, N., Andries, D., Preisig, M., Kuehner, C., Vollenweider, P., Waeber, G., Luca, G., Tafti, M. and Heinzer, R., 2015. Bad sleep? Don't blame the moon! A population-based study. Sleep medicine, 16(11), pp.1321-1326.</p>

            
    </div>
</div>



</div>
</app-blog>
`
})
export class Week18Component2 {}