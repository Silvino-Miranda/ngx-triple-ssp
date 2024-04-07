import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CounterComponent } from './counter.component';
import { NgxTripleSspModule } from 'ngx-triple-ssp';

const routes: Routes = [{ path: '', component: CounterComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), NgxTripleSspModule],
  declarations: [CounterComponent]
})
export class CounterModule {}
