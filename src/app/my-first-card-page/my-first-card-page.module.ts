import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyFirstCardPagePageRoutingModule } from './my-first-card-page-routing.module';

import { MyFirstCardPagePage } from './my-first-card-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyFirstCardPagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MyFirstCardPagePage]
})
export class MyFirstCardPagePageModule {}
