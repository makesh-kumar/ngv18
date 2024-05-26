import { JsonPipe } from "@angular/common";
import { Component, EventEmitter, Input, Output, OutputEmitterRef, computed, input, output, signal } from "@angular/core";


@Component({
    selector:'signal-child',
 
    standalone: true,
    imports:[JsonPipe],
    template: `
    <p>Child - {{doubleNums() | json}}</p>

    <button (click)="emitParent()">Emit event to parent</button>
    `,
})
export class SignalChild {
    // doubleNums = []


    // @Input() nums: any[] = [];

    // @Input() set nums(nums: any) {
    //     this.doubleNums = nums.map((s: number)=>s*2)
    // }

    nums = input<number[], number[]>([],{
        alias:'nums', 
        transform: v => v
    })

    doubleNums = computed(()=>{
        return this.nums().map((s: number)=>s*2);
    })


    // output
   val: OutputEmitterRef<any> = output<any>();

    emitParent(): void {
        this.val.emit(Math.random());
    }

    

}
@Component({
    selector:'signal-inp',
    templateUrl:'./signal-inp.component.html',
    standalone: true,
    imports:[SignalChild, JsonPipe]
})
export class SignalInp {
    // nums: any[] = [1,2,3,4];
    nums = signal([1,2,3])

    addNum(): void {
        // this.nums = [...this.nums, Math.floor(Math.random() * 3 ) ]
        this.nums.update(prev => [...prev,Math.floor(Math.random() * 3) ])
    }

    getVal(val: any):  void {
        console.log('Value received to parent '+ val)
    }
}

