import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  constructor() {}

  async loadData(): Promise<number> {
    try {
      const data = await new Promise<number>((resolve, reject) => {
        setTimeout(() => {
          // Simule sucesso ou falha
          const success = Math.random() > 0.5;
          console.log(success);
          if (success) {
            resolve(12); // Suponha que 12 seja seus dados carregados
          } else {
            reject(new Error('Erro ao carregar dados'));
          }
        }, 1500);
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}
