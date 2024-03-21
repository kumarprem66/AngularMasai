import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConditionalDisplayComponent } from './conditional-display/conditional-display.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  { path: '', component: ConditionalDisplayComponent },
  { path: 'product-list', component: ProductListComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
