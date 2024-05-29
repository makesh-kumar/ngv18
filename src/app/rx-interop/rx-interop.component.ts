import { Component, EnvironmentInjector, effect, inject, input, runInInjectionContext, signal } from "@angular/core";
import { toObservable, toSignal } from "@angular/core/rxjs-interop";
import { interval } from "rxjs";


@Component({
    selector: 'rx-interop',
    templateUrl: './rx-interop.component.html',
    standalone: true
})
export class RxInterop {


    // e = input.required();


    timer = interval(1303);

    timerSignal = toSignal(this.timer,{
        // initialValue: 99999,
        // requireSync: true
    });

    effRef  = effect(()=>{
        // console.log('Timer changed - ',this.timerSignal())
    })



   count = signal(10);
   countObs = toObservable(this.count);


   envInjector = inject(EnvironmentInjector);

   ngOnChanges(){
    console.log('NG ON CHAMGES --- ')
   }

    ngOnInit(): void {

        runInInjectionContext(this.envInjector,()=>{
            effect(()=>{
                console.log('Count - ',this.count())
            })
        })

        // this.timer.subscribe(s=>{
        //     console.log(s)
        // })

        this.countObs.subscribe((val)=>{
            console.log('obs vaaal - ',val)
        })


        setTimeout(()=>{
            // this.count.update(s=>s+1)
            this.count.set(2);
            this.count.set(3);

            this.count.set(4);
            this.count.set(5);

        },3000)

    }
}