# ngx-triple-ssp

O `ngx-triple-ssp` é um pacote Angular que implementa o padrão Triple (State, Success, Error) para gerenciamento de estado de forma eficiente e reativa, facilitando a construção de interfaces de usuário dinâmicas e responsivas.

## Características

- **Gerenciamento de Estado**: Simplifica o gerenciamento de estados de carregamento, sucesso e erro em aplicações Angular.
- **Integração com RxJS**: Utiliza observáveis para uma abordagem reativa ao estado da UI.
- **Facilidade de Uso**: Projetado para ser facilmente integrado e utilizado em projetos Angular existentes.

## Instalação

Para instalar o `ngx-triple-ssp`, execute o seguinte comando no seu terminal:

```bash
npm install ngx-triple-ssp
```

## Uso

Após a instalação, você pode utilizar o `TripleComponent` para gerenciar estados em seus componentes Angular. Aqui está um exemplo básico de como utilizar:

```typescript
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

```

### Template de Exemplo

Utilize o template a seguir para exibir os estados de carregamento, sucesso e erro:

```html
<section class="align-center" *ngIf="!loading && !error">
  <div>
    <h2>Counter: {{ data }}</h2>

    <div>
      <button (click)="increment()">+</button>
      <button (click)="decrement()">-</button>
    </div>
  </div>
</section>

<section class="align-center" *ngIf="error">
  <div>
    <h5>Error: {{ error }}</h5>
  </div>
</section>

<section class="align-center" *ngIf="loading">
  <div>
    <h2>Loading...</h2>
  </div>
</section>

<section class="align-center">
  <br />
  <br />
  <button (click)="loadData()">Reload</button>
</section>
```

## Contribuições

Contribuições são bem-vindas! Se você quiser contribuir para o `ngx-triple-ssp`, por favor envie um pull request.

## Licença

O pacote `ngx-triple-ssp` é licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

---

