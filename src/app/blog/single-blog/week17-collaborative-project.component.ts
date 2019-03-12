import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 17 - Collaborative project" duration="Project duration: 8th Feburary - 13th March, 2019" team="Team: Reina Yuan, Wan Li" [next]="{ name: 'Week 18 - Collaborative project', link: ['/blog', 18], extend: 300 }" >

<div class="col-12">

        
    <div class="row justify-content-center">
        <div class="col-9">
        
                <p>This week we started the new collaborative project, in the class we discussed the pros and cons of collaboration. We organised the points in positive and negative, but many aspects sit in between for instance, a multicultural background of a group can be an advantage or a disadvantage at the same time. I find the most beneficial aspects of collaborative work is that through effective communication and inspiration from each other better ideas can be generated than working alone, and efficiency can be improved if everyone’s strength is utilised.</p>

                <img style="width:100%" src="/assets/blog/collaborative1/collaboration.jpg">
                <figcaption>A summary of our group discussion on collaboration.</figcaption>

                <p>We were asked to consider what do we bring to our team as an individual. I am an individual with interdisciplinary and open mindset, I come up with conceptual ideas through being empathetic with users and understanding the context where it’s situated in. I try to be pragmatic and adoptive when working with different people so that everyone’s strength can be utilised. However, it’s beneficial to work on different aspects of a project in order to acquire new skills. I hope my research could be more thorough and rigorous in my future work.</p>

                <img style="width:100%" src="/assets/blog/collaborative1/mynotes.jpg">
                <figcaption>What do I bring to the team?</figcaption>

                <p>Tiffany, Timmy, Yanyi and I worked together on a manifesto before we embarked to the Elephant & Castle shopping centre to document non-human archives. We collectively agreed on the following are the most important rules that influence a group efficiency and spirit the most.</p>

                <img style="width:100%" src="/assets/blog/collaborative1/collaboration2.jpg">
                <figcaption>Our collaboration manifesto.</figcaption>

                <p>Because we only had 30min on this exercise, we decided to go take photos individually at things we find interesting and then categorise them afterwards. My photos are more focused on the overall information structure, for example, the image below of a shop front displayed lots of products that had very different attributes. There are toys, lightings, DIY products, fake flowers, mirrors, books and many more. To me this is an example of uncategorised information which creates a difficult journey for a customer who is looking for something specifically but can be good for someone who don’t know what to look for or just browsing. </p>


                <carousel [noPause]="false" [interval]="0">
                    <slide>
                        <img src="/assets/blog/collaborative1/collaborative1.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">Uncategoriesed information.</div>
                    </slide>

                    <slide>
                        <img src="/assets/blog/collaborative1/collaborative2.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">Physical access to digital archive.</div>
                    </slide>

                    <slide>
                        <img src="/assets/blog/collaborative1/collaborative3.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">Left: categorised information vs Right: uncategorised information.</div>
                    </slide>
                </carousel>
        </div>
    </div>







</div>
</app-blog>
`
})
export class Week17Component {}