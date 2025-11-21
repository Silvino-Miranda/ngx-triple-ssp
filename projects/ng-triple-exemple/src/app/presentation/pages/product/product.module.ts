import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';

import { LoadingModule } from '../../components/loading/loading.module';
import { ErrorModule } from '../../components/error/error.module';

const routes: Routes = [{ path: '', component: ProductComponent }];

import { NgxTripleDirective } from 'ngx-triple-ssp';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), LoadingModule, ErrorModule, NgxTripleDirective],
  declarations: [ProductComponent]
})
export class ProductModule {}
