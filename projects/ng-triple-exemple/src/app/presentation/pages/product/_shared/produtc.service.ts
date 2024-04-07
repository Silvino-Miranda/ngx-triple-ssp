import { Injectable } from '@angular/core';
import { Product, products } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProdutcService {
  constructor() {}

  async loadData(): Promise<Array<Product>> {
    try {
      const data = await new Promise<Array<Product>>((resolve, reject) => {
        setTimeout(() => {
          // Simule sucesso ou falha
          const success = Math.random() > 0.5;
          console.log(success);
          if (success) {
            resolve(products);
          } else {
            reject(new Error('Erro ao carregar dados de produtos'));
          }
        }, 1500);
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}
