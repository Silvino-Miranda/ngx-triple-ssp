import { Component, OnInit } from '@angular/core';
import { CounterService } from './_shared/counter.service';
import { NgxTripleSspComponent } from 'ngx-triple-ssp';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent extends NgxTripleSspComponent<number> implements OnInit {
  constructor(private counterService: CounterService) {
    super(0);
  }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.setError(null);
    this.setLoading(true);

    try {
      const data = await this.counterService.loadData();
      this.setData(data);
    } catch (error) {
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  }

  increment() {
    if (this.data !== null) {
      let data = this.data;
      data++;

      this.setData(data);
    }
  }

  decrement() {
    if (this.data !== null) {
      let data = this.data;
      data--;

      this.setData(data);
    }
  }

  protected override updateUI(): void {
    if (this.loading) {
      console.log('Loading...');
    } else if (this.error) {
      console.error('Error:', this.error);
    } else {
      console.log('Data:', this.data);
    }
  }
}
