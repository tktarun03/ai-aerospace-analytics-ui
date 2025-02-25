import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Aerospace Analytics UI Dashboard</h1>
    <div class="dashboard">
      <aerospace-dashboard></aerospace-dashboard>
      <wasm-aerospace-analysis></wasm-aerospace-analysis>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }