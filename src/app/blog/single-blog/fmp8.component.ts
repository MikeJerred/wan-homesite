import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Olafur Eliasson exhibition" [previous]="{ name: 'Conducting research - pilot session', link: ['/blog', 38], extend: 340 }" [next]="{ name: 'Experiments & analysis', link: ['/blog', 40], extend: 260 }">

<div class="col-12">

    <div class="row">
       
            <img style="width:100%" src="/assets/blog/fmp8/show1.jpg">
  
        
    </div>

    <div class="row justify-content-center">
        <div class="col-xs-10 col-md-9">

           

            <p>The Olafur Eliasson exhibition at tate modern was very inspiring, the works are both aesthetically pleasing and meaningful. I was particularly interested in the collage wall at the end as I found some articles are particularly relevant to my project. I started to read some books listed on the wall, e.g., The Embodied Mind, The Autonomy of Affect.</p>

            <img style="width:100%" src="/assets/blog/fmp8/show2.jpg">
            <img style="width:100%" src="/assets/blog/fmp8/show3.jpg">
            <img style="width:100%" src="/assets/blog/fmp8/show4.jpg">
            <img style="width:100%" src="/assets/blog/fmp8/show5.jpg">

            <p>Wendy, Yuhan and I organised a study group to report our current progress and provide feedback to each other. It was quite helpful as we can get stuck in our own mind sometimes. </p>

            <img style="width:100%" src="/assets/blog/fmp8/discussion.jpg">


          

          

        </div>
    </div>








</div>
</app-blog>
`
})
export class Fmp8Component {}