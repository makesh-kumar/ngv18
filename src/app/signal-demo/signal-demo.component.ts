import { JsonPipe } from '@angular/common';
import { Component, Signal, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'signal-demo',
  templateUrl: './signal-demo.component.html',
  standalone: true,
  imports: [JsonPipe],
})
export class SignalDemo {
  length = signal(10);
  breadth = signal(10);
  area = computed(() => {
    // this.length.set(99);
    /**
     *  writing siganls inside 'computed' is not allowed
     *  to avoid infinite changes
     */
    return this.length() * this.breadth();
  });

  constructor() {
   const effectRef =  effect(
      (cleanupFn) => {

        console.log('Effect runs for area change ', this.area());

        setTimeout(()=>{
            effectRef.destroy(); // after destoy this effect will not work
        },3000);

        // cleanUp will be called before on evey effect run  or when effrectRef is destroyd
        cleanupFn(() => {
          console.log('Effects cleanup complete');
        });
      },
      { manualCleanup: true,
        allowSignalWrites: true,
       }
    );
  }

  updateLengthByOne(): void {
    this.length.update((prev) => prev + 1);
  }
  updateBreadthByOne(): void {
    this.breadth.update((prev) => prev + 1);
  }

  setLengthToTen(): void {
    this.length.set(10);
  }
  setBreadthToTen(): void {
    this.breadth.set(10);
  }

  // non-primitives
  randomNums = signal([1, 2, 3]);
  pushRandomVal(): void {
    this.randomNums.update((prev) => [
      ...prev,
      Math.floor(Math.random() * 100),
    ]);
  }
}
