import { Component, OnInit } from '@angular/core';
import { NgxTripleSspComponent } from 'ngx-triple-ssp';
import { Product } from './_shared/product';
import { ProdutcService } from './_shared/produtc.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent extends NgxTripleSspComponent<Array<Product>> implements OnInit {
  constructor(private productService: ProdutcService) {
    super([]);
  }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.setError(null);
    this.setLoading(true);

    try {
      const data = await this.productService.loadData();
      this.setDataSource(data);
    } catch (error) {
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
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

  protected override goBack(): void | Promise<void> {
    throw new Error('Method not implemented.');
  }
}
