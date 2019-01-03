import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="The UX of Urban Space Part 2" duration="Project duration: 22nd October - 2nd November, 2018" team="Team: George Darbyshire, Ivy Wong, Wan Li, Patrick Bull, Yuhan Mao"[previous]="{ name: 'foo', link: ['blog', 1] }" [next]="{ name: 'bar', link: ['blog', 2] }">

<div class="col-12">

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/space/space3.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/space/space4.jpg">
        </div>
    </div>
        
    <div class="row justify-content-center">
        <div class="col-9">
                <h4>Experimentation part 2</h4>
        
                <p>For the 3D model, we recreated a two-story floorplan of the physical space and made improvements from the feedback we had: </p>
                <ul>
                <li>We used plasticine instead of coffee spray to reduce chart junks because it is easier to manipulate without leaving any unwanted trace. </li>
                <li>We added a legend in the model to explain what each signifier represents.</li>
                <li>We bought ready-made paper balls in 4 different sizes and used the same size to represent the same group of people for consistency. </li>
                <li>We removed the coffee cups as a primary element in the model and only used a few as a sample to show around in the class.</li>
                <li>We also did an experiment using stop motion video to show the progressive change in where and how people moved around in the shop.</li>
                </ul>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <iframe class="mx-auto d-block" width="100%" height="625" src="https://www.youtube.com/embed/Gcuz3PpcP3A?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <figcaption>Credit: Yuhan Mao</figcaption>
        </div>
    </div>
    
    <div class="row justify-content-center">
        <div class="col-9">
                <p>Our digital intervention was encouraged by John’s suggestion regarding the recent Starbucks racist scandal. Despite Starbucks billing itself as ‘a third place between work and home’, it wasn’t as open and welcoming to all as the marketing message suggested. The two young black males who were the victims of this unfortunate event did nothing wrong but sitting in a Starbucks shop waiting for their business partner to turn up. The staff called the police just because of their race.</p>
                
                <p>This reminded me of our reading from the first week - ‘Justice, A.I., and Escape from the Matrix of Domination’. Costanza-Chock who is a non-binary, transgender, femme presenting person who was brutally embarrassed by the security system and the airport staff due to her gender. Discrimination is a complex issue within our society, it exists in people’s mind consciously or subconsciously. It is the unconscious thoughts that lead us to behaviours without considering the consequences. Thus, the discrimination in a person’s mind extend to the systems and algorithms we create. As crazy as it might sound, situations like this happen all the time all around us. Our further research revealed other issues with discriminations such as breastfeeding in public, and interracial couples.</p>

                <p>The unfortunate experience of Costanza-Chock inspired me to create a similar but more extreme scenario where people are treated ridiculously based on some common reasons for discrimination. When the subconscious thoughts were brought to conscious behaviours or even rules within the society, we hope to incite the viewers’ opinions through this bazaar exaggeration set in our Starbucks model. Please see below the video demonstration. </p>

        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <iframe class="mx-auto d-block" width="100%" height="625" src="https://www.youtube.com/embed/fvb5ttyUuJ4?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
                <h4>What we learnt</h4>
        
                <p>Through this project, we used design as a magnifying glass to examine the problem. Design thinking allowed us to jump out of the Starbucks model we created initially and create something that covers a larger issue.</p>

                <p>Although the stop motion test wasn’t as successful as we wished, we know a longer shooting time is required if we want to keep each screen consistent.</p>

                <h4>Collaborative and / or Independent Professional Working</h4>
                <p>Sound: Patrick, Wan
                <br>Images: Patrick, Wan
                <br>Stop motion video: Yuhan
                <br>Model: all
                <br>Presentation PowerPoint: Patrick, Wan</p>

                <h3>Reference list</h3>
                <p>Costanza-Chock S (2018) <i>Design Justice, A.I., and Escape from the Matrix of Domination</i>. Available at: hhttps://jods.mitpress.mit.edu/pub/costanza-chock (Accessed date: 30th Oct 2018).</p>
        
        </div>
    </div>
       

</div>
</app-blog>
`
})
export class Week6Component {}