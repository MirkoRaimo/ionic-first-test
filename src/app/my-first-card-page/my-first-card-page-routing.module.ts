import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFirstCardPagePage } from './my-first-card-page.page';

const routes: Routes = [
  {
    path: '',
    component: MyFirstCardPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFirstCardPagePageRoutingModule {}
