import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Final design" [previous]="{ name: 'Video shooting & model making', link: ['/blog', 46], extend: 310 }">

<div class="col-12">

    <div class="row">
       
            <img style="width:100%" src="/assets/blog/fmp16/model1.jpg">
  
        
    </div>

    <div class="row justify-content-center">
        <div class="col-xs-10 col-md-9">

           

            <p>After making the models we booked the table top photography studio to shoot video demonstrations. For the ease of presentation, we created a simple website to present all the images and videos related to the final design. <a href="https://tiffanyaejin.wixsite.com/sensibition" target="_blank">Please visit our website here.</a> </p>

            <p>It was a great honor and experience to work with Tiffany and Yae Jin, I learnt a lot from both of them. It was one of the best collaboration experience I had during the study!</p>
      
       

            <carousel [noPause]="false" [interval]="0">

            <slide>
                <img src="/assets/blog/fmp16/model2.jpg" alt="first slide" style="display: block; width: 100%;">
              
            </slide>
            <slide>
                <img src="/assets/blog/fmp16/model3.jpg" alt="first slide" style="display: block; width: 100%;">
               
            </slide>



            </carousel>

            <h4>Work distribution</h4>
            <p>Video shooting: Tiffany, Yae Jin, Wan
            <br>Video editing: Tiffany
            <br>Website design: Tiffany
            <br>Website text: Wan</p>



        </div>
    </div>








</div>
</app-blog>
`
})
export class Fmp16Component {}