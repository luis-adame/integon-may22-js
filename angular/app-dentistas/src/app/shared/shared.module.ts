import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortPipe } from './pipes/sort.pipe';
import { CopyrightDirective } from './directives/copyright.directive';
import { NumericDirective } from './directives/numeric.directive';
import { PermissionDirective } from './directives/permission.directive';

@NgModule({
  declarations: [
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective
  ]
})
export class SharedModule { }
