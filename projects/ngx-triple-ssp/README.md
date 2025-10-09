# ngx-triple-ssp

O `ngx-triple-ssp` é um pacote TypeScript universal que implementa o padrão Triple (State, Success, Error) para gerenciamento de estado de forma eficiente e reativa, facilitando a construção de interfaces de usuário dinâmicas e responsivas.

## Características

- **Gerenciamento de Estado**: Simplifica o gerenciamento de estados de carregamento, sucesso e erro em aplicações web.
- **Integração com RxJS**: Utiliza observáveis para uma abordagem reativa ao estado da UI.
- **Facilidade de Uso**: Projetado para ser facilmente integrado em qualquer framework JavaScript/TypeScript.
- **Framework Agnostic**: Funciona com Angular, React, Vue, ou qualquer outro framework.
- **TypeScript First**: Desenvolvido com TypeScript para melhor experiência de desenvolvimento.

## Compatibilidade

| Framework | Versão | Status |
|-----------|--------|--------|
| Angular   | 16+    | ✅ Suportado |
| React     | 16+    | ✅ Suportado |
| Vue       | 3+     | ✅ Suportado |
| Vanilla JS| ES6+   | ✅ Suportado |
| Node.js   | 16+    | ✅ Suportado |

**Dependências**: Apenas RxJS 7.8+ ou 8.0+

## Instalação

Para instalar o `ngx-triple-ssp`, execute o seguinte comando no seu terminal:

```bash
npm install ngx-triple-ssp
```

## Uso

### Angular

Após a instalação, você pode utilizar o `NgxTripleSspComponent` para gerenciar estados em seus componentes Angular:

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
      this.setDataSource(data);
    } catch (error) {
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  }

  protected override goBack(): void | Promise<void> {
    // Implementar navegação de volta
  }
}
```

### React

```typescript
import React, { useState, useEffect } from 'react';
import { NgxTripleSspComponent } from 'ngx-triple-ssp';

class DataManager extends NgxTripleSspComponent<any[]> {
  constructor() {
    super([]);
  }

  protected async loadData() {
    this.setLoading(true);
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      this.setDataSource(data);
    } catch (error) {
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  }

  protected goBack() {
    // Implementar navegação
  }
}

const MyComponent = () => {
  const [manager] = useState(() => new DataManager());
  const [state, setState] = useState({
    isLoading: manager.isLoading,
    error: manager.error,
    data: manager.dataSource
  });

  useEffect(() => {
    manager.loadData();
    // Você pode adicionar listeners para mudanças de estado aqui
  }, []);

  return (
    <div>
      {state.isLoading && <div>Loading...</div>}
      {state.error && <div>Error: {state.error.message}</div>}
      {state.data && <div>Data loaded: {state.data.length} items</div>}
    </div>
  );
};
```

### Vue

```typescript
import { NgxTripleSspComponent } from 'ngx-triple-ssp';
import { ref, reactive } from 'vue';

export default {
  setup() {
    class DataManager extends NgxTripleSspComponent<any[]> {
      constructor() {
        super([]);
      }

      protected async loadData() {
        this.setLoading(true);
        try {
          const response = await fetch('/api/data');
          const data = await response.json();
          this.setDataSource(data);
        } catch (error) {
          this.setError(error);
        } finally {
          this.setLoading(false);
        }
      }

      protected goBack() {
        // Implementar navegação
      }
    }

    const manager = new DataManager();
    const state = reactive({
      isLoading: manager.isLoading,
      error: manager.error,
      data: manager.dataSource
    });

    manager.loadData();

    return { state };
  }
};
```

```

### Template de Exemplo

Utilize o template a seguir para exibir os estados de carregamento, sucesso e erro:

```html
<section class="align-center" *ngIf="!isLoading && !error">
  <div>
    <h2>Counter: {{ dataSource }}</h2>

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

<section class="align-center" *ngIf="isLoading">
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

[Exemplo completo no GitHub](https://github.com/Silvino-Miranda/ngx-triple-ssp/tree/master/projects/ng-triple-exemple)


## Contribuições

Contribuições são bem-vindas! Se você quiser contribuir para o `ngx-triple-ssp`, por favor envie um pull request.

## Licença

O pacote `ngx-triple-ssp` é licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

---

