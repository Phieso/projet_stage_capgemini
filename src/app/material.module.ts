import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule],
  exports: [MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule],
})
export class MaterialModule { }