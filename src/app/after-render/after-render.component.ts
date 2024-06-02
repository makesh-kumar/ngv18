import { Component, afterNextRender, afterRender } from "@angular/core";



@Component({
    selector: 'after-render',
    templateUrl: './after-render.component.html',
    standalone: true
})
export class AfterRender {


    constructor(){
        console.log('************************************')
    }

    count = 0;

    updateCount(){
        this.count++;
    }

   a =  afterRender(()=>{
    console.log('After render...')
   })

   b =  afterNextRender(()=>{
    console.log('222- After NEXT render...')
   })

    ngOnit(): void {
        console.log('on init...');
    }


}