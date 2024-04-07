import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'counter',
    loadChildren: () => import('./presentation/pages/counter/counter.module').then((m) => m.CounterModule)
  },
  // { path: 'about', loadChildren: () => import('./presentation/pages/about/about.module').then(m => m.AboutModule) },
  // { path: 'home', loadChildren: () => import('./presentation/pages/home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: 'counter', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
