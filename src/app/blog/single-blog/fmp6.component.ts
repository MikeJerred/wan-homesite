import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="London Textile Fair & E-textile workshop" [previous]="{ name: 'Research plan', link: ['/blog', 36], extend: 200 }" [next]="{ name: 'Conducting research - pilot session', link: ['/blog', 38], extend: 340 }">

<div class="col-12">

    <div class="row">
       
            <img style="width:100%" src="/assets/blog/fmp6/fair.jpg">
  
        
    </div>

    <div class="row justify-content-center">
        <div class="col-xs-10 col-md-9">

           

            <p>I attended the London Textile Fair and visited Dalston Mill fabric shop to help with the selection of textiles in my experiment. </p>

            <p>My original plan was to pick two fabrics with different composition in each of the four main categories: animal, plant, mineral and synthetic. However, after my visit at London Textile Fair, I realised that most fabrics are synthetic or plant based. Fabrics that made from the same composition can have very different texture and pattern depending on the treatment such as weaving, printing and stitching. For instance, both fabrics below are made from 100% polyester but their texture is totally different. Therefore, I adjusted the plan to choose fabrics base on the feeling of touch. The selection should include a range of different feeling when you touch, eg. soft, rough, light weight etc. </p>

        </div>

            <div class="row">
            <div class="col-sm-6">
                <img style="width:100%" src="/assets/blog/fmp6/fabric.jpg">
            </div>
            <div class="col-sm-6">
                <img style="width:100%" src="/assets/blog/fmp6/fabric2.jpg">
            </div>
        </div>
           
        <div class="col-xs-10 col-md-9">

            <p>I ordered some samples at the fair, however, it’s uncertain if they will arrive in time for my research sessions. Therefore, I visited the Dalston Mill fabric shop as a backup. The product range at the textile fair are quite unique and luxurious, where this shop has more everyday fabrics. Since the sound I’m going to select are sound in everyday life, basic fabrics might be more compatible. </p>

            <img style="width:100%" src="/assets/blog/fmp6/shop.jpg">



            <h4>E-textile workshop</h4>

           <p>I also attended the E-textile workshop at CTL. Our exercise was to create a gesture-controlled LED glove. We used conductive threads to create an electrical circuit between the LED, the battery and the fabrics on two fingertips of the glove. When those two fingertips are touched, the LED will be turned on. </p>

           <img style="width:100%" src="/assets/blog/fmp6/glove.jpg">
           <img style="width:100%" src="/assets/blog/fmp6/workshop.gif">
          

          

          

        </div>
    </div>








</div>
</app-blog>
`
})
export class Fmp6Component {}