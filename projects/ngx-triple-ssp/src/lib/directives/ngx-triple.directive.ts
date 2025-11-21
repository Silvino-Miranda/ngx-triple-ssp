import { Directive, Input, TemplateRef, ViewContainerRef, effect, untracked } from '@angular/core';
import { NgxTripleSspComponent } from '../components/ngx-triple-ssp.component';

interface NgxTripleContext<T, E> {
  $implicit: T | null;
  error: E | null;
  loading: boolean;
}

@Directive({
  selector: '[ngxTriple]',
  standalone: true
})
export class NgxTripleDirective<T, E> {
  private _vm: NgxTripleSspComponent<T, E> | null = null;

  @Input() set ngxTriple(vm: NgxTripleSspComponent<T, E>) {
    this._vm = vm;
    this.updateView();
  }

  constructor(
    private templateRef: TemplateRef<NgxTripleContext<T, E>>,
    private viewContainer: ViewContainerRef
  ) {
    effect(() => {
      if (this._vm) {
        // We need to track signals to trigger updates
        this._vm.isLoading();
        this._vm.error();
        this._vm.dataSource();
        
        untracked(() => {
           this.updateView();
        });
      }
    });
  }

  private updateView() {
    this.viewContainer.clear();
    if (this._vm) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: this._vm.dataSource(),
        error: this._vm.error(),
        loading: this._vm.isLoading()
      });
    }
  }
}
