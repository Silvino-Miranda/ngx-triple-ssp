import { Component, OnInit } from '@angular/core';
import { NgxTripleSspComponent } from 'ngx-triple-ssp';
import { Product } from './_shared/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends NgxTripleSspComponent<Array<Product>> implements OnInit {
  constructor() {
    super([]);
  }

  ngOnInit() {}
  protected override updateUI(): void {
    // throw new Error('Method not implemented.');
  }
}
