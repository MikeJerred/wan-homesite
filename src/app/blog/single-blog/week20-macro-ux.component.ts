import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 18 - Experience mapping" duration="Project duration: 14th January - 11th March, 2019" team="Team: Patrick Bull, Wendy Chen, Jordy Tam, Wan Li" [previous]="{ name: 'Week 17 - Interim design presentation', link: ['/blog', 19.2], extend: 350 }" [next]="{ name: 'Week 19 - Interaction design', link: ['/blog', 21.2], extend: 290 }">

<div class="col-12">

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro5/game1.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro5/game2.jpg">
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">

            <h4>Exhibition: Design/Play/Disrupt</h4>

            <p>Before we started the experience mapping, we visited the exhibition Videogames: Design/Play/Disrupt at V&A museum. I didn’t used to like video games as much, but I began to appreciate its beauty after playing a few that were extremely excellent at storytelling. The exhibition has proved to me the amount of thought and engineering was put behind each well-crafted game. Successful games often provide a great user experience, where it engages both the centre and the periphery of our attention.</p>


            <img style="width:100%" src="/assets/blog/macro5/ethics.jpg">

            <h4>Ethics workshop</h4>

            <p>Patrick recently went to a lecture at the design museum and in the final workshop they were asked many questions when thinking about the products and services we create and how it allows us to delve deeper into what or who we’re designing for. Based on some of these cards, we kept these questions in mind while we started to map out our user journeys.</p>

        </div>
    </div>


    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro5/map1.JPG">
            <figcaption>We summarised all the key points from interview transcriptions and sleep dairies to form the experience map of menstrual sleep.</figcaption>
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro5/map2.JPG">
            <figcaption>Sketch of the user journey map.</figcaption>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">

            <h4>User experience map vs user journey map</h4>

            <p>Initially, we were a little confused between these two terms. Most of the online resources described them with little or no difference. Kalbach described user experience map as how users generally experience when performing a task. Eg, how do I buy coffee in a shop. User journey map describes how users experience the same thing through a specific brand or service. Eg. how do I buy coffee in a Starbucks shop.</p>

            <h4>User experience map</h4>

            <p>We discussed a few rough ideas of what the final design could be, hoping a vision of where we were going would help us to work backwards to how to get there. Amongst the different ideas we had were two main goals that were the driving force, also in directly response to V3’s feedback. Firstly, we wanted increasing the awareness towards a male audience of how disruptive sleep during the menstrual cycle can be not just on a person's night but the knock-on effect to everything else. Secondly, there should be some sort of product that may help with menstrual sleep issues.</p>


                <img src="/assets/blog/macro5/experience1.png" alt="first slide" style="display: block; width: 100%;">      

                <img src="/assets/blog/macro5/experience2.png" alt="first slide" style="display: block; width: 100%;">


            <p>After understanding our goal, it seemed clear to us that we need to create an experience map of menstrual sleep and through this we can identify design opportunities. We created a monthly experience map of menstruation sleep from pre to post using the findings from previous interviews, sleep diaries and reviews. Using categories such as anxiety level, physical experience, behaviour & self-perception and positive, neutral and negative feelings which we felt were important categorises in how we wanted our experience to feel and not to feel for the people intending to use our experience.</p>

            <p>We had a few ideas that are more interesting to explore.</p>

            <carousel [noPause]="false" [interval]="0">

            <slide>
                <img src="/assets/blog/macro5/sketch1.jpg" alt="first slide" style="display: block; width: 100%;">
                <div class="carousel-caption">A series of products and instructions as a menstrual sleep experience toolkit to let people understand what someone on their period have to go through when they try to sleep.</div>
            </slide>
            <slide>
                <img src="/assets/blog/macro5/sketch2.png" alt="first slide" style="display: block; width: 100%;">
                <div class="carousel-caption">An app to go along with the Dreem to assist with the person’s menstrual sleep.</div>
            </slide>

            <slide>
            <img src="/assets/blog/macro5/sketch3.png" alt="first slide" style="display: block; width: 100%;">
            <div class="carousel-caption">A maze/exhibition piece as a way of highlighting the issue but aimed more towards men, an awareness kit that allows two people to share the experience of menstrual sleep.</div>
            </slide>
      
        </carousel>



        </div>
    </div>



    <div class="row justify-content-center">
        <div class="col-9">

            <h4>User journey map</h4>

            <img style="width:100%" src="/assets/blog/macro5/journey2.png">
            <figcaption>User journey map for the maze exhibition.</figcaption>

            <p>Out of these ideas we took 2 of them forward into making a cohesive journey map. For the maze idea we started by thinking of how the experience can be found, the incentives for going, the feelings they might have while getting to the experience, how waiting for the experience to begin may affect them, we want the experience itself to be an exploration and a new point of understanding and discussion between people, answering questions and having closed environments within it to create a sense of empathy for how menstruation affects us when we try to sleep.</p>

            <img style="width:100%" src="/assets/blog/macro5/journey1.png">
            <figcaption>User journey map for app interface integrated with Dreem.</figcaption>

            <p>The journey map for the app interface was created based on the opportunities we spotted from the experience map. For instance, many females expressed a high level of anxiety during sleep at the pre-menstrual period due to the paranoia of leaking. Adding a period calendar and pre-menstruation relaxation program would allow Dreem coach to support menstrual sleep within the current app structure.</p>

          
        </div>
    </div>


    <div class="row justify-content-center">
        <div class="col-9">

            <h4>Reflection-in-action</h4>

            <p>The main feedback was that our user journey map seemed a bit too busy visually. It is hard for the audience to understand the hierarchy of information. We are confident on the goal of our design; however, we aren’t completely happy with the execution of the ideas we have chosen. We will keep working to find better ways to explain our concept, we also need to begin prototyping and making sure the prototype is appropriate for our target audience.</p>

            <h4>Collaborative and / or Independent Professional Working</h4>
            <p>The 4 of us worked together on the experience map, Wendy worked on the visual design. Patrick and I worked on the maze journey map, Wendy and Jordy worked on the app interface journey map. Jordy worked on the visual design of both journey maps. I worked on the text content of the presentation, Wendy worked on the visual design.</p>

            <h3>Reference list</h3>

            <p>Kalbach, J., 2016. Mapping experiences: A complete guide to creating value through journeys, blueprints, and diagrams. " O'Reilly Media, Inc.".</p>



            
    </div>
</div>



</div>
</app-blog>
`
})
export class Week20Component2 {}