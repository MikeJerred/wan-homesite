import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 25 - Field research" duration="Project duration: 23rd April - 17th June, 2019" team="Team: Reina Yuan, Timmy Maiello, Yijia Sun, Wan Li" [previous]="{ name: 'Week 24 - Desk research', link: ['/blog', 24], extend: 250 }" [next]="{ name: 'Week 26 - Physical models', link: ['/blog', 26], extend: 270 }">

<div class="col-12">

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro2/model.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro2/shopping.png">
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
        
            <h4>Presentation feedback</h4>

            <p>After our presentation, the main feedback was that our theoretical findings could be made more relevant by making practical examples. For instance, when we talked about Dewey’s theory of values relate to desire, feelings and experiences, we could have pointed out that this directly relate to micro interactions and user experience. We also should have presented the opposing opinions on Schwartz theory of values. We were aware of the limitations of this theory; it wasn’t included in the presentation because we were conscious of the time limit. We also should have been more critical about the practical reviews, whether we thought they are good design and what impact do they have.</p>

            <h4>Brainstoring</h4>

            <p>With the critiques in mind, we started to explore our areas of interest. We talked about the points below, what stood out the most was the influencer/attention value system which is based on how influencers/ attentions are used as a currency in most social network nowadays, and environmentally friendly transaction where environmental impact is used for valuation. Some companies have started to encourage people care for the environment by providing environmental rewards for user activities. For instance, the search engine Ecosia plants trees as people use it for search. In capitalist society value systems are fundamentally based on economical values, whereas we want to establish a value system that is based on the environmental value instead. After some discussion, we decided to focus on the environmental value system concept due to the urgency of this issue in our society. </p>

            <img style="width:100%" src="/assets/blog/micro2/ideas.jpg">


            <h4>Literature review</h4>
            <p>We did further literature research on how to account environmental values in value system at the same time of thinking about the field research. We decided to use a few different approaches. One is to interview some luxury products buyers, because based on our research there’s a discrepancy in sustainable development and luxury products. The research indicates luxury consumers are less in favour of incorporating recycled materials in such goods. Despite the increasing concerns of consumers about the preservation of the planet, the responsible behaviour of the brand remains a secondary selection criterion and consumers of luxury goods primarily focus on the intrinsic quality of the product. (Achabou and Dekhili) This inspired us to find out if luxury goods buyers know the environmental cost of such goods and would it change their behaviour if they knew. </p>
            
            <h4>Interviews</h4>
           <p>We went to two luxury department stores Selfridges and Liberty interviewed 10 participants, and mainly targeted people who bought some luxury goods. We tactically started the conversation around fashion to get participants talking, then asked questions about whether they value environmental costs during the conversation. We purposely didn’t tell participants our research is about environment to reduce the attempt of being politically correct. We used category analysis to summarise our main findings:</p>

            <ul>
            <li>The purchase of such goods is based on preferences/ social status / brand/ quality. </li>
            <li>None of them currently considered the environmental cost in such goods. </li>
            <li>Half said they would take environmental values into account if the environmental cost was more visible. </li>
            <li>Most of them think environment is a macro issue that not much an individual can do.</li>
            </ul>


        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
        <img style="width:100%" src="/assets/blog/micro1/shopping2.png">
        </div>
        <div class="col-sm-6">
        <img style="width:100%" src="/assets/blog/micro1/analysis.png">
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
            <h4>Experiments</h4>
            <p>After the interviews, we wanted to see if the behaviours would be changed if people knew the environmental cost of something. We carried out the observation at LCC canteen targeting people who uses tissue paper. The test had two parts, the first part was just to observe how much people use tissues at lunch, the second part was observed after we put our signs up. The signs explained how much it costs the environment to produce one piece of tissue. We were hoping to see a decline in amount of tissue consumed after the sign, however, it didn’t not change much. People either didn’t notice the sign or ignored it. Apart from one girl who was a little annoyed by the sign, she couldn’t believe the university nagging us about one tissue when the surroundings are so dirty.</p>

            <p>We also conducted a test to see if people are willing to pay for the environmental cost. We made a box with two images showing different types of coke, a normal one and an eco-friendly one. The eco-friendly one has a slightly higher price than the normal one. Participants were asked to vote twice to see which one they would choose to buy. Once when they know the market price, and the second time when they know the environmental cost. 12 people out of 20 chose the normal one at the first round, and 8 people changed their mind after knowing the environmental cost. People changed their mind because they think price between two coke has only small difference, and they would feel guilty when they not choose the eco-friendly coke, also they think they have responsibility to protect the environment. For people who didn’t change their mind, they think the environmental cost is small enough to be ignored, and there is little impact on the environment. Some of them think the environment of the products are inevitable.</p>


        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro2/test1.png">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro2/test2.png">
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">



            <h4>Collaborative and / or Independent Professional Working</h4>
            <p>Research: all<br>
            Interviews: all<br>
            Model making: all<br>
            Presentation content: Yijia<br>
            Presentation visualisation: Timmy<br>



            
    </div>
</div>

<div class="row justify-content-center">
<div class="col-9">



    <h3>References</h3>
    <p>Achabou, M.A. and Dekhili, S., 2013. Luxury and sustainable development: Is there a match?. Journal of Business Research, 66(10), pp.1896-1903.</p>



    
</div>
</div>



</div>
</app-blog>
`
})
export class Week25Component {}