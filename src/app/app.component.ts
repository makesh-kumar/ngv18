import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SignalDemo } from './signal-demo/signal-demo.component';
import { SignalInp } from './signal-inp/signal-inp.component';
import { ModelBinding } from './mode-binding/model-binding.component';
import { ViewQueries } from './view-queries/view-queries.component';
import { RxInterop } from './rx-interop/rx-interop.component';
import { ControlFlows } from './control-flows/control-flows.component';
import { DeferViews } from './defer-views/defer-views.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JsonPipe,ReactiveFormsModule, SignalDemo, SignalInp, ModelBinding,ViewQueries,
    RxInterop,ControlFlows,DeferViews],
  templateUrl: './app.component.html',
})

export class AppComponent {

  num = 77;

  cdRef = inject(ChangeDetectorRef);
  fb = inject(FormBuilder);
  
  userForm!: FormGroup;
  count = signal(0);

  
  ngOnInit(): void  {
    setInterval(() => {
      this.count.update(count => count + 1);
    // this.cdRef.markForCheck();
    },1000);

    this.initForm()
  }


  initForm(): void {
    this.userForm = this.fb.group({
      name: [''],
      age: [2]
    })

    
    this.userForm.events.subscribe(console.log)
  }

  submitForm(): void {
    console.log(this.userForm)
  }
}
