import { Component, ElementRef, ViewChild, contentChild, viewChild } from "@angular/core";


@Component({
    selector: 'view-queries',
    templateUrl: './view-queries.component.html',
    standalone: true
})
export class ViewQueries {


    // @ViewChild('testRef',{static: true}) ref!: ElementRef;
    ref = viewChild.required<ElementRef>('testRef');

    c = contentChild('cRef');

    


    ngOnInit(): void {
        // console.log(this.c())
        console.log(this.ref()?.nativeElement?.textContent);

    }

    ngAfterViewInit(): void {
        console.log(this.ref()?.nativeElement.textContent);
    }

}