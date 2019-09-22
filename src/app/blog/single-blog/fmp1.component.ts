import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Visiting London Textile Museum" [next]="{ name: 'Technical research & RCA degree show', link: ['/blog', 33], extend: 350 }" >

<div class="col-12">

    <div class="row">
       
            <img style="width:100%" src="/assets/blog/fmp1/m1.jpg">
  
        
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
        

            <p>I visited the Fashion and Textile Museum today to explore different forms of textile. The exhibition was about textile arts from Peru.</p>

            <p>In Peru, textile on clothing is not just about fashion, it also contains deeper meanings such as social and marital status of an individual. In other words, textile was used as a medium to carry different meanings and representation of life. Different techniques of weaving, material and pattern carries different expression.</p>

            <img style="width:100%" src="/assets/blog/fmp1/m5.jpg">
            <img style="width:100%" src="/assets/blog/fmp1/m2.jpg">
            <img style="width:100%" src="/assets/blog/fmp1/m3.jpg">
            <img style="width:100%" src="/assets/blog/fmp1/m4.jpg">


          

            <p> I also started to research some basics of textile fabrics in preparation for the material selection of my experiment. Textiles are made from a fine hair-like structure called fibre. Originally fibres came from natural sources – plant and animals. The 1940s and 1950s saw the introduction of synthetic or manufactured fibres derived from chemicals. Therefore, my initial plan was to choose two textiles within each main category to have eight in total for my participant to touch in the experiment. 
             </p>

             <h3>Reference list</h3>
       
            <p>Natural and manmade materials Available at: http://resource.download.wjec.co.uk.s3.amazonaws.com/vtc/2016-17/16-17_1-3/website/pdf/_eng/_wjec/textiles-1/materials-resource-1.pdf (Accessed: 01/07/2019).</p>

        </div>
    </div>








</div>
</app-blog>
`
})
export class Fmp1Component {}