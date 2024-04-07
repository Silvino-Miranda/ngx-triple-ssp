import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CounterComponent } from './counter.component';
import { LoadingModule } from '../../components/loading/loading.module';
import { ErrorModule } from '../../components/error/error.module';

const routes: Routes = [{ path: '', component: CounterComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), LoadingModule, ErrorModule],
  declarations: [CounterComponent]
})
export class CounterModule {}
