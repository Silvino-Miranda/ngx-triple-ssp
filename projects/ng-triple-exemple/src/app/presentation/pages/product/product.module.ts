import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';

import { LoadingModule } from '../../components/loading/loading.module';
import { ErrorModule } from '../../components/error/error.module';

const routes: Routes = [{ path: '', component: ProductComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), LoadingModule, ErrorModule],
  declarations: [ProductComponent]
})
export class ProductModule {}
