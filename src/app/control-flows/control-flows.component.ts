import { compileNgModule } from "@angular/compiler";
import { Component } from "@angular/core";


@Component({
    selector: 'control-flows',
    templateUrl: './control-flows.component.html',
    standalone: true
})

export class ControlFlows {

    flag = false;


    toggleFlag = () => {
        this.flag = !this.flag;
        this.arr.length = 0;
    }

    arr = [1,2,3,4,5];
}