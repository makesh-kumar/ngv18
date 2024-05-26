import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SignalDemo } from './signal-demo/signal-demo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JsonPipe,ReactiveFormsModule, SignalDemo],
  templateUrl: './app.component.html',
})

export class AppComponent {

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
