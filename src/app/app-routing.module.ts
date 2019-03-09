import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormParentComponent } from "src/app/form/form-parent/form-parent.component";
const routes: Routes = [
  { path: 'formParent', component: FormParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
