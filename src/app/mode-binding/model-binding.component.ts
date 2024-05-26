import { Component, EventEmitter, Input, Output, model, signal } from "@angular/core";


@Component({
    selector: 'model-binding-child',
    template: `
    <p>Model binding child - {{num()}}</p>
    <button (click)="updateNum()">Update num</button>
    `,
    standalone: true
})
export class ModelBindingChild {

    // @Input() num = 100;
    num = model(100)
//    @Output() numChange = new EventEmitter<number>();

   updateNum(): void {
    // this.numChange.emit(this.num + 1)
    this.num.set(this.num() + 1)

   }

}

@Component({
    selector: 'model-binding',
    templateUrl: './model-binding.component.html',
    standalone: true,
    imports: [ModelBindingChild]
})
export class ModelBinding {
    num = 100
}


/**
 * 
 * model is used for a scenarios where we use ngModel with ngModelChange
 * ex: <child [(expand)]></child>
 * child.ts
 * @input() expand, @output() expandChange
 * 
 * 
 * in the above case, we are dealing with normal number, 
 * to deal the above scenario with signal, we ll go for 'model'
 * 
 * */
