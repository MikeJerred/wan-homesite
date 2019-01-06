import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="The UX of Death Part 1" duration="Project duration: 19th November - 30th November, 2018" team="Team: Tiffany Chau, Yuhan Mao, Wendy Chen, Wan Li" [previous]="{ name: 'The UX of Time Part 2', link: ['/blog', 8], extend: 230 }" [next]="{ name: 'The UX of Death Part 2', link: ['/blog', 10], extend: 230 }">

<div class="col-12">

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/death/death1.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/death/death2.jpg">
        </div>
    </div>
        
    <div class="row justify-content-center">
        <div class="col-9">
                <h4>Research</h4>
        
                <p>We had several ideas in the brainstorm session such as funeral before death but didn’t have a preference. I asked myself what is a good death for someone who didn’t even have a chance to live, would there be such a thing as good death? For example, what would be a good death to an unborn fetus? My teammates thought this was an interesting subject to explore and proceeded to the research phase. The research method required for this project was literature review. We explored the topic in the following five aspects: physical, psychological, social, spiritual and legal. We added the legal aspect because the law has a big impact on how the body of the fetus is treated. Each of us researched the academic literature in one aspect independently and then discussed our findings together afterwards.</p>

                <p>I read about 20 articles within the psychological aspect and summarised my findings to the following:</p>

                <ul>
                <li>Stillbirth has a dramatic negative effect on the entire family, but it influences fathers to a lesser degree than mothers. When mourning is facilitated, the family is likely to adjust better to its bereavement. Doctors and nurses should learn how to facilitate mourning and should accept the strange and sometimes bizarre forms this may take.</li>
                <li>However, the research by Bourne compared 100 cases of stillbirth with 100 live births. It is conceivable that a doctor's current amnesia may indicate repression of a distasteful experience and may not necessarily reflect neglect of his patient at the time; but it certainly does mean that he cannot now be fully alive to his patient's needs and that his relationship with her has suffered.</li>
                <li>Another research shows stillbirth has a profound effect on the delivering obstetrician, and a significant number of participants in the study have even considered giving up obstetrics altogether. Also, evidence suggests that midwives and nurses appear to experience significant and personal adverse effects as a result of caring for families experiencing loss. Improved bereavement training may help obstetricians care for grieving families but also cope with their own emotions after this devastating event.</li>
                </ul>

                <p>After combining all the findings, I had quite a clear vision of how the model could map out the relationship between all the different parties involved and affected by this unfortunate event.</p>
                
        </div>
    </div>

    <div class="row justify-content-center">
    <div class="col-9">
            <h4>Experimentation</h4>
            <p>My initial idea was to place the parents in the centre but separately, other parties involved will be placed around them at different distances depending upon how much they were affected by the event. For instance, the obstetricians would be placed closer to the parents than friends. The relating parties will be connected by lines. To demonstrate the influence is multi-directional, I thought of using some coloured powder on the lines so when one line is pulled other connecting lines will drop powder on the board to show they were affected. Ideally, the amount of powder dropped will be different to show each party is affected by the event at a different level. </p>

            <p>My teammates liked the idea but wanted to explore some more options. Yuhan wanted to use the experience of peeling an onion as the analogy of the painfulness during the event. When peeling an onion, the longer you spend the stronger your eyes feel watering and stingy. We thought it was a great way for others to experience the pain of the parents, but it is hard to portray the relationship between different parties, doctors, nurses, father etc.</p>

            <p>Another idea Coco had was to use drowning as an analogy for the parents’ feeling after the loss of a baby. It worked in conjunction with my initial idea but replacing the lines with tubes, and coloured powder with water. We did some experiment with miniature models, water, tubes and plastic cups. Each cup has a model inside at the bottom representing the person. We cut holes on the side of each cup and put the tubes through. The plan is to pour water in the parents’ cup when the stillbirth happened, the parents are the most affected so they will drown the quickest, the water level in each other cup will increase at the same time but related to how much that person is affected. This concept worked quite well at the planning stage but failed in the actual making. It was too difficult to cut the cups for the tubes without leaking. We tried cups and glues in different material, the model was still leaking. It would be too hard to control during our presentation thus we decided to remove water as an element in our model.</p>

    </div>
    </div>

    <div class="row">
    <div class="col-sm-6">
        <img style="width:100%" src="/assets/blog/death/death3.jpg">
    </div>
    <div class="col-sm-6">
        <img style="width:100%" src="/assets/blog/death/death4.jpg">
    </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
        
                <p>After this experiment, we went back to my initial idea with some improvements. We wanted to add the element of shock in the model because we want the audience to experience how the parents felt when they discovered the death of the baby. Coco thought we could burst a balloon to represent this, but we need to hide it for people to feel unexpected. We thought of making a box that contains the model and the balloon, the box represents the womb of the mother and hides the balloon at the same time. We also added some red powder inside of the balloon so when it bursts it will paint the board. The paint is stronger on the parents and less as it goes outwards representing the influence at different level. </p>
        
        </div>
    </div>

    <div class="row">
    <div class="col-sm-6">
        <img style="width:100%" src="/assets/blog/death/death5.jpg">
    </div>
    <div class="col-sm-6">
        <img style="width:100%" src="/assets/blog/death/death6.jpg">
    </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
                 <h3>Reference list</h3>
                <p>Lewis, E., 1979. Mourning by the family after a stillbirth or neonatal death. Archives of disease in childhood, 54(4), pp.303-306.</p>

                <p>The psychological effects of stillbirths on women and their doctors Journal of the Royal College of General Practitioners vol. 16,2 (1968): 103-12.</p>

                <p>Badenhorst, W., Riches, S., Turton, P. and Hughes, P., 2006. The psychological effects of stillbirth and neonatal death on fathers: Systematic review. Journal of Psychosomatic Obstetrics & Gynecology, 27(4), pp.245-256.</p>

                <p>Wallbank, S. and Robertson, N., 2008. Midwife and nurse responses to miscarriage, stillbirth and neonatal death: A critical review of qualitative research. Evidence-based Midwifery, 6(3), pp.100-107.</p>

        </div>
    </div>
       

</div>
</app-blog>
`
})
export class Week9Component {}