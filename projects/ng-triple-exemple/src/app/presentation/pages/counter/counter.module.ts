import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CounterComponent } from './counter.component';
import { SharedModule } from '../../../_shared/shared.module';

const routes: Routes = [{ path: '', component: CounterComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [CounterComponent]
})
export class CounterModule {}
