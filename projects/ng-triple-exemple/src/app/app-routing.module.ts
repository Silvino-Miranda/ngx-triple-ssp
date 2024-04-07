import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  {
    path: 'counter',
    loadChildren: () => import('./presentation/pages/counter/counter.module').then((m) => m.CounterModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./presentation/pages/product/product.module').then((m) => m.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
