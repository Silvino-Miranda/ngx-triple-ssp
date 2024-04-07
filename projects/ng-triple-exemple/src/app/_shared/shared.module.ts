import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from './components/header/header.module';
import { LoadingModule } from './components/loading/loading.module';
import { ErrorModule } from './components/error/error.module';

@NgModule({
  imports: [CommonModule, HeaderModule, LoadingModule, ErrorModule],
  exports: [HeaderModule, LoadingModule, ErrorModule]
})
export class SharedModule {}
