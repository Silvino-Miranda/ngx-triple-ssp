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
      this.setDataSource(data);
    } catch (error) {
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  }

  increment() {
    if (this.dataSource !== null) {
      let data = this.dataSource;
      data++;

      this.setDataSource(data);
    }
  }

  decrement() {
    if (this.dataSource !== null) {
      let data = this.dataSource;
      data--;

      this.setDataSource(data);
    }
  }

  protected override goBack(): void | Promise<void> {
    throw new Error('Method not implemented.');
  }

  protected updateUI(): void {
    if (this.isLoading) {
      console.log('Loading...');
    } else if (this.error) {
      console.error('Error:', this.error);
    } else {
      console.log('Data:', this.dataSource);
    }
  }
}
