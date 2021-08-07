import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewHospitalPageComponent } from './create-new-hospital-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FoundationModule } from '../foundation/foundation.module';

@NgModule({
  declarations: [CreateNewHospitalPageComponent],
  imports: [CommonModule, ReactiveFormsModule, FoundationModule]
})
export class CreateNewHospitalModule {}
