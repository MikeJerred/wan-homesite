import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 15 - Field research - Part 2" duration="Project duration: 14th January - 11th March, 2019" team="Team: Patrick Bull, Wendy Chen, Jordy Tam, Wan Li" [previous]="{ name: 'Week 15 - Field research - Part 1', link: ['/blog', 15], extend: 300 }" [next]="{ name: 'Processing community day', link: ['/blog', 17.2], extend: 270 }">

<div class="col-12">

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro2/interview1.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro2/interview2.jpg">
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">

            <p>This week was about observations and exploring people’s opinion on sleep on a larger level than just see it as an individual activity. If we see our society as a system, it is currently structured around the fact that human need to sleep. We thought by asking people to imagine how the world and human body might look like if we no longer needed to sleep might give us some interesting perspectives. Despite the fictional condition of no longer need to sleep, most people had a fairly dystopia outlook on both matters.</p>

            <h4>2nd round interviews</h4>

            <p>We planned 5 main questions for our semi structured interview, the 4 of us went to 3 different locations and conducted 41 Guerrilla interviews. We transcribed our interviews and did category analysis to discover deeper meaning. These two interviews above were particularly interesting to us because of the ideas they brought forward, the participant on the left talked about the technological effects we face in our lives and society as a whole in regard to our resting time, making statements like business wants, industries want people not to sleep. This viewpoint might seem a little paranoid on the surface, however, after reading “How companies learn your secrets”, it got us to think about what the economics of sleep might be. Imagine a company who makes money from sleep related products, you would want the employees to sleep less and work harder, but you would target consumers to promote the benefits of sleep. In contrast, the participant on the right seemed to be more positive and felt he’d use his extra time learning skills and researching new ideas.</p>

        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro2/transcript2.png">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro2/transcript3.png">
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">

            <p>We also got participants to draw some of their answers. One of the question was inspired by Meet Graham an Australian PSA on the ideal human to survive a car crash. A lot of participants felt the body would become fitter and stronger due to more activity and burning more calories regularly throughout the 24 hours. Which is interesting to see how people feel our rest is connected to the body physicality. Our eyes may enlarge due to being always open 24/7 and the need to adapt to darker lighting conditions. And participants also felt our life expectancy would be much shorter because of the extra energy being exerted which resulted in participants also thinking we might be happier in cases. These findings allowed us to explore the human body in a way that we felt is not commonly discussed letting participants run wild with how they thought sleep and the body is strongly connected.</p>

            <p>Another question we analysed in the same way is ‘what do you think the world would look like when we no longer need to sleep’, most people had a dystopian view of how the world will become and only two participants think people will be happier and more energetic.</p>

        </div>
    </div>

    <div class="row">
            <div class="col-sm-6">
                <img style="width:100%" src="/assets/blog/macro2/sketch1.png">
            </div>
            <div class="col-sm-6">
                <img style="width:100%" src="/assets/blog/macro2/sketch2.png">
            </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
            <h4>Category analysis</h4>
            
            <p>After analysing the drawings & transcription explanations, we summarised our findings into a few categories we felt were important to explore further. Below are a few examples regarding to the question "What do you think the world would look like when we no longer need to sleep?":</p>

            <h5>Macro environment</h5>

            <p>A fair number of participants thinks the world will be overcrowded and hectic, and therefore it will bring the world to extinction much quicker because the pollution will speed up and we will use up all the resources much quicker. This is an example of how sleep as an individual activity shapes the society on a macro level. Not only the environment affects our sleep but the fact that we sleep is a huge factor inside of the earth ecosystem.</p>

            <h5>Social/ Cultural</h5>

            <p>Some participants think we will not need bed anymore so houses might be more spacious, work and leisure time might have a better distribution because people can choose more freely on activities without the limitation of day and night.</p>

            <h5>Economy</h5>

            <p>Some participants think we might get more productive which would help us to progress more in terms of technology and science, whereas some think this would increase the wealth inequality even more.</p>

            <h4>Reflection-in-action</h4>

            <p>Our first round of interviews was conducted before we had a theme, therefore the questions tend to be more generic. We thought it might be a little waste of time because it seemed irrelevant to our second-round interviews. However, I think it was a good practice for us to get used to interviewing people. I felt much more confident and learnt from my own mistakes after the first time. For instance, I tried to speak less in the second-round interviews even when I felt awkward silence.</p>

            <p>One feedback we had from the presentation was that our category analysis was marked the wrong way round. We should've used different colors to represent different categories rather than the person who categoriesed them.</p>

            <h4>Collaborative and / or Independent Professional Working</h4>
            <p>The 4 of us all went out and did interviews and worked on transcriptions afterwards. Patrick and I worked on the category analysis. I worked on the presentation content and structure, Jordy worked on the visual design.</p>

            <h3>Reference list</h3>

            <p>Meetgraham.com.au. (2019). Meet Graham. [online] Available at: http://www.meetgraham.com.au/graham/skull [Accessed 25 Jan. 2019].</p>


            
    </div>
</div>



</div>
</app-blog>
`
})
export class Week16Component {}