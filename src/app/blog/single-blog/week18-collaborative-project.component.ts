import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 18 - Collaborative project" duration="Project duration: 8th Feburary - 13th March, 2019" team="Team: Reina Yuan, Wan Li" [previous]="{ name: 'Week 17 - Collaborative project', link: ['/blog', 17], extend: 300 }" [next]="{ name: 'Week 19 - Collaborative project', link: ['/blog', 19], extend: 300 }" >

<div class="col-12">

        
    <div class="row justify-content-center">
        <div class="col-9">

        
                <p>In the morning, we started to discuss potential ideas as well as planning for what research methods to use. Our initial ideas including connecting sound or dance with the plants, we want to create a connection between human and plants, so viewers see the plants more than just plants. Below are some sketches of our ideas.</p>

                <img style="width:100%" src="/assets/blog/collaborative2/notes1.jpg">
                <figcaption>Our notes on initial ideas and questions, as well as research methods.</figcaption>

                <img style="width:100%" src="/assets/blog/collaborative2/notes2.jpg">
                <figcaption>Some sketches on our initial ideas, eg. the one on bottom left shows a concept where the movement of plants could be translated into sound and dance moves.</figcaption>

                <p>We planned to use the following research methods to collect information during our visit:</p>
                <ul>
                <li>Observation</li>
                <li>Interviews</li>
                <li>Sensory map</li>
                </ul>

                <h4>Observation</h4>

                <p>During our visit, we found the environment very pleasant and people really enjoyed their stays in the garden. Most of the visitors were white middle to upper class due to the location being Chelsea, most of them are mid-age to elderly at the time we visited but the staff mentioned there will be more kids at summer time. We encountered people doing all sorts of relaxing activities such as reading, drinking and chatting with friends or simply enjoying the sunshine. It seems like people enjoy the environment of the garden regardless of any knowledge of the medicinal use of the plants.</p>

                <carousel [noPause]="false" [interval]="0">
                    <slide>
                        <img src="/assets/blog/collaborative2/people1.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">A couple sitting on the bench enjoying the sun in the garden.</div>
                    </slide>

                    <slide>
                        <img src="/assets/blog/collaborative2/people6.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">A lady sketching the garden. (We interviewed this lady later on) </div>
                    </slide>

                    <slide>
                        <img src="/assets/blog/collaborative2/people2.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">A couple chilling in the garden restaurant after a meal.</div>
                    </slide>

                    <slide>
                        <img src="/assets/blog/collaborative2/people3.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">Two friends drinking in the garden.</div>
                    </slide>

                    <slide>
                        <img src="/assets/blog/collaborative2/people4.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">A lady reading.</div>
                    </slide>

                    <slide>
                        <img src="/assets/blog/collaborative2/people5.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">A lady reading and a man snoozing under the sun.</div>
                    </slide>
                </carousel>

                <p>We also observed how the plants information is currently displayed to the visitors. As you can see below, the information is scattered around and in many different formats. Some information is written in languages that are more digestible than others, and some signs are in more obvious places than others.</p>

                <carousel [noPause]="false" [interval]="0">
                    <slide>
                        <img src="/assets/blog/collaborative2/sign1.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">It was hard to tell which sign is for which plant and there doesn't seem to be other ways to find out.</div>
                    </slide>

                    <slide>
                        <img src="/assets/blog/collaborative2/sign2.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">Signs like this looks cute and shows the history of the garden but it's hard to read the information of the plant.</div>
                    </slide>

                    <slide>
                        <img src="/assets/blog/collaborative2/sign3.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">Signs like this contain great information but are less engaging.</div>
                    </slide>

                    <slide>
                        <img src="/assets/blog/collaborative2/sign4.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">Whereas signs like this are more engaging and demonstrates the use of specific plants.</div>
                    </slide>

                    <slide>
                        <img src="/assets/blog/collaborative2/sign5.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">Some important information can be hidden by plants.</div>
                    </slide>

                    <slide>
                        <img src="/assets/blog/collaborative2/sign6.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">Some signs have no plant next to it which creates confusion, presumably due to the plant is not in season.</div>
                    </slide>
                </carousel>

                <h4>Interview</h4>

                <p>We interviewed a lady called Tessanna Hoare, she was sketching in the garden and after speaking to her we found that she’s a gardener and artist. She has a close relationship with the garden due to her profession and her great great grandfather is the botanist and entomologist William Curtis. Both her and her mother used to work in the garden when she was younger, and she still visits frequently now and do sketches every now and then. This is her favourite garden in the world because the workers can enjoy the space as much as the people, it works both ways. She knows the plants very well but has not applied the plants in medicinal use. As a gardener, she often takes clients to the garden to find out their preference because it contains a great collection of different plants.</p>

                <p>The conversation with Tessanna was very insightful and provided us with a very different perspective from our own, because it was our first time visiting the garden and we don't have an extensive knowledge on plants and the garden like she did. We thought it would be a great opportunity for us to learn from her, so we invited her to collaborate with us on this project and she was happy for us to get in touch for advice. </p>

                <h4>Sensory map</h4>

                <p>We started to think about how to produce our sensory map while we were in the garden. Firstly, we were attracted by the different smells from different plants. Our initial thought was to create a visual map of the smells which doesn’t provide the full sensory experience. We researched online and found a video shows how to preserve the smell of plants. We were intrigued and collected a few plants to try it out. Please see below the process of the experiment. </p>

                <carousel [noPause]="false" [interval]="0">
                <slide>
                    <img src="/assets/blog/collaborative2/map1.jpg" alt="first slide" style="display: block; width: 100%;">
                    <div class="carousel-caption">The plants we collected from the garden for our smell sensory map experiment.</div>
                </slide>

                <slide>
                    <iframe class="mx-auto d-block" width="100%" height="625" src="https://www.youtube.com/embed/Ep595T3FC1E?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="carousel-caption">We followed the instructions online to boil the plant in water and the smell is supposed to be kept in the glass jar after a few minutes. We tried with a few plants but the smell in the jar was not as strong as we expected.</div>
                </slide>

                <slide>
                    <img src="/assets/blog/collaborative2/map2.jpg" alt="first slide" style="display: block; width: 100%;">
                    <div class="carousel-caption">However, it left both strong colour and smelll when we grinded the boiled plant on paper. Therefore, we changed our plan and created a map this way instead.</div>
                </slide>

                <slide>
                    <img src="/assets/blog/collaborative2/map3.jpg" alt="first slide" style="display: block; width: 100%;">
                    <div class="carousel-caption">This is the final sensory map. Each plant was cut in half, one boiled and grinded on the fabric to show the colour and smell and the other half kept as how it was. Through this map, we were hoping to reveal a different side of plants that is not normally seen by people.</div>
                </slide>


            </carousel>
                
            <h4>Collaborative and / or Independent Professional Working</h4>
            <p>I came up with several initial ideas which formed the basis of our later discussion. We both did the interviews and sensory map together.</p>

        </div>
    </div>







</div>
</app-blog>
`
})
export class Week18Component {}